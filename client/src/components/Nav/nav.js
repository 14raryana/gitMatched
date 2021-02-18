import React from "react";
import { Layout, Header, Navigation, Drawer, Content, Badge } from 'react-mdl';
import API from "../../utils/API"
import Logo from "../../assets/dmlogo-vector.png";
import "./index.css";
function Nav() {
    return (
        <div style={{ height: '290px', position: 'relative' }}>
            <Layout fixedHeader className="nav-layout" style={{ position: 'relative', maxHeight: "320px", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <Header transparent >

                    <Navigation>
                        <a className="home-nav" href="/home">Home</a>
                        <a className="match-nav" href="/matches"><Badge text="1">Matches</Badge></a>
                        <a className="profile-nav" href="/myaccount">My Profile</a>
                        <a className="sign-out" href="/" onClick={API.logOut}>Sign Out</a>
                    </Navigation>
                </Header>
                <Drawer title=".GIT MATCHED">
                    <Navigation>
                        <a href="/home">Home</a>
                        <a href="/matches">Matches</a>
                        <a href="/myaccount">My Profile</a>
                        <a href="/" onClick={API.logOut}>Sign Out</a>
                    </Navigation>
                </Drawer>
                <Content >
                    <div className="header-container">
                        <div className="logo-div" style={{ backgroundImage: `url(${Logo})`, backgroundSize: "150px", height: "155px", width: "150px" }}></div>
                        <span className="logo-name">
                            <span id="logo-git">{'.GIT '}</span>
                            <span id="logo-matched">{'MATCHED'}</span>
                        </span>
                    </div>
                </Content>

            </Layout>
        </div>
    );
}
function logOut() {
    API.logOut().then((response) => {
        console.log(response);
        console.log("THIS IS THE RESPONSE AFTER THE LOGOUT FUNCTION IN THE NAVBAR");

    })
}

export default Nav;