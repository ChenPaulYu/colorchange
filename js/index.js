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


$(document).ready(function() {

    $('#green').on('click',function() {
        updataData(database, 'latest', {
            color:'green'
        })
        
    })

    $('#red').on('click', function () {
        updataData(database, 'latest', {
            color: 'red'
        })
    })

    $('#blue').on('click', function () {
        updataData(database, 'latest', {
            color: 'blue'
        })
    })
    
})


function updataData(database, table, data) {
    database.ref(`experiment/${table}`).update(data);
}