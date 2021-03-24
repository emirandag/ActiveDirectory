const AD = require("ad");

const ad = new AD({
  url: "ldaps://192.168.145.10",
  user: "admin.mirgo@mirgo.local",
  pass: "Noviembre.1988",
});

module.exports = ad;
