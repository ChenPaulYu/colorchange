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
var uuid_list = []

var color = ['blue','red','green']

$(document).ready(function() {


    $('#half').on('click',function() {
        var arr = uuid_list
        arr.sort(randomsort);
        var c = color[Math.round(Math.random() * color.length)]
        for(var i = 0;i < arr.length/2;i++) {
            updataData(database, 'latest', {
                color: `${c}`,
                id: `${arr[i]}`
            })
        }
    })

    $('#all').on('click', function() {
        var c = color[Math.round(Math.random() * color.length)]
        uuid_list.forEach(function(id){
            updataData(database, 'latest', {
                color: `${c}`,
                id: `${id}`
            })
        })
    })

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
        uuid_list = []
        $('ul').html('')
        for(i in id) {
            uuid_list.push(id[i].uuid)
            $('ul').append(`<li id='${id[i].uuid}'>${id[i].uuid}</li>`)
            $('li').on('click',function() {
                $('#user').val($(this).attr('id'))
            })
        }
    });
    


})

function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
}

function updataData(database, table, data) {
    database.ref(`experiment/${table}`).update(data);
}


