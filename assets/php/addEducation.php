<?php
    /* AJAX check  */
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (isset($_SESSION['uid'])) {
            $uid = $_SESSION['uid'];

            // Validate Date Format
            function validateDate($date, $format = 'Y-m-d H:i:s') {
                $d = DateTime::createFromFormat($format, $date);
                return $d && $d->format($format) == $date;
            }

            $school = trim($_POST['edu-school']);
            $school = stripslashes($school);
            $school = mysqli_real_escape_string($dbconn, $school);

            $degree = trim($_POST['edu-degree']);
            $degree = stripslashes($degree);
            $degree = mysqli_real_escape_string($dbconn, $degree);

			$field = trim($_POST['edu-field']);
			$field = stripslashes($field);
			$field = mysqli_real_escape_string($dbconn, $field);

            $startDate = trim($_POST['edu-start']);
            $startDate = stripslashes($startDate);
            $startDate = mysqli_real_escape_string($dbconn, $startDate);

            $endDate = trim($_POST['edu-end']);
            $endDate = stripslashes($endDate);
            $endDate = mysqli_real_escape_string($dbconn, $endDate);

            if ($school == '') {
                echo json_encode('sch-empty');
            }
            elseif ($degree == '') {
                echo json_encode('degree-empty');
            }
			elseif ($field == '') {
				echo json_encode('field-empty');
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
                $sql = "INSERT INTO educations (acc_uid, school, degree, field, start_date, end_date) VALUES('$uid', '$school', '$degree', '$field', '$startDate', '$endDate')";
                $result = mysqli_query($dbconn, $sql);

                if ($result) {
                    echo json_encode('pass');
	                }
	                else {
                    echo mysqli_error($dbconn);
                    echo json_encode('fail');
                }
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
