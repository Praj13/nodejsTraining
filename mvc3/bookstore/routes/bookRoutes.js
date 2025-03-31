const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController"); // Ensure this is correctly imported

router.get("/", bookController.getAllBooks); // Make sure `getAllBooks` exists in the controller

router.post("/", bookController.createBook);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
