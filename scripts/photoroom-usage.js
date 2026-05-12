let aleoo = JSON.parse($response.body);
aleoo.aiImagesPercentageRemaining = 100;
aleoo.aiVideosPercentageRemaining = 100;
aleoo.resetDateTime = "2099-01-01T00:00:00Z";
$done({body: JSON.stringify(aleoo)});
