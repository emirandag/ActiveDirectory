const express = require("express");
const ad = require("../config/connectionAD");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/login", (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  if (user && pass) {
    (async () => {
      try {
        const validado = await ad.user(user).authenticate(pass);
        if (validado) {
          res.send("Validado");
          console.log("Estado: " + validado);
        } else {
          req.flash("error", '¡Este usuario no existe!');
          res.locals.messages = req.flash();
          res.render('create');
        }
      } catch (err) {
        console.log("Error: "+err);
      }
    })();
  } else {
    req.flash("error", '¡Introduzca usuario y contraseña!');
    res.locals.messages = req.flash();
    res.render('index');
  }

});

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const user = req.body.user;
  const pass = req.body.pass;
  const email = req.body.email;

  (async () => {
    try {
      await ad.user().add({
        userName: user,
        firstName: name,
        lastName: surname,
        email: email,
        location: "Altas/Usuarios",
        password: pass,
        enabled: true,
      });

      res.send("Usuario creado");
      console.log("Usuario creado");

    } catch (err) {
      console.log("Error: "+err);
    }
  })();
});

module.exports = router;
