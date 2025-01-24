require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());
app.use(express.json());

const volwelsRoute = require('./routes/vowels-routes');
app.use('/api/volwels', volwelsRoute);
const ABCRoute = require('./routes/abc-routes');
app.use('/api/abc-permute', ABCRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});