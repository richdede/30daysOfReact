/* eslint-disable react/prop-types */
import { X } from "lucide-react";

const MessageRemove = ({ visible, onCancelClick, onConfirmClick }) => {
  return (
    <div className={visible ? "message-remove visible" : "message-remove"}>
      <div className="content">
        <div className="content-header">
          <h2>Are you sure you want to remove?</h2>
          <button>
            <X size={20} />
          </button>
        </div>
        <div className="buttons">
          <button onClick={onCancelClick}>No</button>
          <button onClick={onConfirmClick}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default MessageRemove;
