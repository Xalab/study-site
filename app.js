const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(8000, () => {
    console.log("Server working on port 8000");
});