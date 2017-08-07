$(document).ready(function() {
    if (window.location.pathname.indexOf('profile.php') > -1) {
        // Message Space
        $.ajax({
            type: 'POST',
            url: 'assets/php/messageCounts.php',
            dataType: 'json',
            success: function(data) {
                //console.log(data);      // Debugging Purpose
                $('#profile #message.section #msg-space[role=progressbar]').css('width', data);
                $('#profile #message.section #msg-space[role=progressbar]').attr('aria-valuenow', data);
                $('#profile #message.section div.card-block h4 span#msg-space-count').text(data);
            }
        });

        // Unread Message
        $.ajax({
            type: 'POST',
            url: 'assets/php/unreadMessageCounts.php',
            dataType: 'json',
            success: function(data) {
                //console.log(data);      // Debugging Purpose
                $('#profile #message.section #msg-unread[role=progressbar]').css('width', data);
                $('#profile #message.section #msg-unread[role=progressbar]').attr('aria-valuenow', data);
                $('#profile #message.section div.card-block h4 span#msg-unread-count').text(data);
                $('#profile #message.section div.data h3#msg-unread-data').text(data);
            }
        });

        $('#messages-modal').on('hidden.bs.modal', function (e) {
            // Message Space
            $.ajax({
                type: 'POST',
                url: 'assets/php/messageCounts.php',
                dataType: 'json',
                success: function(data) {
                    //console.log(data);      // Debugging Purpose
                    $('#profile #message.section #msg-space[role=progressbar]').css('width', data);
                    $('#profile #message.section #msg-space[role=progressbar]').attr('aria-valuenow', data);
                    $('#profile #message.section div.card-block h4 span#msg-space-count').text(data);
                }
            });

            // Unread Message
            $.ajax({
                type: 'POST',
                url: 'assets/php/unreadMessageCounts.php',
                dataType: 'json',
                success: function(data) {
                    console.log(data);      // Debugging Purpose
                    $('#profile #message.section #msg-unread[role=progressbar]').css('width', data);
                    $('#profile #message.section #msg-unread[role=progressbar]').attr('aria-valuenow', data);
                    $('#profile #message.section div.card-block h4 span#msg-unread-count').text(data);
                    $('#profile #message.section div.data h3#msg-unread-data').text(data);
                }
            });
        });
    }

    // Disable default onclick radio checked
    $('div#messages-modal table#msg-table tbody').on('click', 'fieldset.form-group', function(e) {
        e.preventDefault();
    });

    // Open Message and Select Message
    $('div#messages-modal table#msg-table').on('click', 'tbody tr', function() {
        $('div#messages-modal table#msg-table tbody input#msg-select').removeAttr('checked');       // Reset checked radio
        $(this).find('input#msg-select').attr('checked', true);     // Checked Selected radio

        // Hide all open-msg
        $( "div#messages-modal table#msg-table tbody tr" ).each(function() {
            if ($(this).attr('id').indexOf('open-msg') != -1) {
                $(this).hide();
            }
        });

        // Show selected open-msg
        $('div#messages-modal table#msg-table tbody tr#open-msg-' + $(this).attr('id')).show();

        if ($(this).hasClass('teal')) {
            $(this).removeClass('teal');
        }

        // Update status
        var result = $('form#msg-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/readMessages.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                console.log(data);      // Debugging Purpose

                if (data != '' && data !='fail') {
                    $('div#messages-modal div.modal-footer a#msg-reply-btn').attr('href', 'mailto:' + data);
                }
            }
        });
    });

    $('div#messages-modal form#msg-form').submit(function(e) {
        e.preventDefault();

        var result = $('form#msg-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/php/deleteMessages.php',
            data: result,
            dataType: 'json',
            success: function(data) {
                if (data == 'pass') {
                    toastr.success('Message has been deleted successfully');

                    setTimeout(function () {
                        document.location.reload(true);
                    }, 600);
                }
                else if (data == 'fail') {
                    toastr.error('Message has not been delete, please refresh and try again');
                }
            }
        });
    });
});
