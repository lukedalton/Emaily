// keys.js - figure out what set of creds to return
if (process.env.NODE_ENV === "production") {
  //we are in prod - return prod set of keys
  module.exports = require("./prod");
} else {
  //we are in dev - return dev set of keys
  module.exports = require("./dev");
}
