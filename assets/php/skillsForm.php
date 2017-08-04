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

            // Update skills into database
            if (isset($_POST['edit-skills-name'] ) && isset($_POST['edit-skills-type'])) {
                $index = 0;

                foreach (array_combine($_POST['edit-skills-name'], $_POST['edit-skills-type']) as $key => $value) {
                    echo json_encode($key);
                    echo json_encode($value);
                    echo json_encode($index);

                    if ($key != '' && $value != '') {
                        $sql = "UPDATE skills SET skill = IF(LENGTH('$key')=0, skill, '$key'), type = IF(LENGTH('$value')=0, type, '$value') WHERE acc_uid = '$uid'";
                    }

                    $index++;
                }
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
