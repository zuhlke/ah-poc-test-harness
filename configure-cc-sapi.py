import argparse
import sys

import requests


def reset_sapi():
    request_url = "https://ah-poc-sapi-cc-bal.cfapps.io/reset"
    response = requests.post(request_url)
    if response.status_code != 200:
        raise Exception("Failed to reest SAPI")
    else:
        print("Reset SAPI behaviour to default")


if sys.argv[1] == "--reset":
    if len(sys.argv) > 2:
        raise Exception("Pass the flag --reset as the only argument.")
    reset_sapi()
    exit(0)

parser = argparse.ArgumentParser()
parser.add_argument("--failurerate", help="Set the response failure rate in percent.", type=int)
parser.add_argument("--delayrange", help="Set the range of values for the per-request random delay.", type=str)
args = parser.parse_args()


def set_failure_rate(failure_rate):
    str_failure_rate = str(failure_rate)
    request_url = "https://ah-poc-sapi-cc-bal.cfapps.io/failureRatePc/" + str_failure_rate
    response = requests.post(request_url)
    if response.status_code != 200:
        raise Exception("Failed to set failure rate to " + str_failure_rate)
    else:
        print("Set failure rate to " + str_failure_rate)


def set_delay_range(delay_range):
    split = delay_range.split("-")
    str_min_delay_ms = split[0]
    str_max_delay_ms = split[1]
    request_url = "https://ah-poc-sapi-cc-bal.cfapps.io//perRequestDelayRangeMs?min=" + str_min_delay_ms + "&max=" + str_max_delay_ms
    response = requests.post(request_url)
    if response.status_code != 200:
        raise Exception("Failed to set delay range to " + delay_range)
    else:
        print("Set delay range to " + delay_range)


if args.failurerate is not None:
    set_failure_rate(args.failurerate)

if args.delayrange is not None:
    set_delay_range(args.delayrange)
