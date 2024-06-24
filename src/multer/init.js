// uploadHandler.js

const multer = require('multer');
const path = require('path');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.resolve(__dirname, '../images')); // Destination folder where files will be stored
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, uniqueSuffix + path.extname(file.originalname)); // File name logic
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
