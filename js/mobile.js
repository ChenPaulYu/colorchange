
var config = {
    apiKey: "AIzaSyAfF5G8kNs8CjlY31P93fGywMKLe0KiyzQ",
    authDomain: "experiment-9bb4f.firebaseapp.com",
      databaseURL: "https://experiment-9bb4f.firebaseio.com",
      projectId: "experiment-9bb4f",
      storageBucket: "experiment-9bb4f.appspot.com",
      messagingSenderId: "121738124962"
  };
  firebase.initializeApp(config);
  const database = firebase.database();
const latest = database.ref('experiment/latest');

$(document).ready(function () {
    latest.on('value', function (snapshot) {
        var color = snapshot.val().color
    
        if(color) {
            $('body').css('background-color', `${color}`)
        }
        

    });
})