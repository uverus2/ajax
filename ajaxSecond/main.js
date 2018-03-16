window.onload = function() {

    document.getElementById('button').addEventListener('click', clicked);
};

function clicked() {
    // create XHR Objected
    var xhr = new XMLHttpRequest();

    // OPEN Function - type, url/file, async
    xhr.open('GET', 'sample.txt', true);

    // Optional - used for loaders
    xhr.onprogress = function() {
        console.log('Ready State :', xhr.readyState);
    };



    xhr.onload = function() {
        if (this.status == 200) {

            document.getElementById('text').innerHTML = this.responseText;
            //console.log(this.responseText);
        } else if (this.status == 404) {
            document.getElementById('text').innerHTML = 'not found ';
        }
    };

    xhr.onerror = function() {
        console.log('request error')
    };

    //Sends request
    xhr.send();

}

// reloads the page asynchonasly without the page being reloaded