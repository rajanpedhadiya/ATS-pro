require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenRouter API Configuration
const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Chat/Completion Endpoint
app.post('/api/chat', async (req, res) => {
  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY is not configured on the server.' });
  }

  try {
    const { model, messages } = req.body;
    
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000', // Update with actual domain in production
        'X-Title': 'ATS Pro Backend'
      },
      body: JSON.stringify({
        model: model || 'openai/gpt-oss-120b:free', // Default model if not provided
        messages: messages || []
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('OpenRouter API error response:', data);
      return res.status(response.status).json(data);
    }
    
    res.json(data);
  } catch (error) {
    console.error('Server error calling OpenRouter:', error);
    res.status(500).json({ error: 'Internal server error while communicating with OpenRouter API.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
