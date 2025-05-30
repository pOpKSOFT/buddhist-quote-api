# Buddhist Quotes API

A RESTful API for accessing Buddhist quotes, built with Node.js and Express.

## API Endpoints

### Get All Quotes
```
GET /api/quotes
```
Query Parameters:
- `category`: Filter quotes by category (e.g., peace, wisdom, mindfulness)
- `author`: Filter quotes by author

### Get Random Quote
```
GET /api/quotes/random
```

### Get Quote by ID
```
GET /api/quotes/:id
```

### Health Check
```
GET /health
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The server will run on http://localhost:10000

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variable: `PORT=10000`

## API Response Format

Example response for a quote:
```json
{
  "id": 1,
  "text": "Peace comes from within. Do not seek it without.",
  "author": "Buddha",
  "category": "peace"
}
``` 