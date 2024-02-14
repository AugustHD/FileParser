import express from "express";

const app = express();

const dataHere = [];

app.get("/", (req, res) => {
    // dataHere.push("OK!")
    console.log(req.ip);
    res.send({message: "Hello!"});
});

app.get("/otherRoute", (req, res) => {
    res.send({message: "This is the other route."});
});

app.post("/postrequest", (res, req) => {
    res.send({message: "You made a post request, neat!"});
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server i running on port", PORT));