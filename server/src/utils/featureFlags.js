const { AUTH, MOCK, ZILLOW_API_LISTING, ZILLOW_API_PROPERTY_DETAIL } =
  process.env;

const checkFeatureFlag = () => {
  console.log('============ Feature Flags ============');
  console.log(
    'MOCK               =',
    MOCK.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
  console.log(
    'AUTH verifyToken   =',
    AUTH.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
  console.log(
    'Zillow API Listing =',
    ZILLOW_API_LISTING.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
  console.log(
    'Zillow API Detail  =',
    ZILLOW_API_PROPERTY_DETAIL.toLowerCase() === 'on' ? 'ON' : 'OFF'
  );
};

export default checkFeatureFlag;
