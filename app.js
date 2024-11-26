// const express = require("express");
// const app = express();
// const morgan = require("morgan");

// app.set("view engine", "ejs");

// app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("middleware");
//   a = 31;
//   b = 51;
//   console.log(a + b);
//   return next();
// });

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/about", (req, res) => {
//   res.send("haaaaaaaa ahahaa aha");
// });

// app.listen(3000);

const express = require("express");
const app = express();
const userModel = require("./models/user");
const dbConnection = require("./config/db");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  console.log(req.body);
  res.send("Okh");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register",  async (req, res) => {
  console.log(res.body)
  const { username, password, age, email, gender } = req.body;

   await userModel.create({
    username,
    email,
    password,
    age,
    gender
  })

  res.send("Abhi maja aya na bidu {REGISTERED}");
  
});

app.listen(3000);
