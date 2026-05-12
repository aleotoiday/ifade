const url = $request.url;
const isQX = typeof $task !== "undefined";
var ddm = JSON.parse($response.body);

if (/user\/info/.test(url)) {
  ddm.data.user = {
    ...ddm.data.user,
    "subscription": true,
    "store_subscription": true,
    "subscriptionPlus": true,
    "lifetime_subscription": true
  };
}

if (/unblock-feature\/get-settings/.test(url)) {
  ddm.premium = true;
}

if (/restoreAccess/.test(url)) {
  ddm["data"] = {"premiumAccess": true};
}

if (/transaction/.test(url)) {
  ddm.subscriptions = [{"premiumAccess": true}];
}


function finalizeResponse(content) {
  return { status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(content) };
}

$done(isQX ? finalizeResponse(ddm) : ddm);
