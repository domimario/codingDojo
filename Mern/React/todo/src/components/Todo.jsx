import React, { useState } from "react";
import "./Todo.css";
const Todo = (props) => {
  const [inputTask, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [check, setCheck] = useState(false);

  const onformSubmit = (e) => {
    e.preventDefault();
    if (inputTask === "") {
      return null;
    } else {
      setTodoList([
        ...todoList,
        {
          inputTask: inputTask,
          check: check,
        },
      ]);
    }
    setInputText("");
  };

  const onDeleted = (index) => {
    const newTaskArr = todoList.filter((items, id) => id !== index);
    setTodoList(newTaskArr);
  };
  const onCheck = (e) => {
    const newCheckArr = todoList.map((items, index) => {
      if (e === index) {
        items.check = !items.check;
        return items;
      }
    });
    setTodoList(newCheckArr);
  };

  console.log(todoList);

  return (
    <>
      <div>
        <h3>Todo List </h3>
        <form onSubmit={onformSubmit}>
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Your Task"
            value={inputTask}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          {todoList.map((items, index) => (
            <div key={index}>
              <p className={items.check === true ? "line " : ""}>
                {items.inputTask}
              </p>
              <input
                type="checkbox"
                checked={items.check}
                onChange={() => onCheck(index)}
              />
              <button onClick={() => onDeleted(index)}>Delete</button>
            </div>
          ))}
        </div>
        <ul></ul>
      </div>
    </>
  );
};
export default Todo;
