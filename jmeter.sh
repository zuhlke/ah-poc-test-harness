python3 build-test-plan.py
python3 configure-cc-sapi.py --failurerate 50
rm -rf webreport/ && rm jmeter_results.csv
echo "Deleted previous results"
jmeter -n -t papi-balance-load-test.jmx -l jmeter_results.csv -e -o webreport