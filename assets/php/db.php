<?php
    DEFINE('dbhost', 'localhost');
    DEFINE('dbname', 'f2o');
    DEFINE('dbuser', 'root');
    DEFINE('dbpass', '');

    $dbconn = mysqli_connect(dbhost, dbuser, dbpass) or die(mysqli_error());
    mysqli_select_db($dbconn, dbname);
?>
