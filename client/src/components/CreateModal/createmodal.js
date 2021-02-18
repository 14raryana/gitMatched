import React from 'react';
import CreateForm from '../CreateForm';
import ReactDOM from 'react-dom';
import { Card } from 'react-mdl';
import "./index.css";
import DMHeader from "../DMHeader";
import Logo from "../../assets/dmlogo-vector.png";

const ModalSign = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
<div className="create-modal-container">
    <div className="create-modal-overlay" />
    <div className="create-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="create-modal">
        <div className="create-modal-header">
        <div className="create-logo-div" style={{ backgroundImage: `url(${Logo})`}}></div>
          <button type="button" className="create-modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="create-form-container">
        <DMHeader/>
          <Card style={{ background: 'transparent' }} className="create-modal-card">
            <CreateForm />
          </Card>
        </div>
      </div>
    </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalSign;