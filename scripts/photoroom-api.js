let aleoo = JSON.parse($response.body);
aleoo.is_eligible_for_assigning_revenuecat_subscription = true;
aleoo.badgeText = "Ultra";
$done({body: JSON.stringify(aleoo)});
