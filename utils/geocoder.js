var NodeGeocoder = require('node-geocoder');

var options = {
  provider: process.env.GEO_CODER_PROVIDER,

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: process.env.GEO_CODER_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};


const geoCoder = NodeGeocoder(options)

module.exports = geoCoder