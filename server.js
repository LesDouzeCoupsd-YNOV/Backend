import express from "express"
import Database from "better-sqlite3";
import cors from "cors";

const app = express();
app.use(cors());
const db = new Database("quiz.db", {readonly: true});
const PORT = 3000;

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

process.on("SIGINT", () => {
    db.close();
    process.exit();
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});