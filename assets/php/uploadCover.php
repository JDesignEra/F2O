<?php
    /* AJAX check  */
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-type: application/json');

        require('db.php');

        if (isset($_SESSION['uid']) && isset($_FILES["file"]["type"])) {
            $uid = $_SESSION['uid'];

            $validExtensions = array('jpeg', 'jpg', 'png');
            $temp = explode('.', $_FILES['file']['name']);
            $ext = end($temp);

            // Check Extensions and filesize
            if ((($_FILES['file']['type'] == 'image/png') || ($_FILES['file']['type'] == 'image/jpg') || ($_FILES['file']['type'] == 'image/jpeg') || ($_FILES['file']['type'] == 'image/jpeg')) && ($_FILES['file']['size'] < 838860800) && in_array($ext, $validExtensions)) {
                $exist = glob('../uploads/cover-'.$uid.'.{jpg,jpeg,png}', GLOB_BRACE);

                // Delete if exist
                if($exist > -1) {
                    foreach ($exist as $key => $value) {
                        unlink($value);
                    }
                }

                $sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
                $targetPath = "../uploads/cover-".$uid.'.'.$ext; // Target path where file is to be stored
                move_uploaded_file($sourcePath, $targetPath) ; // Moving Uploaded file

                // Update Database photo file
                $photo = 'cover-'.$uid.'.'.$ext;
                $sql = "UPDATE accounts SET cover = '$photo' WHERE uid = '$uid'";
                $result = mysqli_query($dbconn, $sql);

                if($result) {
                    echo json_encode('pass');
                }
            }
            else {
                echo json_encode('fail');
            }
        }
    }

    mysqli_close($dbconn);
    exit();
?>
