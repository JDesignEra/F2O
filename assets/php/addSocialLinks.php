<?php
    require('db.php');

    if (!isset($_SESSION)) {
        session_start();
    }

    if (isset($_SESSION['uid'])) {
        $uid = $_SESSION['uid'];

        $link = trim($_POST['social-link']);
        $link = stripslashes($link);
        $link = mysqli_real_escape_string($dbconn, $link);

        if(isset($_POST['social-type'])) {
            $type = trim($_POST['social-type']);
            $type = stripslashes($type);
            $type = mysqli_real_escape_string($dbconn, $type);
        }

        if (!isset($_POST['social-type'])) {
            echo json_encode('type-empty');
        }
        elseif ($link == "") {
            echo json_encode('link-empty');
        }
        else {
            $sql = "INSERT INTO socials (acc_uid, url, type) VALUES ('$uid', '$link', '$type')";
            $result = mysqli_query($dbconn, $sql);

            if ($result) {
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
