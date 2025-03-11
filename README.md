# API Headers - TP DevOps

## 📌 Description
Ce projet est une API minimaliste en TypeScript utilisant uniquement les modules natifs de Node.js. 
Elle retourne les headers de la requête HTTP GET sur `/ping` au format JSON.
Les headers sont également affichés dans la console du serveur à chaque requête.

---

## ✅ Prérequis
Avant de lancer le projet, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version recommandée : LTS) et npm
- Un terminal ou un éditeur de code (VS Code recommandé)

---

## 🚀 Installation et Exécution

### 1️⃣ Cloner le projet
```sh
git clone https://github.com/Cilag/TP-1-DEVOPS.git
cd /TP-1-DEVOPS
```

### 2️⃣ Installer les dépendances (si besoin pour TypeScript)
```sh
npm install
```

### 3️⃣ Lancer le serveur en mode développement
```sh
npx ts-node src/index.ts
```

### 4️⃣ Lancer le serveur en mode production
```sh
npm run build
npm start
```

---

## 🌍 Accès à l'API
Une fois le serveur démarré, ouvrez votre navigateur et allez à l'adresse :
```sh
http://localhost:3000/ping
```
Cela affichera un JSON contenant les headers de la requête.

---

## 📜 Affichage des Headers dans la Console
Chaque fois qu'une requête est envoyée à `/ping`, les headers reçus sont affichés dans le terminal du serveur, sous la forme d'un JSON.

---

## ⚙ Configuration
| Variable d'environnement | Description | Valeur par défaut |
|--------------------------|-------------|------------------|
| `PING_LISTEN_PORT` | Port d'écoute du serveur | `3000` |

---

🚀 **Votre API est maintenant prête !**

