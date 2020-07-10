# food-to-go

## Setup

1. `touch server.js`
2. `npm init -y`
3. `npm install express express-handlebars@3.0.0`
4. Copy boilerplate express/handlebars code into `express.js`

```javascript
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
```

## Deploy to Heroku
1. Ensure you are on the master branch
2. 