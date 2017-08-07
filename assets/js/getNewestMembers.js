$(document).ready(function() {
	//Social reveal
    $(document).on('click', '.card-share > a', function (e) {
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('social-reveal-active');
        $(this).toggleClass('share-expanded');
    });

	$.ajax({
		type: 'POST',
		url: 'assets/php/getNewestMembers.php',
		dataType: 'json',
		success: function(data) {
			// console.log(data);      // Debugging Purpose

			$insertID = 0;

			for (var i = 0; i < data.length; i++) {
				$socialBtns = '';
				$socials = '';
				$skills = '';

				// Build social-share buttons
				for (var x = 0; x < data[i].socials.length; x++) {
					if (data[i].socials[x].type == 'Behance') {
						$btnStyle = 'light-blue';
						$icon = '<i class="fa fa-behance"></i>';
						$socialURL = 'https://www.behance.net/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'BitBucket') {
						$btnStyle = 'blue darken-4';
						$icon = '<i class="fa fa-bitbucket"></i>';
						$socialURL = 'https://bitbucket.org/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'DeviantArt') {
						$btnStyle = 'lightgreen';
						$icon = '<i class="fa fa-deviantart"></i>';
						$socialURL = data[i].socials[x].url + '.deviantart.com';
					}
					else if (data[i].socials[x].type == 'Dribbble') {
						$btnStyle = 'btn-dribbble';
						$icon = '<i class="fa fa-dribbble"></i>';
						$socialURL = 'https://dribbble.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Email') {
						$btnStyle = 'btn-email';
						$icon = '<i class="fa fa-envelope"></i>';
						$socialURL = 'mailto:' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Etsy') {
						$btnStyle = 'deep-orange';
						$icon = '<i class="fa fa-etsy"></i>';
						$socialURL = 'https://www.etsy.com/shop/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Facebook') {
						$btnStyle = 'btn-fb';
						$icon = '<i class="fa fa-facebook-official"></i>';
						$socialURL = 'https://www.facebook.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Flickr') {
						$btnStyle = 'blue darken-2';
						$icon = '<i class="fa fa-flickr"></i>';
						$socialURL = 'https://www.flickr.com/people/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'GitHub') {
						$btnStyle = 'btn-git';
						$icon = '<i class="fa fa-github"></i>';
						$socialURL = 'https://github.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Google+') {
						$btnStyle = 'btn-gplus';
						$icon = '<i class="fa fa-google-plus"></i>';
						$socialURL = 'https://plus.google.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Instagram') {
						$btnStyle = 'btn-ins';
						$icon = '<i class="fa fa-instagram"></i>';
						$socialURL = 'https://www.instagram.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Linkedin') {
						$btnStyle = 'btn-li';
						$icon = '<i class="fa fa-linkedin"></i>';
						$socialURL = 'https://www.linkedin.com/in/' + data[i].socials[x].url;   // https://www.linkedin.com/company-beta/
					}
					else if (data[i].socials[x].type == 'Pintrerest') {
						$btnStyle = 'btn-pin';
						$icon = '<i class="fa fa-pintrerest"></i>';
						$socialURL = 'https://www.pinterest.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Skype') {
						$btnStyle = 'light-blue';
						$icon = '<i class="fa fa-skype"></i>';
						$socialURL = 'skype:' + data[i].socials[x].url + '?chat';
					}
					else if (data[i].socials[x].type == 'Snapchat') {
						$btnStyle = 'amber';
						$icon = '<i class="fa fa-snapchat"></i>';
						$socialURL = 'https://www.snapchat.com/add/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'SoundCloud') {
						$btnStyle = 'orange darken-3';
						$icon = '<i class="fa fa-soundcloud"></i>';
						$socialURL = 'https://soundcloud.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Telegram') {
						$btnStyle = 'blue darken-2';
						$icon = '<i class="fa fa-telegram"></i>';
						$socialURL = 'https://web.telegram.org/#/im?p=' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Tumblr') {
						$btnStyle = 'blue darken-3';
						$icon = '<i class="fa fa-tumblr"></i>';
						$socialURL = data[i].socials[x].url + '.tumblr.com';
					}
					else if (data[i].socials[x].type == 'Twitter') {
						$btnStyle = 'btn-tw';
						$icon = '<i class="fa fa-twitter"></i>';
						$socialURL = 'https://twitter.com/' + data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'Website') {
						$btnStyle = 'cyan';
						$icon = '<i class="fa fa-globe"></i>';
						$socialURL = data[i].socials[x].url;
					}
					else if (data[i].socials[x].type == 'WhatsApp') {
						$btnStyle = 'green lighten-1';
						$icon = '<i class="fa fa-whatsapp"></i>';
						$socialURL = 'https://api.whatsapp.com/send?phone=' + data[i].socials[x].url; //CC + Number
					}
					else if (data[i].socials[x].type == 'YouTube') {
						$btnStyle = 'btn yt';
						$icon = '<i class="fa fa-youtube"></i>';
						$socialURL = 'https://www.youtube.com/channel/' + data[i].socials[x].url;
					}

					$socialBtns += '<a type="button" href="' + $socialURL + '" class="btn-floating ' + $btnStyle + '" data-toggle="tooltip" data-placement="top" title="' + data[i].socials[x].type + '">' + $icon + '</a>';
				}

				// Checks if socials is empty
				if ($socialBtns != '') {
					$socials = '<div class="card-share wow zoomIn">' +
						'<div class="social-reveal">' +
							$socialBtns +
						'</div>' +
						'<a class="btn-floating btn-action share-toggle primary-color float-right" data-toggle="tooltip" data-placement="top" title="Social Profiles"><i class="fa fa-share-alt"></i></a>' +
					'</div>';
				}

				//Build skills
				for (x = 0; x < data[i].skills.length; x++) {
					$color = '';
					$skillIcon = '';

					if (data[i].skills[x] == 'Code') {
						$color = 'blue';
						$skillIcon = 'fa-code';
					}
					else if (data[i].skills[x] == 'Design') {
						$color = 'pink';
						$skillIcon = 'fa-paint-brush';
					}
					else if (data[i].skills[x] == 'Development') {
						$color = 'teal';
						$skillIcon = 'fa-cogs';
					}
					else if (data[i].skills[x] == 'Writing') {
						$color = 'blue-grey';
						$skillIcon = 'fa-pencil';
					}

					$skills += (x == 0 && data[i].skills[0] != '' ? '<hr class="my-2">' : '');
					$skills += '<div class="chip wow zoomIn white-text ' + $color + '" data-wow-delay="0.5s">' +
						'<i class="fa ' + $skillIcon + '" style="font-weight:600;"></i>&nbsp;' + data[i].skills[x] +
					'</div>';
				}

				// Checks if bio is empty
				$bio = (data[i].bio != '' ? '<hr class="my-2"><p class="text-center">' + data[i].bio + '</p>' : '');

				if (i % 3 == 0) {
					$('#home #new-members.section').append('<div id="new-' + $insertID + '" class="row" style="margin-bottom: 2rem"></div>');
				}

				$('#home #new-members.section div#new-' + $insertID + '.row').append(
					'<div class="col-lg-4">' +
						'<div id="cp" class="card testimonial-card hoverable wow zoomIn">' +
							'<div class="card-up wow" style="background-image: url(assets/uploads/' + data[i].cover + ');">' +
							'</div>' +
							$socials +
							'<div class="avatar wow zoomIn">' +
								'<img src="assets/uploads/' + data[i].photo + '">' +
							'</div>' +
							'<div class="card-block wow fadeIn">' +
								'<h4>' + data[i].name + '</h4>' +
								'<p>' + data[i].title + '</p>' +
								$bio +
								$skills +
								'<hr class="my-1">' +
								'<form id="view-profile-form" type="post">' +
									'<a id="view-profile" class="btn btn-primary wow pulse" value="' + data[i].uid + '" name="view-profile" data-wow-delay="0.8s">More Info</a>' +
								'</form>' +
							'</div>' +
						'</div>' +
					'</div>'
				);

				if (i % 2 == 0 && i != 0) {
					$insertID++;
				}

				$('[data-toggle="tooltip"]').tooltip();
			}
		}
	});
});
