import sys
import time
from timeit import Timer

import requests

from papi_tester import *

input_interpreter = InputInterpreter(sys.argv, RepeatRequester(BalanceEndpointHitter(requests), time, Timer))
input_interpreter.interpret_input()
