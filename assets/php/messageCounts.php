<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (isset($_SESSION['uid'])) {
            $uid = $_SESSION['uid'];

            $sql = "SELECT * FROM messages WHERE acc_uid = '$uid'";
            $result = mysqli_query($dbconn, $sql);
            $count = mysqli_num_rows($result);

            if($result) {
                echo json_encode($count);
            }
            else {
                echo json_encode('fail');
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
