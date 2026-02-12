module.exports = {
    connect_mongoose : () => {

        const mongoose = require('mongoose');
        mongoose.connection.once('open', () => {
            console.log(`Connecté(e) à la base de données MongoDB`);
        });

        mongoose.connection.on('error', (err) => {
            console.log(`Erreur de la base données`);
        });

        mongoose.connect(
            'mongodb://admin:adminpassword@localhost:27017/db_demo?authSource=admin'
        )
            .then(() => console.log('Mongo connecté'))
            .catch(err => console.error(err));

    }
}