<?php
    require('db.php');

    if (!isset($_SESSION)) {
        session_start();
    }

    $email = $_POST['r-email'];
    $pass = $_POST['r-pass'];
    $name = $_POST['r-name'];

    //Remove slash
    $email = stripslashes($email);
    $pass = stripslashes($pass);
    $name = stripslashes($name);

    //Removes escape characters
    $email = mysqli_real_escape_string($dbconn, $email);
    $pass = mysqli_real_escape_string($dbconn, $pass);
    $name = mysqli_real_escape_string($dbconn, $name);

    $sql = "SELECT * FROM accounts WHERE email='$email'";
    $result = mysqli_query($dbconn, $sql);

    $count = mysqli_num_rows($result);


    if ($name == "") {
        echo json_encode('name-empty');
    }
    elseif ($email == "") {
        echo json_encode('email-empty');
    }
    elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email))) {
        echo json_encode('email-fail');
    }
    elseif ($pass == "") {
        echo json_encode('pass-empty');
    }
    elseif (strlen($pass) < 8) {
        echo json_encode('pass-min');
    }
    elseif (strlen($pass) > 32) {
        echo json_encode('pass-max');
    }
    elseif ($count <= 0) {
        //Hash password
        $pass = password_hash($pass, PASSWORD_BCRYPT);

        $sql = "INSERT INTO accounts (email, password, name) VALUES ('$email', '$pass', '$name')";
        $result = mysqli_query($dbconn, $sql);

        echo json_encode('pass');
    }
    else {
        echo json_encode('exist');
    }

    mysqli_close($dbconn);
    exit();
?>
