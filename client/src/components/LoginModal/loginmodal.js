import React from 'react';
import LoginForm from '../LoginForm';
import ReactDOM from 'react-dom';
import { Card } from 'react-mdl';
import "./index.css";
import DMHeader from "../DMHeader";
import Logo from "../../assets/dmlogo-vector.png";

const ModalSign = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="login-modal-container">
      <div className="login-modal-overlay" />
      <div className="login-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="login-modal">
          <div className="login-modal-header">
          <div className="create-logo-div" style={{ backgroundImage: `url(${Logo})`}}></div>
            <button type="button" className="login-modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="login-card-container">
            <DMHeader />
            <Card style={{ background: 'transparent' }} className="login-modal-card">
              <LoginForm />
            </Card>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalSign;


