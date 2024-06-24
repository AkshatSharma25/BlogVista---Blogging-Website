// uploadRoute.js

const express = require('express');
const upload = require("./init"); // Import upload middleware from uploadHandler.js

const router = express.Router();

// Endpoint to handle file upload
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Please upload a file');
    }

    // Optionally, you can respond with the file path or other details
    res.send('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file');
  }
});

module.exports = router;
