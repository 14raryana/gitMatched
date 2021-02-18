import React from 'react';
import ImageForm from '../ImageForm';
import ReactDOM from 'react-dom';
import { Card } from 'react-mdl';
import "./index.css";
import DMHeader from "../DMHeader";
import Logo from "../../assets/dmlogo-vector.png";

const ModalSign = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
<div className="image-modal-container">
    <div className="image-modal-overlay" />
    <div className="image-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="image-modal">
        <div className="image-modal-header">
        <div className="image-logo-div" style={{ backgroundImage: `url(${Logo})`}}></div>
          <button type="button" className="image-modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="image-form-container">
        <DMHeader/>
          <Card style={{ background: 'transparent' }} className="image-modal-card">
            <ImageForm />
          </Card>
        </div>
      </div>
    </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalSign;