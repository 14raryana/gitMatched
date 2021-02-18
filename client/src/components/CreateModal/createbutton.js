import React from 'react';
import CreateModal from "./createmodal";
import toggleModal from './togglemodal';
import { Card, CardText } from "react-mdl";
import "./index.css";
import DMHeader from "../DMHeader";
import Logo from "../../assets/dmlogo-vector.png";

const CreateButton = () => {
  const { isShowing, toggle } = toggleModal();
  return (
    <div className="create-card-container">
      <Card className="create-card">
        <div className="create-card-logo" style={{ backgroundImage: `url(${Logo})` }}></div>
        <DMHeader />

        <div className="create-pop">
          <button className="button-create" onClick={toggle}>Create Account</button>
          <CreateModal
            isShowing={isShowing}
            hide={toggle}
          />
        </div>

        <CardText className="create-card-text">
          <h3 className="create-card-text-header">
          </h3>
          <br />
          {/* .GIT MATCHED connects web developers to hiring companies. */}
          Sign up as an employee or employer and find your dream job
          or candidate!

        </CardText>


      </Card>
    </div>
  );
};

export default CreateButton;