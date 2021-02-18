import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText, Button, Grid, Cell } from 'react-mdl';
import API from '../../utils/API';
import "./index.css";
import Nav from '../../components/Nav';


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
        console.log(event.target.value)
        console.log("EVENT.TARGET")
        // var formInputs = document.getElementsByClassName("formInputs");
        // console.log(formInputs[0].id);
        var updateValue = document.getElementById(event.target.value);
        console.log(updateValue.textContent);
        console.log("THIS IS THE VALUE VARIABLE; BASICALLY THE ID OF THE FIRSTNAME H1")
        var key = event.target.value;
        var updateValue;
        console.log("THIS IS THE EVENT FROM THE EDIT ACCOUNT FUNCTION IN MYACCOUNT");
        var updateCriteria = {
            [key]: updateValue.textContent
        }
        console.log(updateCriteria)

        API.updateAccount(updateCriteria).then((response) => {
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
                <Grid className='profile-grid' style={{minHeight: '75vh'}}>
                    <Cell col={12}><h2>Edit Your Profile</h2></Cell>
                    <Cell col={4}>
                        <Card shadow={10} style={{ width: '30vw', height: '400px', margin: 'auto', borderRadius: '15px' }}>
                            <CardTitle expand style={{ color: '#fff', height: '300px', position: 'relative',
                             background: 'url(https://sabt.center/wp-content/uploads/2014/08/avatar-1-400x400.png) center / cover',
                              backgroundRepeat: 'no-repeat' }}>{this.state.userName}</CardTitle>
                        </Card>
                        <br />
                        <br />
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="bio-bio">
                            <CardTitle className='bio-header' style={{ color: '#99e265', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>BIOGRAPHY</CardTitle>
                            <CardText>
                                <h6 id="bio" contentEditable="true" style={{ display: 'inline-block' }}>{this.state.bio}</h6>
                                {/* <hr/> */}
                                <Button value="bio" 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button>

                            </CardText>


                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="bio-name">
                            <CardTitle className='bio-header' style={{ color: '#2eb2ff', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>NAME</CardTitle>
                            <CardText>
                                <h2 id="firstName" style={{ display: "inline-block" }} contentEditable="true">{this.state.firstName}</h2><Button value="firstName" style={{ display: "inline" }} 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button><br />
                                <h2 id="lastName" style={{ display: "inline-block" }} contentEditable="true">{this.state.lastName}</h2><Button value="lastName" 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button><br />

                            </CardText>

                        </Card>
                        <br />
                        <br />
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="matches-list5">
                            <CardTitle className='bio-header' style={{ color: '#ff5c5c', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>JOB TITLE</CardTitle>
                            <CardText className='job-title-card'>
                                <h4 id="jobTitle" style={{ display: "inline-block" }} contentEditable="true">{this.state.jobTitle}</h4>
                                {/* <hr/> */}
                                <Button value="jobTitle" 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button>
                            </CardText>



                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="matches-list3">
                            <CardTitle className='bio-header' style={{ color: '#ffbd4a', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>LOCATION</CardTitle>
                            <CardText>
                                <h2 id="city" style={{ display: "inline-block" }} contentEditable="true">{this.state.city}</h2><Button value="city" 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button><br />
                                <h2 id="state" style={{ display: "inline-block" }} contentEditable="true">{this.state.state}</h2><Button value="state" 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button><br />

                            </CardText>
                            
                            {/* <Button value="city" onClick={this.editAccount}>Save</Button> */}

                        </Card>
                        <br />
                        <br />
                        <Card shadow={5} style={{ width: '30vw', height: '400px', margin: 'auto' }} className="matches-list4">
                            <CardTitle className='bio-header' style={{ color: '#2eb2ff', height: '100px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover' }}>EDUCATION</CardTitle>
                            <CardText>
                                <h4 id="education" style={{ display: 'inline-block' }} contentEditable="true">{this.state.education}</h4>
                                {/* <hr/> */}
                                <Button value="education" 
                                onClick={this.editAccount}><i className="fa fa-save" aria-hidden="true" /></Button>
                            </CardText>


                        </Card>
                    </Cell>

                </Grid>
            </div>


        )
    }
}

export default MyAccount;