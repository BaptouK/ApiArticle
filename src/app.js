require('dotenv').config()
const cors = require("cors");
const express = require('express');
const articleroute = require("./routes/article-route");
//const DAOGameMock = require("./dao/mock/daogame-mock");


const app = express();
app.use(express.json()); // indispensable

app.use(cors());

app.use("/", articleroute);

if (process.env.BDD_MODE === "mysql") {
    console.log("Connexion à la base de données MySQL");
    //require ('./dao/sequelize/connexion').connect_sequelize();
}
else if (process.env.BDD_MODE === "mongodb") {
    console.log("Connexion à la base de données MongoDB");
    require ('./dao/mongoose/connexion').connect_mongoose();
}


// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});

