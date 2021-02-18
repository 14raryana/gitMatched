import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

function SwipeCard() {
    return (
        <Card shadow={0} style={{ width: '500px', height: '800px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', 
            background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Derek Thorpe</CardTitle>
            <CardText>
                <h5>Cleveland</h5>
                <h6>React Developer | Full-Time</h6>
                <h6>Case Western Reserve University</h6>
                <Button colored>Download resume here</Button>
                <h6 style={{ textAlign: 'center' }}>Bio</h6>
                <hr></hr>
                <p style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi auctor leo quam, sit amet venenatis ex pulvinar
                nec. Curabitur nec lectus ac magna rhoncus luctus.
                In ac gravida leo.</p>

            </CardText>
            <CardActions border style={{ display: "flex" }}>
                <Button>Pass</Button>
                <Button style={{ marginLeft: "auto" }}>Save</Button>
            </CardActions>
        </Card>
    );
}

export default SwipeCard;

