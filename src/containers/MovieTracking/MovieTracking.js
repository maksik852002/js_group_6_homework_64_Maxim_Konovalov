import React, { Component } from "react";
import axiosBase from "../../axiosBase";
import InputGroup from "../../components/UI/InputGroup/InputGroup";
import Spinner from "../../components/UI/Spinner/Spinner";
import MovieElement from "../../components/MovieTracking/MovieElement/MovieElement";

class MovieTracking extends Component {
  state = {
    movieElement: {},
    inputValue: "",
    loading: false
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo = async () => {
    this.setState({ loading: true });
    const result = await axiosBase.get("/movie.json");
    result.data
      ? this.setState({ movieElement: result.data, loading: false })
      : this.setState({ movieElement: {}, loading: false });
  };

  addMovieElement = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    await axiosBase.post("/movie.json", { name: this.state.inputValue });
    this.setState({ loading: false, inputValue: "" });
    this.getInfo();
  };

  editMovieElement = async (e, id) => {
    const movieElement = { ...this.state.movieElement };
    let value = movieElement[id].name;
    value = e.target.value;
    movieElement[id].name = value;
    this.setState({ movieElement });
    await axiosBase.patch(`/movie/${id}.json`, { name: value });
  };

  removeMovieElement = async id => {
    await axiosBase.delete(`/movie/${id}.json`);
    this.getInfo();
  };

  render = () => {
    const movie = this.state.movieElement;
    return (
      <div className="container">
        <InputGroup
          change={e => this.setState({ inputValue: e.target.value })}
          add={e => this.addMovieElement(e)}
          value={this.state.inputValue}
        />
        <p>To watch list:</p>
        {this.state.loading ? (
          <Spinner />
        ) : (
          Object.keys(movie).map(id => (
            <MovieElement
              key={id}
              value={movie[id].name}
              edit={e => this.editMovieElement(e, id)}
              remove={() => this.removeMovieElement(id)}
            />
          ))
        )}
      </div>
    );
  };
}

export default MovieTracking;
