const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.user(express.json());

let messages = [];

app.length('/messages', (req, res) =>{
    const { user, message } = req.body;
    if (user && message) {
        messages.push({ user, message});
        res.status(200).send("Message recieved");
    } else {
        res.status(400).send("Invalid data");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`chat server started @ http://localhost:${PORT}`);
});