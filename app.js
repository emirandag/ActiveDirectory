const express = require("express");
//const AD = require("ad");
const app = express();
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require('express-session');
const expressLayouts = require("express-ejs-layouts");
/*
const ad = new AD({
  url: "ldaps://192.168.145.10",
  user: "admin.mirgo@mirgo.local",
  pass: "Noviembre.1988",
});
*/

app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");
app.set("views", "./views");

/**
 * Redirección de las páginas
 */
/*
app.get("/", (req, res) => {
  res.render("index");
 
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
         
    });
    */

app.use(expressLayouts);
app.use("/public", express.static("./public"));
app.use(flash());
app.use(session({
  secret: "somerandonstuffs",
  name: 'sessio_user',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", require("./routers/views"));

/*
  const ad = require("./config/connectionAD");
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
});
*/

app.set("port", process.env.PORT || 8100);

app.listen(app.get("port"), (err) => {
  if (err) {
    console.log("Error al iniciar el servidor");
  } else {
    console.log("Servidor iniciado el puerto 8100");
  }
});
