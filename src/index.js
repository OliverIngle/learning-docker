const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Docker Is Amazing!',
    });
});

app.listen(process.env.PORT || PORT, _ => console.log(`app live on http://localhost:${PORT}`));