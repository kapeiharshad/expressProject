const dotenv = require("dotenv");
dotenv.config();
module.exports = function () {
  console.log("process.env.NODE_ENV :", process.env.NODE_ENV === "production" ? process.env.NODE_ENV : "development")
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        port: process.env.PORT_PROD
      };

    default:
      return {
        endpoint: process.env.API_URL,
          masterKey: process.env.API_KEY,
          port: process.env.PORT_DEV,
          mongoUrl: process.env.MONGOURL_DEV

      };
  }
};