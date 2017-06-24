<!-- SideNav -->
<ul id="slide-out" class="side-nav fixed sn-bg-1 custom-scrollbar">
    <!-- Logo -->
    <li>
        <div class="logo-wrapper waves-light">
            <a href="index.php">
                <img src="assets/img/F2O-Colored-400x330.png" class="img-fluid flex-center">
            </a>
        </div>
    </li>
    <!-- /.Logo -->
    <!-- Social -->
    <li>
        <ul class="social">
            <li>
                <a class="icons-sm fb-ic" href="https://www.facebook.com/jdesignera/" target="_blank">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a class="icons-sm li-ic" href="https://www.linkedin.com/company/jdesignera/" target="_blank">
                    <i class="fa fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a class="icons-sm gplus-ic" href="https://plus.google.com/112683263440422296973/" target="_blank">
                    <i class="fa fa-google-plus"></i>
                </a>
            </li>
            <li>
                <a class="icons-sm" href="mailto:jdesignera.test+f2o@gmail.com">
                    <i class="fa fa-envelope"></i>
                </a>
            </li>
        </ul>
    </li>
    <!-- /.Social -->
    <!-- Navigation Links -->
    <li>
        <ul class="collapsible collapsible-accordion">
            <li>
                <a class="collapsible-header waves-effect arrow-r"><i class="fa fa-chevron-right"></i> Submit blog<i class="fa fa-angle-down rotate-icon"></i></a>
                
                <div class="collapsible-body">
                    <ul>
                        <li><a href="#" class="waves-effect">Submit listing</a>
                        </li>
                        <li><a href="#" class="waves-effect">Registration form</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-hand-pointer-o"></i> Instruction<i class="fa fa-angle-down rotate-icon"></i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href="#" class="waves-effect">For bloggers</a>
                        </li>
                        <li><a href="#" class="waves-effect">For authors</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-eye"></i> About<i class="fa fa-angle-down rotate-icon"></i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href="#" class="waves-effect">Introduction</a>
                        </li>
                        <li><a href="#" class="waves-effect">Monthly meetings</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-envelope-o"></i> Contact me<i class="fa fa-angle-down rotate-icon"></i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href="#" class="waves-effect">FAQ</a>
                        </li>
                        <li><a href="#" class="waves-effect">Write a message</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
    
    <div class="sidenav-bg mask-strong"></div>
</ul>
<!-- /.SideNav -->

<!-- Navbar -->
<nav class="navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar double-nav bg-primary z-depth-1 hoverable">
    
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
</nav>
<!-- /.Navbar -->


<!-- Navbar -->
<nav class="navbar navbar-toggleable-md fixed-top navbar-dark bg-primary scrolling-navbar z-depth-1 hoverable double-nav">

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

<?php include('assets/modular/login-reg-fgtpass_modal.html');?>