import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText, Button, Grid, Cell, IconButton } from 'react-mdl';
import API from '../../utils/API';
import "./index.css";
import Nav from '../../components/Nav';
import ImageButton from '../../components/ImageModal';
import ReactTooltip from 'react-tooltip';


class MyAccount extends Component {
    constructor(props) {
        console.log(props);
        console.log("------------------------------------------------------");
        super(props);
        console.log(props);
        // this.state = {account: props.location.account}
        this.state = {

        };
    };

    handleInputChange = event => {
        console.log("------------------------------------------------------")
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    componentDidMount = () => {
        API.userInfo().then(results => {
            console.log(results.data[0]);
            console.log("THESE ARE THE RESULTS.DATA");
            this.setState(results.data[0]);
            console.log(this.state);
            console.log("THIS IS THE STATE!!!!!!!! COMPONENT DID MOUNT");
        })
    };

    editAccount = (event) => {
        event.preventDefault();
        if (event.target.id === "") return;
        const fieldName = event.target.id;
        const element = document.getElementById(fieldName);
        const updateData = {
            [fieldName]: element.textContent
        }


        API.updateAccount(updateData).then((response) => {
            console.log("UPDATEACCOUNT WORKED, MYACCOUNT.JS");
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Grid className='profile-grid' style={{ minHeight: '75vh' }}>
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        Save
                    </ReactTooltip>
                    <Cell col={12}><h2>Edit Your Profile</h2></Cell>
                    <Cell col={4}>
                        <Card shadow={10} style={{ width: '30vw', height: '400px', margin: 'auto', borderRadius: '15px' }}>
                            <ImageButton>
                                {this.state.userName}
                            </ImageButton>
                        </Card>
                        <br />
                        <br />
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="bio-bio">
                            <CardTitle className='bio-header' style={{ color: '#99e265', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>BIOGRAPHY</CardTitle>
                            <CardText>
                                <h6 id="bio" contentEditable="true" style={{ display: 'inline-block' }}>{this.state.bio}</h6>
                                
                                <Button value="bio"
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="bio" className="fa fa-save" aria-hidden="true" /></Button>

                            </CardText>


                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="bio-name">
                            <CardTitle className='bio-header' style={{ color: '#2eb2ff', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>NAME</CardTitle>
                            <CardText>
                                <h2 id="firstName" style={{ display: "inline-block" }} contentEditable="true">{this.state.firstName}</h2><Button value="firstName" style={{ display: "inline" }}
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="firstName" className="fa fa-save" aria-hidden="true" /></Button><br />

                                <h2 id="lastName" style={{ display: "inline-block" }} contentEditable="true">{this.state.lastName}</h2><Button value="lastName"
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="lastName" className="fa fa-save" aria-hidden="true" /></Button><br />
                            </CardText>

                        </Card>
                        <br />
                        <br />
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="matches-list5">
                            <CardTitle className='bio-header' style={{ color: '#ff5c5c', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>JOB TITLE</CardTitle>
                            <CardText className='job-title-card'>
                                <h4 id="jobTitle" style={{ display: "inline-block" }} contentEditable="true">{this.state.jobTitle}</h4>
                                
                                <Button value="jobTitle"
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="jobTitle" className="fa fa-save" aria-hidden="true" /></Button>
                            </CardText>



                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="matches-list3">
                            <CardTitle className='bio-header' style={{ color: '#ffbd4a', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>LOCATION</CardTitle>
                            <CardText>
                                <h2 id="city" style={{ display: "inline-block" }} contentEditable="true">{this.state.city}</h2><Button value="city"
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="city" className="fa fa-save" aria-hidden="true" /></Button><br />
                                <h2 id="state" style={{ display: "inline-block" }} contentEditable="true">{this.state.state}</h2><Button value="state"
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="state" className="fa fa-save" aria-hidden="true" /></Button><br />

                            </CardText>

                        </Card>
                        <br />
                        <br />
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="matches-list4">
                            <CardTitle className='bio-header' style={{ color: '#2eb2ff', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>EDUCATION</CardTitle>
                            <CardText>
                                <h4 id="education" style={{ display: 'inline-block' }} contentEditable="true">{this.state.education}</h4>
                                
                                <Button value="education"
                                    data-tip data-for="registerTip" onClick={this.editAccount}><i id="education" className="fa fa-save" aria-hidden="true" /></Button>
                            </CardText>


                        </Card>
                    </Cell>

                </Grid>
            </div>


        )
    }
}

export default MyAccount;