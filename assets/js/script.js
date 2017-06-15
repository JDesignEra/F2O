$(document).ready(function() {
    // MDBoostrap Related
    // Wow Animation Initialisation
    new WOW().init();

    // Tooltips Initialisation
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    
    // Custom Scripts    
    // Login Modal, Log In link on click show Login Tab.
    $('#a-login').on('click', function() {
        $('#tab-login').tab('show');
    });
});