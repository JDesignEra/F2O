<!-- TODO Add class="form-control to all <input> -->

<!DOCTYPE html>
<html lang="en">
    <!-- Head, Navigation & Intro Section -->
    <?php
        $title = "Profile [1]";
        include('assets/modular/head.php');
    ?>
    <header>
        <?php
            include('assets/modular/nav.php');
        ?>
    </header>
    
    <body id="profile">
        <main>
            <div class="container-fluid">
                <!-- Basic-Detail Section -->
                <section id="basic-detail" class="section wow fadeInDown">
                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-10">
                            <!-- Card -->
                            <div id="cp-basic" class="card testimonial-card hoverable">
                                <!-- Cover Photo -->
                                <a id="cp-cover-edit" class="card-up text-right">
                                    <button id="change-cover" class="btn">
                                        <span style="display: none;">Change Cover Photo&nbsp;</span>
                                        <i class="fa fa-picture-o"></i>
                                    </button>
                                </a>
                                <!-- /.Cover Photo -->

                                <!-- Edit buttons -->
                                <div class="card-share">
                                    <a id="cp-basic-edit" class="btn-floating btn-action secondary-color float-right" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil"></i></a>
                                </div>
                                <!-- /.Edit buttons -->

                                <!-- Photo -->
                                <a id="cp-avatar-edit" class="avatar text-right align-bottom z-depth-1 hoverable">
                                    <div id="change-avatar" class="white-text text-center" style="display:none; -webkit-animation-duration:0.5s">Change Profile Photo<i class="fa fa-picture-o"></i></div>
                                </a>
                                <!-- /.Photo -->

                                <!-- Content -->
                                <div class="card-block">
                                    <!-- Form -->
                                    <div id="cp-basic-form" style="display: none;">
                                        <div id="form-name" class="md-form">
                                            <input id="e-name" type="text" length="20" placeholder="Joel">
                                            <label for="e-name">Name</label>
                                        </div>
                                        <div id="form-title" class="md-form">
                                            <input id="e-title" type="text" length="20" placeholder="Full-Stack Developer">
                                            <label for="e-title">Job Title</label>
                                        </div>
                                        <hr>
                                        <div id="form-title" class="md-form">
                                            <textarea id="e-title" class="md-textarea" type="text" length="120" placeholder="I am a Freelance Full-Stack Developer and Designer with my branding, J.Design. I have been in this industry since 2012. Furthermore, I am skilled in various programming languages and design skills"></textarea>
                                            <label for="e-title">Summary</label>
                                        </div>
                                        <button class="btn teal">
                                            Save <i class="fa fa-check ml-1"></i>
                                        </button>
                                        <button id="cp-basic-form-cancel" class="btn btn-danger">
                                            Cancel <i class="fa fa-ban ml-1"></i>
                                        </button>
                                    </div>
                                    <!-- /.Form -->
                                    
                                    <!-- Default -->
                                    <div id="cp-basic-def">
                                        <h4 id="name">Joel</h4>
                                        <h5 id="title">Full-Stack Developer</h5>
                                        <hr>
                                        <p id="bio">
                                            I am a Freelance Full-Stack Developer and Designer with my branding, J.Design. I have been in this industry since 2012. Furthermore, I am skilled in various programming languages and design skills.
                                        </p>
                                    </div>
                                    <!-- /.Default -->
                                </div>
                            </div>
                            <!-- /.Card -->
                        </div>
                    </div>
                </section>
                <!-- /.Basic-Detail Section -->
                
                <!-- Misc Section -->
                <section id="misc" class="section">
                    <div class="row justify-content-center">
                        <!-- Message Card -->
                        <div class="col-xl-5 col-lg-6">
                            <section id="message" class="section wow fadeInLeft">
                                <div id="cp-msg" class="card hoverable">
                                    <!-- Card Data -->
                                    <div class="card-up">
                                        <i class="fa fa-envelope z-depth-1 white-text blue darken-2"></i>
                                        <div class="data">
                                            <p>Unread Message</p>
                                            <h3>1</h3>
                                        </div>
                                    </div>
                                    <!-- /.Card Data -->

                                    <!-- Card Content-->
                                    <div class="card-block text-center">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="progress">
                                                    <div class="progress-bar bg-success wow slideInLeft" data-wow-delay="0.5s" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <h4>1 / 100</h4>
                                                <p>Message Space</p>
                                            </div>
                                            <div class="col-6">
                                                <div class="progress">
                                                    <div class="progress-bar bg-danger wow slideInLeft" data-wow-delay="0.5s" role="progressbar" style="width: 1%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <h4>1 / 100</h4>
                                                <p>Unread Message</p>
                                            </div>
                                        </div>

                                        <button class="btn btn-cyan">
                                            Open Inbox&nbsp;<i class="fa fa-envelope-open ml-1"></i>
                                        </button>
                                    </div>
                                    <!-- /.Card Content -->
                                </div>
                            </section>
                        </div>
                        <!-- /.Message Card -->
                        
                        <!-- Job Card -->
                        <div class="col-xl-5 col-lg-6">
                            <section id="job" class="section wow fadeInRight">
                                <div id="cp-job" class="card hoverable">
                                    <!-- Card Data -->
                                    <div class="card-up">
                                        <i class="fa fa-briefcase z-depth-1 white-text blue darken-2"></i>
                                        <div class="data">
                                            <p>Uncompleted Job</p>
                                            <h3>1</h3>
                                        </div>
                                    </div>
                                    <!-- /.Card Data -->

                                    <!-- Card Content-->
                                    <div class="card-block text-center">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="progress">
                                                    <div class="progress-bar bg-success wow slideInLeft" data-wow-delay="0.5s" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <h4>1 / 100</h4>
                                                <p>Jobs</p>
                                            </div>
                                            <div class="col-6">
                                                <div class="progress">
                                                    <div class="progress-bar bg-danger wow slideInLeft" data-wow-delay="0.5s" role="progressbar" style="width: 1%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <h4>1 / 100</h4>
                                                <p>Uncomplete Jobs</p>
                                            </div>
                                        </div>

                                        <button class="btn btn-cyan">
                                            Open Job List&nbsp;<i class="fa fa-pencil-square-o ml-1"></i>
                                        </button>
                                    </div>
                                    <!-- /.Card Content -->
                                </div>
                            </section>
                        </div>
                        <!-- /.Job Card -->
                    </div>
                </section>
                <!-- /.Misc Section -->
                
                <!-- General Section -->
                <section id="general" class="section">
                    <div class="row justify-content-center">
                        <div class="col-xl-3">
                        <!-- Social Section -->
                            <section id="social" class="section wow fadeInLeft">
                                <div class="card hoverable">
                                    <a id="social-add" class="btn-floating btn-action secondary-color wow fadeInRight" data-toggle="tooltip" data-placement="right" title="Add">
                                        <i class="fa fa-plus" style="margin-top: 7px;"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-share-alt mr-2"></i> Social Links
                                        </h4>

                                        <hr class="my-1">
                                        <div id="social-detail" class="row">
                                            <div class="col-1">
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                            <div class="col-9">
                                                <a href="mailto:joel@jdesignera.com">
                                                    joel@jdesignera.com
                                                </a>
                                            </div>
                                            <div class="col-1">
                                                <a id="social-detail-edit" style="display:none;" data-toggle="tooltip" data-placement="right" title="Edit">
                                                    <i class="fa fa-pencil"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <hr class="my-1">
                                        <div id="social-detail" class="row">
                                            <div class="col-1">
                                                <i class="fa fa-facebook-official"></i>
                                            </div>
                                            <div class="col-9">
                                                <a href="https://facebook.com">
                                                    Facebook
                                                </a>
                                            </div>
                                            <div class="col-1">
                                                <a id="social-detail-edit" style="display:none;" data-toggle="tooltip" data-placement="right" title="Edit">
                                                    <i class="fa fa-pencil"></i>
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <hr id="hr-social-add-detail" class="my-1" style="display: none;">
                                        <div id="social-add-detail" class="row justify-content-center" style="display: none;">
                                            <div class="col-5">
                                                <select class="select">
                                                    <option selected disabled>Social</option>
                                                    <option value="facebook">Facebook</option>
                                                    <option value="instagram">Instagram</option>
                                                    <option value="twitter">Twitter</option>
                                                    <option value="skype">Skype</option>
                                                </select>
                                            </div>
                                            <div class="col-7">
                                                <div class="md-form">
                                                    <input id="social-name" type="text">
                                                    <label for="social-name">Link / Username</label>
                                                </div>
                                            </div>
                                            <button id="sad-save" class="btn btn-md teal">
                                                Save <i class="fa fa-check ml-1"></i>
                                            </button>
                                            <button id="sad-cancel" class="btn btn-md btn-danger">
                                                Cancel <i class="fa fa-ban ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- /.Social Section -->

                            <!-- Skills Section -->
                            <section id="skills" class="section wow fadeInLeft">
                                <div class="card hoverable">
                                    <a id="skills-add" class="btn-floating btn-action secondary-color wow fadeInRight" data-toggle="tooltip" data-placement="right" title="Edit">
                                        <i class="fa fa-pencil"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-cogs mr-2"></i> Skills
                                        </h4>
                                        <hr class="my-1">

                                        <div id="skills-detail">
                                            <div class="chip white-text blue">
                                                <strong>Objective-C</strong>
                                                <i class="fa fa-code ml-1"></i>
                                            </div>
                                            <div class="chip white-text blue">
                                                <strong>C#</strong>
                                                <i class="fa fa-code ml-1"></i>
                                            </div>
                                            <div class="chip white-text blue">
                                                <strong>Java</strong>
                                                <i class="fa fa-code ml-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- /.Skills Section -->
                        </div>

                        <div class="col-xl-7">
                            <!-- Experince Section -->
                            <section id="experience" class="section wow fadeInRight">
                                <div class="card hoverable">
                                    <a id="exp-add" class="btn-floating btn-action secondary-color wow fadeInRight" data-toggle="tooltip" data-placement="right" title="Add">
                                        <i class="fa fa-plus" style="margin-top: 7px;"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-briefcase mr-2"></i> Experience
                                        </h4>

                                        <hr class="my-1">

                                        <div id="exp-detail" class="row align-items-center">
                                            <div class="col-sm-2 col-5 text-center">
                                                <i class="fa fa-building fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                            </div>

                                            <div class="col-sm-9 col-5">
                                                <h5>J.Design</h5>
                                                <span>Full-Stack Developer</span><br/>
                                                <small>2012 - Present</small>
                                            </div>

                                            <div class="col-sm-1 col-1 text-center">
                                                <a id="exp-detail-edit" class="fa fa-pencil fa-lg" style="display: none;" data-toggle="tooltip" data-placement="right" title="Edit"></a>
                                            </div>
                                        </div>

                                        <hr class="my-1">

                                        <div id="exp-detail" class="row align-items-center">
                                            <div class="col-sm-2 col-5 text-center">
                                                <i class="fa fa-building fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                            </div>

                                            <div class="col-sm-9 col-5">
                                                <h5>IBM</h5>
                                                <span>Lead Developer</span><br/>
                                                <small>2010 - 2012</small>
                                            </div>

                                            <div class="col-sm-1 col-1 text-center">
                                                <a id="exp-detail-edit" class="fa fa-pencil fa-lg" style="display: none;" data-toggle="tooltip" data-placement="right" title="Edit"></a>
                                            </div>
                                        </div>
                                        
                                        <!-- Exp Add Form -->
                                        <hr id="hr-exp-add-detail" class="my-1" style="display: none;">
                                        <div id="exp-add-detail" class="row align-items-center" style="display: none;">
                                            <div class="col-sm-2 col-5 text-center">
                                                <i class="fa fa-building fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                            </div>

                                            <div class="col-sm-10 col-6">
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <div class="md-form">
                                                            <input id="exp-company" type="text">
                                                            <label for="exp-company">Company</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <div class="md-form">
                                                            <input id="exp-title" type="text">
                                                            <label for="exp-title">Job Title</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-content-center">
                                                    <div class="col-6">
                                                        <div class="md-form">
                                                            <input id="exp-start" type="text" placeholder="Pick Date" class="form-control datepicker">
                                                            <label for="exp-start">Start Date</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="md-form">
                                                            <input id="exp-end" placeholder="Present" value="Present" type="text" class="form-control datepicker">
                                                            <label for="exp-end">End Date</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-content-center text-center">
                                                    <div class="col-12">
                                                        <button id="exp-save" class="btn teal">
                                                            Save <i class="fa fa-check ml-1"></i>
                                                        </button>
                                                        <button id="exp-cancel" id="exp-cancel" class="btn btn-danger">
                                                            Cancel <i class="fa fa-ban ml-1"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.Exp Add Form -->
                                    </div>
                                </div>
                            </section>
                            <!-- Experince Section -->

                            <!-- Education Section -->
                            <section id="education" class="section wow fadeInRight">
                                <div class="card hoverable">
                                    <a id="edu-add" class="btn-floating btn-action secondary-color wow slideInRight" data-toggle="tooltip" data-placement="right" title="Add">
                                        <i class="fa fa-plus" style="margin-top: 7px;"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-graduation-cap mr-2"></i> Education
                                        </h4>

                                        <hr class="my-1">

                                        <div id="edu-detail" class="row align-items-center">
                                            <div class="col-sm-2 col-5 text-center">
                                                <i class="fa fa-book fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                            </div>

                                            <div class="col-sm-9 col-5">
                                                <h5>Nanyang Polytechnic</h5>
                                                <span>Diploma &nbsp;&bull;&nbsp;</span>
                                                <span>Business Informatics</span><br/>
                                                <small>2012 - Present</small>
                                            </div>

                                            <div class="col-sm-1 col-1 text-center">
                                                <a id="edu-detail-edit" style="display: none;" class="fa fa-pencil fa-lg" data-toggle="tooltip" data-placement="right" title="Edit"></a>
                                            </div>
                                        </div>

                                        <hr class="my-1">

                                        <div id="edu-detail" class="row align-items-center">
                                            <div class="col-sm-2 col-5 text-center">
                                                <i class="fa fa-book fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                            </div>

                                            <div class="col-sm-9 col-5">
                                                <h5>Nanyang Polytechnic</h5>
                                                <span>Diploma &nbsp;&bull;&nbsp;</span>
                                                <span>Business Informatics</span><br/>
                                                <small>2012 - Present</small>
                                            </div>

                                            <div class="col-sm-1 col-1 text-center">
                                                <a id="edu-detail-edit" style="display: none;" class="fa fa-pencil fa-lg" data-toggle="tooltip" data-placement="right" title="Edit"></a>
                                            </div>
                                        </div>
                                        
                                        <!-- Edu Add Form -->
                                        <hr id="hr-edu-add-detail" class="my-1" style="display: none;">
                                        <div id="edu-add-detail" class="row align-items-center" style="display: none;">
                                            <div class="col-sm-2 col-5 text-center">
                                                <i class="fa fa-book fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                            </div>

                                            <div class="col-sm-10 col-6">
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <div class="md-form">
                                                            <input id="edu-school" type="text">
                                                            <label for="edu-school">School</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-content-center">
                                                    <div class="col-6">
                                                        <div class="md-form">
                                                            <input id="edu-degree" type="text">
                                                            <label for="edu-degree">Degree</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="md-form">
                                                            <input id="exp-field" type="text">
                                                            <label for="exp-field">Field Of Study</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-content-center">
                                                    <div class="col-6">
                                                        <div class="md-form">
                                                            <input id="exp-start" type="text" placeholder="Pick Date" class="form-control datepicker">
                                                            <label for="exp-start">Start Date</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="md-form">
                                                            <input id="exp-end" placeholder="Present" value="Present" type="text" class="form-control datepicker">
                                                            <label for="exp-end">End Date</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-content-center text-center">
                                                    <div class="col-12">
                                                        <button id="edu-save" class="btn teal">
                                                            Save <i class="fa fa-check ml-1"></i>
                                                        </button>
                                                        <button id="edu-cancel" id="exp-cancel" class="btn btn-danger">
                                                            Cancel <i class="fa fa-ban ml-1"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.Edu Add Form -->
                                    </div>
                                </div>
                            </section>
                            <!-- Education Section -->
                        </div>
                    </div>
                </section>
                <!-- /.General Section -->
                
                
            </div>
        </main>
        
        <?php
            include('assets/modular/footer.php');
            include('assets/modular/scripts.html');
        ?>
    </body>
</html>