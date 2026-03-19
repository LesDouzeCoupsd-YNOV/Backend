import express from "express"
import Database from "better-sqlite3";
import cors from "cors";
import crypto from "crypto";


const app = express();
app.use(cors());
app.use(express.json());

const db = new Database("quiz.db", {readonly: true});
const PORT = 3000;

// Statements SQL 
const stmtAllCelebs = db.prepare(`
    SELECT Name FROM "Célébrités"
`);

const stmtRandomQuestion = db.prepare(`
    SELECT QuestionID, Name, RéponseID
    FROM "Questions"
    ORDER BY RANDOM()
    LIMIT 1
`);

const stmtAnswers = db.prepare(`
    SELECT RéponseID, Name
    FROM "Réponse"
    WHERE QuestionID = ?
    ORDER BY RANDOM()
`);

// Sessions de jeu en mémoire
const games = new Map();

function shuffleArray(arr) {
    const a = [...arr];

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}

// free > 1h
setInterval(() => {
    const now = Date.now();

    for (const [id, game] of games) {
        if (now - game.createdAt > 3600000) games.delete(id);
    }
}, 600000);

// routes

// liste des celebs (pour les boutons)
app.get("/api/celebrities", (req, res) => {
    const celebs = stmtAllCelebs.all().map(c => c.Name);
    res.json({ celebrities: celebs });
});

// question aléatoire
app.get("/api/question", (req, res) => {
    const question = stmtRandomQuestion.get();

    if (!question) {
        return res.status(404).json({ error: "Aucune question trouvée" });
    }

    const answers = stmtAnswers.all(question.QuestionID);

    res.json({
        q: question.Name,
        r: answers.map((a) => a.Name),
        correctIndex: answers.findIndex((a) => a.RéponseID === question.RéponseID),
    });
});

// démarrer une partie
app.post("/api/game/start", (req, res) => {
    const celebs = stmtAllCelebs.all().map(c => c.Name);

    if (celebs.length === 0) {
        return res.status(500).json({ error: "Aucune célébrité en base" });
    }

    const gameId = crypto.randomUUID();
    const order = shuffleArray(celebs);

    games.set(gameId, {
        createdAt: Date.now(),
        celebrities: celebs,
        order: order,
        currentIndex: 0,
        score: 0,
    });

    res.json({
        gameId,
        celebrity: order[0],
        total: order.length,
        current: 1,
        celebrities: celebs,
    });
});

// Deniner la céleb
app.post("/api/game/guess", (req, res) => {
    const { gameId, guess, hiddenCount, totalTiles } = req.body;

    const game = games.get(gameId);
    if (!game) {
        return res.status(404).json({ error: "Partie introuvable" });
    }

    if (game.currentIndex >= game.order.length) {
        return res.status(400).json({ error: "Partie terminée" });
    }

    const correctName = game.order[game.currentIndex];
    const isCorrect = guess === correctName;

    let bonus = 0;
    if (isCorrect && totalTiles > 0) {
        bonus = Math.round((hiddenCount / totalTiles) * 100);
        game.score += bonus;
    }

    res.json({
        correct: isCorrect,
        correctName,
        bonus,
        score: game.score,
    });
});

// Passer à la célébrité suivante
app.post("/api/game/next", (req, res) => {
    const { gameId } = req.body;

    const game = games.get(gameId);
    if (!game) {
        return res.status(404).json({ error: "Partie introuvable" });
    }

    game.currentIndex++;

    if (game.currentIndex >= game.order.length) {
        const finalScore = game.score;
        games.delete(gameId);
        return res.json({
            finished: true,
            score: finalScore,
        });
    }

    res.json({
        finished: false,
        celebrity: game.order[game.currentIndex],
        current: game.currentIndex + 1,
        total: game.order.length,
        score: game.score,
    });
});

// cyc;le de vie

process.on("SIGINT", () => {
    db.close();
    process.exit();
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});