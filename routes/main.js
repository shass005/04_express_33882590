// Create a new router
const express = require("express");
const router = express.Router();
const path = require("path");

// Handle the main routes
//Main page
router.get("/", (req, res) => 
    res.send("Hello World!")); 
//About page
router.get("/about", (req, res) => 
    res.send ("<h1>This is the about page</h1>"));

//...etc, add your other routes here

//Contact page
router.get('/contact', (req, res) => 
    res.send(`
        <h1>This is the contact page.</h1>
        <p>If you have any questions or need assistance, feel free to reach out!</p>
        <p class="hours">Available Monday to Friday, from 9:00 AM to 6:00 PM</p>
        <p>Email: <a href="#">shass005@campus.goldsmiths.ac.uk</a></p>
    `)
);

//Date route which uses Javascripts date object to get the current system time and date
//These are then sent in a HTML respons formatted properly
router.get('/date', (req, res) => {
    const date = new Date(); 
    const dateFormat = date.toLocaleDateString(); 
    const timeFormat = date.toLocaleTimeString(); 
    res.send(`
        <h1>The Current Date is: ${dateFormat} and Time is : ${timeFormat}</h1>`);
})

//Example of a parameterised route
//:user is a capture segment of the ULR, the captured value of which is populated in the req.params
//We can access it here by assigning it to the constant user
router.get('/welcome/:user', (req, res) =>{ 
    const user =  req.params.user; 
    res.send (`<h1>Hello ${user}</h1>`);
})

//Example of Chaining using next()
//First Middleware: It logs the the request time and stores it
const logTime = (req, res, next) => {
  const requestTime = 'Request Time:' + new Date().toLocaleTimeString();
  //Store itin the req object so it can be accessed by other middleware
   req.requestTime = requestTime;
  console.log('Request Time:', requestTime);
  next(); // pass control to the next handler
};

//Second Middleware: Adds custom message to the request time
const addCustomData = (req, res, next) => {
  req.customMessage = `You requestd this page at ${req.requestTime}!`;
  next(); // pass control to the next handler
};

//Final route handler for the chain page
router.get('/chain', logTime, addCustomData, (req, res) => {
  res.send(`<h1>${req.customMessage}</h1>`);
})

//Middleware for chaining
//stores the path of the html page
const dirname = (req, res, next) =>{
    const root = '..';
    const directname = path.join(__dirname , root, 'a.html');
    req.directname = directname;
    next()
}
//Final route handler for the file page
router.get('/file', dirname, (req, res) =>{
    //uses .sendFile to serve a html page
    res.sendFile(req.directname);
})
// Export the router object so index.js can access it
module.exports = router;
