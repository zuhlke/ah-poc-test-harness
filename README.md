# ah-poc-test-harness

Contains different ways of exercising the PoC PAPI and measuring the outputs of it.

## Jmeter

### Build a test plan (optional)

- Creates a file `papi-balance-load-test.jmx` which is the test plan used by
jmeter to run the performance tests.

`python3 build-test-plan.py`

### Configure the cc SAPI

- Use a command like `python3 configure-cc-sapi.py --failurerate 10` to set the failure rate
for the cc SAPI. In this case the SAPI returns 500s on 10% of requests.

- Use a command like `python3 configure-cc-sapi.py --delayrange 100-500` to set the range of
values in ms for the random delay on each response from the SAPI. In this case, the SAPI will
delay each response by a random duration between 100ms and 500ms.

### Run a test

- Runs whatever SAPI configurations are specified in the `jmeter.sh` script.
- Deletes the previous test outputs (the webreport and the csv) 
- Runs a JMX test plan passed in as the first argument

`./jmeter.sh test-plan.jmx`.

Example:
- `./jmeter.sh papi-balance-load-blocking-30min-200threads.jmx` - runs 200threads for 30min against blocking balance endpoint
- `./jmeter.sh papi-balance-load-reactive-30min-200threads.jmx` - runs 200threads for 30min against reactive balance endpoint


- A csv of results is generated as`jmeter_results.csv`
- A webreport is created as `webreport/`. To open you webreport you can get the url from `./webreport-url`.

## Tools

Article which shows some more powerful tools: https://www.digitalocean.com/community/tutorials/an-introduction-to-load-testing

