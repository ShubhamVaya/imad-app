
var button = document.getElementById('counter');

button.onclick = function() {
    
    //crating a request obj.
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in the variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Taking action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //making request
    request.open('GET', 'http://svfuturestar31.imad.hasura-app.io/counter', true);
    request.send(null);
    };



    var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '<li>'
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};





