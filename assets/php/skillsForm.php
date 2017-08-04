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
            $add_status = '';

            // Insert new skill into database
            foreach (array_combine($_POST['new-skills-name'], $_POST['new-skills-type']) as $key => $value) {
                if ($key != '' && $value != '') {
                    $sql = "INSERT INTO skills (acc_uid, skill, type) VALUES('$uid', '$key', '$value')";
                    $result = mysqli_query($dbconn, $sql);

                    if ($result && $add_status != 'fail') {
                        $add_status = 'pass';
                    }
                    else {
                        echo mysqli_error($dbconn);
                        $add_status = 'fail';
                    }
                }
            }

            echo json_encode($add_status);
        }
    }

    mysqli_close($dbconn);
    exit();
?>
