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

            // Retrieve accounts table info
            $sql = "SELECT * FROM accounts WHERE uid='$uid'";
            $result = mysqli_query($dbconn, $sql);
            $count = mysqli_num_rows($result);

            if ($count == 1) {
                $ret = mysqli_fetch_assoc($result);

                $profile = array(
                    'uid' => $ret['uid'],
                    'email' => $ret['email'],
                    'name' => $ret['name'],
                    'title' => $ret['title'],
                    'bio' => $ret['bio'],
                    'socials' => array(),
                    'experiences' => array(),
					'educations' => array(),
                );
            }
            // /.Retrieve accounts table

            // Retrieve socials table
            $sql = "SELECT * FROM socials WHERE acc_uid='$uid'";
            $result = mysqli_query($dbconn, $sql);
            $count = mysqli_num_rows($result);

            if ($count > 0) {
                while($ret = mysqli_fetch_assoc($result)) {
                    array_push($profile['socials'], array(
                            'social_id' => $ret['uid'],
                            'social_type' => $ret['type'],
                            'social_url' => $ret['url'],
                        )
                    );
                }
            }

            // Retrieve experiences table
            $sql = "SELECT * FROM experiences WHERE acc_uid='$uid'";
            $result = mysqli_query($dbconn, $sql);
            $count = mysqli_num_rows($result);

            if ($count > 0) {
                while($ret = mysqli_fetch_assoc($result)) {
                    if (!strcasecmp($ret['end_date'], 'Present') == 0) {
                        $exp_end = date('Y', strtotime($ret['end_date']));
                    }
                    else {
                        $exp_end = $ret['end_date'];
                    }

                    array_push($profile['experiences'], array(
                            'exp_id' => $ret['uid'],
                            'exp_company' => $ret['company'],
                            'exp_title' => $ret['title'],
                            'exp_start' => date('Y', strtotime($ret['start_date'])),
                            'exp_end' => $exp_end,
                        )
                    );
                }
            }
            // /.Retrieve experiences table

			// Retrieve educations table
			$sql = "SELECT * FROM educations WHERE acc_uid='$uid'";
			$result = mysqli_query($dbconn, $sql);
			$count = mysqli_num_rows($result);

			if ($count > 0) {
				while ($ret = mysqli_fetch_assoc($result)) {
					if (!strcasecmp($ret['end_date'], 'Present') == 0) {
                        $exp_end = date('Y', strtotime($ret['end_date']));
                    }
                    else {
                        $exp_end = $ret['end_date'];
                    }

					array_push($profile['educations'], array(
						'edu_id' => $ret['uid'],
						'edu_sch' => $ret['school'],
						'edu_degree' => $ret['degree'],
						'edu_field' => $ret['field'],
						'edu_start' => date('Y', strtotime($ret['start_date'])),
						'edu_end' => $exp_end,
						)
					);
				}
			}
			// /.Retrieve educations table

            echo json_encode($profile);
        }
    }

    mysqli_close($dbconn);
    exit();
?>
