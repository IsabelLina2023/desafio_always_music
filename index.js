import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');
  });

app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));