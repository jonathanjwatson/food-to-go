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
2. Add, commit, push to GitHub(if necessary)
3. `heroku create`
4. `git remote -v` to check the heroku remote
5. `git push heroku master`

## Pseudocode Routes
1. View Route for all Resources - dishes
2. View Route for a single Resource (dish) by ID
3. View Route to add a single Resource (dish)
4. View Route to edit a single Resource (dish)
5. POST Route to handle incoming data and add new dish
6. PUT Route to handle incoming data, and update existing dish.
7. DELETE Route to delete an existing dish.

## Create Dummy Data
Array of objects stored in memory.

## Setup Handlebars Folders
1. Create a `views` folder
2. Inside `views` create `index.handlebars`
3. Inside `views` create a `layouts` folder.
4. Inside `layouts` create a `main.handlebars` file.
5. Add boilerplate with "triple-stache" body. 

## Build First GET Route
1. 