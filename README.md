# 📦 ApiArticle

API REST simple pour la gestion d’articles 📰, développée pour illustrer les bonnes pratiques de conception backend.

Application développé dans le cadre de cours de base de donnée.

## 🚀 Description

**ApiArticle** est une API permettant de créer, lire, mettre à jour et supprimer des articles.
Elle peut être utilisée comme base pour un blog, un CMS ou tout autre projet nécessitant la gestion de contenu.

## ✨ Fonctionnalités

* 📄 Création d’articles
* 📖 Consultation d’un ou plusieurs articles
* ✏️ Modification d’un article
* 🗑️ Suppression d’un article
* 🔍 Recherche et filtrage (si implémenté)
* 📦 API RESTful structurée

## 🛠️ Technologies utilisées

Selon ton projet (à adapter si besoin) :

* Node.js / Express ⚡
* MongoDB / Mongoose 🍃 *(ou autre base de données)*
* Docker 🐳 *(si présent)*
* JWT / Auth *(si implémenté)*

## 📁 Structure du projet

```
ApiArticle/
├── controllers/     # Logique métier
├── models/          # Modèles de données
├── routes/          # Définition des routes
├── middlewares/     # Middlewares (auth, validation...)
├── config/          # Configuration (DB, env...)
├── app.js           # Point d’entrée
└── package.json
```

## ⚙️ Installation

1. Cloner le repo :

```bash
git clone https://github.com/BaptouK/ApiArticle.git
cd ApiArticle
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer les variables d’environnement :

Créer un fichier `.env` à la racine :

```
PORT=3000
DB_URI=your_database_url
JWT_SECRET=your_secret_key
```

4. Lancer le projet :

```bash
npm start
```

ou en mode dev :

```bash
npm run dev
```

## 📡 Endpoints principaux

| Méthode | Endpoint      | Description                 |
| ------- | ------------- | --------------------------- |
| GET     | /articles     | Récupérer tous les articles |
| GET     | /articles/:id | Récupérer un article        |
| POST    | /articles     | Créer un article            |
| PUT     | /articles/:id | Modifier un article         |
| DELETE  | /articles/:id | Supprimer un article        |

## 🧪 Tests

Si tu as des tests :

```bash
npm test
```

## 🔐 Authentification (optionnel)

Si ton API inclut une auth :

* Utilisation de JWT
* Middleware de protection des routes
* Gestion des rôles utilisateurs

## 📌 Améliorations possibles

* Pagination 📚
* Upload d’images 🖼️
* Documentation Swagger 📘
* Système de commentaires 💬
* Gestion des utilisateurs 👤

## 📄 Licence

Ce projet est sous licence MIT 🪪
