const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);

});

app.get("/api/fortune", (req, res) => {
    const fortunes = ["A lifetime of happiness lies ahead of you.",
        "All will go well with your new project.",
        "Determination is what you need now.",
        "Failure is the chance to do better next time.",
    ];

    //choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
});

app.get("/api/motivation", (req, res) => {
    const quotes = ['“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
        '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
        '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
        '“I never dreamed about success. I worked for it.” —Estée Lauder',
    ];

    //choose random fortune
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomMotivation = quotes[randomIndex];

    res.status(200).send(randomMotivation);
});

app.post("", (req, res) => {})

app.put("", (req, res) => {})

app.delete("", (req, res) => {})
app.listen(4000, () => console.log("Server running on 4000"));