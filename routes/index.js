var express = require('express');

var router = express.Router();


var five = require('johnny-five');
var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "./HyperBot-c52ccadf3e05.json",
  databaseURL: "https://hyperbot-d6494.firebaseio.com"
});

var iPhoneref = firebase.database().ref().child('iPhoneHyper');
/* GET home page. */
iPhoneref.on('value', function(snap){
  console.log(snap.val());
})

var goProref = firebase.database().ref().child('goProHyper');

goProref.on('value', function(snap){
  console.log(snap.val())
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
