window.onload = function() {

    document.getElementById('button1').addEventListener('click', loadUser);
    document.getElementById('button2').addEventListener('click', loadUsers);
};

function loadUser() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function() {
        if (this.status == 200) {

            var user = JSON.parse(this.responseText);

            var output = '';
            output += '<ul>' +
                '<li>id:' + user.id + ' </li>' +
                '<li>name:' + user.name + ' </li>' +
                '<li>email:' + user.email + ' </li>' +
                '</ul>';

            document.getElementById('user').innerHTML = output;

            //console.log(user.name); //grabs only the name value of user 
            //console.log(this.responseText); // Grabs the whole user Info 
        } else if (this.status == 404) {
            console.log('not found');
        }
    };


    xhr.send();
}

function loadUsers() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function() {
        if (this.status == 200) {

            var users = JSON.parse(this.responseText);

            var output = '';

            for (var i in users) {

                output += '<ul>' +
                    '<li>id:' + users[i].id + ' </li>' +
                    '<li>name:' + users[i].name + ' </li>' +
                    '<li>email:' + users[i].email + ' </li>' +
                    '</ul>';
            }

            document.getElementById('users').innerHTML = output;

        } else if (this.status == 404) {
            console.log('not found');
        }
    };


    xhr.send();
}