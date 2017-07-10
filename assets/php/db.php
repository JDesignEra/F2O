<?php
    DEFINE('dbhost', '127.0.0.1');
    DEFINE('dbname', 'f2o');
    DEFINE('dbuser', 'root');
    DEFINE('dbpass', '');

    $dbconn = mysqli_connect(dbhost, dbuser, dbpass) or die(mysqli_error($dbconn));

    mysqli_select_db($dbconn, dbname);
?>
