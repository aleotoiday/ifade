/*

App Name: Github
Download Link: https://apps.apple.com/app/id1477376905
Update Date: 2026-03-18
Script Author: @aleotoidayy, Sícc
Telegram Channel: https://t.me/aichaiaii

*/

let aleoo = JSON.parse($response.body);

if (aleoo.data && aleoo.data.viewer) {
  aleoo.data.viewer.copilotLicenseType = "COPILOT_INDIVIDUAL";
  
  aleoo.data.viewer.isProPlan = true;
  aleoo.data.viewer.isEmployee = true;
  aleoo.data.viewer.hasAppleIapSubscription = true;
  aleoo.data.viewer.viewerIsCopilotCodingAgentEnabled = true;
  
  if (aleoo.data.viewer.copilotConsumptiveUser) {
    aleoo.data.viewer.copilotConsumptiveUser.entitlement = 300.0;
  }
  
  if (aleoo.data.viewer.copilotLimitedUser) {
    aleoo.data.viewer.copilotLimitedUser.hasUsageRemaining = true;
    aleoo.data.viewer.copilotLimitedUser.quotaPercentageRemaining = 100.0;
  }
}

if (aleoo.data && aleoo.data.mobileCopilotPaywall) {

}

if (aleoo.data && aleoo.data.createAppleIapSubscriptions !== undefined) {
  if (aleoo.errors) {
    delete aleoo.errors;
  }
  aleoo.data.createAppleIapSubscriptions = {
    "__typename": "CreateAppleIapSubscriptionsPayload",
    "success": true
  };
}

$done({
  body: JSON.stringify(aleoo)
});
