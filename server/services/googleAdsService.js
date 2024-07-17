const { GoogleAdsApi } = require('google-ads-api');

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN
});

const customer = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN
});

exports.uploadConversion = async (clickId, conversionTime) => {
  const response = await customer.clickConversions.upload({
    conversions: [{
      gclid: clickId,
      conversion_action: process.env.GOOGLE_ADS_CONVERSION_ACTION_ID,
      conversion_date_time: conversionTime
    }]
  });

  return response;
};