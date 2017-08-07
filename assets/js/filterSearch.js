$(document).ready(function() {
    // AnimationEnd Detection Fix
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

    var Code = true, Design = true, Development = true, Writing = true, Others = true;

    $('#filter-dd-btn').on('click', function() {
        $btnFilterCheck = true;
    });

    $('#filters').on('show.bs.dropdown', function(e) {
        $btnFilterCheck = false;
    });

    $('#filters').on('hide.bs.dropdown', function(e) {
        if ($btnFilterCheck == false) {
            e.preventDefault();
        }
        else {
            $btnFilterCheck = false;
        }
    });

    $('#f-coders').on('click', function() {
        if ($('input#coders[type="radio"]').prop('checked') != 'checked') {
            $('input#coders[type="radio"]').prop('checked', 'checked');
            $('input#all[type="radio"]').removeProp('checked');
            $('#members-content div.col-lg-4').show().filter(':not(.Code)').fadeOut(800);
        }
    });

    $('#f-designers').on('click', function() {
        if ($('input#designers[type="radio"]').prop('checked') != 'checked') {
            $('input#designers[type="radio"]').prop('checked', 'checked');
            $('input#all[type="radio"]').removeProp('checked');
            $('#members-content div.col-lg-4').show().filter(':not(.Design)').fadeOut(800);
        }
    });

    $('#f-developers').on('click', function() {
        if ($('input#developers[type="radio"]').prop('checked') != 'checked') {
            $('input#developers[type="radio"]').prop('checked', 'checked');
            $('input#all[type="radio"]').removeProp('checked');
            $('#members-content div.col-lg-4').show().filter(':not(.Development)').fadeOut(800);
        }
    });

    $('#f-writers').on('click', function() {
        if ($('input#writers[type="radio"]').prop('checked') != 'checked') {
            $('input#writers[type="radio"]').prop('checked', 'checked');
            $('input#all[type="radio"]').removeProp('checked');
            $('#members-content div.col-lg-4').show().filter(':not(.Writing)').fadeOut(800);
        }
    });

    $('#f-others').on('click', function() {
        if ($('input#others[type="radio"]').prop('checked') != 'checked') {
            $('input#others[type="radio"]').prop('checked', 'checked');
            $('input#all[type="radio"]').removeProp('checked');
            $('#members-content div.col-lg-4').show().filter(':not(.Others)').fadeOut(800);
        }
    });

    $('#f-all').on('click', function() {
        if ($('input#all[type="radio"]').prop('checked') != 'checked') {
            $('input#all[type="radio"]').prop('checked', 'checked');
            $('#members-content div.col-lg-4').fadeIn(800);
        }
    });

    // Search
    $('button#search-btn').on('click', function() {
        if ($('input[name="src-name"]').val() == '') {
            $('#members-content div.col-lg-4').fadeIn(800);
        }
        else {
            $search = $('input[name="src-name"]').val();

            $('#members-content div.col-lg-4').each(function() {
                if ($(this).attr('id').indexOf($search) > -1) {
                    $(this).fadeIn(800);
                }
                else {
                    $(this).fadeOut(800);
                }
            });
        }
    });

    $('input[name="src-name"]').bind("enterKey",function(e){
        if ($('input[name="src-name"]').val() == '') {
            $('#members-content div.col-lg-4').fadeIn(800);
        }
        else {
            $search = $('input[name="src-name"]').val();

            $('#members-content div.col-lg-4').each(function() {
                if ($(this).attr('id').indexOf($search) > -1) {
                    $(this).fadeIn(800);
                }
                else {
                    $(this).fadeOut(800);
                }
            });
        }
    });

    $('input[name="src-name"]').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });

    function filter(Code, Design, Development, Writing, Others) {
        if (Code) {
            if ($('#members-content div.col-lg-4').hasClass('Design Development')) {

            }
            $('#members-content div.col-lg-4.Code').fadeIn(800).css('display', 'inline-block');
        }
        else {
            $('#members-content div.col-lg-4.Code').addClass('animated zoomOut').one(animationEnd, function() {
                $('#members-content div.col-lg-4.Code').hide().removeClass('wow animated zoomOut zoomIn');
            });
        }

        if (Design) {
            $('#members-content div.col-lg-4.Design').fadeIn(800);
        }
        else {
            $('#members-content div.col-lg-4.Design').addClass('animated zoomOut').one(animationEnd, function() {
                $('#members-content div.col-lg-4.Design').hide().removeClass('wow animated zoomOut zoomIn');
            });
        }

        if (Development) {
            $('#members-content div.col-lg-4.Development').fadeIn(800);
        }
        else {
            $('#members-content div.col-lg-4.Development').addClass('animated zoomOut').one(animationEnd, function() {
                $('#members-content div.col-lg-4.Development').hide().removeClass('wow animated zoomOut zoomIn');
            });
        }

        if (Writing) {
                $('#members-content div.col-lg-4.Writing').fadeIn(800);
        }
        else {
            $('#members-content div.col-lg-4.Writing').addClass('animated zoomOut').one(animationEnd, function() {
                $('#members-content div.col-lg-4.Writing').hide().removeClass('wow animated zoomOut zoomIn');
            });
        }

        if (Others) {
            $('#members-content div.col-lg-4.Others').fadeIn(800);
        }
        else {
            $('#members-content div.col-lg-4.Others').addClass('animated zoomOut').one(animationEnd, function() {
                $('#members-content div.col-lg-4.Others').hide().removeClass('wow animated zoomOut zoomIn');
            });
        }
    }
});
