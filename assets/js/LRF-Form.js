/*jslint browser: true*/
/*global $, jQuery, WOW, console*/
$(document).ready(function() {
    // Fix animation End issue
    var animationEnd = (function(el) {
        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "mozAnimationEnd",
            "WebkitAnimation": "webkitAnimationEnd"
        };

        for(var t in animations) {
            if(el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.createElement("fakeelement"));

    // Register
    $('form#regForm').submit(function(e) {
        e.preventDefault();

        var result = $('form#regForm').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/register.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'exist') {
                    toastr.error('Email is registered');
                }
                else if (data == 'name-empty') {
                    toastr.warning('Empty name field');
                }
                else if (data == 'email-empty') {
                    toastr.warning('Empty email field');
                }
                else if (data == 'email-fail') {
                    toastr.errorerror('Wrong email format');
                }
                else if (data == 'pass-empty') {
                    toastr.warning('Empty password field');
                }
                else if (data == 'pass-min') {
                    toastr.error('Minimum password characters is 8');
                }
                else if (data == 'pass-max') {
                    toastr.error('Maximum password characters is 32');
                }
                else if (data == 'pass') {
                    $('#login-reg-fgtpass').modal('hide');
                    toastr.success('Registered successfully');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);
                }
            }
        });
    });

    // Login
    $('form#loginForm').submit(function(e) {
        e.preventDefault();

        var result = $('form#loginForm').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/login.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'email-empty') {
                    toastr.warning('Empty email field');
                }
                else if (data == 'pass-empty') {
                    toastr.warning('Empty password field');
                }
                else if (data == 'email-fail') {
                    toastr.error('Wrong email format');
                }
                else if (data == 'pass-min') {
                    toastr.error('Minimum password characters is 8');
                }
                else if (data == 'pass-max') {
                    toastr.error('Maximum password characters is 32');
                }
                else if (data == 'fail') {
                    toastr.error('Wrong login credentials');
                }
                else if (data == 'pass') {
                    $('#login-reg-fgtpass').modal('hide');
                    toastr.success('Login successfully');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);
                }
            }
        });
    });

    // Resets Forgot Password States on modal dismiss
    $('#login-reg-fgtpass').on('hidden.bs.modal', function() {
        $('#fgtpass-step-1').show();
        $('#fgtpass-step-2').hide();
        $('#fgtpass-step-3').hide();
        $('#fgtpass-step-1').removeClass('animated fadeOutLeft');
        $('#fgtpass-step-2').removeClass('animated fadeOutLeft fadeInRight');
        $('#fgtpass-step-3').removeClass('animated fadeOutLeft fadeInRight');
        $('form#f-pass-form').trigger('reset');
    });


    // Forgot Password Step 1
    $('form#f-email-form').submit(function(e) {
        e.preventDefault();

        var result = $('form#f-email-form').serialize();

        $('div#f-pass-step-1-loader').fadeIn(350);

        $.ajax({
            type: 'POST',
            url: 'assets/php/forgotPass.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'email-empty') {
                    toastr.warning('Empty email field');
                }
                else if (data == 'email-error') {
                    toastr.error('Wrong email format');
                }
                else if (data == 'email-fail') {
                    toastr.error('Email not registered');
                }
                else if (data == 'email-pass') {
                    toastr.success('Check your email');

                    //Animate to Step 2
                    $('#fgtpass-step-1').addClass('animated fadeOutLeft').one(animationEnd, function () {
                        $('#fgtpass-step-1').hide();
                        $('#fgtpass-step-2').show();
                        $('#fgtpass-step-2').addClass('animated fadeInRight');
                        $('#fgtpass-step-1').removeClass('animated fadeOutLeft');
                    });
                }

                $('div#f-pass-step-1-loader').fadeOut(350);
            }
        });
    });

    // Forgot Password Step 2 (Resend)
    $('button#f-code-btn-re').on('click', function() {
        var result = $('form#f-email-form').serialize();

        $('div#f-pass-step-2-loader').fadeIn(350);

        $.ajax({
            type: 'POST',
            url: 'assets/php/forgotPass.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'email-pass') {
                    toastr.success('Check your email');
                }
                else {
                    toastr.error('Close and re-enter your email.');
                }

                $('div#f-pass-step-2-loader').fadeOut(350);
            }
        });
    });

    // Forgot Password Step 2
    $('form#f-code-form').submit(function(e) {
        e.preventDefault();

        var result = $('form#f-code-form, form#f-email-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/forgotPass.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'code-empty') {
                    toastr.warning('Empty verification code field');
                }
                else if (data == 'code-min-max') {
                    toastr.error('Verification code has to be 4 digits');
                }
                else if (data == 'code-pass') {
                    toastr.success('Verification code matched');

                    //Animate to Step 3
                    $('#fgtpass-step-2').addClass('animated fadeOutLeft').one(animationEnd, function () {
                        $('#fgtpass-step-2').hide();
                        $('#fgtpass-step-3').show();
                        $('#fgtpass-step-2').removeClass('animated fadeOutLeft fadeInRight');

                        $('#fgtpass-step-3').addClass('animated fadeInRight').one(animationEnd, function () {
                            $('#fgtpass-step-3').removeClass('animated fadeInRight');
                        });
                    });
                }
            }
        });
    });

    // Forgot Password Step 3
    $('form#f-pass-form').submit(function(e) {
        e.preventDefault();

        var result = $('form#f-code-form, form#f-email-form, form#f-pass-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/forgotPass.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'pass-empty') {
                    toastr.warning('Empty new password field');
                }
                else if (data == 'pass-min') {
                    toastr.error('Minimum password characters is 8');
                }
                else if (data == 'pass-max') {
                    toastr.error('Maximum password characters is 32');
                }
                else if (data == 'pass-pass') {
                    toastr.success('Updated Password successfully');

                    $('form#f-email-form').trigger('reset');
                    $('form#f-code-form').trigger('reset');
                    $('form#f-pass-form').trigger('reset');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);

                    $('#login-reg-fgtpass').modal('hide');
                }
            }
        });
    });
});
