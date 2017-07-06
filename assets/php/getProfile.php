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

            //Retrive accounts table info
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
                );
            }
            // /.Retrive accounts table

            // Retrive socials table
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

            echo json_encode($profile);
        }
    }

    mysqli_close($dbconn);
    exit();
?>
