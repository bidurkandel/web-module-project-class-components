import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="todo-list">
        {this.props.todoList.map((item) => {
          return (
            <Todo
              handleItemToggle={this.props.handleItemToggle}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
