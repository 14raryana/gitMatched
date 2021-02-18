import React from 'react';
import Modal from "./loginmodal";
import toggleModal from './togglemodal';
import "./index.css";

const LoginButton = () => {
  const {isShowing, toggle} = toggleModal();
  return (
    <div className="Pop">
      <button className="button-login" onClick={toggle}>Log In</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default LoginButton;