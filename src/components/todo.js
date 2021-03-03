import React from "react";

function Todo({ text, setTodos, todos, todo }) {
  //Events
  function deleteHandler() {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }
  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }
  return (
    <div className="todo">
      <li className={`todo-list ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
export default Todo;
