<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (isset($_SESSION['uid'])) {
            $uid = $_SESSION['uid'];
            $msg_id = $_POST['msg-select'];

            $sql = "DELETE FROM messages WHERE uid = '$msg_id' AND acc_uid = '$uid'";
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
