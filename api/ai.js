// Node.js / Vercel Serverless function
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const body = req.body; // business data
  const OPENAI_KEY = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        {role: "system", content: "You are a professional business growth AI assistant."},
        {role: "user", content: `Analyze this business data: ${JSON.stringify(body)}`}
      ],
      max_tokens: 500
    })
  });

  const data = await response.json();
  res.status(200).json(data.choices[0].message.content);
};
