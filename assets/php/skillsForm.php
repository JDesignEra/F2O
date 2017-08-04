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
            if (isset($_POST['new-skills-name'])) {
                foreach (array_combine($_POST['new-skills-name'], $_POST['new-skills-type']) as $key => $value) {
                    $sql = "SELECT * FROM skills WHERE acc_uid='$uid' AND skill='$key'";
                    $result = mysqli_query($dbconn, $sql);
                    $count = mysqli_num_rows($result);

                    if ($count > 0) {
                        $add_status = 'exist';
                    }
                    else if ($key != '' && $value != '') {
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

            // Update skills into database
            if (isset($_POST['edit-skills-name'] ) && isset($_POST['edit-skills-type'])) {
                $index = 0;

                foreach ($_POST['edit-skills-name'] as $key => $value) {
                    $type = $_POST['edit-skills-type'][$key];

                    if ($type != '') {
                        $sql = "UPDATE skills SET skill = IF(LENGTH('$value')=0, skill, '$value'), type = IF(LENGTH('$type')=0, type, '$type') WHERE acc_uid = '$uid' AND uid = '$key'";
                        $result = mysqli_query($dbconn, $sql);

                        if ($result) {
                            $add_status = 'pass';
                        }
                        else {
                            echo mysqli_error($dbconn);
                            $add_status = 'fail';
                        }
                    }

                    $index++;
                }
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
