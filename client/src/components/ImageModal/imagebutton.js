import React, { useState, useEffect } from 'react';
import ImageModal from "./imagemodal";
import toggleModal from './togglemodal';
import { Card, CardActions, CardTitle, CardText, Button, Grid, Cell, IconButton } from 'react-mdl';
import "./index.css";
import API from "../../utils/API"

const ImageButton = () => {
  const { isShowing, toggle } = toggleModal();
  const [userName, setUserName] = useState(0);
  useEffect(() => {
  API.userInfo().then((response) => {
    console.log(response.data[0].userName);
    var userName = response.data[0].userName
    setUserName(userName);
  })
})
  return (
    <div className="image-pop">
      <button className="button-image" onClick={toggle}>
        <CardTitle className="title-image" expand style={{ height: '300px', position: 'relative',
          background: 'url(https://sabt.center/wp-content/uploads/2014/08/avatar-1-400x400.png) center / cover',
          backgroundRepeat: 'no-repeat'
        }}><h3 id='profile-user-name'>{userName}</h3></CardTitle>
      </button>
      <ImageModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default ImageButton;