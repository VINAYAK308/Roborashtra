// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//     this.reset();
// });

var countDownDate = new Date("Aug 15, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
// Show the output time
document.getElementById("day")
.innerHTML = days;
document.getElementById("hour")
.innerHTML = hours;
document.getElementById("minute")
.innerHTML = minutes;
document.getElementById("second")
.innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("end-date").innerHTML = "EXPIRED";
  }
}, 1000);


const firebaseConfig = {
  apiKey: "AIzaSyC4AM6gpWUZqoQOYNuFrCkMOfP6Qaw71GY",
  authDomain: "roborashtra-79fd0.firebaseapp.com",
  databaseURL: "https://roborashtra-79fd0-default-rtdb.firebaseio.com",
  projectId: "roborashtra-79fd0",
  storageBucket: "roborashtra-79fd0.appspot.com",
  messagingSenderId: "1090298798966",
  appId: "1:1090298798966:web:6172d48d808f6ec8fcd057",
  measurementId: "G-RXDHPCXW4C"
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var email = getElementVal("email");
var message = getElementVal("message");

saveMessages(name, email, message);
alert('Thank you for your message! We will get back to you soon.');
this.reset();


 }

const saveMessages = (name, email, message) => {
var newcontactForm = contactFormDB.push();

  newcontactForm.set({
     name: name,
     email: email,
     message: message,
  });
 };

const getElementVal = (id) => {
return document.getElementById(id).value;
};










