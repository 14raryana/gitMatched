import React, { Component } from 'react';
import Nav from '../../components/Nav'
import "./index.css";
import { Card, CardTitle, CardText, CardActions, Button, FABButton, Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faComment, faFile, faLinkedin } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/dmlogo-vector.png";
import API from "../../utils/API"
import BioCard from "../../components/BioCard"
import ReactTooltip from 'react-tooltip';

class Home extends Component {
    state = {
        suggested: [],
        firstName: "",
        counter: 0,
        suggestedArray: [],
        currentUser: undefined,
        activeUser: undefined
    }

    componentDidMount() {
        console.log("THIS IS THE COMPONENT DID MOUNT EXACTLY")
        API.startSwipe().then((response) => {
            
            console.log("THIS IS THE RESPONSE AFTER THE STARTSWIPE IN HOM CLASS COMPONENT")
            
            this.setState({
                suggestedArray: response.data.suggestedUsers,
                currentUser: response.data.currentUser
            })
            console.log(this.state.suggestedArray[0])
            console.log("THIS IS THE COUNTER AFTER COMPONENT DID MOUNT");
        })

    }

    thumbsUp = (e) => {
        e.preventDefault();
        var userInfo = {
            likedIds: e.currentTarget.id
        }

        API.like(userInfo)
        .then((response) => {
            console.log(response)
            console.log("THIS IS THE RESPONSE IN HOME.JS AFTER LIKE FUNCTION")
            this.setState({
                currentUser: response.data
            })
        })

        // API.addUnread();
    }

    thumbsDown = (e) => {
        e.preventDefault();
        var userInfo = {
            dislikedIds: e.currentTarget.id
        }

        API.dislike(userInfo).then((response) => {
            console.log(response);
            console.log("THIS IS RESPONSE IN DISLIKE API.JS")
            this.setState({
                currentUser: response.data
            })
        })
    }

    render() {
        const data = {
            firstName:  "",
            city:   "",
            state: "",
            jobTitle: "",
            bio: "",
            emStatus: "",
            education: "",
            userName: "",
            id: ""
        }

        if(this.state.suggestedArray.length > 0 && this.state.currentUser) {
            const displayedUsers = this.state.suggestedArray.filter((user) => !this.state.currentUser.likedIds.includes(user._id) && !this.state.currentUser.dislikedIds.includes(user._id))
            if(displayedUsers.length > 0) {
                data.firstName = displayedUsers[0].firstName;
                data.city = displayedUsers[0].city;
                data.state = displayedUsers[0].state;
                data.jobTitle = displayedUsers[0].jobTitle;
                data.bio = displayedUsers[0].bio;
                data.emStatus = displayedUsers[0].emStatus;
                data.education = displayedUsers[0].education;
                data.userName = displayedUsers[0].userName;
                data.id = displayedUsers[0]._id;
            }
            else {
                return (
                <div>
                    <Nav />
                    <BioCard />
                </div>
            )
        }
    }

    else {
        return (
            <div>
                <Nav />
                <BioCard />
            </div>
        )
    }
    
        return (
            <div style={{ minHeight: '96vh', backgroundColor: 'white' }}>
                <Nav />
                <div className="home-body-container">
                    <Grid className="git-swiping-header"><h2 style={{color: '#FF5C5C'}}>PASS</h2> <h2>OR</h2> <h2 style={{color: '#99e265'}}>MATCH</h2></Grid>
                    <ReactTooltip id="thumbDownTip" place="top" effect="solid">
                        Pass
                    </ReactTooltip>
                    <ReactTooltip id="thumbUpTip" place="top" effect="solid">
                        Request Save
                    </ReactTooltip>
                    <Grid className="home-body-grid">

                        {/* Thumbs Down Button */}
                        <Cell col={2} style={{ maxWidth: '8vw',float:'left' }} ><FABButton data-tip data-for="thumbDownTip" onClick={this.thumbsDown} id={data.id} colored className="thumbsDown">
                            <i className="fa fa-thumbs-down fa-flip-horizontal" aria-hidden="true" rel="noopener noreferrer" />
                        </FABButton>
                        </Cell>

                        <Cell col={6} style={{ minWidth: '40%' }}>

                            <Card shadow={10} style={{ width: '100%', height: '500px', margin: 'auto', borderRadius:'15px' }} className="main-swipe-card">
                                <CardTitle expand style={{ color: 'white', backgroundImage: `url(${logo})`, position: 'relative', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize:'150px 150px', backgroundColor: '#757575'}}>{data.firstName}</CardTitle>
                                <CardText>
                                    <h5>{data.jobTitle} || Full Time</h5>
                                    <h6>Case Western Reserve University</h6>
                                    <h6>{data.city}, {data.state}</h6>
                                    <section style={{ textAlign: 'center' }}>
                                        <h5><b>Bio</b></h5>
                                        <hr />
                                        <p>{data.bio}</p>

                                    </section>

                                </CardText>
                            </Card>
                        </Cell>

                        {/* Thumbs up button */}
                        <Cell col={2} style={{ maxWidth: '8vw', float:'right' }}><FABButton data-tip data-for="thumbUpTip" id={data.id} colored className="thumbsUp" onClick={this.thumbsUp}>
                            <i className="fa fa-thumbs-up" aria-hidden="true" rel="noopener noreferrer" />
                        </FABButton>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Home;