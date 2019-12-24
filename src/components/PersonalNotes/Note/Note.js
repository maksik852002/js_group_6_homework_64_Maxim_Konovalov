import React from "react";
import { FaWindowClose } from "react-icons/fa";
import Button from "../../UI/Button/Button";

const Note = props => {
  return (
    <div className="input-group mb-2 px-4">
      <input
        onChange={props.edit}
        type="text"
        className="form-control pr-2 mr-3"
        value={props.text}
      />
      <Button
        addClass="close"
        type="button"
        label={<FaWindowClose />}
        click={props.remove}
      />
    </div>
  );
};

export default Note;
