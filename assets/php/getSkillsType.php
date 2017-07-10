<?php
    /* AJAX check  */
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        $sql = "SELECT * FROM skill_types";
        $result = mysqli_query($dbconn, $sql);

        $type['skill_types'] = array();

        while ($ret = mysqli_fetch_assoc($result)) {
            array_push($type['skill_types'], array(
                    'type' => $ret['type'],
                    'sel_icon' => $ret['select_icon'],
                    'icon' => $ret['icon'],
                )
            );
        }

        echo json_encode($type);
    }

    mysqli_close($dbconn);
    exit();
?>
