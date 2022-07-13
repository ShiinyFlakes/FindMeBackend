require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const router = require("./routes/activity-routes");

//database connection
connection();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/activitys", router);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Läuft auf port ${port}...`));

