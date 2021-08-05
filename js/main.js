var firebaseConfig = {
  apiKey: "AIzaSyCbVph5ohbxmBj3F23cWIJAwUXIFuzcVIE",
  authDomain: "contact-me-aea26.firebaseapp.com",
  databaseURL: "https://contact-me-aea26-default-rtdb.firebaseio.com",
  projectId: "contact-me-aea26",
  storageBucket: "contact-me-aea26.appspot.com",
  messagingSenderId: "658232984526",
  appId: "1:658232984526:web:91b5ec69f9ac5cc477e19f",
  measurementId: "G-ECGT3GSEG3"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


// Reference messages collection
var messagesRef = database.ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var subject = getInputVal('subject');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, subject, email, message);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, subject, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    subject:subject,
    email:email,
    message:message
  });
}