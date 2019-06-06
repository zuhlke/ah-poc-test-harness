/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 567.0, "minX": 0.0, "maxY": 3205.0, "series": [{"data": [[0.0, 567.0], [0.1, 568.0], [0.2, 568.0], [0.3, 568.0], [0.4, 568.0], [0.5, 568.0], [0.6, 568.0], [0.7, 568.0], [0.8, 568.0], [0.9, 569.0], [1.0, 569.0], [1.1, 569.0], [1.2, 570.0], [1.3, 570.0], [1.4, 570.0], [1.5, 570.0], [1.6, 570.0], [1.7, 570.0], [1.8, 570.0], [1.9, 570.0], [2.0, 570.0], [2.1, 570.0], [2.2, 570.0], [2.3, 570.0], [2.4, 570.0], [2.5, 570.0], [2.6, 570.0], [2.7, 570.0], [2.8, 570.0], [2.9, 570.0], [3.0, 570.0], [3.1, 570.0], [3.2, 571.0], [3.3, 571.0], [3.4, 571.0], [3.5, 571.0], [3.6, 571.0], [3.7, 571.0], [3.8, 571.0], [3.9, 571.0], [4.0, 571.0], [4.1, 571.0], [4.2, 571.0], [4.3, 571.0], [4.4, 571.0], [4.5, 571.0], [4.6, 571.0], [4.7, 571.0], [4.8, 571.0], [4.9, 571.0], [5.0, 571.0], [5.1, 571.0], [5.2, 571.0], [5.3, 571.0], [5.4, 571.0], [5.5, 571.0], [5.6, 571.0], [5.7, 571.0], [5.8, 571.0], [5.9, 571.0], [6.0, 572.0], [6.1, 572.0], [6.2, 572.0], [6.3, 572.0], [6.4, 572.0], [6.5, 572.0], [6.6, 572.0], [6.7, 572.0], [6.8, 572.0], [6.9, 572.0], [7.0, 572.0], [7.1, 572.0], [7.2, 572.0], [7.3, 572.0], [7.4, 572.0], [7.5, 572.0], [7.6, 572.0], [7.7, 572.0], [7.8, 572.0], [7.9, 572.0], [8.0, 572.0], [8.1, 572.0], [8.2, 572.0], [8.3, 572.0], [8.4, 572.0], [8.5, 572.0], [8.6, 572.0], [8.7, 573.0], [8.8, 573.0], [8.9, 573.0], [9.0, 573.0], [9.1, 573.0], [9.2, 573.0], [9.3, 573.0], [9.4, 573.0], [9.5, 573.0], [9.6, 573.0], [9.7, 573.0], [9.8, 573.0], [9.9, 573.0], [10.0, 573.0], [10.1, 573.0], [10.2, 573.0], [10.3, 573.0], [10.4, 573.0], [10.5, 573.0], [10.6, 573.0], [10.7, 573.0], [10.8, 573.0], [10.9, 573.0], [11.0, 573.0], [11.1, 573.0], [11.2, 573.0], [11.3, 573.0], [11.4, 573.0], [11.5, 573.0], [11.6, 573.0], [11.7, 573.0], [11.8, 573.0], [11.9, 573.0], [12.0, 573.0], [12.1, 573.0], [12.2, 573.0], [12.3, 573.0], [12.4, 573.0], [12.5, 573.0], [12.6, 573.0], [12.7, 573.0], [12.8, 573.0], [12.9, 573.0], [13.0, 573.0], [13.1, 573.0], [13.2, 573.0], [13.3, 573.0], [13.4, 573.0], [13.5, 573.0], [13.6, 573.0], [13.7, 573.0], [13.8, 573.0], [13.9, 573.0], [14.0, 573.0], [14.1, 573.0], [14.2, 573.0], [14.3, 573.0], [14.4, 573.0], [14.5, 573.0], [14.6, 573.0], [14.7, 573.0], [14.8, 573.0], [14.9, 573.0], [15.0, 573.0], [15.1, 573.0], [15.2, 573.0], [15.3, 573.0], [15.4, 573.0], [15.5, 573.0], [15.6, 574.0], [15.7, 574.0], [15.8, 574.0], [15.9, 574.0], [16.0, 574.0], [16.1, 574.0], [16.2, 574.0], [16.3, 574.0], [16.4, 574.0], [16.5, 574.0], [16.6, 574.0], [16.7, 574.0], [16.8, 574.0], [16.9, 574.0], [17.0, 574.0], [17.1, 574.0], [17.2, 574.0], [17.3, 574.0], [17.4, 574.0], [17.5, 574.0], [17.6, 574.0], [17.7, 574.0], [17.8, 574.0], [17.9, 574.0], [18.0, 574.0], [18.1, 574.0], [18.2, 574.0], [18.3, 574.0], [18.4, 574.0], [18.5, 574.0], [18.6, 574.0], [18.7, 574.0], [18.8, 574.0], [18.9, 574.0], [19.0, 574.0], [19.1, 574.0], [19.2, 574.0], [19.3, 574.0], [19.4, 574.0], [19.5, 574.0], [19.6, 574.0], [19.7, 574.0], [19.8, 574.0], [19.9, 574.0], [20.0, 574.0], [20.1, 574.0], [20.2, 574.0], [20.3, 574.0], [20.4, 574.0], [20.5, 574.0], [20.6, 574.0], [20.7, 574.0], [20.8, 574.0], [20.9, 574.0], [21.0, 574.0], [21.1, 575.0], [21.2, 575.0], [21.3, 575.0], [21.4, 575.0], [21.5, 575.0], [21.6, 575.0], [21.7, 575.0], [21.8, 575.0], [21.9, 575.0], [22.0, 575.0], [22.1, 575.0], [22.2, 575.0], [22.3, 575.0], [22.4, 575.0], [22.5, 575.0], [22.6, 575.0], [22.7, 575.0], [22.8, 575.0], [22.9, 575.0], [23.0, 575.0], [23.1, 575.0], [23.2, 575.0], [23.3, 575.0], [23.4, 575.0], [23.5, 575.0], [23.6, 575.0], [23.7, 575.0], [23.8, 575.0], [23.9, 575.0], [24.0, 575.0], [24.1, 575.0], [24.2, 575.0], [24.3, 575.0], [24.4, 575.0], [24.5, 575.0], [24.6, 575.0], [24.7, 575.0], [24.8, 575.0], [24.9, 575.0], [25.0, 575.0], [25.1, 575.0], [25.2, 575.0], [25.3, 575.0], [25.4, 575.0], [25.5, 575.0], [25.6, 575.0], [25.7, 575.0], [25.8, 575.0], [25.9, 575.0], [26.0, 575.0], [26.1, 575.0], [26.2, 575.0], [26.3, 575.0], [26.4, 575.0], [26.5, 575.0], [26.6, 575.0], [26.7, 575.0], [26.8, 575.0], [26.9, 575.0], [27.0, 576.0], [27.1, 576.0], [27.2, 576.0], [27.3, 576.0], [27.4, 576.0], [27.5, 576.0], [27.6, 576.0], [27.7, 576.0], [27.8, 576.0], [27.9, 576.0], [28.0, 576.0], [28.1, 576.0], [28.2, 576.0], [28.3, 576.0], [28.4, 576.0], [28.5, 576.0], [28.6, 576.0], [28.7, 576.0], [28.8, 576.0], [28.9, 576.0], [29.0, 576.0], [29.1, 576.0], [29.2, 576.0], [29.3, 576.0], [29.4, 576.0], [29.5, 576.0], [29.6, 576.0], [29.7, 576.0], [29.8, 576.0], [29.9, 576.0], [30.0, 576.0], [30.1, 576.0], [30.2, 576.0], [30.3, 576.0], [30.4, 576.0], [30.5, 576.0], [30.6, 576.0], [30.7, 576.0], [30.8, 576.0], [30.9, 576.0], [31.0, 576.0], [31.1, 576.0], [31.2, 576.0], [31.3, 576.0], [31.4, 576.0], [31.5, 576.0], [31.6, 576.0], [31.7, 576.0], [31.8, 576.0], [31.9, 576.0], [32.0, 576.0], [32.1, 576.0], [32.2, 576.0], [32.3, 576.0], [32.4, 576.0], [32.5, 577.0], [32.6, 577.0], [32.7, 577.0], [32.8, 577.0], [32.9, 577.0], [33.0, 577.0], [33.1, 577.0], [33.2, 577.0], [33.3, 577.0], [33.4, 577.0], [33.5, 577.0], [33.6, 577.0], [33.7, 577.0], [33.8, 577.0], [33.9, 577.0], [34.0, 577.0], [34.1, 577.0], [34.2, 577.0], [34.3, 577.0], [34.4, 577.0], [34.5, 577.0], [34.6, 577.0], [34.7, 577.0], [34.8, 577.0], [34.9, 577.0], [35.0, 577.0], [35.1, 577.0], [35.2, 577.0], [35.3, 577.0], [35.4, 577.0], [35.5, 577.0], [35.6, 577.0], [35.7, 577.0], [35.8, 577.0], [35.9, 577.0], [36.0, 577.0], [36.1, 577.0], [36.2, 577.0], [36.3, 577.0], [36.4, 577.0], [36.5, 577.0], [36.6, 577.0], [36.7, 577.0], [36.8, 577.0], [36.9, 577.0], [37.0, 577.0], [37.1, 577.0], [37.2, 577.0], [37.3, 577.0], [37.4, 577.0], [37.5, 577.0], [37.6, 577.0], [37.7, 577.0], [37.8, 577.0], [37.9, 577.0], [38.0, 577.0], [38.1, 578.0], [38.2, 578.0], [38.3, 578.0], [38.4, 578.0], [38.5, 578.0], [38.6, 578.0], [38.7, 578.0], [38.8, 578.0], [38.9, 578.0], [39.0, 578.0], [39.1, 578.0], [39.2, 578.0], [39.3, 578.0], [39.4, 578.0], [39.5, 578.0], [39.6, 578.0], [39.7, 578.0], [39.8, 578.0], [39.9, 578.0], [40.0, 578.0], [40.1, 578.0], [40.2, 578.0], [40.3, 578.0], [40.4, 578.0], [40.5, 578.0], [40.6, 578.0], [40.7, 578.0], [40.8, 578.0], [40.9, 578.0], [41.0, 578.0], [41.1, 578.0], [41.2, 578.0], [41.3, 578.0], [41.4, 578.0], [41.5, 578.0], [41.6, 578.0], [41.7, 578.0], [41.8, 578.0], [41.9, 578.0], [42.0, 578.0], [42.1, 578.0], [42.2, 578.0], [42.3, 578.0], [42.4, 578.0], [42.5, 578.0], [42.6, 578.0], [42.7, 578.0], [42.8, 578.0], [42.9, 578.0], [43.0, 578.0], [43.1, 578.0], [43.2, 578.0], [43.3, 578.0], [43.4, 578.0], [43.5, 578.0], [43.6, 578.0], [43.7, 578.0], [43.8, 578.0], [43.9, 578.0], [44.0, 578.0], [44.1, 578.0], [44.2, 578.0], [44.3, 578.0], [44.4, 578.0], [44.5, 579.0], [44.6, 579.0], [44.7, 579.0], [44.8, 579.0], [44.9, 579.0], [45.0, 579.0], [45.1, 579.0], [45.2, 579.0], [45.3, 579.0], [45.4, 579.0], [45.5, 579.0], [45.6, 579.0], [45.7, 579.0], [45.8, 579.0], [45.9, 579.0], [46.0, 579.0], [46.1, 579.0], [46.2, 579.0], [46.3, 579.0], [46.4, 579.0], [46.5, 579.0], [46.6, 579.0], [46.7, 579.0], [46.8, 579.0], [46.9, 579.0], [47.0, 579.0], [47.1, 579.0], [47.2, 579.0], [47.3, 579.0], [47.4, 579.0], [47.5, 579.0], [47.6, 579.0], [47.7, 579.0], [47.8, 579.0], [47.9, 579.0], [48.0, 579.0], [48.1, 579.0], [48.2, 579.0], [48.3, 579.0], [48.4, 580.0], [48.5, 580.0], [48.6, 580.0], [48.7, 580.0], [48.8, 580.0], [48.9, 580.0], [49.0, 580.0], [49.1, 580.0], [49.2, 580.0], [49.3, 580.0], [49.4, 580.0], [49.5, 580.0], [49.6, 580.0], [49.7, 580.0], [49.8, 580.0], [49.9, 580.0], [50.0, 580.0], [50.1, 580.0], [50.2, 580.0], [50.3, 580.0], [50.4, 580.0], [50.5, 580.0], [50.6, 580.0], [50.7, 580.0], [50.8, 580.0], [50.9, 580.0], [51.0, 580.0], [51.1, 580.0], [51.2, 580.0], [51.3, 580.0], [51.4, 580.0], [51.5, 580.0], [51.6, 580.0], [51.7, 580.0], [51.8, 580.0], [51.9, 580.0], [52.0, 580.0], [52.1, 580.0], [52.2, 580.0], [52.3, 580.0], [52.4, 580.0], [52.5, 580.0], [52.6, 580.0], [52.7, 580.0], [52.8, 580.0], [52.9, 580.0], [53.0, 581.0], [53.1, 581.0], [53.2, 581.0], [53.3, 581.0], [53.4, 581.0], [53.5, 581.0], [53.6, 581.0], [53.7, 581.0], [53.8, 581.0], [53.9, 581.0], [54.0, 581.0], [54.1, 581.0], [54.2, 581.0], [54.3, 581.0], [54.4, 581.0], [54.5, 581.0], [54.6, 581.0], [54.7, 581.0], [54.8, 581.0], [54.9, 581.0], [55.0, 581.0], [55.1, 581.0], [55.2, 581.0], [55.3, 581.0], [55.4, 581.0], [55.5, 581.0], [55.6, 581.0], [55.7, 581.0], [55.8, 581.0], [55.9, 581.0], [56.0, 581.0], [56.1, 581.0], [56.2, 581.0], [56.3, 581.0], [56.4, 581.0], [56.5, 581.0], [56.6, 581.0], [56.7, 581.0], [56.8, 581.0], [56.9, 581.0], [57.0, 581.0], [57.1, 581.0], [57.2, 581.0], [57.3, 581.0], [57.4, 581.0], [57.5, 581.0], [57.6, 581.0], [57.7, 581.0], [57.8, 581.0], [57.9, 581.0], [58.0, 581.0], [58.1, 582.0], [58.2, 582.0], [58.3, 582.0], [58.4, 582.0], [58.5, 582.0], [58.6, 582.0], [58.7, 582.0], [58.8, 582.0], [58.9, 582.0], [59.0, 582.0], [59.1, 582.0], [59.2, 582.0], [59.3, 582.0], [59.4, 582.0], [59.5, 582.0], [59.6, 582.0], [59.7, 582.0], [59.8, 582.0], [59.9, 582.0], [60.0, 582.0], [60.1, 582.0], [60.2, 582.0], [60.3, 582.0], [60.4, 582.0], [60.5, 582.0], [60.6, 582.0], [60.7, 582.0], [60.8, 582.0], [60.9, 583.0], [61.0, 583.0], [61.1, 583.0], [61.2, 583.0], [61.3, 583.0], [61.4, 583.0], [61.5, 583.0], [61.6, 583.0], [61.7, 583.0], [61.8, 583.0], [61.9, 583.0], [62.0, 583.0], [62.1, 583.0], [62.2, 583.0], [62.3, 583.0], [62.4, 583.0], [62.5, 583.0], [62.6, 583.0], [62.7, 583.0], [62.8, 583.0], [62.9, 583.0], [63.0, 583.0], [63.1, 583.0], [63.2, 583.0], [63.3, 583.0], [63.4, 583.0], [63.5, 583.0], [63.6, 583.0], [63.7, 583.0], [63.8, 583.0], [63.9, 583.0], [64.0, 584.0], [64.1, 584.0], [64.2, 584.0], [64.3, 584.0], [64.4, 584.0], [64.5, 584.0], [64.6, 584.0], [64.7, 584.0], [64.8, 584.0], [64.9, 584.0], [65.0, 584.0], [65.1, 584.0], [65.2, 584.0], [65.3, 584.0], [65.4, 584.0], [65.5, 584.0], [65.6, 584.0], [65.7, 584.0], [65.8, 584.0], [65.9, 584.0], [66.0, 584.0], [66.1, 584.0], [66.2, 584.0], [66.3, 584.0], [66.4, 584.0], [66.5, 584.0], [66.6, 584.0], [66.7, 584.0], [66.8, 584.0], [66.9, 584.0], [67.0, 584.0], [67.1, 584.0], [67.2, 584.0], [67.3, 585.0], [67.4, 585.0], [67.5, 585.0], [67.6, 585.0], [67.7, 585.0], [67.8, 585.0], [67.9, 585.0], [68.0, 585.0], [68.1, 585.0], [68.2, 585.0], [68.3, 585.0], [68.4, 585.0], [68.5, 585.0], [68.6, 585.0], [68.7, 585.0], [68.8, 585.0], [68.9, 585.0], [69.0, 585.0], [69.1, 585.0], [69.2, 585.0], [69.3, 585.0], [69.4, 585.0], [69.5, 585.0], [69.6, 585.0], [69.7, 585.0], [69.8, 585.0], [69.9, 585.0], [70.0, 585.0], [70.1, 585.0], [70.2, 586.0], [70.3, 586.0], [70.4, 586.0], [70.5, 586.0], [70.6, 586.0], [70.7, 586.0], [70.8, 586.0], [70.9, 586.0], [71.0, 586.0], [71.1, 586.0], [71.2, 586.0], [71.3, 586.0], [71.4, 586.0], [71.5, 586.0], [71.6, 586.0], [71.7, 586.0], [71.8, 586.0], [71.9, 586.0], [72.0, 586.0], [72.1, 586.0], [72.2, 587.0], [72.3, 587.0], [72.4, 587.0], [72.5, 587.0], [72.6, 587.0], [72.7, 587.0], [72.8, 587.0], [72.9, 587.0], [73.0, 588.0], [73.1, 588.0], [73.2, 588.0], [73.3, 588.0], [73.4, 588.0], [73.5, 588.0], [73.6, 588.0], [73.7, 588.0], [73.8, 588.0], [73.9, 589.0], [74.0, 589.0], [74.1, 589.0], [74.2, 589.0], [74.3, 589.0], [74.4, 589.0], [74.5, 589.0], [74.6, 589.0], [74.7, 589.0], [74.8, 589.0], [74.9, 589.0], [75.0, 589.0], [75.1, 589.0], [75.2, 590.0], [75.3, 590.0], [75.4, 590.0], [75.5, 590.0], [75.6, 590.0], [75.7, 590.0], [75.8, 590.0], [75.9, 591.0], [76.0, 591.0], [76.1, 591.0], [76.2, 591.0], [76.3, 591.0], [76.4, 591.0], [76.5, 591.0], [76.6, 591.0], [76.7, 591.0], [76.8, 591.0], [76.9, 591.0], [77.0, 591.0], [77.1, 591.0], [77.2, 591.0], [77.3, 591.0], [77.4, 591.0], [77.5, 591.0], [77.6, 591.0], [77.7, 592.0], [77.8, 592.0], [77.9, 592.0], [78.0, 592.0], [78.1, 593.0], [78.2, 593.0], [78.3, 593.0], [78.4, 593.0], [78.5, 593.0], [78.6, 593.0], [78.7, 593.0], [78.8, 593.0], [78.9, 593.0], [79.0, 594.0], [79.1, 594.0], [79.2, 594.0], [79.3, 594.0], [79.4, 594.0], [79.5, 594.0], [79.6, 595.0], [79.7, 595.0], [79.8, 595.0], [79.9, 595.0], [80.0, 595.0], [80.1, 595.0], [80.2, 595.0], [80.3, 596.0], [80.4, 596.0], [80.5, 596.0], [80.6, 596.0], [80.7, 596.0], [80.8, 596.0], [80.9, 596.0], [81.0, 597.0], [81.1, 597.0], [81.2, 597.0], [81.3, 597.0], [81.4, 597.0], [81.5, 598.0], [81.6, 598.0], [81.7, 598.0], [81.8, 598.0], [81.9, 599.0], [82.0, 599.0], [82.1, 599.0], [82.2, 600.0], [82.3, 601.0], [82.4, 601.0], [82.5, 601.0], [82.6, 601.0], [82.7, 601.0], [82.8, 601.0], [82.9, 601.0], [83.0, 601.0], [83.1, 601.0], [83.2, 601.0], [83.3, 602.0], [83.4, 602.0], [83.5, 602.0], [83.6, 602.0], [83.7, 604.0], [83.8, 604.0], [83.9, 606.0], [84.0, 606.0], [84.1, 606.0], [84.2, 606.0], [84.3, 607.0], [84.4, 607.0], [84.5, 608.0], [84.6, 608.0], [84.7, 608.0], [84.8, 610.0], [84.9, 610.0], [85.0, 610.0], [85.1, 613.0], [85.2, 614.0], [85.3, 614.0], [85.4, 614.0], [85.5, 615.0], [85.6, 615.0], [85.7, 617.0], [85.8, 617.0], [85.9, 618.0], [86.0, 619.0], [86.1, 620.0], [86.2, 620.0], [86.3, 620.0], [86.4, 622.0], [86.5, 622.0], [86.6, 622.0], [86.7, 622.0], [86.8, 622.0], [86.9, 623.0], [87.0, 623.0], [87.1, 623.0], [87.2, 624.0], [87.3, 624.0], [87.4, 624.0], [87.5, 624.0], [87.6, 624.0], [87.7, 626.0], [87.8, 626.0], [87.9, 628.0], [88.0, 628.0], [88.1, 628.0], [88.2, 630.0], [88.3, 631.0], [88.4, 632.0], [88.5, 633.0], [88.6, 633.0], [88.7, 634.0], [88.8, 634.0], [88.9, 635.0], [89.0, 637.0], [89.1, 638.0], [89.2, 639.0], [89.3, 640.0], [89.4, 641.0], [89.5, 641.0], [89.6, 641.0], [89.7, 641.0], [89.8, 642.0], [89.9, 643.0], [90.0, 643.0], [90.1, 644.0], [90.2, 646.0], [90.3, 650.0], [90.4, 651.0], [90.5, 652.0], [90.6, 653.0], [90.7, 659.0], [90.8, 660.0], [90.9, 662.0], [91.0, 666.0], [91.1, 670.0], [91.2, 673.0], [91.3, 675.0], [91.4, 681.0], [91.5, 682.0], [91.6, 693.0], [91.7, 706.0], [91.8, 716.0], [91.9, 721.0], [92.0, 725.0], [92.1, 759.0], [92.2, 776.0], [92.3, 804.0], [92.4, 832.0], [92.5, 904.0], [92.6, 904.0], [92.7, 920.0], [92.8, 995.0], [92.9, 998.0], [93.0, 1007.0], [93.1, 1069.0], [93.2, 1097.0], [93.3, 1111.0], [93.4, 1115.0], [93.5, 1133.0], [93.6, 1139.0], [93.7, 1159.0], [93.8, 1185.0], [93.9, 1212.0], [94.0, 1217.0], [94.1, 1331.0], [94.2, 1340.0], [94.3, 1377.0], [94.4, 1397.0], [94.5, 1404.0], [94.6, 1440.0], [94.7, 1479.0], [94.8, 1494.0], [94.9, 1548.0], [95.0, 1736.0], [95.1, 1751.0], [95.2, 1759.0], [95.3, 1767.0], [95.4, 1780.0], [95.5, 1791.0], [95.6, 1819.0], [95.7, 1840.0], [95.8, 1848.0], [95.9, 1880.0], [96.0, 1892.0], [96.1, 1958.0], [96.2, 1972.0], [96.3, 1979.0], [96.4, 2008.0], [96.5, 2020.0], [96.6, 2072.0], [96.7, 2091.0], [96.8, 2106.0], [96.9, 2116.0], [97.0, 2128.0], [97.1, 2150.0], [97.2, 2184.0], [97.3, 2198.0], [97.4, 2256.0], [97.5, 2329.0], [97.6, 2363.0], [97.7, 2424.0], [97.8, 2429.0], [97.9, 2434.0], [98.0, 2457.0], [98.1, 2531.0], [98.2, 2555.0], [98.3, 2577.0], [98.4, 2612.0], [98.5, 2641.0], [98.6, 2669.0], [98.7, 2691.0], [98.8, 2691.0], [98.9, 2700.0], [99.0, 2710.0], [99.1, 2769.0], [99.2, 2851.0], [99.3, 2875.0], [99.4, 2972.0], [99.5, 2997.0], [99.6, 3086.0], [99.7, 3098.0], [99.8, 3202.0], [99.9, 3205.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 821.0, "series": [{"data": [[600.0, 96.0], [700.0, 6.0], [800.0, 2.0], [900.0, 5.0], [1000.0, 3.0], [1100.0, 6.0], [1200.0, 2.0], [1300.0, 4.0], [1400.0, 4.0], [1500.0, 1.0], [1700.0, 6.0], [1800.0, 5.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 6.0], [2300.0, 2.0], [2200.0, 1.0], [2400.0, 4.0], [2500.0, 3.0], [2600.0, 5.0], [2700.0, 3.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3200.0, 2.0], [500.0, 821.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 51.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 949.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 949.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 23.883000000000006, "minX": 1.55965158E12, "maxY": 23.883000000000006, "series": [{"data": [[1.55965158E12, 23.883000000000006]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55965158E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 572.0, "minX": 1.0, "maxY": 2714.0, "series": [{"data": [[33.0, 2116.0], [32.0, 2714.0], [2.0, 575.0], [35.0, 2151.0], [37.0, 2710.0], [38.0, 2098.0], [41.0, 1965.3333333333333], [43.0, 1885.5], [45.0, 1840.0], [46.0, 2229.0], [48.0, 1940.0], [3.0, 575.0], [53.0, 2192.0], [57.0, 2172.75], [59.0, 1404.125], [61.0, 1134.6666666666667], [60.0, 804.0], [62.0, 905.6], [63.0, 1056.5], [64.0, 1759.0], [4.0, 579.0], [5.0, 589.0], [94.0, 1872.3124999999998], [92.0, 2329.0], [6.0, 581.0], [7.0, 580.0], [8.0, 582.0], [9.0, 587.0], [10.0, 584.0], [11.0, 577.0], [12.0, 586.0], [13.0, 585.0], [14.0, 581.0], [15.0, 573.0], [16.0, 588.0], [1.0, 590.0], [17.0, 593.0], [18.0, 572.0], [19.0, 572.3564356435646], [20.0, 581.4562682215739], [21.0, 603.5384615384614], [22.0, 636.5714285714284], [23.0, 660.5], [24.0, 819.5], [25.0, 831.5], [26.0, 706.0], [28.0, 811.0], [31.0, 2429.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[23.883000000000006, 688.5900000000014]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 94.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2733.3333333333335, "minX": 1.55965158E12, "maxY": 7016.666666666667, "series": [{"data": [[1.55965158E12, 7016.666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55965158E12, 2733.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55965158E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 688.5900000000014, "minX": 1.55965158E12, "maxY": 688.5900000000014, "series": [{"data": [[1.55965158E12, 688.5900000000014]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55965158E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 688.5590000000003, "minX": 1.55965158E12, "maxY": 688.5590000000003, "series": [{"data": [[1.55965158E12, 688.5590000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55965158E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 355.16499999999996, "minX": 1.55965158E12, "maxY": 355.16499999999996, "series": [{"data": [[1.55965158E12, 355.16499999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55965158E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 567.0, "minX": 1.55965158E12, "maxY": 3205.0, "series": [{"data": [[1.55965158E12, 3205.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55965158E12, 567.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55965158E12, 643.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55965158E12, 2709.9]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55965158E12, 1726.5999999999872]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55965158E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 579.0, "minX": 1000.0, "maxY": 2091.0, "series": [{"data": [[3000.0, 1880.0], [15000.0, 2091.0], [2000.0, 1358.5], [1000.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 15000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 579.0, "minX": 1000.0, "maxY": 2091.0, "series": [{"data": [[3000.0, 1880.0], [15000.0, 2091.0], [2000.0, 1358.5], [1000.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 15000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.55965158E12, "maxY": 16.666666666666668, "series": [{"data": [[1.55965158E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55965158E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.55965158E12, "maxY": 16.666666666666668, "series": [{"data": [[1.55965158E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55965158E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.55965158E12, "maxY": 16.666666666666668, "series": [{"data": [[1.55965158E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55965158E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.55965158E12, "maxY": 16.666666666666668, "series": [{"data": [[1.55965158E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55965158E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

