/*

App Name: Photoroom
Download Link: https://apps.apple.com/app/id1455009060
Update Date: 2026-03-30
Author: @aleotoidayy
Telegram Channel: https://t.me/aichaiaii

*/

var aleoo = JSON.parse($response.body); 
aleoo.subscriber.entitlements = {  
  "ultra": {
    "product_identifier": "com.background.ultra1.monthly",
    "purchase_date": "2025-01-01T02:33:33Z"
  }
};
aleoo.subscriber.original_purchase_date = "2025-01-01T02:33:33Z"; 
aleoo.subscriber.subscriptions = {          
  "com.background.ultra1.monthly": {
    "original_purchase_date": "2025-01-01T02:33:33Z",
    "purchase_date": "2025-01-01T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(aleoo) });
