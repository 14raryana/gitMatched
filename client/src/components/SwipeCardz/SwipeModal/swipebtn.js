import React from 'react';
import Modal from "./swipemodal";
import toggleModal from './togglemodal';
import "./index.css";

const SwipeButton = () => {
  const {isShowing, toggle} = toggleModal();
  return (
    <div className="Pop">
      <button className="swipe-button" onClick={toggle}>Swipe Button</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default SwipeButton;