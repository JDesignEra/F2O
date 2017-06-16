<!--FUTURE Add Register, Login & Forgot Password functions-->
<!--FUTURE Populate Newest F2O Members section-->

<!DOCTYPE html>
<html lang="en">
    <!-- Head, Navigation & Intro Section -->
    <?php
        include('assets/modular/head.php');
    ?>
    
    <body>
        <!-- Navigation & Intro -->
        <header>
            <!-- Navigation Menu -->
            <?php include('assets/modular/nav.php');?>

            <!-- Intro Mask -->
            <div class="view hm-stylish-strong">
                <div class="full-bg-img flex-center mask pattern-2">
                    <div class="container">
                        <!-- First Row -->
                        <div class="row">
                            <div class="col-lg-12">
                                <img class="intro-logo mx-auto wow fadeInDown" src="assets/img/F2O-Colored-400x330.png" width="300px">
                            </div>
                        </div>
                        
                        <!-- Second Row -->
                        <div id="intro" class="row">
                            <!-- First Col -->
                            <div class="col-lg-6">
                                <div class="description">
                                    <div class="card wow fadeInLeft z-depth-1 hoverable">
                                        <div class="embed-responsive embed-responsive-16by9 z-depth-1 hoverable">
                                            <iframe class="embed-responsive-item" src="https://publish.animatron.io/5940093c456b5ca7530a495a?c=1&w=2048&h=1150&r=1&a=1" width="100%"></iframe>
                                        </div>

                                        <div class="card-block">
                                            <h4>Register an account today!</h4>
                                            <hr>
                                            <p>
                                                Register an account with us today as a freelancer, and get hired by various organisations for you skillsets. With a <strong>F2O</strong> account, you will never have to worry about looking for clients for yourself. Instead, clients will be looking for you. Register an account and set up your profile with us today.
                                            </p>
                                            <br/>
                                            <div class="text-center red-text">
                                                *<small>Organisation do not require an account to hire freelancers.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Second Col -->
                            <div class="col-lg-6 wow fadeInRight hidden-down">
                                <!-- Register Card -->
                                <div class="intro card-wrapper wow tada" data-wow-delay="1.2s">
                                    <div id="intro-card" class="card-rotating effect__click">

                                        <!-- Front Side -->
                                        <div class="face front card z-depth-1 hoverable">
                                            <!-- FAB Login -->
                                            <a class="btn-floating btn-small btn-action rotate-btn light-blue" data-card="intro-card" data-toggle="tooltip" data-placement="left" title="Login"><i class="fa fa-sign-in"></i></a>

                                            <!-- Content -->
                                            <div class="content">
                                                <h4><i class="fa fa-user-plus"></i> Register</h4>
                                                <hr>
                                                <div class="md-form">
                                                    <i class="fa fa-user prefix"></i>
                                                    <input type="text" id="r-name" class="form-control" required>
                                                    <label for="r-name">Name</label>
                                                </div>
                                                <div class="md-form">
                                                    <i class="fa fa-envelope prefix"></i>
                                                    <input type="email" id="r-email" class="form-control" required>
                                                    <label for="r-email">Email</label>
                                                </div>

                                                <div class="md-form">
                                                    <i class="fa fa-lock prefix"></i>
                                                    <input type="password" id="r-pass" class="form-control" required>
                                                    <label for="r-pass">Password</label>
                                                </div>

                                                <div class="text-center">
                                                    <button class="btn btn-cyan">Register</button>
                                                </div>
                                                
                                                <div class="text-center red-text">
                                                    *<small>Organisation do not require an account to hire freelancers.</small>
                                                </div>
                                            </div>

                                        </div>
                                        <!-- /.Front Side -->

                                        <!-- Back Side -->
                                        <div class="face back z-depth-1 hoverable">
                                            <!-- Content -->
                                            <div class="content">
                                                <h4><i class="fa fa-sign-in"></i> Login</h4>
                                                <a><i class="fa fa-close rotate-btn" data-card="intro-card"></i></a>
                                                
                                                <hr style="padding-bottom: 3rem;">
                                                
                                                <div class="md-form">
                                                    <i class="fa fa-envelope prefix"></i>
                                                    <input type="email" id="l-email" class="form-control">
                                                    <label for="l-email">Email</label>
                                                </div>

                                                <div class="md-form">
                                                    <i class="fa fa-lock prefix"></i>
                                                    <input type="password" id="l-pass" class="form-control">
                                                    <label for="l-pass">Password</label>
                                                </div>

                                                <div class="text-center">
                                                    <button class="btn btn-secondary">Login</button>
                                                </div>
                                            </div>

                                        </div>
                                        <!-- /.Back Side -->

                                    </div>
                                </div>
                                <!-- /.Rotating card -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.Intro Mask -->
        </header>
        <!-- /.Navigation & Intro -->
        
        <!-- Main -->
        <main>
            <section id="new-freelancer" class="section">
                <h1 class="section-heading wow fadeIn">Newest F2O Members</h1>
            </section>
        </main>
        
        <!-- Footer & Scripts -->
        <?php
            include('assets/modular/footer.php');
            include('assets/modular/scripts.html');
        ?>
    </body>
</html>