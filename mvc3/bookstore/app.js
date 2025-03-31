const express = require("express");
const app = express();
const bookRoutes = require("./routes/bookRoutes"); // Ensure the correct path

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api/books", bookRoutes); // Ensure this matches your route file

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
