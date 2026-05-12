let aleoo = JSON.parse($response.body);

aleoo.active_subscriptions = [{
    "next_renewal_at": "2099-01-01T00:00:00Z",
    "subscription_status": "ACTIVATED",
    "store_type": "APPLE_APP_STORE",
    "plan_id": "3d217865-eaa5-43ce-81dc-b4e325ec482b",
    "purchased_at": "2025-01-01T02:33:33Z",
    "original_purchased_at": "2025-01-01T02:33:33Z"
}];
aleoo.expired_subscriptions = [];

$done({body: JSON.stringify(aleoo)});
