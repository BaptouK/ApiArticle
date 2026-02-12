module.exports = {
    connect_sequelize : () => {
        const sequelize = require('./database');

        sequelize.authenticate()
            .then(() => {
                console.log('Connexion MySQL OK')
                const Game = require('./article-model'); // Sert a créer la table Game dans la base de données
                sequelize.sync()
                    .then(() => console.log('Tables synchronisées'))
                    .catch(err => console.error(err))
            })
            .catch(err => console.error('Erreur MySQL', err))
    }
}