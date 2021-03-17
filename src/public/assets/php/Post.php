<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
if ($name === '' || $email === '') {
    echo json_encode('Error: see better please');
} else {
    echo json_encode('Correct:' . $name);
}
