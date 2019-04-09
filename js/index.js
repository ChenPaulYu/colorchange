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
const id_table = database.ref('experiment/id');
var uuid_list = new Set()

$(document).ready(function() {

    $('#green').on('click',function() {
        var id = $('input').val()
        console.log(id)
        updataData(database, 'latest', {
            color:'green',
            id: `${id}`
        })
        
    })

    $('#red').on('click', function () {
        var id = $('input').val()
        console.log(id)
        updataData(database, 'latest', {
            color: 'red',
            id: `${id}`
        })
    })

    $('#blue').on('click', function () {
        var id = $('input').val()
        console.log(id)
        updataData(database, 'latest', {
            color: 'blue',
            id: `${id}`
        })
    })

    id_table.on('value', function (snapshot) {
        var id = snapshot.val()
        uuid_list.clear();
        for(i in id) {
            console.log(id[i].uuid)
            uuid_list.add(id[i].uuid)
            $('ul').append(`<li>${id[i].uuid}</li>`)
            // $('body').append(`<button id=${id[i].uuid}>User${count}</button>`)
        }
        

        // for(i in uuid_list) {
        //     $('ul').append(`<li>${i}</li>`)
        // }
        

    });
    


})


function updataData(database, table, data) {
    database.ref(`experiment/${table}`).update(data);
}

