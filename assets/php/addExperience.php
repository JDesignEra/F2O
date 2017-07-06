<?php
    //TODO SQL insert fix
    /* AJAX check  */
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (!isset($_SESSION)) {
            session_start();
        }

        if (isset($_SESSION['uid'])) {
            $uid = $_SESSION['uid'];

            // Validate Date Format
            function validateDate($date, $format = 'Y-m-d H:i:s') {
                $d = DateTime::createFromFormat($format, $date);
                return $d && $d->format($format) == $date;
            }

            $company = trim($_POST['exp-company']);
            $company = stripslashes($company);
            $company = mysqli_real_escape_string($dbconn, $company);

            $title = trim($_POST['exp-title']);
            $title = stripslashes($title);
            $title = mysqli_real_escape_string($dbconn, $title);

            $startDate = trim($_POST['exp-start']);
            $startDate = stripslashes($startDate);
            $startDate = mysqli_real_escape_string($dbconn, $startDate);

            $endDate = trim($_POST['exp-end']);
            $endDate = stripslashes($endDate);
            $endDate = mysqli_real_escape_string($dbconn, $endDate);

            if ($company == '') {
                echo json_encode('company-empty');
            }
            elseif ($title == '') {
                echo json_encode('title-empty');
            }
            elseif ($startDate == '') {
                echo json_encode('start-empty');
            }
            elseif ($endDate == '') {
                echo json_encode('end-empty');
            }
            elseif (!validateDate($startDate, 'Y-m-d')) {
                echo json_encode('start-fail');
            }
            elseif (!validateDate($endDate, 'Y-m-d') && $endDate != 'Present') {
                echo json_encode('end-fail');
            }
            else {
                $sql = "INSERT INTO experiences (acc_uid, company, title, start_date, end_date) VALUES('$uid', '$company', '$title', '$startDate', '$endDate')";
                $result = mysqli_query($dbconn, $sql);

                if ($result) {
                    echo json_encode('pass');
                }
                else {
                    echo json_encode('fail');
                }
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
