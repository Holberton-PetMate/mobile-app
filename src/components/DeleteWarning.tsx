import { PropsWithoutRef } from "react";
import "../styles/components/deleteWarning.css";

interface DeleteWarningProps
  extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {}

const DeleteWarning = ({ ...rest }: DeleteWarningProps) => {
  return (
    <div className="warning-container">
      <div className="text-container">
        <h3 className="delete-title">Delete Schedule</h3>
        <small>Are you sure?</small>
      </div>

      <div className="buttons-container">
        <button className="yes-button">Yes</button>
        <button className="no-button">No</button>
      </div>
    </div>
  );
};

export default DeleteWarning;
