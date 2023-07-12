const express = require("express");
const path = require("path");
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
const app = express();
app.use(express.static(path.join(__dirname)));

// Route for serving the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ..

exports.PDFServicesSdk = PDFServicesSdk;
exports.fs = fs;
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
