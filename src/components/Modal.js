import ReactDOM from "react-dom";
import React from "react";

const Modal = ({ handleClose, children, actionBar }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        className="absolute inset-0 bg-gray-300 opacity-80"
        onClick={handleClose}
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;