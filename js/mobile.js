
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
const latest = database.ref('experiment/latest');


var uuid = _uuid()
var idkey;
var currentdata;

$(document).ready(function () {
    $('#idnumber').text(uuid)
    pushData(database, 'id', {
        uuid: `${uuid}`
    })

    id_table.on('value', function (snapshot) {
        var id = snapshot.val()
        var key = Object.keys(id)
        idkey = key[key.length-1]

        console.log(idkey)

    });

    latest.on('value', function (snapshot) {
        var data = snapshot.val()
        if(data) {
            if(data.id == uuid) {
                $('body').css('background-color', `${data.color}`)
            }
        }
    });
})

window.addEventListener('beforeunload', function (e) {
    database.ref(`experiment/id/${idkey}`).remove();
});

// function removeData(database,table) {
//     database.ref(`experiment/${table}/${id}`).remove();
// }

function updataData(database, table, data) {
    database.ref(`experiment/${table}`).remove(data);
}
function pushData(database, table, data) {
    database.ref(`experiment/${table}`).push(data);
}

function _uuid() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}