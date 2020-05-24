import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import TaskForm from "./components/task-form/task-form.component";
import TaskList from "./components/task-list/task-list.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
      editing: false,
      deleting: "",
    };
  }

  saveTask = (event) => {
    event.preventDefault();
    const newTask = { task: this.state.todo };
    if (this.state.todo.length <= 0) return;

    console.log(newTask);
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: "",
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ todo: event.target.value });
  };

  toggleComplete = (indx) => {
    const curState = this.state.todos;
    const item = { ...this.state.todos[indx] };
    const newItem = { ...item, isComplete: !item.isComplete };
    curState[indx] = newItem;
    this.setState({ todos: curState });
  };

  handleDelete = (indx, itm) => {
    const curState = this.state.todos;
    const newItem = { ...itm, isComplete: !itm.isComplete, deleting: "fall" };
    curState[indx] = newItem;
    this.setState({ todos: curState });

    setTimeout(() => {
      const newList = this.state.todos.filter(
        (item) => item.deleting !== "fall"
      );
      this.setState({ todos: newList });
    }, 200);
  };

  clearList = () => {
    this.setState({ todos: [], todo: "", editing: false });
  };

  render() {
    const { todos, todo, editing, deleting } = this.state;
    return (
      <div className="App">
        <Header />
        <TaskForm
          task={todo}
          saveTask={this.saveTask}
          handleChange={this.handleChange}
        />
        <TaskList
          tasks={todos}
          toggler={this.toggleComplete}
          handleDelete={this.handleDelete}
        />
        {todos.length >= 1 && (
          <button className="btn-red" onClick={this.clearList}>
            Clear Todos
          </button>
        )}
      </div>
    );
  }
}

export default App;
