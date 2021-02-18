import React from "react";
import { Card, Button, CardTitle, CardText, CardActions, Grid } from "react-mdl";
import Logo from "../../assets/dmlogo-vector.png";
function BioCard(props) {
    console.log("/components/BioCard/bio.js/line:7: props...");
    console.log(props);
    console.log("/components/BioCard/bio.js/line:7: props^^^");
    return (
        <Card shadow={10} style={{ width: '100%', height: '75vh', margin: 'auto', textAlign: 'center' }}>
            <div>
                <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto', marginTop: '50px' }} className="bio-bio">
                        <Grid>
                        <div className="logo-div" style={{ backgroundImage: `url(${Logo})`, backgroundSize: "150px", height: "155px", width: "150px", margin:'auto' }}></div>
                        </Grid>
                        <Grid style={{textAlign:'center', marginTop:'3%', fontFamily:'abel', color:'grey'}}>
                            <h3>No suggested users at this time...
                                <h5>Please try again later!</h5>
                            </h3>
                        </Grid>
                </Card>
            </div>
        </Card>
    );
}
export default BioCard;