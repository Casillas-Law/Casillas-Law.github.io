// if you store your Mandrill Key in config.env file load using env2:
var path    = require('path'); // used to resolve relative paths
var config  = path.resolve(__dirname+'/../config.env'); // load config file
const env = require('env2')('./path-to-your/.env');

// your app goes here
console.log(process.env.DB_HOST); // "127.0.0.1"

var sendemail = require('../lib/index.js'); // no api key
var email     = sendemail.email;

var dir = __dirname + '/../examples/templates'; // unresolved
dir = path.resolve(dir);
sendemail.set_template_directory(dir); // set template directory

var person = {
  name : "Jenny",
  email: "dwyl.test+" + Math.random() + "@gmail.com" // your email here
}

email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})