import React, { Component } from 'react';
import "./index.css";
import LoginButton from "../../components/LoginModal";
import CreateButton from '../../components/CreateModal/createbutton';
// import CreateButton from "../../components/CreateModal";
class Landing extends Component {
    render() {
        return(
            <div className="landing-box">              
                <LoginButton />
                <CreateButton />
            </div>
        )
    }
}

export default Landing;