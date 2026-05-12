var aleoo = JSON.parse($response.body);

aleoo.subscriber.entitlements = {
      "Gold":{
              "expires_date":"2099-01-01T05:05:01Z",
              "product_identifier":"locket_6000_1y",
              "purchase_date":"2025-01-01T05:05:01Z"
      }
  },
  
aleoo.subscriber.subscriptions ={
      "locket_6000_1y":{
              "billing_issues_detected_at":null,
              "expires_date":"2099-01-01T05:05:01Z",
              "is_sandbox":false,
              "original_purchase_date":"2025-01-01T05:05:01Z",
              "period_type":"normal",
              "purchase_date":"2025-01-01T05:05:01Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

$done({body: JSON.stringify(aleoo)});
