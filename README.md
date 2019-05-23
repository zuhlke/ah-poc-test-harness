# ah-poc-test-harness

Contains different ways of exercising the PoC PAPI and measuring the outputs of it.

## Jmeter

### Build a test plan

- Creates a file `papi-balance-load-test.jmx` which is the test plan used by
jmeter to run the performance tests.

`python3 build-test-plan.py`

### Run a test

- Reads the test plan file `papi-balance-load-test.jmx` and executes the test.

`./jmeter.sh`.

- A csv of results is generated as`jmeter_results.csv`
- A webreport is created as `webreport/`. To open you webreport you can get the url from `./webreport-url`.

## Python script

This exercises the ah-poc-papi to make the following measurements.

- Average latency over N requests

- Throughput over T seconds

### Usage

Usage: `python3 main.py <option>`

- Use the option `[-n <N>]` to measure average latency over N requests
- Use the option `[-t <T>]` to measure average throughput over T seconds

### Examples of usage

#### Measure average latency over 10 requests

`python3 main.py -n 10`

#### Measure throughput over 15 seconds

`python3 main.py -t 15`

### Run the tests

`./test` or `python3 -m unittest test.py`

Tests can also be run from Pycharm

## Tools

Article which shows some more powerful tools: https://www.digitalocean.com/community/tutorials/an-introduction-to-load-testing

