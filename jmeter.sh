#/bin/bash
set -e
python3 build-test-plan.py
python3 configure-cc-sapi.py --failurerate 10
rm -f jmeter_results.csv
test -d webreport && chmod 777 webreport
rm -rf webreport
echo "Deleted previous results"
jmeter -n -t papi-balance-load-test.jmx -l jmeter_results.csv -e -o webreport
python3 configure-cc-sapi.py --reset
set +e