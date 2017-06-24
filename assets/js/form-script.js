/*jslint browser: true*/
/*global $, jQuery, WOW, console*/
$(document).ready(function() {
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
                console.log(data); // Debugging Purpose

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
                    toastr.warning('Wrong email format');
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
                console.log(data); // Debugging Purpose

                if (data == 'email-empty') {
                    toastr.warning('Empty email field');
                }
                else if (data == 'pass-empty') {
                    toastr.warning('Empty password field');
                }
                else if (data == 'email-fail') {
                    toastr.warning('Wrong email format');
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

    // Forgot Password Step 1
    $('form#f-email-form').submit(function(e) {
        e.preventDefault();

        var result = $('form#f-email-form').serialize();
        console.log(result);

        $.ajax({
            type: 'POST',
            url: 'assets/php/forgotPass.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                console.log(data); // Debugging Purpose

                if (data == 'email-empty') {
                    toastr.warning('Empty email field');
                }
                else if (data == 'email-fail') {
                    toastr.warning('Wrong email format');
                }
                else if (data == 'email-none') {
                    toastr.error('Email not registered');
                }
                else if (data == 'email-pass') {
                    toastr.success('Check your email')

                    $('#fgtpass-step-1').addClass('animated fadeOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $('#fgtpass-step-1').hide();
                        $('#fgtpass-step-2').show();
                        $('#fgtpass-step-2').addClass('animated fadeInRight');
                        $('#fgtpass-step-1').removeClass('animated fadeOutLeft');
                    });
                }
            }
        });
    })
});
