import argparse

import requests

parser = argparse.ArgumentParser()
parser.add_argument("--failurerate", help="Set the response failure rate in percent.", type=int)
args = parser.parse_args()


def set_failure_rate(failure_rate):
    str_failure_rate = str(failure_rate)
    request_url = "https://ah-poc-sapi-cc-bal.cfapps.io/failureRatePc/" + str_failure_rate
    response = requests.post(request_url)
    if response.status_code != 200:
        print("Failed to set failure rate at " + str_failure_rate)
        raise Exception()
    else:
        print("Set failure rate at " + str_failure_rate)


set_failure_rate(args.failurerate)
