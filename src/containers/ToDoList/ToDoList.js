import React, { Component } from "react";
import axiosBase from "../../axiosBase";
import Spinner from "../../components/UI/Spinner/Spinner";
import InputGroup from "../../components/UI/InputGroup/InputGroup";
import Task from "../../components/ToDoList/Task/Task";

class ToDoList extends Component {
  state = {
    tasks: {},
    inputValue: "",
    loading: false
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo = async () => {
    this.setState({ loading: true });
    const result = await axiosBase.get("/tasks.json");
    result.data
      ? this.setState({ tasks: result.data, loading: false })
      : this.setState({ tasks: {}, loading: false });
  };

  doneTask = id => {
    const tasks = { ...this.state.tasks };
    tasks[id] = { ...tasks[id], checked: !tasks[id].checked };
    let checked = tasks[id].checked;
    this.setState({ tasks });
    axiosBase.patch(`/tasks/${id}.json`, { checked: checked });
  };

  addTask = async e => {
    e.preventDefault();
    let name = {
      name: this.state.inputValue,
      checked: false
    };
    this.setState({ loading: true });
    await axiosBase.post("/tasks.json", name);
    this.setState({ loading: false, inputValue: "" });
    this.getInfo();
  };

  removeTask = async id => {
    await axiosBase.delete(`/tasks/${id}.json`);
    this.getInfo();
  };

  render = () => {
    const tasks = this.state.tasks;
    return (
      <div className="container">
        <InputGroup
          value={this.state.inputValue}
          add={e => this.addTask(e)}
          change={e => this.setState({ inputValue: e.target.value })}
        />
        <div className="border border-secondary rounded p-2">
          <h1 className="text-center">TO DO</h1>
          {this.state.loading ? (
            <Spinner />
          ) : (
            tasks !== null &&
            Object.keys(tasks).map(id => (
              <Task
                key={id}
                task={tasks[id]}
                remove={() => this.removeTask(id)}
                check={() => this.doneTask(id)}
              />
            ))
          )}
        </div>
      </div>
    );
  };
}

export default ToDoList;
