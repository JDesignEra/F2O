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
    });
});

$(document).ready(function() {

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

    //Add Social Links Form
    $('#profile form#a-social-form').submit(function(e) {
        e.preventDefault();

        var result = $('#profile form#a-social-form').serialize();

        $.ajax ({
            type: 'POST',
            url: 'assets/php/addSocialLinks.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data); // Debugging Purpose

                if (data == 'type-empty') {
                    toastr.warning('Social platform not selected');
                }
                else if (data == 'link-empty') {
                    toastr.warning('Empty Link ID field');
                }
                else if (data == 'fail') {
                    toastr.error('Social Link not added, please try again');
                }
                else if (data == 'pass') {
                    toastr.success('Added Social Link successfully');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 500);
                }
            }
        });
    });

    /* profile.php */
    // Basic-Detail Section
    // Change Cover Photo
    $('body#profile #basic-detail.section #cp-cover-edit').mouseenter(function() {
        $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').addClass('animated flipOutX').one(animationEnd, function() {
            $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipOutX').hide();

            setTimeout(function () {
                $('body#profile #basic-detail #change-cover span').show();
                $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').show().addClass('animated flipInX').one(animationEnd, function() {
                    $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipInX');
                });
            }, 50);
        });

        // On Mouse Leave
        $('body#profile #basic-detail.section #cp-cover-edit').mouseleave(function() {
            $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').addClass('animated flipOutX').one(animationEnd, function() {
                $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipOutX').hide();

                setTimeout(function () {
                    $('body#profile #basic-detail #change-cover span').hide();
                    $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').show().addClass('animated flipInX').one(animationEnd, function() {
                        $('body#profile #basic-detail.section #cp-cover-edit button#change-cover').removeClass('animated flipInX');
                    });
                }, 50);
            });
        });
    });

    // Change Profile Photo
    $('body#profile #basic-detail #cp-avatar-edit').mouseenter(function () {
        if ($('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeInDown') || $('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeOutUp')) {
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
        }

        $('body#profile #basic-detail #cp-avatar-edit #change-avatar').show().addClass('animated fadeInDown').one(animationEnd, function () {
            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeInDown fadeOutUp');
        });

        // On Mouse Leave
        $('body#profile #basic-detail #cp-avatar-edit').mouseleave(function () {
            if ($('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeOutUp') || $('body#profile #basic-detail #cp-avatar-edit #change-avatar').hasClass('fadeInDown')) {
                $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown');
            }

            $('body#profile #basic-detail #cp-avatar-edit #change-avatar').addClass('animated fadeOutUp').one(animationEnd, function () {
                $('body#profile #basic-detail #cp-avatar-edit #change-avatar').removeClass('animated fadeOutUp fadeInDown').hide();
            });
        });
    });

    // cp-basic-form
    $('body#profile #basic-detail.section a#cp-basic-edit').click(function () {
        var nowHeight = $('body#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(true),
            newHeight = $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').outerHeight(true) + parseFloat($('body#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom')) + parseFloat($('body#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom'));

        if (!$('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').is(':visible')) {
            // Edit Button Animation
            $('body#profile #basic-detail.section a#cp-basic-edit').addClass('animated flipOutY').one(animationEnd, function() {
                $('body#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('body#profile #basic-detail.section a#cp-basic-edit').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('body#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipInY');
                    });
                }, 100);
            });

            // Expand Animation
            $('body#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').fadeOut(250);

            // cp-basic-form Animate In
            $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').show().addClass('animated fadeInUp').one(animationEnd, function() {
                $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').removeClass('animated fadeInUp');
            });
        }
    });

    // cp-basic-form Cancel Button
    $('body#profile #basic-detail #cp-basic-form-cancel').click(function () {
        var nowHeight = $('body#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(true),
            newHeight = $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').outerHeight(true) + parseFloat($('body#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom')) + parseFloat($('body#profile #basic-detail.section div#cp-basic.card div.card-block').css('padding-bottom'));

        if ($('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').is(':visible')) {
            // Edit Button Animation
            $('body#profile #basic-detail.section a#cp-basic-edit').addClass('animated flipOutY').one(animationEnd, function() {
                $('body#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('body#profile #basic-detail.section a#cp-basic-edit').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('body#profile #basic-detail.section a#cp-basic-edit').removeClass('animated flipInY');
                    });
                }, 100);
            });

            // Shrink Animation
            $('body#profile #basic-detail.section div#cp-basic.card div.card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            // cp-basic-def Animation
            $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-form').hide();

            // cp-basic-form Animate In
            $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').show().addClass('animated fadeInUp').one(animationEnd, function() {
                $('body#profile #basic-detail.section div#cp-basic.card div.card-block div#cp-basic-def').removeClass('animated fadeInUp');
            });
        }
    });
    // /.Basic-Detail Section

    // Social Section
    // social-add
    $('body#profile #social.section a#social-add').click(function () {
        if (!$('body#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('body#profile #social.section div#cp-social .card-block').outerHeight(),
                newHeight = $('body#profile #social.section div#cp-social.card div#social-add-detail').show().outerHeight(true) + $('body#profile div#cp-social.card hr#hr-social-add-detail').outerHeight(true) + $('body#profile #social.section div#cp-social div.card-block h4.card-title').outerHeight() + parseFloat($('body#profile div#cp-social .card-block').css('padding-bottom')) + parseFloat($('body#profile div#cp-social .card-block').css('padding-top'));

            $('#hr-social-add-detail').fadeIn(1000);
            $('body#profile #social.section a#social-add').addClass('animated flipOutY').one(animationEnd, function() {
                $('body#profile #social.section a#social-add').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('body#profile #social.section a#social-add').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('body#profile #social.section a#social-add').removeClass('animated flipInY');
                    });
                }, 100);
            });

            $('body#profile #social.section div#cp-social.card .card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            $('body#profile #social.section div#social-content').hide();

            $('body#profile #social.section div#social-add-detail').show().addClass('animated fadeInUp').one(animationEnd, function () {
                $('body#profile #social.section div#social-add-detail').removeClass('animated fadeInUp');
            });
        }
    });

    // sad-cancel
    $('body#profile #social.section #social-add-detail #sad-cancel').click(function () {
        if ($('body#profile #social.section div#social-add-detail').is(':visible')) {
            var nowHeight = $('body#profile div#cp-social .card-block').outerHeight(),
                newHeight = $('body#profile div#cp-social.card div#social-content').show().outerHeight(true) + $('body#profile #social.section div#cp-social div.card-block h4.card-title').outerHeight(true) + parseFloat($('body#profile div#cp-social .card-block').css('padding-bottom')) + parseFloat($('body#profile div#cp-social .card-block').css('padding-top'));

            $('#hr-social-add-detail').fadeOut(1000);
            $('body#profile #social.section a#social-add').addClass('animated flipOutY').one(animationEnd, function() {
                $('body#profile #social.section a#social-add').removeClass('animated flipOutY').hide();

                setTimeout(function () {
                    $('body#profile #social.section a#social-add').show().addClass('animated flipInY').one(animationEnd, function() {
                        $('body#profile #social.section a#social-add').removeClass('animated flipInY');
                    });
                }, 100);
            });

            $('body#profile #social.section div#cp-social.card .card-block').outerHeight(nowHeight).animate({
                height: newHeight
            }, 1000);

            $('body#profile #social.section div#social-add-detail').hide();

            $('body#profile #social.section div#social-content').addClass('animated fadeInUp').one(animationEnd, function() {
                $('body#profile #social.section div#social-content').removeClass('animated fadeInUp');
            });
        }
    });

    // social-edit
    $('body#profile #social.section').mouseenter(function () {
        $('body#profile #social.section #social-detail a#social-detail-edit').fadeIn(250);
    });

    $('body#profile #social.section').mouseleave(function () {
        $('body#profile #social.section #social-detail a#social-detail-edit').fadeOut(250);
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

    // Experince Section
    // exp-add
    genSecForms('a#exp-add', 'experience', 'exp', 'expand');

    // exp-cancel
    genSecForms('button#exp-cancel', 'experience', 'exp', 'shrink');

    // exp-save
    genSecForms('button#exp-save', 'experience', 'exp', 'shrink');
    // /.Experince Section

    // Education Section
    // edu-add
    genSecForms('a#edu-add', 'education', 'edu', 'expand');

    // edu-cancel
    genSecForms('button#edu-cancel', 'education', 'edu', 'shrink');

    // edu-save
    genSecForms('button#edu-save', 'education', 'edu', 'shrink');

    // exp-edit
    $('body#profile #experience.section').mouseenter(function () {
        $('body#profile #experience.section #exp-detail a#exp-detail-edit').fadeIn(250);
    });

    $('body#profile #experience.section').mouseleave(function () {
        $('body#profile #experience.section #exp-detail a#exp-detail-edit').fadeOut(250);
    });

    // edu-edit
    $('body#profile #education.section').mouseenter(function () {
        $('body#profile #education.section #edu-detail a#edu-detail-edit').fadeIn(250);
    });

    $('body#profile #education.section').mouseleave(function () {
        $('body#profile #education.section #edu-detail a#edu-detail-edit').fadeOut(250);
    });
    // /.Education Section

    // General Section Form Animation
    function genSecForms(target, secID, subID, shrinkExpand) {
        //Expand
        if (shrinkExpand === 'expand') {
            $('body#profile #' + secID + '.section ' + target).click(function () {
                var nowHeight = $('body#profile #' + secID + '.section div.card .card-block').outerHeight() - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-top')) - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-bottom')),
                    newHeight = nowHeight + $('body#profile #' + secID + '.section div#' + subID + '-add-detail').outerHeight();

                $('#hr-' + subID + '-add-detail').fadeIn(1000);
                $('body#profile #' + secID + '.section a#' + subID + '-add').addClass('animated flipOutY').one(animationEnd, function() {
                    $('body#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipOutY').hide();

                    setTimeout(function () {
                        $('body#profile #' + secID + '.section a#' + subID + '-add').show().addClass('animated flipInY').one(animationEnd, function() {
                            $('body#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipInY');
                        });
                    }, 100);
                });

                //Expand Animation
                if (!$('body#profile #' + secID + '.section div#' + subID + '-add-detail').is(':visible')) {
                    $('body#profile #' + secID + '.section div.card-block').height(nowHeight).animate({
                        height: newHeight
                    }, 1000);
                }

                $('body#profile #' + secID + '.section div#' + subID + '-add-detail').show();

                $('body#profile #' + secID + '.section div#' + subID + '-add-detail').addClass('animated fadeInUp').one(animationEnd, function () {
                    $('body#profile #' + secID + '.section a#' + subID + '-add').show();
                    $('body#profile #' + secID + '.section div#' + subID + '-add-detail').removeClass('animated fadeInUp');
                });
            });
        }

        if (shrinkExpand === 'shrink') {
            $('body#profile #' + secID + '.section #' + subID + '-add-detail  ' + target).click(function () {
                var nowHeight = $('body#profile #' + secID + '.section div.card .card-block').outerHeight() - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-top')) - parseFloat($('body#profile #' + secID + '.section div.card .card-block').css('padding-bottom')),
                    newHeight = nowHeight - $('body#profile #' + secID + '.section div#' + subID + '-add-detail').outerHeight();

                $('#hr-' + subID + '-add-detail').fadeOut(1000);
                $('body#profile #' + secID + '.section a#' + subID + '-add').addClass('animated flipOutY').one(animationEnd, function() {
                    $('body#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipOutY').hide();

                    setTimeout(function () {
                        $('body#profile #' + secID + '.section a#' + subID + '-add').show().addClass('animated flipInY').one(animationEnd, function() {
                            $('body#profile #' + secID + '.section a#' + subID + '-add').removeClass('animated flipInY');
                        });
                    }, 100);
                });

                //Shrink Animation
                if ($('body#profile #' + secID + '.section div#' + subID + '-add-detail').is(':visible')) {
                    $('body#profile #' + secID + '.section div.card-block').height(nowHeight).animate({
                        height: newHeight
                    }, 1000);
                }

                $('body#profile #' + secID + '.section div#' + subID + '-add-detail').addClass('animated fadeOutDown').one(animationEnd, function () {
                    $('body#profile #' + secID + '.section div#' + subID + '-add-detail').hide();
                    $('body#profile #' + secID + '.section div#' + subID + '-add-detail').removeClass('animated fadeOutDown');
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
