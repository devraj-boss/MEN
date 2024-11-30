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

app.get("/form", (req, res) => {
  console.log(req.body);
  res.send("Okh");
});

app.get("/", (req, res) => {
  res.render("register");
});

app.get("/all", (req,res) => {

  // userModel.find().then((users) => {
  //   res.send(users);
  // });
  
});
app.post("/register", async (req, res) => {
  
  console.log(req.body);

  const { username, password, age, email, gender } = req.body;

  const newUser = await userModel.create({
    username,
    email,
    password,
    age,
    gender,
  });

  res.send(newUser);
});

app.listen(3000);
