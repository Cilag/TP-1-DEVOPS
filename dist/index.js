"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
// Port configuré via variable d'environnement ou par défaut 3000
const PORT = process.env.PING_LISTEN_PORT || 3000;
const server = (0, http_1.createServer)((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        // Log des headers reçus dans le terminal
        console.log("📥 Headers reçus :\n", JSON.stringify(req.headers, null, 2));
        // Envoi des headers en réponse JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers, null, 2)); // Beautifier le JSON
    }
    else {
        res.writeHead(404);
        res.end();
    }
});
// Démarrer le serveur
server.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
