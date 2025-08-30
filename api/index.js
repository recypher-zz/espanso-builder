const express = require('express');
const app = express();
const cors = require('cors');
const connectToMongoDB = require('./mongooseConnect');
const Trigger = require('./models/Trigger');







connectToMongoDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from api server!');
});

// New POST route
app.post('/data', async (req, res) => {
        try {
            const {triggerText, multiline, replaceText} = req.body;
            const newTrigger = new Trigger({
            trigger: triggerText,
            isMultiline: multiline,
            replaceText: replaceText
        });

        await newTrigger.save();
        res.json({
            message: 'Data received successfully',
            receiveData: { triggerText, multiline, replaceText }
        });
    }catch (error) {
        console.error("Error saving trigger:", error);
        res.status(500).json({error: "Failed to save trigger"})
    }
});

app.get('/data', async (req, res) => {
    try {
        const triggers = await Trigger.find();
        res.json(triggers);
    } catch (error) {
        console.error('Error fetching triggers:', error);
    }
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});