$(document).ready(function() {
    //Social reveal
    $(document).on('click', '.card-share > a', function (e) {
        e.preventDefault(); // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('social-reveal-active');
        $(this).toggleClass('share-expanded');
    });

    var url = window.location.href;
    var result = {'uid' : url.substring(url.indexOf('?')+1)};

    $.ajax({
        type: 'POST',
        url: 'assets/php/getViewProfile.php',
        data: result,
        dataType: 'json',
        success: function(data) {
            //console.log(data);      // Debugging Purpose

            if (data != 'invalid') {
                document.title = "F2O | " + data.name + "'s Profile";

                $socials = ''; $socialShares = '';
                $skills = ''; $skillShow = '';
                $bio = '';

                /* Populate Socials */
                for (var i = 0; i < data.socials.length; i++) {
                    // Current Social Not Empty
                    if(data.socials[i] != '') {
                        $socials += socialBuild(data.socials[i].social_type, data.socials[i].social_url);
                    }
                }

                if ($socials != '') {
                    $socialShares = (
                        '<div class="card-share wow zoomIn">' +
                            '<div class="social-reveal">' +
                                $socials +
                            '</div>' +
                            '<a class="btn-floating btn-action share-toggle primary-color float-right" data-toggle="tooltip" data-placement="top" title="Social Profiles"><i class="fa fa-share-alt"></i></a>' +
                        '</div>'
                    );
                }
                /* /.Populate Socials */

                /* Populate Skills */
                for (i = 0; i < data.skills.length; i++) {
                    // Current Skill Not Empty
                    if (data.skills[i] != '') {
                        $skills += skillBuild(data.skills[i].skill, data.skills[i].type);
                    }
                }

                if ($skills != '') {
                    $skillShow = '<hr class="my-2"><h4 class="wow fadeIn">Skills <span class="special-amp">&amp;</span> Tools</h4>' + $skills;
                }
                /* /.Populate Skills */

                if (data.bio != '') {
                    $bio = '<hr class="my-2"> <p class="text-center">' + data.bio + '</p>';
                }

                /* Populate Card */
                $('body#user #vp-user.section .col-12').append(
                    '<div id="vp" class="card testimonial-card hoverable wow zoomIn">' +
                        '<div class="card-up" style="background-image: url(assets/uploads/' + data.cover + ');">' +
                        '</div>' +
                        $socialShares +
                        '<div class="avatar wow zoomIn">' +
                            '<img src="assets/uploads/' + data.photo + '" class="rounded-circle img-responsive">' +
                        '</div>' +
                        '<div class="card-block wow fadeIn">' +
                            '<h4>' + data.name + '</h4>' +
                            '<p>' + data.title + '</p>' +
                            $bio +
                            $skillShow +
                            '<hr class="my-1">' +
                            '<a class="btn teal" data-toggle="modal" data-target="#contact-user-modal">Contact Me</a>' +
                        '</div>' +
                    '</div>'
                );
                /* Populate Card */

                /* Populate Modal Content */
                $('#contact-user-modal h4#cu-modal-title').text('Contact ' + data.name);
                $('#contact-user-modal input[name="uid"]').val(data.uid);
                /* /.Populate Modal Content */

                $('[data-toggle="tooltip"]').tooltip();
            }
            else {
                window.location = 'invalidUser.php';
            }
        }
    });

    $('form#contact-user-form').submit(function(e) {
        e.preventDefault();

        $('form#contact-user-form div#loading').fadeIn(600);

        var result = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/contactUser.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                //console.log(data);      // Debugging Purpose

                $('form#contact-user-form div#loading').fadeOut(600);

                if (data == 'name-empty') {
                    toastr.warning('Empty name field');
                }
                else if (data == 'email-empty') {
                    toastr.warning('Empty email field');
                }
                else if (data == 'subject-empty') {
                    toastr.warning('Empty subject field');
                }
                else if (data == 'msg-empty') {
                    toastr.warning('Empty message field');
                }
                else if (data == 'pass') {
                    toastr.success('Your message has been sended successfully');

                    setTimeout(function() {
                        document.location.reload(true);
                    }, 600);
                }
                else if (data == 'invalid') {
                    toastr.error('The user you are trying to contact does not exist');
                }
                else if (data == 'fail') {
                    toastr.error('Please retry sending your message again');
                }
            }
        });
    });

    function skillBuild(skill, type) {
        $color = '';
        $skillIcon = '';

        if (type.toLowerCase() == 'Code'.toLowerCase()) {
            $color = 'blue';
            $skillIcon = 'fa-code';
        }
        else if (type.toLowerCase() == 'Design'.toLowerCase()) {
            $color = 'pink';
            $skillIcon = 'fa-paint-brush';
        }
        else if (type.toLowerCase() == 'Development'.toLowerCase()) {
            $color = 'teal';
            $skillIcon = 'fa-cogs';
        }
        else if (type.toLowerCase() == 'Writing'.toLowerCase()) {
            $color = 'blue-grey';
            $skillIcon = 'fa-pencil';
        }

        return '<div class="chip wow zoomIn white-text ' + $color + '" data-wow-delay="0.5s"><i class="fa ' + $skillIcon + '" style="font-weight:600;"></i>&nbsp;' + skill + '</div>';
    }

    function socialBuild(type, url) {
        $btnStyle = '';
        $icon = '';
        $socialURL = '';

        if (type == 'Behance') {
            $btnStyle = 'light-blue';
            $icon = '<i class="fa fa-behance"></i>';
            $socialURL = 'https://www.behance.net/' + url;
        }
        else if (type == 'BitBucket') {
            $btnStyle = 'blue darken-4';
            $icon = '<i class="fa fa-bitbucket"></i>';
            $socialURL = 'https://bitbucket.org/' + url;
        }
        else if (type == 'DeviantArt') {
            $btnStyle = 'lightgreen';
            $icon = '<i class="fa fa-deviantart"></i>';
            $socialURL = url + '.deviantart.com';
        }
        else if (type == 'Dribbble') {
            $btnStyle = 'btn-dribbble';
            $icon = '<i class="fa fa-dribbble"></i>';
            $socialURL = 'https://dribbble.com/' + url;
        }
        else if (type == 'Email') {
            $btnStyle = 'btn-email';
            $icon = '<i class="fa fa-envelope"></i>';
            $socialURL = 'mailto:' + url;
        }
        else if (type == 'Etsy') {
            $btnStyle = 'deep-orange';
            $icon = '<i class="fa fa-etsy"></i>';
            $socialURL = 'https://www.etsy.com/shop/' + url;
        }
        else if (type == 'Facebook') {
            $btnStyle = 'btn-fb';
            $icon = '<i class="fa fa-facebook-official"></i>';
            $socialURL = 'https://www.facebook.com/' + url;
        }
        else if (type == 'Flickr') {
            $btnStyle = 'blue darken-2';
            $icon = '<i class="fa fa-flickr"></i>';
            $socialURL = 'https://www.flickr.com/people/' + url;
        }
        else if (type == 'GitHub') {
            $btnStyle = 'btn-git';
            $icon = '<i class="fa fa-github"></i>';
            $socialURL = 'https://github.com/' + url;
        }
        else if (type == 'Google+') {
            $btnStyle = 'btn-gplus';
            $icon = '<i class="fa fa-google-plus"></i>';
            $socialURL = 'https://plus.google.com/' + url;
        }
        else if (type == 'Instagram') {
            $btnStyle = 'btn-ins';
            $icon = '<i class="fa fa-instagram"></i>';
            $socialURL = 'https://www.instagram.com/' + url;
        }
        else if (type == 'Linkedin') {
            $btnStyle = 'btn-li';
            $icon = '<i class="fa fa-linkedin"></i>';
            $socialURL = 'https://www.linkedin.com/in/' + url;   // https://www.linkedin.com/company-beta/
        }
        else if (type == 'Pintrerest') {
            $btnStyle = 'btn-pin';
            $icon = '<i class="fa fa-pintrerest"></i>';
            $socialURL = 'https://www.pinterest.com/' + url;
        }
        else if (type == 'Skype') {
            $btnStyle = 'light-blue';
            $icon = '<i class="fa fa-skype"></i>';
            $socialURL = 'skype:' + url + '?chat';
        }
        else if (type == 'Snapchat') {
            $btnStyle = 'amber';
            $icon = '<i class="fa fa-snapchat"></i>';
            $socialURL = 'https://www.snapchat.com/add/' + url;
        }
        else if (type == 'SoundCloud') {
            $btnStyle = 'orange darken-3';
            $icon = '<i class="fa fa-soundcloud"></i>';
            $socialURL = 'https://soundcloud.com/' + url;
        }
        else if (type == 'Telegram') {
            $btnStyle = 'blue darken-2';
            $icon = '<i class="fa fa-telegram"></i>';
            $socialURL = 'https://web.telegram.org/#/im?p=' + url;
        }
        else if (type == 'Tumblr') {
            $btnStyle = 'blue darken-3';
            $icon = '<i class="fa fa-tumblr"></i>';
            $socialURL = url + '.tumblr.com';
        }
        else if (type == 'Twitter') {
            $btnStyle = 'btn-tw';
            $icon = '<i class="fa fa-twitter"></i>';
            $socialURL = 'https://twitter.com/' + url;
        }
        else if (type == 'Website') {
            $btnStyle = 'cyan';
            $icon = '<i class="fa fa-globe"></i>';
            $socialURL = url;
        }
        else if (type == 'WhatsApp') {
            $btnStyle = 'green lighten-1';
            $icon = '<i class="fa fa-whatsapp"></i>';
            $socialURL = 'https://api.whatsapp.com/send?phone=' + url; //CC + Number
        }
        else if (type == 'YouTube') {
            $btnStyle = 'btn yt';
            $icon = '<i class="fa fa-youtube"></i>';
            $socialURL = 'https://www.youtube.com/channel/' + url;
        }

        return '<a type="button" href="' + $socialURL + '" class="btn-floating ' + $btnStyle + '" data-toggle="tooltip" data-placement="top" title="' + type + '">' + $icon + '</a>';
    }
});
