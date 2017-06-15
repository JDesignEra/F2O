$(document).ready(function() {
    // MDBoostrap Related
    // Wow Animation Initialisation
    new WOW().init();

    // Tooltips Initialisation
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    
    // Custom Scripts    
    // Login Modal, Link on click show Tab.
    $('#a-login').on('click', function() {
        $('#tab-login').tab('show');
    });
    
    $('#a-reg').on('click', function() {
        $('#tab-reg').tab('show');
    });
    
    $('#a-reg2').on('click', function() {
        $('#tab-reg').tab('show');
    });
    
    $('#a-fgtpass').on('click', function() {
        $('#tab-fgtpass').tab('show');
    });
    
    // Forgot Pass Next Button
    $('#btn-fgtpass-next').on('click', function() {
        $('#fgtpass-step-1').addClass('animated fadeOutLeft');
        //Delay 800ms
        setTimeout(function() {
            $('#fgtpass-step-1').hide();
            $('#fgtpass-step-2').show();
            $('#fgtpass-step-2').addClass('animated fadeInRight');
            $('#fgtpass-step-1').removeClass('animated fadeOutLeft');
        }, 800);
    });
    
    // Verify Pass Next Button
    $('#btn-fgtpass-verify').on('click', function() {
        $('#fgtpass-step-2').addClass('animated fadeOutLeft');
        //Delay 800ms
        setTimeout(function() {
            $('#fgtpass-step-2').hide();
            $('#fgtpass-step-3').show();
            $('#fgtpass-step-3').addClass('animated fadeInRight');
            $('#fgtpass-step-2').removeClass('animated fadeOutLeft');
        }, 800);
    });
    
    // Resets fgtoass-step state
    $('#login-reg-fgtpass').on('hidden.bs.modal', function() {
        $('#fgtpass-step-1').show();
        $('#fgtpass-step-2').hide();
        $('#fgtpass-step-3').hide();
        $('#fgtpass-step-1').removeClass('animated fadeOutLeft');
        $('#fgtpass-step-2').removeClass('animated fadeInRight fadeOutLeft');
        $('#fgtpass-step-3').removeClass('animated fadeInRight fadeOutLeft');
    });
});