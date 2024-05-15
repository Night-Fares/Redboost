require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const db = process.env.DATABASE_URI;
const secret = process.env.SECRET;
const PORT = process.env.PORT || 10000;
const app = express();
const signupRoute = require("./routes/api/register");
const loginRoute = require("./routes/api/login");
const checkAuthRoute = require("./routes/api/checkAuth");
const logoutRoute = require("./routes/api/logout");
const usersRoute = require("./routes/api/users");
const UpdateUser = require("./routes/api/UpdateUser");
const checkPass = require("./routes/api/checkPass");
const AddEvent = require("./routes/api/AddEvent");
const getEvents = require("./routes/api/getEvents");
const deleteEvent = require("./routes/api/DeleteEvent");
const UpdateEvent = require("./routes/api/UpdateEvent");
const forgetPassword = require("./routes/api/ForgetPassword");
const handleProgram = require("./routes/api/handleProgram");
const handleActivity = require("./routes/api/handleActivity");
const hundleEntrepreneur = require("./routes/api/hundleEntrepreneur");
const handleStartups = require("./routes/api/handleStartups");
const handleTask = require("./routes/api/handleTask");

// You can require your routes here

require("./passport/index");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "https://redboost-1.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const store = new MongoDBSession({
  uri: db,
  collection: "sessions",
});

store.on("connected", () => {
  console.log("Session store connected!");
});

store.on("error", (error) => {
  console.error("Session store error:", error);
});

app.use(
  session({
    key: "sessionId",
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Include your routes here

// Database + Server Connection Validation
mongoose
  .connect(db)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database Connected!");
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
