const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from DevOps Backend 🚀");
});

app.get("/health", (req, res) => {
    res.json({ status: "UP", service: "backend" });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
