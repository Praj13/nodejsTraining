const db = require("../config/db"); // Ensure the database connection is correct

exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createBook = (req, res) => {
  const { title, author, published_year } = req.body;
  db.query(
    "INSERT INTO books (title, author, published_year) VALUES (?, ?, ?)",
    [title, author, published_year],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Book added successfully", id: result.insertId });
    }
  );
};

exports.getBookById = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    }
  );
};

exports.updateBook = (req, res) => {
  const { title, author, published_year } = req.body;
  db.query(
    "UPDATE books SET title = ?, author = ?, published_year = ? WHERE id = ?",
    [title, author, published_year, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Book updated successfully" });
    }
  );
};

exports.deleteBook = (req, res) => {
  db.query("DELETE FROM books WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Book deleted successfully" });
  });
};
