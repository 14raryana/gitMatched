import React from 'react';
import SwipeForm from '../SwipeForm';
import ReactDOM from 'react-dom';
import { Card } from 'react-mdl';
import "./index.css";


const ModalSign = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-container">
          <Card style={{ background: 'transparent' }} className="modal-card">
            <SwipeForm />
          </Card>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalSign;