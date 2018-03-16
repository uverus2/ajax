<?php 

$conn = mysqli_connect('localhost', 'root','123456', 'ajax');

$query = 'SELECT * FROM aj';

// Get result 

$result = mysqli_query($conn, $query);

// Fetch data 

$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);



?>