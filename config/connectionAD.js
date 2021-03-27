const AD = require("ad");

const ad = new AD({
  url: "ldaps://192.168.145.10",
  user: "admin.mirgo@mirgo.local",
  pass: "Noviembre.1988",
});

if (ad) {
  console.log("Conectado con Active Directory");
} else {
  console.log("Error al conectar con Active Directory");
}

module.exports = ad;
