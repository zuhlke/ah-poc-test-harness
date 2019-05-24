# ah-poc-test-harness

Contains different ways of exercising the PoC PAPI and measuring the outputs of it.

## Jmeter

### Build a test plan

- Creates a file `papi-balance-load-test.jmx` which is the test plan used by
jmeter to run the performance tests.

`python3 build-test-plan.py`

### Configure the cc SAPI

- Sets the failure rate for the cc SAPI. In this case the SAPI returns 500s on 10% of requests.

`python3 configure-cc-sapi.py --failurerate 10`

### Run a test

- Reads the test plan file `papi-balance-load-test.jmx` and executes the test.

`./jmeter.sh`.

- A csv of results is generated as`jmeter_results.csv`
- A webreport is created as `webreport/`. To open you webreport you can get the url from `./webreport-url`.

## Tools

Article which shows some more powerful tools: https://www.digitalocean.com/community/tutorials/an-introduction-to-load-testing

