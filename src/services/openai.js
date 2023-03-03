import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getResponseByPrompt(prompt) {
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        "messages": [{"role": "user", "content": prompt}]
    });
    const [choice] = completion.data ? completion.data.choices : [];
    const chatGPTResponse = choice ? choice.message.content : '';
    return chatGPTResponse;
}

export { getResponseByPrompt }