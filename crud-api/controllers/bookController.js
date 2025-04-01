const Book = require("../models/book");

// ✅ Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get Book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create a Book
exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const newBook = await Book.create({ title, author, publishedYear });
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update a Book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    await book.update({ title, author, publishedYear });
    res.json({ message: "Book updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete a Book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    await book.destroy();
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
