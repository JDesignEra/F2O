$(document).ready(function() {
    $.ajax ({
        type: 'POST',
        url: 'assets/php/getProfile.php',
        dataType: 'json',
        success: function(data) {
            //console.log(data);    // Debugging Purpose

            $('#profile #p-name').html(data.name);
            $('#profile form#e-basic-form  #e-name').prop('placeholder', data.name);

            $('#profile #p-title').html(data.title);
            $('#profile form#e-basic-form  #e-title').prop('placeholder', data.title);

            $('#profile #p-bio').html(data.bio);
            $('#profile form#e-basic-form  #e-bio').prop('placeholder', data.bio);

            // Populate Profile Social Section
            for (var i = 0; i < data.socials.length; i++) {
                socialContent(data.socials[i].social_id, data.socials[i].social_type, data.socials[i].social_url);
                $('[data-tooltip="tooltip"]').tooltip();
            }

            // Populate Profile Experience Section
            for (var j = 0; j < data.experiences.length; j++) {
                expContent(data.experiences[j].exp_id, data.experiences[j].exp_company, data.experiences[j].exp_title, data.experiences[j].exp_start, data.experiences[j].exp_end);
                $('[data-tooltip="tooltip"]').tooltip();
            }

            document.title = document.title + " | " + data.name + "'s Profile";
        }
    });
});

// Populate Profile Experiences Section
function expContent(exp_id, exp_com, exp_title, exp_start, exp_end) {
    $('#profile div#exp-content').append(
        '<hr class="my-1">' +
        '<div id="exp-detail" class="row align-items-center">' +
            '<div class="col-sm-2 col-5 text-center">' +
                '<i class="fa fa-building fa-3x z-depth-1 blue darken-1 hoverable"></i>' +
            '</div>' +

            '<div class="col-sm-9 col-5">' +
                '<h5>' + exp_com + '</h5>' +
                '<span>' + exp_title + '</span><br/>' +
                '<small>' + exp_start + ' - ' + exp_end + '</small>' +
            '</div>' +

            '<div class="col-sm-1 col-1 text-center">' +
                '<a id="exp-detail-edit" class="fa fa-pencil fa-lg" style="display: none;" data-tooltip="tooltip" data-placement="right" title="Edit"></a>' +
            '</div>' +
        '</div>'
    );
}

// Populate Profile Social Section
function socialContent(s_id, s_type, s_url) {
    if (s_type.toLowerCase() == 'Behance'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-behance"></i>';
        $socialURL = 'https://www.behance.net/' + s_url;
    }
    else if (s_type.toLowerCase() == 'BitBucket'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-bitbucket"></i>';
        $socialURL = 'https://bitbucket.org/' + s_url;
    }
    else if (s_type.toLowerCase() == 'DeviantArt'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-deviantart"></i>';
        $socialURL = s_url + '.deviantart.com';
    }
    else if (s_type.toLowerCase() == 'Dribbble'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-dribbble"></i>';
        $socialURL = 'https://dribbble.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Email'.toLowerCase()) {
        $name = s_url;
        $icon = '<i class="fa fa-envelope"></i>';
        $socialURL = 'mailto:' + s_url;
    }
    else if (s_type.toLowerCase() == 'Etsy'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-etsy"></i>';
        $socialURL = 'https://www.etsy.com/shop/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Facebook'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-facebook-official"></i>';
        $socialURL = 'https://www.facebook.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Flickr'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-flickr"></i>';
        $socialURL = 'https://www.flickr.com/people/' + s_url;
    }
    else if (s_type.toLowerCase() == 'GitHub'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-github"></i>';
        $socialURL = 'https://github.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Google+'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-google-plus"></i>';
        $socialURL = 'https://plus.google.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Instagram'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-instagram"></i>';
        $socialURL = 'https://www.instagram.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Linkedin'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-linkedin"></i>';
        $socialURL = 'https://www.linkedin.com/in/' + s_url;   // https://www.linkedin.com/company-beta/
    }
    else if (s_type.toLowerCase() == 'Pintrerest'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-pintrerest"></i>';
        $socialURL = 'https://www.pinterest.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Skype'.toLowerCase()) {
        $name = s_url;
        $icon = '<i class="fa fa-skype"></i>';
        $socialURL = 'skype:' + s_url + '?chat';
    }
    else if (s_type.toLowerCase() == 'Snapchat'.toLowerCase()) {
        $name = s_url;
        $icon = '<i class="fa fa-snapchat"></i>';
        $socialURL = 'https://www.snapchat.com/add/' + s_url;
    }
    else if (s_type.toLowerCase() == 'SoundCloud'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-soundcloud"></i>';
        $socialURL = 'https://soundcloud.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Telegram'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-telegram"></i>';
        $socialURL = 'https://web.telegram.org/#/im?p=' + s_url;
    }
    else if (s_type.toLowerCase() == 'Tumblr'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-tumblr"></i>';
        $socialURL = s_url + '.tumblr.com';
    }
    else if (s_type.toLowerCase() == 'Twitter'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-twitter"></i>';
        $socialURL = 'https://twitter.com/' + s_url;
    }
    else if (s_type.toLowerCase() == 'Website'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-globe"></i>';
        $socialURL = s_url;
    }
    else if (s_type.toLowerCase() == 'WhatsApp'.toLowerCase()) {
        $name = s_url;
        $icon = '<i class="fa fa-whatsapp"></i>';
        $socialURL = 'https://api.whatsapp.com/send?phone=' + s_url; //CC + Number
    }
    else if (s_type.toLowerCase() == 'YouTube'.toLowerCase()) {
        $name = s_type;
        $icon = '<i class="fa fa-youtube"></i>';
        $socialURL = 'https://www.youtube.com/channel/' + s_url;
    }
    $('#profile div#social-content').append(
        '<hr class="my-1">' +
        '<div id="social-detail" class="row social-' + s_id  + '">' +
            '<div class="col-xl-1 col-lg-1 col-md-1 col-1">' +
                $icon +
            '</div>' +
            '<div class="col-xl-9 col-lg-10 col-md-10 col-9">'+
                '<a href="' + $socialURL + '">' +
                    $name +
                '</a>'+
            '</div>'+
            '<div class="col-xl-1 col-lg-1 col-md-1 col-1 ">' +
                '<a id="social-detail-edit" style="display:none;" data-tooltip="tooltip" data-placement="right" title="Edit">' +
                    '<i class="fa fa-pencil fa-responsive"></i>' +
                '</a>' +
            '</div>' +
        '</div>'
    );
}
