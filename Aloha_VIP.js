/*
^https:\/\/api\.alohaprofile\.com\/v1\/profile_info\/.* url script-response-body
https://raw.githubusercontent.com/Strangx/Rule-Set/main/Aloha_VIP.js
*/
let obj = JSON.parse($response.body);
obj = {
    "is_premium" : true,
    "id" : 1003460,
    "email_verified" : true,
    "_end_of_premium" : "2021-06-07 06:57:57",
    "end_of_premium" : 1623049077,
    "email" : "mr.strange@hackermail.com",
    "token" : "951df38b157c9f1bcbd450f3fd3d6840"
  }

$done({body: JSON.stringify(obj)});
