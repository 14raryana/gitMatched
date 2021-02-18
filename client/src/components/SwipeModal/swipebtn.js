import React, {useState} from 'react';
import Modal from "./swipemodal";
import toggleModal from './togglemodal';
import "./index.css";
import API from "../../utils/API"
import {Redirect} from "react-router-dom"




const SwipeButton = () => {
  const [matches, setMatches] = useState({matchesArray: []});
  const {isShowing, toggle} = toggleModal();
  const startSwipe = async (event) => {
    toggle();
    console.log(event.target);
    await API.startSwipe().then((response) => {
      console.log();
      // setMatch(response)
      // var matches = response.data;
      // console.log(matches)
      console.log("THIS IS THE RESPONSE FROM THE SWIPEBTN.JS FILE")
      setMatches({matchesArray: response.data})
      console.log(matches)
      // return matches;
    })
    // useState(resposne)
    console.log(matches)
    console.log("THESE ARE THE MATCHES!!!!!!!!!MATHCES!!!!!!!!!!!")
  }
  console.log("I CAN'T BELIEVE THIS SHIT JUST WORKED")
  console.log(matches);
  return (
    <div className="Pop">
      
      <button className="swipe-button" onClick={startSwipe}>Swipe Button</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        data={matches}/>
    </div>
  );

};

export default SwipeButton;