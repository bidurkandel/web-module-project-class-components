import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const list = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: list,
    };
  }

  handleItemAdd = (taskName) => {
    const item = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    const newTask = [...this.state.todo, item];

    this.setState({
      todo: newTask,
    });
  };

  handleItemToggle = (todoID) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === todoID) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleItemCompleted = () => {
    const newTodo = this.state.todo.filter((item) => {
      return item.completed === false;
    });
    this.setState({
      todo: newTodo,
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleItemAdd={this.handleItemAdd}
          handleItemCompleted={this.handleItemCompleted}
        />
        <TodoList
          handleItemToggle={this.handleItemToggle}
          todoList={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
//ReactDOM.render(<App />, document.getElementById("root"));
