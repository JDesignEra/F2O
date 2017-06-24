<?php
    require('db.php');

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
    }

    if (isset($_POST['f-pass'])) {
        $pass = trim($_POST['f-pass']);
        $pass = stripslashes($pass);
        $pass = mysqli_real_escape_string($dbconn, $pass);
    }

    $sql = "SELECT * FROM accounts WHERE email = '$email'";
    $result = mysqli_query($dbconn, $sql);
    $ret = mysqli_fetch_assoc($result);

    $count = mysqli_num_rows($result);

    if (isset($_POST['f-pass']) && isset($_POST['f-code']) && isset($_POST['f-email'])) {
        if ($email == '') {
            echo json_encode('email-empty');
        }
        elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email))) {
            echo json_encode('email-fail');
        }
        elseif ($code == '') {
            echo json_encode('code-empty');
        }
        elseif (strlen($code) != 4) {
            echo json_encode('code-min-max');
        }
        elseif ($count > 0) {
            if ($code == $ret['code'] && $email == $ret['email']) {
                if ($pass == '') {
                    echo json_encode('pass-empty');
                }
                elseif (strlen($pass) < 8) {
                    echo json_encode('pass-min');
                }
                elseif (strlen($pass) > 32) {
                    echo json_encode('pass-max');
                }
                else {
                    echo json_encode('pass-pass');
                }
            }
            else {
                echo json_encode('code-fail');
            }
        }
        else {
            echo json_encode('code-fatal');
        }
    }
    elseif (isset($_POST['f-code']) && isset($_POST['f-email'])) {
        if ($email == '') {
            echo json_encode('email-empty');
        }
        elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email))) {
            echo json_encode('email-fail');
        }
        elseif ($code == '') {
            echo json_encode('code-empty');
        }
        elseif (strlen($code) != 4) {
            echo json_encode('code-min-max');
        }
        elseif ($count > 0) {
            if ($code == $ret['code'] && $email == $ret['email']) {
                echo json_encode('code-pass');
            }
            else {
                echo json_encode('code-fail');
            }
        }
        else {
            echo json_encode('code-fatal');
        }
    }
    elseif (isset($_POST['f-email'])) {
        if ($email == '') {
            echo json_encode('email-empty');
        }
        elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email))) {
            echo json_encode('email-fail');
        }
        elseif ($count > 0) {
            echo json_encode('email-pass');
        }
        else {
            echo json_encode('email-none');
        }
    }
    else {
        echo json_encode('p-fatal');
    }
?>
