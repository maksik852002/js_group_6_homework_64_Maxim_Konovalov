import React, { Component } from "react";
import axiosBase from "../../axiosBase";
import InputGroup from "../../components/UI/InputGroup/InputGroup";
import Spinner from "../../components/UI/Spinner/Spinner";
import Note from "../../components/PersonalNotes/Note/Note";

class PersonalNotes extends Component {
  state = {
    notes: {},
    inputValue: "",
    loading: false
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo = async () => {
    this.setState({ loading: true });
    const result = await axiosBase.get("/notes.json");
    result.data
      ? this.setState({ notes: result.data, loading: false })
      : this.setState({ notes: {}, loading: false });
  };

  addnotes = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    await axiosBase.post("/notes.json", { text: this.state.inputValue });
    this.setState({ loading: false, inputValue: "" });
    this.getInfo();
  };

  editnotes = async (e, id) => {
    const notes = { ...this.state.notes };
    let value = notes[id].text;
    value = e.target.value;
    notes[id].text = value;
    this.setState({ notes });
    await axiosBase.patch(`/notes/${id}.json`, { text: value });
  };

  removenotes = async id => {
    await axiosBase.delete(`/notes/${id}.json`);
    this.getInfo();
  };

  render = () => {
    const movie = this.state.notes;
    return (
      <div className="container">
        <InputGroup
          change={e => this.setState({ inputValue: e.target.value })}
          add={e => this.addnotes(e)}
          value={this.state.inputValue}
        />
        {this.state.loading ? (
          <Spinner />
        ) : (
          Object.keys(movie).map(id => (
            <Note
              key={id}
              text={movie[id].text}
              edit={e => this.editnotes(e, id)}
              remove={() => this.removenotes(id)}
            />
          ))
        )}
      </div>
    );
  };
}

export default PersonalNotes;
