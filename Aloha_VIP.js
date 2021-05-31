/*
^https:\/\/api\.alohaprofile\.com\/v1\/profile_info\/.* url script-response-body
https://raw.githubusercontent.com/Strangx/Rule-Set/main/Aloha_VIP.js
*/
 var obj = JSON.parse($response.body); 
 obj['is_premium'] = true;
 obj['_end_of_premium'] = 2022-06-07 06:57:57;
 obj['end_of_premium'] = 1653997940611;
 obj['error'] = null;
 $done({body: JSON.stringify(obj)});
