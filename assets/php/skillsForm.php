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

            $skills = $_POST['skills-name'];
            $types = $_POST['skills-type'];
            $skill_uids = $_POST['skills-id'];


        }
        /*
        foreach ($skills as $key => $value) {
            if (isset($_POST['skills-id'])) {
                $sql = "SELECT * FROM skills WHERE uid='$uids'";
                $result = mysqli_query($dbconn, $sql);
                $count = mysqli_num_rows($result);

                if ($count > 0) {
                    $sql = "UPDATE skills SET skills=IF(LENGTH('$skills') = 0, skills, '$value')";
                }
            }
        }*/
}
?>
