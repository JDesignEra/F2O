<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');
        
        require('db.php');

        if (!isset($_SESSION)) {
            session_start();
        }

        if (isset($_SESSION['uid'])) {
            $uid = $_SESSION['uid'];

            $name = trim($_POST['e-name']);
            $title = trim($_POST['e-title']);
            $bio = trim($_POST['e-bio']);

            $name = stripslashes($name);
            $title = stripslashes($title);
            $bio = stripslashes($bio);

            $name = mysqli_real_escape_string($dbconn, $name);
            $title = mysqli_real_escape_string($dbconn, $title);
            $bio = mysqli_real_escape_string($dbconn, $bio);

            $sql = "SELECT * FROM accounts WHERE uid ='$uid'";
            $result = mysqli_query($dbconn, $sql);
            $count = mysqli_num_rows($result);

            if ($count == 1) {
                $ret = mysqli_fetch_assoc($result);

                if ($name == '' && $title == '' && $bio == '') {
                    echo json_encode('eb-fail');
                }
                else {
                    $sql = "UPDATE accounts SET name=IF(LENGTH('$name')=0, name), title=IF(LENGTH('$title')=0, title), bio=IF(LENGTH('$bio')=0, bio) WHERE uid='$uid'";

                    echo json_encode('eb-pass');
                }
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
