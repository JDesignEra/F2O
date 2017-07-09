//MDBootstrap Related
$(document).ready(function() {
    "use strict";

    // Select Initialization
    $(document).ready(function () {
        $('.select').material_select();
    });

    // Data Picker Initialization
    $('.datepicker').pickadate({
        selectYears: true,
        selectMonth: false,
        formatSubmit: 'yyyy-mm-dd',
        hiddenName: true,
    });

    //#exp-end_root
    /*
    $('#exp-end_root .picker__button--today').click(function() {
        console.log('passed');
        var picker = $('#exp-end').pickadate('picker');
        picker.set('select', 'Present');
    });
    */
});

$(document).ready(function() {
    // AJAX
    //Edit Basic Profile Form
    $('#profile form#e-basic-form').submit(function(e) {
        e.preventDefault();

        var result = $('#profile form#e-basic-form').serialize();

        $.ajax ({
            type: 'POST',
            url: 'assets/php/editBasicProfile.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data);    // Debugging Purpose

                if (data == 'eb-fail') {
                    toastr.error('There are no changes to be made');
                }
                else if (data == 'eb-pass') {
                    toastr.success('Changes saved');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);
                }
            }
        });
    });

    // Social-Add Form
    $('#profile form#a-social-form').submit(function(e) {
        e.preventDefault();

        var result = $('#profile form#a-social-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/addSocialLinks.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data);  //Debugging Purpose

                if (data == 'type-empty') {
                    toastr.warning('Select social platform');
                }
                else if (data == 'link-empty') {
                    toastr.warning('Empty Link ID / Username / Phone No. field');
                }
                else if (data == 'pass') {
                    toastr.success('Social profile added successfully');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);
                }
            }
        });
    });

    // Experience Add Form
    $('#profile form#add-exp-form').submit(function(e) {
        e.preventDefault();

        var result = $('#profile #add-exp-form').serialize();
        console.log(result);

        $.ajax({
            type: 'POST',
            url: 'assets/php/addExperience.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                console.log(data);  //Debugging Purpose

                if (data == 'company-empty') {
                    toastr.warning('Empty company field');
                }
                else if (data == 'title-empty') {
                    toastr.warning('Empty job title field');
                }
                else if (data == 'start-empty') {
                    toastr.warning('Empty start date');
                }
                else if (data == 'end-empty') {
                    toastr.warning('Empty end date');
                }
                else if (data == 'start-fail') {
                    toastr.error('Invalid start date format');
                }
                else if (data == 'end-fail') {
                    toastr.error('Invalid end date format');
                }
                else if (data == 'pass') {
                    toastr.success('Job experience added successfully');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);
                }
            }
        });
    });

    // Populate Social Form Select
    $.ajax ({
        type: 'POST',
        url: 'assets/php/getSocialTypes.php',
        dataType: 'json',
        success: function(data) {
            //console.log(data);    // Debugging Purpose

            // Populate Social Edit Social Select Dropdown list
            for (var i = 0; i < data.s_type.length; i++) {
                $('#profile div#social-add-detail select#a-social-type').append(
                    '<option value=' + data.s_type[i] + '>' + data.s_type[i] + "</option>"
                );
            }

             $('#a-social-type.select').material_select('destroy');
             $('#a-social-type.select').material_select();
        }
    });
    // /.AJAX

    // Basic-Detail Section
    // Change Cover Photo
    $('#profile #basic-detail.section #cp-cover-edit').mouseenter(function() {
        $('#profile #basic-detail.section #cp-cover-edit button#change-cover').addClass('animated flipOutX').one(animationEnd, function() {
            $('#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipOutX').hide();

            setTimeout(function () {
                $('#profile #basic-detail #change-cover span').show();
                $('#profile #basic-detail.section #cp-cover-edit button#change-cover').show().addClass('animated flipInX').one(animationEnd, function() {
                    $('#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipInX');
                });
            }, 50);
        });

        // On Mouse Leave
        $('#profile #basic-detail.section #cp-cover-edit').mouseleave(function() {
            $('#profile #basic-detail.section #cp-cover-edit button#change-cover').addClass('animated flipOutX').one(animationEnd, function() {
                $('#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipOutX').hide();

                setTimeout(function () {
                    $('#profile #basic-detail #change-cover span').hide();
                    $('#profile #basic-detail.section #cp-cover-edit button#change-cover').show().addClass('animated flipInX').one(animationEnd, function() {
                        $('#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipInX');
                    });
                }, 50);
            });
        });
    });

    // Change Profile Photo
    $('#profile #basic-detail #cp-avatar-edit').mouseenter(function () {
        if ($('#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeInDown') || $('#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeOutUp')) {
            $('#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
        }

        $('#profile #basic-detail #cp-avatar-edit #change-avatar').show().addClass('animated fadeInDown').one(animationEnd, function () {
            $('#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeInDown fadeOutUp');
        });

        // On Mouse Leave
        $('#profile #basic-detail #cp-avatar-edit').mouseleave(function () {
            if ($('#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeOutUp') || $('#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeInDown')) {
                $('#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
            }

            $('#profile #basic-detail #cp-avatar-edit #change-avatar').addClass('animated fadeOutUp').one(animationEnd, function () {
                $('#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown').hide();
            });
        });
    });

    // cp-basic-form
    $('#profile #basic-detail.section a#cp-basic-edit').click(function () {
        var nowHeight = $('#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(true),
            newHeight = $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').outerHeight(true) + parseFloat($('#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom')) + parseFloat($('#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom'));

        if (!$('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').is(':visible')) {
            // Edit Button Animation
            $('#profile #basic-detail.section a#cp-basic-edit').addClass('animated flipOutY').one(animationEnd, function() {
                $('#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('#profile #basic-detail.section a#cp-basic-edit').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipInY');
                    });
                }, 100);
            });

            // Expand Animation
            $('#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').fadeOut(250);

            // cp-basic-form Animate In
            $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').show().addClass('animated fadeInUp').one(animationEnd, function() {
                $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').removeClass('animated fadeInUp');
            });
        }
    });

    // cp-basic-form Cancel Button
    $('#profile #basic-detail #cp-basic-form-cancel').click(function () {
        var nowHeight = $('#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(true),
            newHeight = $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').outerHeight(true) + parseFloat($('#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom')) + parseFloat($('#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom'));

        if ($('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').is(':visible')) {
            // Edit Button Animation
            $('#profile #basic-detail.section a#cp-basic-edit').addClass('animated flipOutY').one(animationEnd, function() {
                $('#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('#profile #basic-detail.section a#cp-basic-edit').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipInY');
                    });
                }, 100);
            });

            // Shrink Animation
            $('#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            // cp-basic-def Animation
            $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').hide();

            // cp-basic-form Animate In
            $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').show().addClass('animated fadeInUp').one(animationEnd, function() {
                $('#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').removeClass('animated fadeInUp');
            });
        }
    });
    // /.Basic-Detail Section

    // Social Section
    // social-add
    $('#profile #social.section a#social-add').click(function () {
        if (!$('#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('#profile #social.section div#cp-social .card-block').outerHeight(),
                newHeight = $('#profile #social.section div#cp-social.card div#social-add-detail').show().outerHeight(true) + $('#profile div#cp-social.card hr#hr-social-add-detail').outerHeight(true) + $('#profile #social.section div#cp-social div.card-block h4.card-title').outerHeight() + parseFloat($('#profile div#cp-social .card-block').css('padding-bottom')) + parseFloat($('#profile div#cp-social .card-block').css('padding-top'));

            $('#hr-social-add-detail').fadeIn(1000);
            $('#profile #social.section a#social-add').addClass('animated flipOutY').one(animationEnd, function() {
                $('#profile #social.section a#social-add').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('#profile #social.section a#social-add').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('#profile #social.section a#social-add').removeClass('animated flipInY');
                    });
                }, 100);
            });

            $('#profile #social.section div#cp-social.card .card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            $('#profile #social.section div#social-content').hide();

            $('#profile #social.section div#social-add-detail').show().addClass('animated fadeInUp').one(animationEnd, function () {
                $('#profile #social.section div#social-add-detail').removeClass('animated fadeInUp');
            });
        }
    });

    // sad-cancel
    $('#profile #social.section #social-add-detail #sad-cancel').click(function () {
        if ($('#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('#profile div#cp-social .card-block').outerHeight(),
                newHeight = $('#profile div#cp-social.card div#social-content').show().outerHeight(true) + $('#profile #social.section div#cp-social div.card-block h4.card-title').outerHeight(true) + parseFloat($('#profile div#cp-social .card-block').css('padding-bottom')) + parseFloat($('#profile div#cp-social .card-block').css('padding-top'));

            $('#hr-social-add-detail').fadeOut(1000);
            $('#profile #social.section a#social-add').addClass('animated flipOutY').one(animationEnd, function() {
                $('#profile #social.section a#social-add').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('#profile #social.section a#social-add').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('#profile #social.section a#social-add').removeClass('animated flipInY');
                    });
                }, 100);
            });

            $('#profile #social.section div#cp-social.card .card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            $('#profile #social.section div#social-add-detail').hide();

            $('#profile #social.section div#social-content').addClass('animated fadeInUp').one(animationEnd, function() {
                $('#profile #social.section div#social-content').removeClass('animated fadeInUp');
            });
        }
    });

    // social-edit
    $('#profile #social.section').mouseenter(function () {
        $('#profile #social.section #social-detail a#social-detail-edit').fadeIn(250);
    });

    $('#profile #social.section').mouseleave(function () {
        $('#profile #social.section #social-detail a#social-detail-edit').fadeOut(250);
    });

    //Social Form Dynamic Input
    $('#profile form#a-social-form select#a-social-type').change(function() {
        $selOpt = $('#profile form#a-social-form div.select-wrapper ul.select-dropdown li.active.selected').text().toLowerCase();
        $inputURL = $('#profile form#a-social-form input#a-social-link');

        $linkFront = $('#profile form#a-social-form span#a-social-link-front');
        $linkBack = $('#profile form#a-social-form span#a-social-link-back');

        if ($selOpt == 'behance') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://behance.net/');
        }
        else if ($selOpt == 'bitbucket') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://bitbucket.org/');
        }
        else if ($selOpt == 'deviantart') {
            $inputURL.attr('placeholder', 'Link ID');
            linkBackShow('.deviantart.com');
        }
        else if ($selOpt == 'dribbble') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://dribbble.com/');
        }
        else if ($selOpt == 'email') {
            $inputURL.attr('placeholder', 'Email Address');
            linkFrontShow('mailto:');
        }
        else if ($selOpt == 'etsy') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.etsy/com/shop/');
        }
        else if ($selOpt == 'facebook') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.facebook.com/');
        }
        else if ($selOpt == 'flickr') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.flickr.com/people/');
        }
        else if ($selOpt == 'github') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://github.com/');
        }
        else if ($selOpt == 'google+') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://plus.google.com/');
        }
        else if ($selOpt == 'instagram') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.instagram.com/');
        }
        else if ($selOpt == 'linkedin') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.linkedin.com/in/');
        }
        else if ($selOpt == 'pinterest') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.pinterest.com/');
        }
        else if ($selOpt == 'skype') {
            $inputURL.attr('placeholder', 'Username');
            linkFrontShow('Skype:');
        }
        else if ($selOpt == 'snapchat') {
            $inputURL.attr('placeholder', 'Username');
            linkFrontShow('https://www.snapchat/com/add/');
        }
        else if ($selOpt == 'soundcloud') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.soundcloud.com/');
        }
        else if ($selOpt == 'telegram') {
            $inputURL.attr('placeholder', 'Username');
            linkFrontShow('https://web.telegram.org/#/im?p=');
        }
        else if ($selOpt == 'tumblr') {
            $inputURL.attr('placeholder', 'Link ID');
            linkBackShow('.tumblr.com');
        }
        else if ($selOpt == 'twitter') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://twitter.com/');
        }
        else if ($selOpt == 'website') {
            $inputURL.attr('placeholder', 'URL');

            $linkFront.addClass('animated flipOutX').one(animationEnd, function() {
                $linkFront.hide().removeClass('animated flipOutX');
            });
            $linkBack.addClass('animated flipOutX').one(animationEnd, function() {
                $linkBack.hide().removeClass('animated flipOutX');
            });
        }
        else if ($selOpt == 'whatsapp') {
            $inputURL.attr('placeholder', 'Calling Code with Number');
            linkFrontShow('https://api.whatsapp.com/send?phone=');
        }
        else if ($selOpt == 'youtube') {
            $inputURL.attr('placeholder', 'Link ID');
            linkFrontShow('https://www.yotube.com/channel/');
        }

        // Functions for Show animation
        function linkFrontShow(url) {
            // Check if back is visible
            if ($linkBack.is(':visible')) {
                $linkBack.addClass('animated flipOutX').one(animationEnd, function() {
                    $linkBack.hide().removeClass('animted flipOutX');
                });
            }
            // Next check if front is visible initially
            if ($linkFront.is(':visible')) {
                $linkFront.addClass('animated flipOutX').one(animationEnd, function() {
                    $linkFront.hide().removeClass('animated flipOutX');

                    setTimeout(function () {
                        $linkFront.html(url);
                        $linkFront.show().addClass('animated flipInX').one(animationEnd, function() {
                            $linkFront.removeClass('animated flipInX');
                        });
                    }, 100);
                });
            }
            else {
                $linkFront.html(url);
                $linkFront.show().addClass('animated flipInX').one(animationEnd, function() {
                    $linkFront.removeClass('animated flipInX');
                });
            }
        }

        function linkBackShow(url) {
            // Check if front is visible
            if ($linkFront.is(':visible')) {
                $linkFront.addClass('animated flipOutX').one(animationEnd, function() {
                    $linkFront.hide().removeClass('animted flipOutX');
                });
            }
            // Next check if back is visible initially
            if ($linkBack.is(':visible')) {
                $linkBack.show().addClass('animated flipOutX').one(animationEnd, function() {
                    $linkBack.removeClass('animated flipOutX');

                    setTimeout(function () {
                        $linkBack.html(url);
                        $linkBack.addClass('animated flipInX').one(animationEnd, function() {
                            $linkBack.removeClass('animated flipInX');
                        });
                    }, 100);
                });
            }
            else {
                $linkBack.html(url);
                $linkBack.show().addClass('animated flipInX').one(animationEnd, function() {
                    $linkBack.removeClass('animated flipInX');
                });
            }
        }
    });
    // /.Social Section

    // Experience Section
    // exp-add
    animateGenCol6('a#exp-add', 'experience', 'exp', 'expand');

    // exp-cancel
    animateGenCol6('button#exp-cancel', 'experience', 'exp', 'shrink');

    // exp-present (Experience Form Present Checkbox)
    $('#profile #experience.section #exp-add-detail #exp-present').change(function() {
        if (this.checked) {
            $('#profile #experience.section #exp-add-detail input[type="hidden"][name="exp-end"]').val('Present');
            $('#profile #experience.section #exp-add-detail input#exp-end').prop('disabled', true).prop('placeholder', 'Present');
        }
        else {
            $('#profile #experience.section #exp-add-detail input[type="hidden"][name="exp-end"]').val('');
            $('#profile #experience.section #exp-add-detail input#exp-end').prop('disabled', false).prop('placeholder', 'Pick Date');
        }
    });

    // exp-edit (Edit icon annimation fade-in and out)
    $('#profile #experience.section').mouseenter(function () {
        $('#profile #experience.section #exp-detail a#exp-detail-edit').fadeIn(250);
    });

    $('#profile #experience.section').mouseleave(function () {
        $('#profile #experience.section #exp-detail a#exp-detail-edit').fadeOut(250);
    });
    // /.Experience Section

    // Education Section
    // edu-add
    animateGenCol6('a#edu-add', 'education', 'edu', 'expand');

    // edu-cancel
    animateGenCol6('button#edu-cancel', 'education', 'edu', 'shrink');
    // /.Education Section

    // edu-edit
    $('#profile #education.section').mouseenter(function () {
        $('#profile #education.section #edu-detail a#edu-detail-edit').fadeIn(250);
    });

    $('#profile #education.section').mouseleave(function () {
        $('#profile #education.section #edu-detail a#edu-detail-edit').fadeOut(250);
    });
    // /.Education Section

    // General Section Form Animation
    function animateGenCol6(target, secID, subID, shrinkExpand) {
        //Expand
        if (shrinkExpand === 'expand') {
            $('#profile #' + secID + '.section ' + target).click(function() {
                var nowHeight = $('#profile #' + secID + '.section div.card .card-block').outerHeight(),
                    newHeight = nowHeight + $('#profile #' + secID + '.section div#' + subID + '-add-detail').outerHeight() + $('#profile #' + secID + '.section div.card .card-block hr#hr-' + subID + '-add-detail').outerHeight(true);

                $('#hr-' + subID + '-add-detail').fadeIn(1000);
                $('#profile #' + secID + '.section a#' + subID + '-add').addClass('animated flipOutY').one(animationEnd, function() {
                    $('#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipOutY').hide();

                    setTimeout(function () {
                        $('#profile #' + secID + '.section a#' + subID + '-add').show().addClass('animated flipInY').one(animationEnd, function() {
                            $('#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipInY');
                        });
                    }, 100);
                });

                //Expand Animation
                if (!$('#profile #' + secID + '.section div#' + subID + '-add-detail').is(':visible')) {
                    $('#profile #' + secID + '.section div.card-block').height(nowHeight).animate({
                        height: newHeight
                    }, 1000);
                }

                $('#profile #' + secID + '.section div#' + subID + '-add-detail').show();

                $('#profile #' + secID + '.section div#' + subID + '-add-detail').addClass('animated fadeInUp').one(animationEnd, function () {
                    $('#profile #' + secID + '.section a#' + subID + '-add').show();
                    $('#profile #' + secID + '.section div#' + subID + '-add-detail').removeClass('animated fadeInUp');
                });
            });
        }

        if (shrinkExpand === 'shrink') {
            $('#profile #' + secID + '.section #' + subID + '-add-detail  ' + target).click(function () {
                var nowHeight = $('#profile #' + secID + '.section div.card .card-block').outerHeight(),
                    newHeight = nowHeight - $('#profile #' + secID + '.section div#' + subID + '-add-detail').outerHeight() - $('#profile #' + secID + '.section div.card .card-block hr#hr-' + subID + '-add-detail').outerHeight(true);

                $('#hr-' + subID + '-add-detail').fadeOut(1000);
                $('#profile #' + secID + '.section a#' + subID + '-add').addClass('animated flipOutY').one(animationEnd, function() {
                    $('#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipOutY').hide();

                    setTimeout(function () {
                        $('#profile #' + secID + '.section a#' + subID + '-add').show().addClass('animated flipInY').one(animationEnd, function() {
                            $('#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipInY');
                        });
                    }, 100);
                });

                //Shrink Animation
                if ($('#profile #' + secID + '.section div#' + subID + '-add-detail').is(':visible')) {
                    $('#profile #' + secID + '.section div.card-block').height(nowHeight).animate({
                        height: newHeight
                    }, 1000);
                }

                $('#profile #' + secID + '.section div#' + subID + '-add-detail').addClass('animated fadeOutDown').one(animationEnd, function () {
                    $('#profile #' + secID + '.section div#' + subID + '-add-detail').hide();
                    $('#profile #' + secID + '.section div#' + subID + '-add-detail').removeClass('animated fadeOutDown');
                });
            });
        }
    }
    // /.General Section Form Animation

    // Fix Animation End Detection Issue
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
});
