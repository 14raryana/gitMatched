import React from "react";
import { Card, CardTitle, CardText } from 'react-mdl';
import Pop from '../Modal/pop';
import "index.css";


function MainCard() {
    return (
        <Card shadow={0} style={{width: '350px', height: '400px', margin: 'auto', paddingTop: '10px', paddingBottom: '10px'}}>
            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Derek Thorpe</CardTitle>
                <CardText>
                    <p>Cleveland, OH</p>
                    <p>React Developer | Full-Time</p>
                    <p>Case Western Reserve University</p>
                </CardText>
            <Pop/>
        </Card>
    );
  }
  
  export default MainCard;