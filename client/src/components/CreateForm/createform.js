import React, { Component } from "react";
import API from "../../utils/API";
import "./index.css";
import { Switch, Grid, Cell } from "react-mdl";
import {
  Container, Row, Col,
} from 'reactstrap';

class CreateForm extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      bio: "",
      jobTitle: "",
      img: "",
      email:"",
      toaccount: false,
      requiredPosition: "",
      employer: false,
      unRead: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }




  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const fuck = document.getElementsByClassName("formInputs");
    var companies = [
      {
        employerName: "Placeholder1!",
        employerId: "1234"
      },
      {
        employerName: "Placeholder2",
        employerId: "5678"
      }
    ]
    var user = {
      userName: fuck.username.value,
      password: fuck.password.value,
      matches: companies
    }
    console.log(user);
    // console.log(Date.now)
    // Preventing the default behavior of the form submit (which is to refresh the page)

    API.createUser(user)
  };

  getAccount = (event) => {
    event.preventDefault();
    const fuck = document.getElementsByClassName("formInputs");
    var user = {
      userName: fuck.userName.value,
      password: fuck.password.value
    }
    console.log(user);

    API.logIn(user);


  }

  deleteAccount = (event) => {
    event.preventDefault();
    var userInputs = document.getElementsByClassName("formInputs");
    var userAccount = {
      userName: userInputs.userName.value,
      password: userInputs.password.value
    }
    API.deleteUser(userAccount).then((res) => {
      console.log("loginform.js code line 106: ...");
      console.log(res);
      console.log("loginform.js code line 106: ^^^")
    })
  }

  mainCard = (event) => {
    event.preventDefault();
    // let history = useHistory();
    // this.props.history.push('/myAccount');
    var userInputs = document.getElementsByClassName("formInputs");
    var userAccount = {
      userName: userInputs.userName.value,
      password: userInputs.password.value
    }
    // console.log(userInputs.userName.value);
    // console.log(userInputs.password.value);
    console.log(userAccount);
    console.log("THIS IS THE mainCard IN THE FORM COMPONENT");

    API.userInfo(userAccount)
      .then((response) => {
        var user = {
          userName: response.data[0].userName,
          password: response.data[0].password
        }
        console.log("loginform.js code line 132: ...");
        console.log(user);
        console.log("loginform.js code line 132: ^^^");
        // this.props.history.push("/myAccount")
        // <MainCard account={user} />

        // API.mainCard(user)
      })
  }

  test = (event) => {
    event.preventDefault();
    var user = {
      username: "test",
      password: "test"
    }
    console.log('------');
    this.setState({ toAccount: true, account: user })
    // this.forceUpdate();
  }

  createAccount = (event) => {
    const { match, location, history } = this.props;
    event.preventDefault();
    console.log(this.state)
    console.log("HELLO THIS IS THE STATE");
    // this.setState({unRead: this.unRead++});
    var user = this.state
    // console.log(user)
    API.createUser(user).then((response) => {
      console.log(response);
      window.location.replace("/myaccount")
    })
  }

  render() {


    return (

      <div className="create-form">
        <form>
          <div className="create-input-container">

            <Grid className="create-1st-row">
              <Cell col={6} style={{ float: 'left' }} id="create-col1">
                <label>Username</label>
                <input
                  onChange={this.handleInputChange}
                  type="text" name="userName"
                  value={this.state.userName}
                  className="create-form-inputs" />

                <label>Password</label>
                <input
                  onChange={this.handleInputChange}
                  type="password" name="password"
                  value={this.state.password}
                  className="create-form-inputs" />

                <label>First Name</label>

                <input
                  onChange={this.handleInputChange}
                  type="text" name="firstName"
                  value={this.state.firstName}
                  className="create-form-inputs" />

                <label>Last Name</label>

                <input
                  onChange={this.handleInputChange}
                  type="text" name="lastName"
                  value={this.state.lastName}
                  className="create-form-inputs" />

                <label>City</label>

                <input
                  onChange={this.handleInputChange}
                  type="text" name="city"
                  value={this.state.city}
                  className="create-form-inputs" />
              </Cell>
              <Cell col={6} style={{ float: 'right' }} id="create-col2" lg={4}>
                <label>State</label>

                <input
                  onChange={this.handleInputChange}
                  type="text" name="state"
                  value={this.state.state}
                  className="create-form-inputs" />

                <label>Bio</label>

                <input
                  onChange={this.handleInputChange}
                  type="text" name="bio"
                  value={this.state.bio}
                  className="create-form-inputs" />

                <label>Job Title</label>

                <input
                  onChange={this.handleInputChange}
                  type="text" name="jobTitle"
                  value={this.state.jobTitle}
                  className="create-form-inputs" />

                <label>Required Position</label>
                <input
                  onChange={this.handleInputChange}
                  type="text" name="requiredPosition"
                  value={this.state.requiredPosition}
                  className="create-form-inputs" />

                <label>Education</label>
                <input
                  onChange={this.handleInputChange}
                  type="text" name="education"
                  value={this.state.education}
                  className="create-form-inputs" />


              </Cell>
            </Grid>

            <Grid>
              <Cell style={{margin: 'auto'}} col={6}>
              <label>Email</label>
                <input
                  onChange={this.handleInputChange}
                  type="text" name="email"
                  value={this.state.email}
                  className="create-form-inputs" />
              </Cell>
            </Grid>
            {/* <Grid className="switch-grid">
              <Cell col={5}>
                <h5>Employee</h5>
              </Cell>
              <Cell col={2}>
                <Switch className="employer-switch" id="switch1" ></Switch>
              </Cell>
              <Cell col={5}>
                <h5>Employer</h5>
              </Cell>
            </Grid> */}
            <Grid>
              <Cell col={12}>
                <div>
                  <input //Create Button
                    className="create-modal-btn"
                    type="submit"
                    value="Create" onClick={this.createAccount} />
                </div>
              </Cell>
            </Grid>
          </div>
        </form>
      </div>
    );
  }
}
//}

export default CreateForm;

// const CreateFormWithRouter = withRouter(CreateForm);