import unittest

from papi_tester import *


class StubEndpointHitter:
    def hit(self):
        pass


class StubTimeRecorder:
    return_seconds = 0

    def __init__(self, _func):
        pass

    def timeit(self, number):
        return StubTimeRecorder.return_seconds


class StubStopwatch:
    def __init__(self, return_this, after_this_many_ticks):
        self.return_this = return_this
        self.after_this_many_ticks = after_this_many_ticks
        self.counter = 0

    def time(self):
        if self.counter == 0:
            self.counter += 1
            return 0
        elif self.counter <= self.after_this_many_ticks:
            self.counter += 1
            return 0
        else:
            return self.return_this


class Test(unittest.TestCase):
    def test_that_can_measure_avg_latency(self):
        num_requests_required = 100
        seconds_taken = 50
        avg_latency_expected = seconds_taken / num_requests_required

        StubTimeRecorder.return_seconds = seconds_taken
        requester = RepeatRequester(StubEndpointHitter(), None, StubTimeRecorder)

        avg_latency = requester.avg_latency_over_n_requests(num_requests_required)

        self.assertEqual(avg_latency_expected, avg_latency)

    def test_that_can_measure_throughput(self):
        num_seconds = 5
        requests_made = 10
        throughput_expected = requests_made / num_seconds

        requester = RepeatRequester(StubEndpointHitter(), StubStopwatch(num_seconds, requests_made), None)

        throughput = requester.throughput_over_t_seconds(num_seconds)

        self.assertEqual(throughput_expected, throughput)
