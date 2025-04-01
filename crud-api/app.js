const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const sequelize = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/books", bookRoutes);

// Sync Database
sequelize.sync().then(() => console.log("✅ Database Synced!"));

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
