import express from 'express';
import cors from 'cors';
import * as OpenAi from './services/openai.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    return response.json({ response: 'API OpenAI' });
});

app.get('/search', async (request, response) => {
    const { question } = request.query;
    if (!question) {
        return response.status(400).json({ response: 'O parâmetro question é obrigatório' });
    }
    const answer = await OpenAi.getResponseByPrompt(`Responda ${question} e retorne um html simples com a resposta`);
    return response.json({ question, answer });
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})