const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Terminal Transmission Endpoint
app.post('/api/transmit', (req, res) => {
    const { sender, message } = req.body;
    console.log(`[NETWORK LOG] New Transmission from ${sender}: ${message}`);
    res.json({ status: 'received', feedback: 'Data packets synchronized.' });
});

app.listen(PORT, () => {
    console.log(`[SERVER] Agentic Portfolio active on http://localhost:${PORT}`);
});