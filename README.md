# ah-poc-test-harness

Exercises the ah-poc-papi to make the following measurements.

- Average latency over N requests

- Throughput over T seconds

## Usage

Usage: `python3 main.py <option>`

- Use the option `[-n <N>]` to measure average latency over N requests
- Use the option `[-t <T>]` to measure average throughput over T seconds

## Examples of usage

#### Measure average latency over 10 requests

`python3 main.py -n 10`

#### Measure throughput over 15 seconds

`python3 main.py -t 15`


## Run the tests

`./test` or `python3 -m unittest test.py`

Tests can also be run from Pycharm

## Jmeter

To run the jmeter test run `./jmeter.sh`.

Results are generated to `jmeter_results.csv` and a web report is created as `webreport/`.

## Tools

Article which shows some more powerful tools: https://www.digitalocean.com/community/tutorials/an-introduction-to-load-testing

