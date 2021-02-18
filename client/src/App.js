import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/LandingPage';
import Matches from './pages/MatchesPage';
import Chat from './pages/ChatPage';
import MyAccount from './pages/MyAccount';
import Home from './pages/HomePage';
import "./App.css";
import FooterComp from './components/Footer';

function App() {
  return (
    <div className="main-app">
      <Router>
        <div className="route-container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/chat" component={Chat} />
          <Route path="/myAccount" component={MyAccount} />
        </div>
      </Router>
      <FooterComp/>
    </div>
  );
}


export default App;
