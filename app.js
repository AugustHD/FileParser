const express = require("express");
const { parseString } = require("xml2js");
const csvParser = require("csv-parser");
const yaml = require("js-yaml");
const fs = require("fs");


const app = express();

// XML data
const xmlData = fs.readFileSync("C:\\Users\\augu0577.NEXT\\Desktop\\ServerParse\\ExEmEl.xml", "utf-8");

app.get("/xml", (req, res) => {
    parseString(xmlData, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: "Failed to parse XML" });
        } else {
            res.send(result);
        }
    });
});

// CSV data
const csvData = fs.readFileSync("C:\\Users\\augu0577.NEXT\\Desktop\\ServerParse\\SeeEsVee.csv", "utf-8");

app.get("/csv", (req, res) => {
    const results = [];
    const parser = csvParser();

    parser.on("data", (data) => results.push(data));

    parser.on("end", () => {
        res.send(results);
    });

    parser.write(csvData);
    parser.end();
});

// YAML data
const yamlData = fs.readFileSync("C:\\Users\\augu0577.NEXT\\Desktop\\ServerParse\\YamEl.yaml", "utf-8");

app.get("/yaml", (req, res) => {
    try {
        const result = yaml.load(yamlData);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to parse YAML" });
    }
});

// TXT data
const txtData = fs.readFileSync("C:\\Users\\augu0577.NEXT\\Desktop\\ServerParse\\TeeExTee.txt", "utf-8");

app.get("/txt", (req, res) => {
    res.send({ data: txtData });
});

// JSON data
const jsonData = fs.readFileSync("C:\\Users\\augu0577.NEXT\\Desktop\\ServerParse\\JaySon.json", "utf-8");

app.get("/json", (req, res) => {
    try {
        const result = JSON.parse(jsonData);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to parse JSON" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server is running on port", PORT));
