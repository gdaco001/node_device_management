const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController")
//const { User } = require("./app/models");
routes.post('/sessions', (req,res)=> {

}) 
//User.create({name: "Gabriel", email: "gdaco001@gmail.com", password_hash: "testpass"});
module.exports = routes;