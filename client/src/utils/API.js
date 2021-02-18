import axios from "axios";

export default {
    getUser: async function (existingUser) {
        var userName = existingUser.userName;
        var password = existingUser.password;
        // var user = userName + password;
        // console.log(userName);
        // console.log(JSON.stringify(existingUser.userName));
        return await axios.get("/api/getUser/" + userName + "/" + password);
    },
    createUser: async function (user) {
        // console.log(user);
        // console.log("this is the createUse function in UTILS API")
        return await axios.post("/api/createUser", user);
    },
    deleteUser: async function (user) {
        // console.log(user);
        var userData = { data: user }
        console.log("client/src/utils/: line:20: deleteUser()...")
        return await axios.delete("/api/deleteUser", userData);
    },
    userInfo: async function () {

        return await axios.get("/api/getUser")
    },

    logIn: function (user) {
        console.log(user);
        return axios.post("/login", user)
    },

    logOut: function () {
        console.log("THIS IS THE LOGOUT FUNCTION IN THE API.JS FILE")
        return axios.get("/logout");
    },

    startSwipe: function () {
        console.log("THIS IS THE STARTSWIPE FUNCTION IN THE API.JS");
        return axios.get("/api/getUser/startSwipe")
    },

    updateAccount: function (updatedInfo) {
        console.log(updatedInfo);
        console.log("THIS IS THE UPDATEACCOUNT FUNCTION IN THE API.JS FILE");
        return axios.put("/api/updateUser", updatedInfo);
    },

    like: function (userId) {
        console.log(userId);
        return axios.put("/api/updateUser/like", userId)
    },

    dislike: function(userId) {
        console.log(userId);
        console.log("THIS IS DISLIKE FUNCTION API.JS")
        return axios.put("/api/updateUser/dislike", userId)
    },

    notify: function () {
        console.log("THIS IS THE NOTIFY FUNCTION IN API.JS")
    },

    matches: function () {
        console.log("THIS IS THE MATCHES FUNCTION IN THE API.JS");
        return axios.get("/api/getUser/matches")
    },

    getById: function (ids) {
        console.log(ids)
        console.log("THIS IS THE GET BY ID FUNCTION IN API.JS")
        return axios.get("/api/getuser/byId", { params: ids })
    }

}