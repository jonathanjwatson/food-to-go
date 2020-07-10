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

let dishes = [
  {
    id: 1,
    name: "Sushi",
    price: "3.99",
  },
  {
    id: 2,
    name: "Chicken Pad Thai",
    price: "13.99",
  },
  {
    id: 3,
    name: "Veggie Spring Rolls",
    price: "5.99",
  },
  {
    id: 4,
    name: "Fried Tofu",
    price: "7.99",
  },
];

// dishes.forEach((dish) => {
//     console.log(dish.id);
//     console.log(dish.name);
//     console.log(dish.price);
// });

// 1. View Route for all Resources - dishes
app.get("/", (req, res) => {
    res.render("index", {
        dishes: dishes
    });
})
// 2. View Route for a single Resource (dish) by ID

// 3. View Route to add a single Resource (dish)

// 4. View Route to edit a single Resource (dish)

// 5. POST Route to handle incoming data and add new dish

// 6. PUT Route to handle incoming data, and update existing dish.

// 7. DELETE Route to delete an existing dish.

app.listen(PORT, function () {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
