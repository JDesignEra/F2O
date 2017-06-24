<?php
    if(!isset($_SESSION)) { 
        session_start(); 
    }

    if(!isset($_SESSION['login']) && ($_SESSION['type'] != "false")) {
        header("location: index.php");
        exit();
    }
?>