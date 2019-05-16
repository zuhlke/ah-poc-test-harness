from timeit import Timer
import requests
import sys
import time


class GreetingEndpointHitter:
    def hit(self):
        response = requests.get("https://ah-poc-papi-springboot.cfapps.io/balance?customer-id=10101010")
        if response.status_code != 200:
            raise NotOkException
        return response


class NotOkException(Exception):
    pass


class RepeatRequester:
    def __init__(self, endpoint_hitter):
        self.endpoint_hitter = endpoint_hitter

    def avg_response_time_over_n_requests(self, n):
        return Timer(lambda: self.endpoint_hitter.hit()).timeit(number=n) / n

    def throughput_over_t_seconds(self, t):
        start = time.time()
        counter = 0
        while time.time() - start < t:
            self.endpoint_hitter.hit()
            counter += 1
        return counter / t


class InputSwitches:
    MEASURE_LATENCY = "-n"
    MEASURE_THROUGHPUT = "-t"


class InputInterpreter:
    def __init__(self, test_harness):
        self.test_harness = test_harness

    def print_usage_and_exit(self):
        print(
            "Usage: python3 main.py <option>\n" +
            "\tUse the option [-n <N>] to measure average latency over N requests\n" +
            "\tUse the option [-t <T>] to measure average throughput over T seconds"
        )
        exit(1)

    def interpret_input(self):
        if len(sys.argv) != 3:
            self.print_usage_and_exit()

        self.interpret_from_switch(sys.argv[1], int(sys.argv[2]))

    def interpret_from_switch(self, switch, argument):
        if switch == InputSwitches.MEASURE_LATENCY:
            self.record_latency(argument)
        elif switch == InputSwitches.MEASURE_THROUGHPUT:
            self.record_throughput(argument)
        else:
            self.print_usage_and_exit()

    def record_throughput(self, seconds_to_measure_throughput_over):
        recorded_throughput = self.test_harness.throughput_over_t_seconds(seconds_to_measure_throughput_over)
        print("Throughput: " + str(recorded_throughput) + " requests per second")

    def record_latency(self, number_of_requests_to_measure_over):
        recorded_latency = self.test_harness.avg_response_time_over_n_requests(number_of_requests_to_measure_over)
        print("Latency: " + str(recorded_latency) + " seconds per request")


input_interpreter = InputInterpreter(RepeatRequester(GreetingEndpointHitter()))
input_interpreter.interpret_input()
