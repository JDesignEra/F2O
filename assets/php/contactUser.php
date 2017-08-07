<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        $uid = $_POST['uid'];
        $uid = stripslashes($uid);
        $uid = mysqli_real_escape_string($dbconn, $uid);

        $name = $_POST['name'];
        $name = stripslashes($name);
        $name = mysqli_real_escape_string($dbconn, $name);

        $email = $_POST['email'];
        $email = stripslashes($email);
        $email = mysqli_real_escape_string($dbconn, $email);

        $subject = $_POST['subject'];
        $subject = stripslashes($subject);
        $subject = mysqli_real_escape_string($dbconn, $subject);

        $msg = $_POST['msg'];
        $msg = stripslashes($msg);
        $msg = mysqli_real_escape_string($dbconn, $msg);

        // Checks if acc_id exists
        $sql = "SELECT email FROM accounts WHERE uid='$uid'";
        $result = mysqli_query($dbconn, $sql);

        if ($name == '') {
            echo json_encode('name-empty');
        }
        elseif ($email == '') {
            echo json_encode('email-empty');
        }
        elseif ($subject == '') {
            echo json_encode('subject-empty');
        }
        elseif ($msg == '') {
            echo json_encode('msg-empty');
        }
        elseif ($result) {
            $ret = mysqli_fetch_assoc($result);
            $emailTo = $ret['email'];
            $msgTo =
            'From: '.$name.' <'.$email.'>'."\r\n".
            'Subject: '.$subject."\r\n".
            "\r\n".
            'Message:'."\r\n".
            $msg;

            // Send out email
            $header = 'From: F2O <jdesignera.test+f2o@gmail.com>'."\r\n" .'Reply-To: jdesignera.test+f2o@gmail.com';
            mail($emailTo, '[F2O] You have a new message from '.$name, $msgTo, $header);

            // Insert Into DB
            $sql = "INSERT INTO messages (acc_uid, name, email, subject, message) VALUES ('$uid', '$name', '$email', '$subject', '$msg')";
            $result = mysqli_query($dbconn, $sql);

            if ($result) {
                echo json_encode('pass');
            }
            else {
                echo json_encode('fail');
            }
        }
        else {
            echo json_encode('invalid');
        }
    }

    mysqli_close($dbconn);
    exit();
?>
