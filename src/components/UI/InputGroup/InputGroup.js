import React from "react";
import Button from "../Button/Button";

const InputGroup = props => (
  <form className="pt-4" onSubmit={props.add}>
    <div className="input-group mb-3">
      <input
        onChange={props.change}
        type="text"
        required
        className="form-control"
        value={props.value}
        placeholder="Add new element"
      />
      <div className="input-group-append">
        <Button addClass="secondary" type="submit" label="Add" />
      </div>
    </div>
  </form>
);

export default InputGroup;
