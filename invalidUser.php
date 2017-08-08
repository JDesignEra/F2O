<?php include('assets/php/sessionStart.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <!-- Head, Navigation & Intro Section -->
    <?php
        $title = 'User Not Found';
        include('assets/modular/head.php');
    ?>
    <header>
        <?php include('assets/modular/nav.php');?>
    </header>

    <body>
        <main style="background-color: #e3f2fd; padding-top: 9rem;">
            <img src="assets/img/invalid-user.png" width="100%" />
        </main>

        <?php
            include('assets/modular/footer.php');
            include('assets/modular/scripts.php');
        ?>
    </body>
</html>
