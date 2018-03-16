<?php 

$conn = mysqli_connect('localhost', 'root','123456', 'ajax');

echo " <br> heeloo </br> "; 

// check for a get variable 

if(isset($_GET['name'])) {
    echo 'GET: your name is '.$_GET['name'];
}

if(isset($_POST['name'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name'] );
    echo 'POST: your name is '.$_POST['name'];

    $query = "INSERT INTO aj(name) VALUES ('$name')";
    if (mysqli_query($conn, $query)){
        echo "user added";
    }
    else {
        echo "error:".mysqli_error($conn);
    }
}

// connect to  a database



?>