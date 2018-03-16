window.onload = function() {

    document.getElementById('button').addEventListener('click', getName);
    document.getElementById('getForm').addEventListener('submit', getName);

    document.getElementById('postForm').addEventListener('submit', postName);

};

function getName(event) {
    event.preventDefault();

    var name = document.getElementById('name1').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'aj.php?name=' + name, true);

    xhr.onload = function() {
        console.log(this.responseText);
    };

    xhr.send();
}


function postName(event) {
    event.preventDefault();

    var name = document.getElementById('name2').value;
    var params = "name=" + name;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'aj.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        console.log(this.responseText);
    };

    xhr.send(params);
}