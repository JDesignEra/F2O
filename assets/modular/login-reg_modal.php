<!-- Modal -->
<div id="login-reg" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog cascading-modal" role="document">
        <!-- Content -->
        <div class="modal-content">
            <!-- Modal Cascading Tabs -->
            <div class="modal-c-tabs">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs tabs-2 light-blue darken-3" role="tablist">
                    <li class="nav-item">
                        <a id="tab-login" class="nav-link active" data-toggle="tab" href="#panel-login" role="tab"><i class="fa fa-sign-in mr-1"></i> Login</a>
                    </li>
                    <li class="nav-item">
                        <a id="tab-reg" class="nav-link" data-toggle="tab" href="#panel-reg" role="tab"><i class="fa fa-user-plus mr-1"></i> Register</a>
                    </li>
                </ul>
            </div>

            <!-- Tab panels -->
            <div class="tab-content">
                <!--Panel Login-->
                <div id="panel-login" class="tab-pane fade in show active" role="tabpanel">

                    <!--Body-->
                    <div class="modal-body mb-1">
                        <div class="md-form form-sm">
                            <i class="fa fa-envelope prefix"></i>
                            <input type="email" id="l-email" class="form-control">
                            <label for="l-email" required>Email</label>
                        </div>

                        <div class="md-form form-sm">
                            <i class="fa fa-lock prefix"></i>
                            <input type="password" id="l-pass" class="form-control">
                            <label for="l-pass" required>Password</label>
                        </div>
                        <div class="text-center mt-2">
                            <button class="btn btn-secondary">Log in</button>
                        </div>
                    </div>
                    <!--Footer-->
                    <div class="modal-footer display-footer">
                        <div class="options text-center text-md-left mt-1">
                            <p><a class="blue-text">Forgot Password?</a></p>
                        </div>
                        
                        <button type="button" class="btn btn-outline-danger btn-rounded waves-effect ml-auto" data-dismiss="modal">Close <i class="fa fa-times-circle ml-1"></i></button>
                    </div>

                </div>
                <!--/.Panel Login-->

                <!--Panel Register-->
                <div id="panel-reg" class="tab-pane fade" role="tabpanel">

                    <!--Body-->
                    <div class="modal-body">
                        <div class="md-form form-sm">
                            <i class="fa fa-envelope prefix"></i>
                            <input type="email" id="r-email" class="form-control">
                            <label for="r-email" required>Email</label>
                        </div>

                        <div class="md-form form-sm">
                            <i class="fa fa-lock prefix"></i>
                            <input type="text" id="r-pass" class="form-control">
                            <label for="r-pass">Name</label>
                        </div>

                        <div class="md-form form-sm">
                            <i class="fa fa-lock prefix"></i>
                            <input type="password" id="r-pass" class="form-control">
                            <label for="r-pass">Password</label>
                        </div>

                        <div class="text-center form-sm mt-2">
                            <button class="btn btn-info">Register</button>
                        </div>
                        
                        <div class="text-center red-text">
                            *<small>Organisation do not require an account to hire freelancers.</small>
                        </div>
                    </div>
                    
                    <!--Footer-->
                    <div class="modal-footer">
                        <div class="options text-md-left">
                            <p id="a-login" class="pt-1">
                                Already have an account?<br/>
                                <a class="blue-text" data-toggle="tab" href="#panel-login">Log In</a></p>
                        </div>
                        
                        <button type="button" class="btn btn-outline-danger btn-rounded waves-effect ml-auto" data-dismiss="modal">Close <i class="fa fa-times-circle ml-1"></i></button>
                    </div>
                </div>
                <!--/.Panel Register-->
            </div>
        </div>
        <!-- /.Modal Content -->
    </div>
</div>
<!-- /.Modal -->