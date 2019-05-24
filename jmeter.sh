#/bin/bash

# set -e : This means that the bash script will exit immediately with a non-zero exit code if any command following it exits with a non-zero exit code. The set +e undoes this behaviour.
set -e
python3 build-test-plan.py
python3 configure-cc-sapi.py --failurerate 10 --delayrange 100-500
rm -f jmeter_results.csv
test -d webreport && chmod 777 webreport
rm -rf webreport
echo "Deleted previous results"
jmeter -n -t papi-balance-load-test.jmx -l jmeter_results.csv -e -o webreport
python3 configure-cc-sapi.py --reset
set +e