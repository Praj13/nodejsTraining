let users = [];
let idCounter = 1;

function getNewId() {
  return idCounter++;
}

module.exports = {
  users,
  getNewId,
};
