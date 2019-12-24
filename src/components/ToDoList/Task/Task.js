import React from "react";
import { FaCheckSquare, FaCheckDouble, FaWindowClose } from "react-icons/fa";
import Button from "../../UI/Button/Button";

const Task = props => {
  let color;
  let icon = <FaCheckSquare />;
  if (props.task.checked) {
    color = " bg-success";
    icon = <FaCheckDouble />;
  }
  return (
    <div className={`card w-100 mb-3 ${color}`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Button
            addClass="close"
            type="button"
            label={icon}
            click={props.check}
          />
          <p className="card-text ml-3 mb-0">{props.task.name}</p>
        </div>
        <Button
          addClass={"close"}
          type="button"
          label={<FaWindowClose />}
          click={props.remove}
        />
      </div>
    </div>
  );
};

export default Task;
