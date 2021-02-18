import React, { Component } from "react";
import API from "../../utils/API";
import "./index.css";

class LoginForm extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toAccount: false
    }
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
    console.log("-----------------!-----------------")
    const fuck = document.getElementsByClassName("formInputs");
    var companies = [
      {
        employerName: "FUCK FACE!",
        employerId: "1234"
      },
      {
        employerName: "SHIT FACE",
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
      })
  }

  render() {
    return (
      <div className="login-form-container">

        <form className="login-form" action="/login" method="post">
          <div className="login-input-container">
            <input 
            onChange={this.handleInputChange} 
            type="text" name="username" 
            placeholder=".GIT USERNAME"
            value={this.state.username} 
            className="login-form-inputs"/>

            <input 
            onChange={this.handleInputChange} 
            type="password" name="password" 
            placeholder=".GIT PASSWORD"
            value={this.state.password} 
            className="login-form-inputs"/>
          </div>
          <div>
            <input //log In Button
            className="login-modal-btn" 
            type="submit" 
            value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}
//}

export default LoginForm;
