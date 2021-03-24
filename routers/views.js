const express = require("express");
const ad = require("../config/connectionAD");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");

  //console.log(validado);

  /*
  ad.user()
    .add({
      userName: "pruebanodejs",
      firstName: "Prueba",
      lastName: "NodeJS",
      location: "Altas/Usuarios",
      password: "Inicial2021",
      enabled: true,
    })
    .catch((err) => {
      console.log("Error al crear el usuario:", err);
    });
    */

  /*
  ad.user()
    .get()
    .then((users) => {
      console.log("Your users:", users);
    })
    .catch((err) => {
      console.log("Error getting users:", err);
    });
    */

  /*
    ad.user("edu")
      .disable()
      .catch((err) => {
        console.log("Error al cambiar la contraseña:", err);
      */
});

router.post("/login", (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  //ad.user(user).authenticate(pass).then(res.send("Validado"));

  (async () => {
    try {
      //await ad.user(user).authenticate(pass).then(res.send("Validado"));
      const validado = await ad.user(user).authenticate(pass);
      if (validado) {
        res.send("Validado");
        console.log("Estado: " + validado);
      } else {
      }
    } catch (err) {
      // ...
    }
  })();
});

module.exports = router;
