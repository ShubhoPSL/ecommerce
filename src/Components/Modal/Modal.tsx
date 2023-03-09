import React from "react";
import { useSetRecoilState } from "recoil";
import { SucessIcon } from "../Icons/SuccessIcon";
import { modal } from "../States/Modal";
import "./Modal.css";

const Modal = () => {
  const setModal = useSetRecoilState(modal);
  const toggleModal = () => {
    return (event: React.MouseEvent<HTMLElement>) => {
      setModal(false);
      event.preventDefault();
    };
  };
  return (
    <div className="background">
      <div className="modalWindow">
        <div className="title">
          <SucessIcon />
          Item Added to Cart!
        </div>
        <button className="confirmButton" onClick={toggleModal()}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
