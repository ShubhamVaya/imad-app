console.log('Loaded!');



var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //crating a request obj.
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in the variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Taking action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    };