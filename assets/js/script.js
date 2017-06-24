/*jslint browser: true*/
/*global $, jQuery, WOW, console*/
$(document).ready(function () {
    "use strict";

    // MDBoostrap Related
    // Wow Animation Initialization
    new WOW().init();

    // Tooltips Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Select Initialization
    $(document).ready(function () {
        $('.select').material_select();
    });

    // Data Picker Initialization
    $('.datepicker').pickadate({
        selectYears: true,
        selectMonth: false
    });

    /* Custom Scripts */
    // Global
    // Login Modal, Link on click show Tab.
    $('#a-login').on('click', function () {
        $('#tab-login').tab('show');
    });

    $('#a-reg').on('click', function () {
        $('#tab-reg').tab('show');
    });

    $('#a-reg2').on('click', function () {
        $('#tab-reg').tab('show');
    });

    $('#a-fgtpass').on('click', function () {
        $('#tab-fgtpass').tab('show');
    });

    // Verify Pass Next Button
    $('#f-code-btn').on('click', function () {
        $('#fgtpass-step-2').addClass('animated fadeOutLeft');
        //Delay 800ms
        setTimeout(function () {
            $('#fgtpass-step-2').hide();
            $('#fgtpass-step-3').show();
            $('#fgtpass-step-3').addClass('animated fadeInRight');
            $('#fgtpass-step-2').removeClass('animated fadeOutLeft');
        }, 800);
    });

    // Resets fgtoass-step state
    $('#login-reg-fgtpass').on('hidden.bs.modal', function () {
        $('#fgtpass-step-1').show();
        $('#fgtpass-step-2').hide();
        $('#fgtpass-step-3').hide();
        $('#fgtpass-step-1').removeClass('animated fadeOutLeft');
        $('#fgtpass-step-2').removeClass('animated fadeInRight fadeOutLeft');
        $('#fgtpass-step-3').removeClass('animated fadeInRight fadeOutLeft');
    });

    /* profile.php */
    /* basic-detail Section */
    // Change Cover Photo
    $('body#profile #basic-detail #cp-cover-edit').mouseenter(function () {
        $('body#profile #basic-detail #change-cover span').fadeIn(500);
    });

    $('body#profile #basic-detail #cp-cover-edit').mouseleave(function () {
        $('body#profile #basic-detail #change-cover span').fadeOut(300);
    });

    // Change Profile Photo
    $('body#profile #basic-detail #cp-avatar-edit').mouseenter(function () {
        if ($('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeInDown') || $('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeOutUp')) {
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
        }

        $('body#profile #basic-detail #cp-avatar-edit #change-avatar').show();
        $('body#profile #basic-detail #cp-avatar-edit #change-avatar').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeInDown fadeOutUp');
        });
    });

    $('body#profile #basic-detail #cp-avatar-edit').mouseleave(function () {
        if ($('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeOutUp') || $('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeInDown')) {
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
        }

        $('body#profile #basic-detail #cp-avatar-edit #change-avatar').addClass('animated fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').hide();
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
        });
    });

    // cp-basic-form
    $('body#profile #basic-detail #cp-basic-edit').click(function () {
        $('body#profile #basic-detail #cp-basic-def').fadeOut(500, function () {
            $('body#profile #basic-detail #cp-basic-form').fadeIn(500);
        });

        //Expand Animation
        if (!$('body#profile #basic-detail #cp-basic-form').is(':visible')) {
            var nowHeight = $('body#profile #cp-basic').height(),
                autoHeight = $('body#profile #cp-basic').css('height', 'auto').height() + $('body#profile #cp-basic-form').css('height', 'auto').height() - $('body#profile #cp-basic-def').css('height', 'auto').height();
            $('body#profile #cp-basic').height(nowHeight).animate({
                height: autoHeight
            }, 1000);
        }
    });

    $('body#profile #basic-detail #cp-basic-form-cancel').click(function () {
        $('body#profile #basic-detail #cp-basic-form').fadeOut(500, function () {
            $('body#profile #basic-detail #cp-basic-def').fadeIn(500);
        });

        //Shrink Animation
        if (!$('body#profile #basic-detail #cp-basic-def').is(':visible')) {
            var nowHeight = $('body#profile #cp-basic').height(),
                autoHeight = $('body#profile #cp-basic').css('height', 'auto').height() + $('body#profile #cp-basic-def').css('height', 'auto').height() - $('body#profile #cp-basic-form').css('height', 'auto').height();
            $('body#profile #cp-basic').height(nowHeight).animate({
                height: autoHeight
            }, 1000);
        }
    });

    // Social Section
    // social-add
    $('body#profile #social.section a#social-add').click(function () {
        $('body#profile #social.section a#social-add').hide();

        $('#hr-social-add-detail').fadeIn(400);

        //Expand Animation
        if (!$('body#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('body#profile #social.section div.card .card-block').css('height', 'auto').height(),
                autoHeight = nowHeight + $('body#profile #social.section div#social-add-detail').css('height', 'auto').height();

            $('body#profile #social.section div.card').height(nowHeight).animate({
                height: autoHeight
            }, 500);
        }

        $('body#profile #social.section div#social-add-detail').show();

        $('body#profile #social.section div#social-add-detail').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('body#profile #social.section a#social-add').show();
            $('body#profile #social.section div#social-add-detail').removeClass('animated fadeInUp');
        });
    });
    // sad-cancel
    $('body#profile #social.section #social-add-detail #sad-cancel').click(function () {
        $('body#profile #social.section a#social-add').hide();

        //Shrink Animation
        if ($('body#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('body#profile #social.section div.card .card-block').css('height', 'auto').height(),
                autoHeight = nowHeight - $('body#profile #social.section div#social-add-detail').css('height', 'auto').height();

            $('body#profile #social.section div.card').height(nowHeight).animate({
                height: autoHeight
            }, 500);
        }

        $('#hr-social-add-detail').fadeOut(400);

        $('body#profile #social.section div#social-add-detail').addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('body#profile #social.section a#social-add').show();
            $('body#profile #social.section div#social-add-detail').hide();
            $('body#profile #social.section div#social-add-detail').removeClass('animated fadeOutDown');
        });
    });
    // sad-save
    $('body#profile #social.section #social-add-detail #sad-save').click(function () {
        $('body#profile #social.section a#social-add').hide();

        //Shrink Animation
        if ($('body#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('body#profile #social.section div.card .card-block').css('height', 'auto').height(),
                autoHeight = nowHeight - $('body#profile #social.section div#social-add-detail').css('height', 'auto').height();

            $('body#profile #social.section div.card').height(nowHeight).animate({
                height: autoHeight
            }, 500);
        }

        $('#hr-social-add-detail').fadeOut(400);

        $('body#profile #social.section div#social-add-detail').addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('body#profile #social.section a#social-add').show();
            $('body#profile #social.section div#social-add-detail').hide();
            $('body#profile #social.section div#social-add-detail').removeClass('animated fadeOutDown');
        });
    });

    // social-edit
    $('body#profile #social.section').mouseenter(function () {
        $('body#profile #social.section #social-detail a#social-detail-edit').fadeIn(400);
    });

    $('body#profile #social.section').mouseleave(function () {
        $('body#profile #social.section #social-detail a#social-detail-edit').fadeOut(400);
    });

    function genSecForms(target, secID, subID, shrinkExpand) {
        //Expand
        if (shrinkExpand === 'expand') {
            $('body#profile #' + secID + '.section ' + target).click(function () {
                var nowHeight = $('body#profile #' + secID + '.section div.card .card-block').outerHeight() - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-top')) - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-bottom')),
                    expandHeight = nowHeight + $('body#profile #' + secID + '.section div#' + subID + '-add-detail').outerHeight();

                $('body#profile #' + secID + '.section a#' + subID + '-add').hide();

                $('#hr-' + subID + '-add-detail').fadeIn(400);

                //Expand Animation
                if (!$('body#profile #' + secID + '.section div#' + subID + '-add-detail').is(':visible')) {
                    $('body#profile #' + secID + '.section div.card-block').height(nowHeight).animate({
                        height: expandHeight
                    }, 500);
                }

                $('body#profile #' + secID + '.section div#' + subID + '-add-detail').show();

                $('body#profile #' + secID + '.section div#' + subID + '-add-detail').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('body#profile #' + secID + '.section a#' + subID + '-add').show();
                    $('body#profile #' + secID + '.section div#' + subID + '-add-detail').removeClass('animated fadeInUp');
                });
            });
        }

        if (shrinkExpand === 'shrink') {
            $('body#profile #' + secID + '.section #' + subID + '-add-detail  ' + target).click(function () {
                var nowHeight = $('body#profile #' + secID + '.section div.card .card-block').outerHeight() - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-top')) - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-bottom')),
                    shrinkHeight = nowHeight - $('body#profile #' + secID + '.section div#' + subID + '-add-detail').outerHeight();

                $('body#profile #' + secID + '.section a#' + subID + '-add').hide();

                //Shrink Animation
                if ($('body#profile #' + secID + '.section div#' + subID + '-add-detail').is(':visible')) {
                    $('body#profile #' + secID + '.section div.card-block').height(nowHeight).animate({
                        height: shrinkHeight
                    }, 500);
                }

                $('#hr-' + subID + '-add-detail').fadeOut(400);

                $('body#profile #' + secID + '.section div#' + subID + '-add-detail').addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('body#profile #' + secID + '.section a#' + subID + '-add').show();
                    $('body#profile #' + secID + '.section div#' + subID + '-add-detail').hide();
                    $('body#profile #' + secID + '.section div#' + subID + '-add-detail').removeClass('animated fadeOutDown');
                });
            });
        }
    }

    // Experince Section
    // exp-add
    genSecForms('a#exp-add', 'experience', 'exp', 'expand');

    // exp-cancel
    genSecForms('button#exp-cancel', 'experience', 'exp', 'shrink');

    // exp-save
    genSecForms('button#exp-save', 'experience', 'exp', 'shrink');

    //Education Section
    // edu-add
    genSecForms('a#edu-add', 'education', 'edu', 'expand');

    // edu-cancel
    genSecForms('button#edu-cancel', 'education', 'edu', 'shrink');

    // edu-save
    genSecForms('button#edu-save', 'education', 'edu', 'shrink');

    // exp-edit
    $('body#profile #experience.section').mouseenter(function () {
        $('body#profile #experience.section #exp-detail a#exp-detail-edit').fadeIn(400);
    });

    $('body#profile #experience.section').mouseleave(function () {
        $('body#profile #experience.section #exp-detail a#exp-detail-edit').fadeOut(400);
    });

    // edu-edit
    $('body#profile #education.section').mouseenter(function () {
        $('body#profile #education.section #edu-detail a#edu-detail-edit').fadeIn(400);
    });

    $('body#profile #education.section').mouseleave(function () {
        $('body#profile #education.section #edu-detail a#edu-detail-edit').fadeOut(400);
    });
});
