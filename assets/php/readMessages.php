<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (isset($_SESSION['uid'])) {
            $uid = $_SESSION['uid'];
            $msg_id = $_POST['msg-select'];

            // Update Status
            $sql = "UPDATE messages SET status='' WHERE uid='$msg_id' AND acc_uid='$uid'";
            $result = mysqli_query($dbconn, $sql);

            // Return Selected Email
            $sql = "SELECT email FROM messages WHERE uid='$msg_id' AND acc_uid='$uid'";
            $result = mysqli_query($dbconn, $sql);
            $ret = mysqli_fetch_assoc($result);

            if ($result) {
                echo json_encode($ret['email']);
            }
            else {
                echo json_encode('fail');
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
