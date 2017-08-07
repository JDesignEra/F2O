<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (!isset($_SESSION)) {
            session_start();
        }

        $email = trim($_POST['l-email']);
        $pass = trim($_POST['l-pass']);

        $email = stripslashes($email);
        $pass = stripslashes($pass);

        $email = mysqli_real_escape_string($dbconn, $email);
        $pass = mysqli_real_escape_string($dbconn, $pass);

        if ($email == '' || $pass == '') {
            if ($email == '') {
                echo json_encode('email-empty');
            }
            elseif ($pass == '') {
                echo json_encode('pass-empty');
            }
        }
        elseif (!(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email))) {
            echo json_encode('email-fail');
        }
        elseif (strlen($pass) < 8) {
            echo json_encode('pass-min');
        }
        elseif (strlen($pass) > 32) {
            echo json_encode('pass-max');
        }
        else {
            $sql = "SELECT * FROM accounts WHERE email='$email'";
            $result = mysqli_query($dbconn, $sql);
            $count = mysqli_num_rows($result);
            $ret = mysqli_fetch_assoc($result);

            if (password_verify($pass, $ret['password'])) {
                $_SESSION['uid'] = $ret['uid'];

                echo json_encode('pass');
            }
            else {
                echo json_encode('fail');
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
