const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../client/", "build")));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.get("/search/:phrase", async function (req, res) {
  const result = await searchFull(req.params.phrase);
  res.send(result);
});

app.listen(port);

const searchFull = (text) => {
  return new Promise((resolve) => {
    const regEx = new RegExp(text, "i");
    const result = [];

    fs.readFile("server/text.txt", "utf8", function (err, contents) {
      console.log(err);
      let lines = contents.toString().split("\n");
      lines.forEach((line, i) => {
        if (line && line.search(regEx) >= 0) {
          if (i < 134) return;
          console.log(`line: ${i}`);
          result.push({ text: line, line: i, book: getBookName(i) });
        }
      });
      console.log("finished search");
      resolve(result);
    });
  });
};

const getBookName = (line) =>
  Object.keys(bookContents).reduce((name, k) => {
    const v = bookContents[k];
    if (v <= line) return k;
    return name;
  }, "");

const bookContents = {
  "THE SONNETS": 138,
  "ALL’S WELL THAT ENDS WELL": 2911,
  "THE TRAGEDY OF ANTONY AND CLEOPATRA": 7875,
  "AS YOU LIKE IT": 14516,
  "THE COMEDY OF ERRORS": 17308,
  "THE TRAGEDY OF CORIOLANUS": 20509,
  CYMBELINE: 24626,
  "THE TRAGEDY OF HAMLET, PRINCE OF DENMARK": 30501,
  "THE FIRST PART OF KING HENRY THE FOURTH": 37188,
  "THE SECOND PART OF KING HENRY THE FOURTH": 41904,
  "THE LIFE OF KING HENRY THE FIFTH": 44864,
  "THE FIRST PART OF HENRY THE SIXTH": 50249,
  "THE SECOND PART OF KING HENRY THE SIXTH": 53520,
  "THE THIRD PART OF KING HENRY THE SIXTH": 57008,
  "KING HENRY THE EIGHTH": 60354,
  "KING JOHN": 64003,
  "THE TRAGEDY OF JULIUS CAESAR": 66920,
  "THE TRAGEDY OF KING LEAR": 71564,
  "LOVE’S LABOUR’S LOST": 77600,
  "THE TRAGEDY OF MACBETH": 80515,
  "MEASURE FOR MEASURE": 84664,
  "THE MERCHANT OF VENICE": 87664,
  "THE MERRY WIVES OF WINDSOR": 91832,
  "A MIDSUMMER NIGHT’S DREAM": 94791,
  "MUCH ADO ABOUT NOTHING": 98251,
  "THE TRAGEDY OF OTHELLO, MOOR OF VENICE": 103163,
  "PERICLES, PRINCE OF TYRE": 110233,
  "KING RICHARD THE SECOND": 114372,
  "KING RICHARD THE THIRD": 117469,
  "THE TRAGEDY OF ROMEO AND JULIET": 121877,
  "THE TAMING OF THE SHREW": 127133,
  "THE TEMPEST": 132007,
  "THE LIFE OF TIMON OF ATHENS": 135830,
  "THE TRAGEDY OF TITUS ANDRONICUS": 138546,
  "THE HISTORY OF TROILUS AND CRESSIDA": 141422,
  "TWELFTH NIGHT; OR, WHAT YOU WILL": 147585,
  "THE TWO GENTLEMEN OF VERONA": 152068,
  "THE TWO NOBLE KINSMEN": 154480,
  "THE WINTER’S TALE": 159668,
  "A LOVER’S COMPLAINT": 164683,
  "THE PASSIONATE PILGRIM": 165066,
  "THE PHOENIX AND THE TURTLE": 165306,
  "THE RAPE OF LUCRECE": 165400,
  "VENUS AND ADONIS": 167585,
};
