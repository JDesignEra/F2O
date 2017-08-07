<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        $sql = "SELECT * FROM accounts ORDER BY uid DESC";
        $result = mysqli_query($dbconn, $sql);

        $profiles = array();

        // Retrive account basic info
        while ($ret = mysqli_fetch_assoc($result)) {
            array_push($profiles, array(
                    'uid' => $ret['uid'],
                    'email' => $ret['email'],
                    'name' => $ret['name'],
                    'title' => $ret['title'],
                    'bio' => $ret['bio'],
                    'photo' => $ret['photo'],
                    'cover' => $ret['cover'],
                    'skills' => array(),
                    'socials' => array(),
                )
            );
        }

        // Retrive skills type
        for($i = 0; $i < count($profiles); $i++) {
            $uid = $profiles[$i]['uid'];

            $sql = "SELECT type FROM skills WHERE acc_uid = '$uid'";
            $result = mysqli_query($dbconn, $sql);

            while ($ret = mysqli_fetch_assoc($result)) {
                if (!in_array($ret['type'], $profiles[$i]['skills'])) {
                    array_push($profiles[$i]['skills'], $ret['type']);
                }
            }
        }

        // Retrive email
        for($i = 0; $i < count($profiles); $i++) {
            $uid = $profiles[$i]['uid'];

            $sql = "SELECT url, type FROM socials WHERE acc_uid = '$uid'";
            $result = mysqli_query($dbconn, $sql);

            while ($ret = mysqli_fetch_assoc($result)) {
                array_push($profiles[$i]['socials'], array(
                        'type' => $ret['type'],
                        'url' => $ret['url'],
                    )
                );
            }
        }

        echo json_encode($profiles);
    }

    mysqli_close($dbconn);
    exit();
?>
