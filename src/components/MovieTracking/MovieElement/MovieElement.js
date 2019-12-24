import React, { Component } from "react";
import { FaWindowClose } from "react-icons/fa";
import Button from "../../UI/Button/Button";

class MovieElement extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render = () => {
    return (
      <div className="input-group mb-2 px-4">
        <input
          onChange={this.props.edit}
          type="text"
          className="form-control pr-2 mr-3"
          value={this.props.value}
        />
        <Button
          addClass="close"
          type="button"
          label={<FaWindowClose />}
          click={this.props.remove}
        />
      </div>
    );
  };
}

export default MovieElement;
