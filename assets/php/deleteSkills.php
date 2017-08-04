<?php
    /* AJAX check */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (!isset($_SESSION)) {
            session_start();
        }

        if (isset($_SESSION['uid'])) {
            if(isset($_POST['delete'])) {
                foreach ($_POST['delete'] as $key => $value) {
                    if($value == 'on') {
                        $sql = "DELETE FROM skills WHERE uid = $key";
                        $result = mysqli_query($dbconn, $sql);

                        if($result) {
                            echo json_encode('pass');
                        }
                        else {
                            echo json_encode('fail');
                        }
                    }
                }
            }
            else {
                echo json_encode('empty');
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
