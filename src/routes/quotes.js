const express = require('express');
const router = express.Router();
const quotes = require('../data/quotes.json').quotes;

// Get all quotes
router.get('/', (req, res) => {
  const { category, author } = req.query;
  let filteredQuotes = [...quotes];

  if (category) {
    filteredQuotes = filteredQuotes.filter(quote => 
      quote.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (author) {
    filteredQuotes = filteredQuotes.filter(quote => 
      quote.author.toLowerCase() === author.toLowerCase()
    );
  }

  res.json(filteredQuotes);
});

// Get random quote
router.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Get quote by ID
router.get('/:id', (req, res) => {
  const quote = quotes.find(q => q.id === parseInt(req.params.id));
  if (!quote) {
    return res.status(404).json({ error: 'Quote not found' });
  }
  res.json(quote);
});

module.exports = router; 