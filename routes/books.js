const express = require('express');
const router = express.Router();

// Example endpoint for getting all books
router.get('/', (req, res) => {
  res.json([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);
});

module.exports = router;
