/*
 *    Licensed to the Apache Software Foundation (ASF) under one or more
 *    contributor license agreements.  See the NOTICE file distributed with
 *    this work for additional information regarding copyright ownership.
 *    The ASF licenses this file to You under the Apache License, Version 2.0
 *    (the "License"); you may not use this file except in compliance with
 *    the License.  You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import Ember from 'ember';
export default Ember.Object.create({
  Workflow : 'wf',
  Coordinator : 'coord',
  Bundle : 'bundle',
  globalSetting:{
    useJoinNodeForDecision:false,
    useAdditionalPlaceholderFlowForDecision:true,
    defaultTransitionColor:"#005c99",
    errorTransitionColor:"#b30000"
  },
  defaultKillNodeName:"kill",
  showErrorTransitions:false,
  generatedByCdata: "Generated by Worflow Designer",
  rmDefaultValue: "${resourceManager}",
  defaultNameNodeValue : "${nameNode}",
  useCytoscape : true,
  isProjectManagerEnabled : false,
  autoRestoreWorkflowEnabled : true,
  actions: Ember.A([
    {name : "hive",supportsSchema : true, currentVersion:''},
    {name : "hive2",supportsSchema : true, currentVersion:''},
    {name : "java",supportsSchema : false, currentVersion:''},
    {name : "pig",supportsSchema : false, currentVersion:''},
    {name : "sqoop",supportsSchema : true, currentVersion:''},
    {name : "shell",supportsSchema : true, currentVersion:''},
    {name : "spark",supportsSchema : true, currentVersion:''},
    {name : "map-reduce",supportsSchema : false, currentVersion:''},
    {name : "sub-workflow",supportsSchema : false, currentVersion:''},
    {name : "distcp",supportsSchema : true, currentVersion:''},
    {name : "fs",supportsSchema : true, currentVersion:''},
    {name : "ssh",supportsSchema : false, currentVersion:''},
    {name : "email",supportsSchema : true, currentVersion:''}
  ]),
  sparkMasterList :Ember.A([{value:'yarn-cluster',displayName:'Yarn Cluster'},
                            /*{value:'yarn-client',displayName:'Yarn Client'},*/
                            {value:'local',displayName:'Local'}]),
  timezoneList : Ember.A([
    {displayName:'UTC',gmtOffset:0, value:'UTC'},
    {displayName:'(GMT -12:00) Eniwetok, Kwajalein',gmtOffset:12, value:'GMT-12:00'},
    {displayName:'(GMT -11:00) Midway Island, Samoa',gmtOffset:11, value:'GMT-11:00'},
    {displayName:'(GMT -10:00) Hawaii',gmtOffset:10, value:'GMT-10:00'},
    {displayName:'(GMT -9:00) Alaska',gmtOffset:9, value:'GMT-09:00'},
    {displayName:'(GMT -8:00) Pacific Time (US &amp; Canada)',gmtOffset:8, value:'GMT-08:00'},
    {displayName:'(GMT -7:00) Mountain Time (US &amp; Canada)',gmtOffset:7, value:'GMT-07:00'},
    {displayName:'(GMT -6:00) Central Time (US &amp; Canada), Mexico City',gmtOffset:6, value:'GMT-06:00'},
    {displayName:'(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima',gmtOffset:5, value:'GMT-05:00'},
    {displayName:'(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz',gmtOffset:4, value:'GMT-04:00'},
    {displayName:'(GMT -3:30) Newfoundland',gmtOffset:3.5, value:'GMT-03:30'},
    {displayName:'(GMT -3:00) Brazil, Buenos Aires, Georgetown',gmtOffset:3, value:'GMT-03:00'},
    {displayName:'(GMT -2:00) Mid-Atlantic',gmtOffset:2, value:'GMT-02:00'},
    {displayName:'(GMT -1:00 hour) Azores, Cape Verde Islands',gmtOffset:1, value:'GMT-01:00'},
    {displayName:'(GMT) Western Europe Time, London, Lisbon, Casablanca',gmtOffset:0, value:'GMT+00:00'},
    {displayName:'(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris',gmtOffset:-1, value:'GMT+01:00'},
    {displayName:'(GMT +2:00) Kaliningrad, South Africa',gmtOffset:-2, value:'GMT+02:00'},
    {displayName:'(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg',gmtOffset:-3, value:'GMT+03:00'},
    {displayName:'(GMT +3:30) Tehran',gmtOffset:-3.5, value:'GMT+03:30'},
    {displayName:'(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi',gmtOffset:-4, value:'GMT+04:00'},
    {displayName:'(GMT +4:30) Kabul',gmtOffset:-4.5, value:'GMT+04:30'},
    {displayName:'(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent',gmtOffset:-5, value:'GMT+05:00'},
    {displayName:'(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',gmtOffset:-5.5,value:'GMT+05:30'},
    {displayName:'(GMT +5:45) Kathmandu',gmtOffset:-5.75, value:'GMT+05:45'},
    {displayName:'(GMT +6:00) Almaty, Dhaka, Colombo',gmtOffset:-6, value:'GMT+06:00'},
    {displayName:'(GMT +7:00) Bangkok, Hanoi, Jakarta',gmtOffset:-7, value:'GMT+07:00'},
    {displayName:'(GMT +8:00) Beijing, Perth, Singapore, Hong Kong',gmtOffset:-8, value:'GMT+08:00'},
    {displayName:'(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk',gmtOffset:-9, value:'GMT+09:00'},
    {displayName:'(GMT +9:30) Adelaide, Darwin',gmtOffset:-9.5, value:'GMT+09:30'},
    {displayName:'(GMT +10:00) Eastern Australia, Guam, Vladivostok',gmtOffset:-10, value:'GMT+10:00'},
    {displayName:'(GMT +11:00) Magadan, Solomon Islands, New Caledonia',gmtOffset:-11, value:'GMT+11:00'},
    {displayName:'(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka',gmtOffset:-12, value:'GMT+12:00'}
  ]),
  persistWorkInProgressInterval : 30000,
  elConstants : [
    '${YEAR}', '${MONTH}', '${DAY}', '${HOUR}', '${MINUTE}'
  ],
  customActionEnabled : true,
  successfulFlowColor : '#5bb75b',
  defaultFlowColor : '#808080',
  flowGraphMaxNodeCount : 400
});
