<!DOCTYPE html>
<html lang="en">
    <!-- Head, Navigation & Intro Section -->
    <?php
        //$title = "Profile [1]";
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
                                    <!-- Default -->
                                    <div id="cp-basic-def">
                                        <h4 id="p-name">
                                        </h4>
                                        <h5 id="p-title"></h5>
                                        <hr>
                                        <p id="p-bio"></p>
                                    </div>
                                    <!-- /.Default -->

                                    <!-- Form -->
                                    <div id="cp-basic-form" style="display: none;">
                                        <form id="e-basic-form" method="post">
                                            <div id="form-name" class="md-form">
                                                <input id="e-name" name="e-name" type="text" maxlength="50" length="50" placeholder="">
                                                <label for="e-name">Name</label>
                                            </div>
                                            <div id="form-title" class="md-form">
                                                <input id="e-title" name="e-title" type="text" maxlength="50" length="50" placeholder="">
                                                <label for="e-title">Job Title</label>
                                            </div>
                                            <hr>
                                            <div id="form-title" class="md-form">
                                                <textarea id="e-bio" name="e-bio" class="md-textarea" type="text" maxlength="255" length="255" placeholder=""></textarea>
                                                <label for="e-bio">Summary</label>
                                            </div>
                                            <button class="btn teal">
                                                Save <i class="fa fa-check ml-1"></i>
                                            </button>
                                            <button id="cp-basic-form-cancel" class="btn btn-danger" type="reset">
                                                Cancel <i class="fa fa-ban ml-1"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <!-- /.Form -->
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
                        <div class="col-11">
                            <div class="row justify-content-center">
                                <!-- Message Card -->
                                <div class="col-lg-6">
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
                                                <button class="btn btn-cyan" data-toggle="modal" data-target="#messages-modal">
                                                    Open Inbox&nbsp;<i class="fa fa-envelope-open ml-1"></i>
                                                </button>
                                            </div>
                                            <!-- /.Card Content -->
                                        </div>
                                    </section>
                                </div>
                                <!-- /.Message Card -->

                                <!-- Job Card -->
                                <div class="col-lg-6">
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
                        </div>
                    </div>
                </section>
                <!-- /.Misc Section -->

                <!-- General Section -->
                <section id="general" class="section">
                    <div class="row justify-content-center">
                        <div class="col-xl-5">
                        <!-- Social Section -->
                            <section id="social" class="section wow fadeInLeft">
                                <div id="cp-social" class="card hoverable">
                                    <a id="social-add" class="btn-floating btn-action secondary-color" data-toggle="tooltip" data-placement="right" title="Add">
                                        <i class="fa fa-plus" style="margin-top: 7px;"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-share-alt mr-2"></i> Social Links
                                        </h4>

                                        <!-- Social Contents -->
                                        <div id="social-content">
                                        </div>
                                        <!-- /.Social Contents -->

                                        <!-- Add Social Form -->
                                        <hr id="hr-social-add-detail" class="my-1" style="display: none;">
                                        <form id="a-social-form" method="post">
                                            <div id="social-add-detail" class="row justify-content-center" style="display: none;">
                                                <div class="col-4">
                                                    <select id="a-social-type" name="social-type" class="select">
                                                        <option selected disabled>Select Platform</option>
                                                    </select>
                                                </div>
                                                <div class="col-8">
                                                    <div class="md-form input-group">
                                                        <span id="a-social-link-front" class="input-group-addon" style="display: none;"></span>

                                                        <input id="a-social-link" name="social-link" type="text" class="form-control" placeholder="Link ID / Username / Phone No.">

                                                        <span id="a-social-link-back" class="input-group-addon" style="display: none;"></span>
                                                    </div>
                                                </div>

                                                <button id="sad-save" class="btn btn-md teal">
                                                    Save <i class="fa fa-check ml-1"></i>
                                                </button>
                                                <button id="sad-cancel" class="btn btn-md btn-danger" type="reset">
                                                    Cancel <i class="fa fa-ban ml-1"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <!-- /.Add Social Form -->
                                    </div>
                                </div>
                            </section>
                            <!-- /.Social Section -->

                            <!-- Skills Section -->
                            <section id="skills" class="section wow fadeInLeft">
                                <div id="cp-skills" class="card hoverable">
                                    <a id="skills-edit" class="btn-floating btn-action secondary-color" data-toggle="tooltip" data-placement="right" title="Edit">
                                        <i class="fa fa-pencil"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-cogs mr-2"></i> Skills
                                        </h4>

                                        <!-- Skills Content -->
                                        <div id="skills-content">
                                        </div>
                                        <!-- /.Skills Content -->

										<hr id="hr-skills-add-detail" class="my-1" style="display: none;">
										<form id="skills-form" method="post" style="display: none;">
                                            <table id="skills-table" class="table table-sm table-hover">
                                                <thead class="primary-color text-white">
                                                    <tr>
                                                        <th></th>
                                                        <th>Skills</th>
                                                        <th>Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>

                                            <hr class="my-1">
                                            <div class="row justify-content-end text-center">
                                                <div class="col-12">
                                                    <button id="skills-add-btn" class="btn cyan" type="button">Add <i class="fa fa-plus ml-1"></i></button>
                                                    <button id="skills-del-btn" class="btn btn-danger" type="button">Delete <i class="fa fa-trash ml-1"></i></button>
                                                    <button id="skills-save-btn" class="btn teal" type="button">Save <i class="fa fa-check ml-1"></i></button>
                                                </div>
                                            </div>
										</form>
                                    </div>
                                </div>
                            </section>
                            <!-- /.Skills Section -->
                        </div>

                        <div class="col-xl-6">
                            <!-- Experience Section -->
                            <section id="experience" class="section wow fadeInRight">
                                <div class="card hoverable">
                                    <a id="exp-add" class="btn-floating btn-action secondary-color" data-toggle="tooltip" data-placement="right" title="Add">
                                        <i class="fa fa-plus" style="margin-top: 7px;"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-briefcase mr-2"></i> Experience
                                        </h4>

                                        <!-- Experience Contents -->
                                        <div id="exp-content">
                                        </div>
                                        <!-- /.Experience Contents -->

                                        <!-- Exp Add Form -->
                                        <hr id="hr-exp-add-detail" class="my-1" style="display: none;">
                                        <form id="add-exp-form" method="post">
                                            <div id="exp-add-detail" class="row align-items-center" style="display:none;">
                                                <div class="col-12 text-center">
                                                    <div class="row align-items-center">
                                                        <div class="col-sm-2 col-5 text-center">
                                                            <i class="fa fa-building fa-3x z-depth-1 blue darken-1 hoverable"></i>
                                                        </div>

                                                        <div class="col-sm-10 col-6">
                                                            <div class="row justify-content-center">
                                                                <div class="col-12">
                                                                    <div class="md-form">
                                                                        <input id="exp-company" name="exp-company" class="form-control" type="text">
                                                                        <label for="exp-company">Company</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row justify-content-center">
                                                                <div class="col-12">
                                                                    <div class="md-form">
                                                                        <input id="exp-title" name="exp-title" class="form-control" type="text">
                                                                        <label for="exp-title">Job Title</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row justify-content-center">
                                                                <div class="col-6">
                                                                    <div class="md-form">
                                                                        <input id="exp-start" name="exp-start" type="text" placeholder="Pick Date" class="form-control datepicker">
                                                                        <label for="exp-start">Start Date</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="md-form">
                                                                        <input id="exp-end" name="exp-end" type="text" placeholder="Pick Date" type="text" class="form-control datepicker">
                                                                        <label for="exp-end">End Date</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row text-left align-items-start">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input id="exp-present" type="checkbox">
                                                                        <label for="exp-present">I currently work here</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row justify-content-center text-center">
                                                        <div class="col-12">
                                                            <button id="exp-save" type="submit" class="btn teal">
                                                                Save <i class="fa fa-check ml-1"></i>
                                                            </button>
                                                            <button id="exp-cancel" class="btn btn-danger" type="reset">
                                                                Cancel <i class="fa fa-ban ml-1"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <!-- /.Exp Add Form -->
                                    </div>
                                </div>
                            </section>
                            <!-- Experience Section -->

                            <!-- Education Section -->
                            <section id="education" class="section wow fadeInRight">
                                <div class="card hoverable">
                                    <a id="edu-add" class="btn-floating btn-action secondary-color" data-toggle="tooltip" data-placement="right" title="Add">
                                        <i class="fa fa-plus" style="margin-top: 7px;"></i>
                                    </a>

                                    <div class="card-block">
                                        <h4 class="card-title">
                                            <i class="fa fa-graduation-cap mr-2"></i> Education
                                        </h4>

										<!-- Education Contents -->
										<div id="edu-content">
										</div>
										<!-- /.Education Contents -->

                                        <!-- Edu Add Form -->
                                        <hr id="hr-edu-add-detail" class="my-1" style="display: none;">
										<form id="add-edu-form" method="post">
											<div id="edu-add-detail" class="row align-items-center" style="display:none;">
	                                            <div class="col-12">
	                                                <div class="row align-items-center">
	                                                    <div class="col-sm-2 col-5 text-center">
	                                                        <i class="fa fa-book fa-3x z-depth-1 blue darken-1 hoverable"></i>
	                                                    </div>

	                                                    <div class="col-sm-10 col-6">
	                                                        <div class="row justify-content-center">
	                                                            <div class="col-12">
	                                                                <div class="md-form">
	                                                                    <input id="edu-school" name="edu-school" type="text">
	                                                                    <label for="edu-school">School</label>
	                                                                </div>
	                                                            </div>
	                                                        </div>

	                                                        <div class="row justify-content-center">
	                                                            <div class="col-6">
	                                                                <div class="md-form">
	                                                                    <input id="edu-degree" name="edu-degree" type="text">
	                                                                    <label for="edu-degree">Degree</label>
	                                                                </div>
	                                                            </div>
	                                                            <div class="col-6">
	                                                                <div class="md-form">
	                                                                    <input id="edu-field" name="edu-field" type="text">
	                                                                    <label for="edu-field">Field Of Study</label>
	                                                                </div>
	                                                            </div>
	                                                        </div>

	                                                        <div class="row justify-content-center">
	                                                            <div class="col-6">
	                                                                <div class="md-form">
	                                                                    <input id="edu-start" name="edu-start" type="text" placeholder="Pick Date" class="form-control datepicker">
	                                                                    <label for="edu-start">Start Date</label>
	                                                                </div>
	                                                            </div>
	                                                            <div class="col-6">
	                                                                <div class="md-form">
	                                                                    <input id="edu-end" name="edu-end" placeholder="Pick Date" type="text" class="form-control datepicker">
	                                                                    <label for="edu-end">End Date</label>
	                                                                </div>
	                                                            </div>
	                                                        </div>

															<div class="row text-left align-items-start">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input id="edu-present" type="checkbox">
                                                                        <label for="edu-present">I currently study here</label>
                                                                    </div>
                                                                </div>
                                                            </div>

	                                                    </div>
	                                                </div>

	                                                <div class="row justify-content-center text-center">
	                                                    <div class="col-12">
	                                                        <button id="edu-save" class="btn teal" type="submit">
	                                                            Save <i class="fa fa-check ml-1"></i>
	                                                        </button>
	                                                        <button id="edu-cancel" id="edu-cancel" class="btn btn-danger" type="reset">
	                                                            Cancel <i class="fa fa-ban ml-1"></i>
	                                                        </button>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
										</form>
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
            include('assets/modular/scripts.php');
        ?>
    </body>
</html>
