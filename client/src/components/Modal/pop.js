import React from 'react';
import Modal from "./modal";
import useModal from './usemodal';
import "./index.css";

const Pop = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="Pop">
      <button className="button-default" onClick={toggle}>View Profile</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default Pop;