<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        $sql = "SELECT type FROM social_types";
        $result = mysqli_query($dbconn, $sql);

        $type['s_type'] = array();
        while ($ret = mysqli_fetch_assoc($result)) {
            array_push($type['s_type'], $ret['type']);
        }

        echo json_encode($type);
    }

    mysqli_close($dbconn);
    exit();
?>
