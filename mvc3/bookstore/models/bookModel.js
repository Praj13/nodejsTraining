const db = require("../config/db");

const Book = {
  getAll: (callback) => {
    db.query("SELECT * FROM books", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM books WHERE id = ?", [id], callback);
  },

  create: (bookData, callback) => {
    db.query("INSERT INTO books SET ?", bookData, callback);
  },

  update: (id, bookData, callback) => {
    db.query("UPDATE books SET ? WHERE id = ?", [bookData, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM books WHERE id = ?", [id], callback);
  },
};

module.exports = Book;
