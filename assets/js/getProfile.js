$(document).ready(function() {
    $.ajax ({
        type: 'POST',
        url: 'assets/php/getProfile.php',
        dataType: 'json',
        success: function(data) {
            //console.log(data);    // Debugging Purpose

            $('#profile #p-name').html(data.name);
            $('#profile form#e-basic-form  #e-name').prop('placeholder', data.name);
            $('nav ul.navbar-nav div.logged a.chip img').after(data.name);

            $('#profile #p-title').html(data.title);
            $('#profile form#e-basic-form  #e-title').prop('placeholder', data.title);

            $('#profile #p-bio').html(data.bio);
            $('#profile form#e-basic-form  #e-bio').prop('placeholder', data.bio);

            // Populate Profile Photo
            if(data.photo != 'default.png') {
                $('#profile #cp-basic.card .avatar').css('background-image', 'url(assets/uploads/' + data.photo + ')');
                $('nav ul.navbar-nav div.logged a.chip img').attr('src', 'assets/uploads/' + data.photo);
            }

            if (data.cover != 'default-card-up.png') {
                $('#profile #cp-basic.card .card-up').css('background-image', 'url(assets/uploads/' + data.cover + ')');
            }

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

			// Populate Profile Education Section
			for (i = 0; i < data.educations.length; i++) {
				eduContent(data.educations[i].edu_id, data.educations[i].edu_sch, data.educations[i].edu_degree, data.educations[i].edu_field, data.educations[i].edu_start, data.educations[i].edu_end);
				$('[data-tooltip="tooltip"]').tooltip();
			}

            // Populate Skills Section
            for (i = 0; i < data.skills.length; i++) {
                if (i == 0) {
                    $('#profile #skills.section div.card-block div#skills-content').before('<hr class="my-1">');
                }

                skillsContent(data.skills[i].skills_id, data.skills[i].skill, data.skills[i].type);
            }

            // Populate Inbox Modal
            for (i = 0; i < data.messages.length; i++) {
                msgContent(i, data.messages[i].msg_id, data.messages[i].name, data.messages[i].email, data.messages[i].subject, data.messages[i].msg, data.messages[i].status);
            }

            if (document.location.href.indexOf('/profile.php') > -1) {
                document.title = document.title + " | " + data.name + "'s Profile";
            }
        }
    });
});

// Populate Profile Education Section Function
function eduContent(edu_id, edu_sch, edu_degree, edu_field, edu_start, edu_end) {
	$('#profile div#edu-content').append(
		'<hr class="my-1">' +
		'<div id="edu-detail" class="row align-items-center">' +
			'<div class="col-sm-2 col-5 text-center">' +
				'<i class="fa fa-book fa-3x z-depth-1 blue darken-1 hoverable"></i>' +
			'</div>' +
			'<div class="col-sm-9 col-5">' +
				'<h5>' + edu_sch + '</h5>' +
				'<span>' + edu_degree + ' &nbsp;&bull;&nbsp;</span>' +
				'<span>' + edu_field + '</span><br/>' +
				'<small>' + edu_start + ' - ' + edu_end + '</small>' +
			'</div>' +
			'<div class="col-sm-1 col-1 text-center">' +
				'<a id="edu-detail-edit" style="display: none;" class="fa fa-pencil fa-lg" data-toggle="tooltip" data-placement="right" title="Edit"></a>' +
			'</div>' +
		'</div>'
	);
}

// Populate Profile Experiences Section Function
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

// Populate Profile Skills Section
function skillsContent(skills_id, skills_name, skills_type) {
    if (skills_type.toLowerCase() == 'Code'.toLowerCase()) {
        $name = skills_name;
        $icon = '<i id="Code" class="fa fa-code ml-1"></i>';
    }
    else if(skills_type.toLowerCase() == 'Design'.toLowerCase()) {
        $name = skills_name;
        $icon = '<i id="Design" class="fa fa-paint-brush ml-1"></i>';
    }
    else if(skills_type.toLowerCase() == 'Development'.toLowerCase()) {
        $name = skills_name;
        $icon = '<i id="Development" class="fa fa-cogs ml-1"></i>';
    }
    else if (skills_type.toLowerCase() == 'Writing'.toLowerCase()) {
        $name = skills_name;
        $icon = '<i id="Writing" class="fa fa-pencil ml-1"></i>';
    }

    $('#profile div#skills-content').append(
        '<div id="' + skills_id + '" class="chip white-text blue">' +
            '<strong>' + skills_name +'</strong>' +
            $icon +
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

// Populate messages modal
function msgContent(index, msg_id, name, email, subject, msg, status) {
    statusStyle = (status == 'new' ? 'teal lighten-5' : '');

    $('#profile #messages-modal .modal-body table#msg-table tbody').append(
        '<tr id="' + msg_id + '" class="' + statusStyle + '" style="cursor: pointer;">' +
            '<td>' +
                '<fieldset class="form-group">' +
                    '<input id="msg-select" class="with-gap" name="msg-select" value="' + msg_id + '" type="radio">' +
                    '<label for="msg-select"></label>' +
                '</fieldset>' +
            '</td>' +
            '<td>' +
                name +
            '</td>' +
            '<td>' +
                email +
            '</td>' +
            '<td>' +
                subject +
            '</td>' +
        '</tr>' +
        '<tr id="open-msg-' + msg_id + '" style="display: none;">' +
            '<td colspan="4">' +
                msg +
            '</td>' +
        '</tr>'
    );
}
