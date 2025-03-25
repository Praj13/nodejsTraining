let todos = [];
let todoIdCounter = 1;

function getNewTodoId() {
  return todoIdCounter++;
}

module.exports = {
  todos,
  getNewTodoId,
};
