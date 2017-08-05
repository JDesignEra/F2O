<!-- Navbar -->
<nav class="navbar navbar-toggleable-md fixed-top navbar-dark bg-primary scrolling-navbar z-depth-1 hoverable">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle Navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Logo -->
    <a class="navbar-brand" href="index.php">
        <img src="assets/img/F2O-White.png">
    </a>

    <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="index.php">Home</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <?php
                    if(isset($login)) {
                        echo '
                        <div class="logged dropdown">
                            <a class="chip btn dropdown-toggle cyan z-depth-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="Contact Person"> John Doe
                            </a>

                            <div class="dropdown-menu dropdown-menu-right dropdown-primary" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
                                <a class="dropdown-item" href="#">Edit Profile <i class="fa fa-pencil ml-1"></i></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item red-text" href="#">Logout <i class="fa fa-sign-out ml-1"></i></a>
                            </div>
                        </div>
                        ';
                    }
                    else {
                        echo '
                        <!-- Modal Button -->
                        <button class="btn btn-secondary btn-rounded" data-toggle="modal" data-target="#login-reg-fgtpass" style="max-height:35px; line-height:1;">Login <i class="fa fa-sign-in ml-1"></i></button>
                        ';
                    }
                ?>
            </li>
        </ul>
    </div>
</nav>

<?php
    include('assets/modular/login-reg-fgtpass_modal.html');

    if ($_SERVER['REQUEST_URI'] == "/profile.php") {
        include('assets/modular/messages_modal.html');
    }
?>
