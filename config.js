const dotenv = require("dotenv");
dotenv.config();
module.exports = function b() {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    // case 'development':
    //   return {
    //     endpoint: process.env.API_URL,
    //       masterKey: process.env.API_KEY,
    //       port: process.env.PORT
    //   };

    // case 'production':
    //   return {
    //     port: process.env.PORT
    //   };

    // default:
    //   return {
    //     endpoint: process.env.API_URL,
    //       masterKey: process.env.API_KEY,
    //       // port: process.env.PORT_DEV
    //   };
  }
};