<?php
    require('db.php');
    require('generatePin.php');

    if (!isset($_SESSION)) {
        session_start();
    }

    $email = trim($_POST['f-email']);
    $email = stripslashes($email);
    $email = mysqli_real_escape_string($dbconn, $email);

    if (isset($_POST['f-code'])) {
        $code = trim($_POST['f-code']);
        $code = stripslashes($code);
        $code = mysqli_real_escape_string($dbconn, $code);
        //echo $code;
    }

    if (isset($_POST['f-pass'])) {
        $pass = trim($_POST['f-pass']);
        $pass = stripslashes($pass);
        $pass = mysqli_real_escape_string($dbconn, $pass);
        //echo $pass;
    }

    $sql = "SELECT * FROM accounts WHERE email = '$email'";
    $result = mysqli_query($dbconn, $sql);
    $ret = mysqli_fetch_assoc($result);

    $count = mysqli_num_rows($result);

    if (isset($_POST['f-email']) && isset($_POST['f-code']) && isset($_POST['f-pass'])) {
        if ($pass == '') {
            echo json_econde('pass-empty');
        }
        elseif (strlen($pass) < 8) {
            echo json_encode('pass-min');
        }
        elseif (strlen($pass) > 32) {
            echo json_encode('pass-max');
        }
        elseif ($count > 0 && $ret['code'] == $code) {
            //Remove Code after use
            $sql = "UPDATE accounts SET code='' WHERE email='$email'";
            mysqli_query($dbconn, $sql);

            //Store pass
            $pass = password_hash($pass, PASSWORD_BCRYPT);
            $sql = "UPDATE accounts SET password='$pass' WHERE email='$email'";
            mysqli_query($dbconn, $sql);

            echo json_encode('pass-pass');
        }
    }
    elseif (isset($_POST['f-email']) && isset($_POST['f-code'])) {
        if ($code == '') {
            echo json_encode('code-empty');
        }
        elseif (strlen($code) != 4) {
            echo json_encode('code-min-max');
        }
        elseif ($count > 0 && $ret['code'] == $code) {
            echo json_encode('code-pass');
        }
        else {
            echo json_econde('code-fail');
        }
    }
    else {
        if ($email == '') {
            echo json_encode('email-empty');
        }
        elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email))) {
            echo json_encode('email-error');
        }
        elseif ($count > 0) {
            //Generate 4 digit pin
            $pin = generatePin();

            // Send 4 digit email code
            $header = 'From: F2O <jdesignera.test+f2o@gmail.com>' .
            "\r\n" .
            'Reply-To: jdesignera.test+f2o@gmail.com';

            mail($email, '[F2O] Verification Code For Password Reset', $pin, $header);

            //Store
            $sql = "UPDATE accounts SET code='$pin' WHERE email='$email'";
            $result = mysqli_query($dbconn, $sql);

            echo json_encode('email-pass');
        }
        else {
            echo json_encode('email-fail');
        }
    }

    mysqli_close($dbconn);
    exit();
?>
