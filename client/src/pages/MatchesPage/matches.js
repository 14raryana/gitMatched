import React, { Component } from 'react';
// import MainCard from '../components/MainCard';
import { Grid, Cell, ListItem, ListItemContent, ListItemAction, List, Icon, Card, CardTitle, CardText, CardActions } from "react-mdl";
import { Input, Button, InputGroupAddon } from 'reactstrap';
import Nav from '../../components/Nav';
import "./index.css";
import logo from "../../assets/dmlogo-vector.png";
import API from "../../utils/API"

class Matches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likedIds: [],
            likedUsers: [],
            activeProfile: {}
        }
    }

    componentDidMount() {
        API.matches().then((response) => {
            const likedIds = response.data;
            API.getById(likedIds).then((response) => {
                this.setState({
                    likedIds: likedIds,
                    likedUsers: response.data
                })
            })
        }).catch((err) => {
            console.log(err);
        })

    }

    render() {
        var visibility = "none";

        const viewed = async (event) => {
            // var updatedInfo = {
            //     viewed: true
            // }
            console.log(event.target.id)
            console.log(this.state.likedUsers)

            this.state.likedUsers.map((user) => {
                if(user.userName == event.target.id) {
                    this.setState({
                        activeProfile: user
                    })
                }
            })

            // const viewedUser = await this.state.likedUsers.map((user) => {
            //     // console.log(user.userName);
            //     // console.log("THIS IS USER IN USERNAMES")
            //     if(user.userName == event.target.id) {
            //         return user;
            //     }
            // });
            // console.log(viewedUser);
            // console.log("THIS IS THE VIEWED USER")

            // API.
            // API.updateAccount(updatedInfo).then((response) => {
            //     console.log(response);
            //     console.log("THIS IS RESPONSE TO UPDATE ACCOUNT")
            // })
            // console.log(event.target.id);
            // console.log("THIS IS EVENT IN VIEWED FUNCTION")
        }
        const likedUsers = this.state.likedUsers ? this.state.likedUsers : [];
        if (this.state.liked) {
            console.log(this.state.liked)
            console.log("IF THIS HAPPENS STATE.LIKED EXISTS")
        }

        if(this.state.activeProfile.userName) {
            visibility = "";
        }
        console.log("THIS IS INSIDE THE MATCHES COMPONENT")
        return (
            <div>
                <Nav />
                <Grid className="contact-grid">
                    <Cell col={6}><h2 className="view-profile"><b>VIEW PROFILE</b></h2>
                        
                        <Card shadow={10} style={{ display: visibility , width: '400px', height: '500px', margin: 'auto', borderRadius: '15px' }} className="matches-list2">
                            <CardTitle expand style={{ color: 'white', backgroundImage: `url(${logo})`, position: 'relative', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: '150px 150px', backgroundColor: '#757575' }}>{this.state.activeProfile.firstName}</CardTitle>
                            <CardText>
                                <h5>{this.state.activeProfile.jobTitle} || {this.state.activeProfile.emStatus}</h5>
                                <h6>{this.state.activeProfile.education}</h6>
                                <h6>{this.state.activeProfile.city}, {this.state.activeProfile.state}</h6>
                                <section style={{ textAlign: 'center' }}>
                                    <h5><b>Bio</b></h5>
                                    <hr />
                                    <p>{this.state.activeProfile.bio}</p>
                                </section>
                            </CardText>
                            <div className='email'>
                                <Button style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} className='emailBtn'>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </Button>
                            </div>
                        </Card>

                        {/* Profile Carousel */}
                    </Cell>


                    <Cell col={6}>

                        {/* Search for a Match */}

                        <h2 className="view-profile"><b>MATCH LIST</b></h2>
                        {/* <div className="flex-search" style={{ width: '300px', margin: 'auto' }}>
                            <Input placeholder="Find a Match!" />
                            <InputGroupAddon addonType="append">
                                <Button className="match-page-btn" color="secondary">Search</Button>
                            </InputGroupAddon></div> */}

                        {/* List of Matches */}


                        <Card className="matches-list" shadow={10} style={{ width: '400px', height: '500px', margin: 'auto', borderRadius: '15px' }} >
                            <List style={{ width: '350px', margin: 'auto' }}>
                                <div className="scroll-matches">
                                    {console.log(this.state.liked)}
                                    {console.log("THAT'S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR THIS FUCKING PROJECT!!!!!!!")}

                                    {likedUsers.map((user) => {
                                        // console.log(user.firstName)
                                        // console.log("SUPPOSED TO BE FIRST NAME IN JSX")
                                        return (
                                            <ListItem key={user._id} twoLine className="job-title1">
                                                <ListItemContent avatar="person" subtitle={user.jobTitle}>{user.firstName} {user.lastName}</ListItemContent>
                                                <a id={user.userName} onClick={viewed}><Icon name=""/>View</a>
                                            </ListItem>
                                        )
                                    })}
                                    {/* <ListItem twoLine className="job-title1">
                                        <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                                        <a href="#"><Icon name="" />View</a>
                                    </ListItem>
                                    <ListItem twoLine>
                                        <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                                        <ListItemAction>
                                            <a href="#">View</a>
                                        </ListItemAction>
                                    </ListItem>
                                    <ListItem twoLine>
                                        <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                                        <ListItemAction>
                                            <a href="#">View</a>
                                        </ListItemAction>
                                    </ListItem>
                                    <ListItem twoLine className="job-title1">
                                        <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                                        <a href="#"><Icon name="" />View</a>
                                    </ListItem>
                                    <ListItem twoLine>
                                        <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                                        <ListItemAction>
                                            <a href="#">View</a>
                                        </ListItemAction>
                                    </ListItem>
                                    <ListItem twoLine>
                                        <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                                        <ListItemAction>
                                            <a href="#">View</a>
                                        </ListItemAction>
                                    </ListItem> */}
                                </div>
                            </List>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Matches;