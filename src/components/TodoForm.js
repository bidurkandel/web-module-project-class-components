import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValues: "",
    };
  }

  handleChange = (evt) => {
    this.setState({
      inputValues: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.inputValues !== "") {
      this.props.handleItemAdd(this.state.inputValues);
    }
    this.setState({
      inputValues: "",
    });
  };
  handleCompleted = (evt) => {
    evt.preventDefault();
    this.props.handleItemCompleted();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValues}
          onChange={this.handleChange}
          type="text"
          name="todo"
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={this.handleCompleted}>
          Clear completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
