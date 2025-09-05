const express = require('express');
const cors = require('cors');
const connectToMongoDB = require('./mongooseConnect');
const app = express();
const Trigger = require('./models/Trigger');
const { transporter, prepareEmail, sendApprovalEmail } = require('./email');


connectToMongoDB()
    .then(() => console.log("✅ Connected to Espanso-Builder DB!"))
    .catch(err => {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    });

transporter.verify()
  .then(() => console.log("✅ SMTP server is ready"))
  .catch(err => console.error("❌ SMTP connection failed:", err));

app.use(cors());
app.use(express.json());

app.post('/triggers/approval', async (req, res) => {
    
    try {
        const { triggerText, replaceText, multiline } = req.body;
        const newTrigger = new Trigger({
            trigger: triggerText,
            isMultiline: multiline,
            replaceText: replaceText
        });

        const savedTrigger = await newTrigger.save();
        console.log(prepareEmail(savedTrigger.trigger, savedTrigger.replaceText, savedTrigger.id));

        sendApprovalEmail("Test", prepareEmail(savedTrigger.trigger, savedTrigger.replaceText, savedTrigger.id));


    } catch (err) {
        console.error("Failed to save new trigger:", err);
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

app.get('/triggers/approval/:id', async (req, res) => {
    try {

        console.log("Attempting to find this fuckin thing...");
        const { id } = req.params; // extract /:id
    
        const foundTrigger = await Trigger.findById(id);

        console.log(foundTrigger);

        if (!foundTrigger) {
            return res.status(404).json({ error: "Trigger not found" });
        }

        console.log(res.json(foundTrigger));
    } catch (err) {
        console.error("Error finding trigger:", err);
        res.status(500).json({ error: "Server error" });
    }
});

app.patch('/triggers/approval/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { approved } = req.body;

        const updatedTrigger = await Trigger.findByIdAndUpdate(
            id,
            { approved },
            { new: true }
        );

        if (!updatedTrigger) {
            return res.status(404).json({ error: "Trigger not found" });
        }

        res.json(updatedTrigger);
    } catch (err) {
        console.error("Error updating trigger:", err);
        res.status(500).json({ error: "Server error" });
    }
});


app.listen(8080, () => {
    console.log('Server listening on port 8080');
});