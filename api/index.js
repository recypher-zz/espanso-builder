const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from api server!');
});

// New POST route
app.post('/data', (req, res) => {
    const {triggerText, multiline, replaceText} = req.body;
    console.log('Received data:', { triggerText, multiline, replaceText });

    res.json({
        message: 'Data received successfully',
        receiveData: { triggerText, multiline, replaceText }
    });
})

app.listen(8080, () => {
    console.log('Server listening on port 8080');
})