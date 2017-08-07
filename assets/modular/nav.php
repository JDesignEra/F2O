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
            <li class="nav-item <?php if (false !== strpos($_SERVER['REQUEST_URI'], '/index.php')) {echo 'active';} ?>">
                <a class="nav-link" href="index.php">Home</a>
            </li>
            <li class="nav-item <?php if (false !== strpos($_SERVER['REQUEST_URI'], '/about.php')) {echo 'active';} ?>">
                <a class="nav-link" href="about.php">About</a>
            </li>
            <li class="nav-item <?php if (false !== strpos($_SERVER['REQUEST_URI'], '/freelancers.php')) {echo 'active';} ?>">
                <a class="nav-link" href="freelancers.php">Freelancers</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <?php if(isset($_SESSION['uid'])): ?>
                    <div class="logged dropdown">
                        <a class="chip btn dropdown-toggle cyan z-depth-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/img/profile/user-default.png" alt="Contact Person"></a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-primary" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
                            <a class="dropdown-item" href="profile.php">Profile <i class="fa fa-user ml-1"></i></a>
                            <div class="dropdown-divider"></div>
                            <a id="logout" class="dropdown-item red-text">Logout <i class="fa fa-sign-out ml-1"></i></a>
                        </div>
                    </div>
                <?php else: ?>
                    <!-- Modal Button -->
                    <button class="btn btn-secondary btn-rounded" data-toggle="modal" data-target="#login-reg-fgtpass" style="max-height:35px; line-height:1;">Login <i class="fa fa-sign-in ml-1"></i></button>
                <?php endif; ?>
            </li>
        </ul>
    </div>
</nav>

<?php
    include('assets/modular/login-reg-fgtpass_modal.html');

    if (false !== strpos($_SERVER['REQUEST_URI'], '/user.php?')) {
        include('assets/modular/contactUser_modal.html');
    }

    if ($_SERVER['REQUEST_URI'] == "/profile.php") {
        include('assets/modular/messages_modal.html');
        include('assets/modular/avatarUpload_modal.html');
        include('assets/modular/coverUpload_modal.html');
    }
?>
