let aleoo = JSON.parse($request.body);
aleoo.user_attributes.custom_attributes.pro = true;
aleoo.user_attributes.custom_attributes.pro_status = "ultra";
aleoo.user_attributes.custom_attributes.subscription_type = "ultra";
$done({body: JSON.stringify(aleoo)});
