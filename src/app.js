require('dotenv').config()
const cors = require("cors");
const express = require('express');
const cookieParser = require("cookie-parser");

const articleroute = require("./routes/article-route");
const authroute = require("./routes/auth-route");
const auth = require("./services/auth-service");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/", articleroute);
app.use("/auth", authroute);

if (process.env.BDD_MODE === "mysql") {
    console.log("Connexion à la base de données MySQL");
    require ('./dao/sequelize/connexion').connect_sequelize();
}
else if (process.env.BDD_MODE === "mongodb") {
    console.log("Connexion à la base de données MongoDB");
    require ('./dao/mongoose/connexion').connect_mongoose();
}


// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});

