/*jslint browser: true*/
/*global $, jQuery, WOW, console*/
$(document).ready(function () {
    "use strict";
    //Prevent Console Log Message
    /*
    var console = {};
    console.warn = function() {};
    console.error = function() {};
    console.log = function() {};
    */

    // MDBootstrap Related
    // Wow Animation Initialization
    new WOW().init();

    // Tooltips Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* Custom Scripts */
    // Global
    // Login Modal, Link on click show Tab.
    $('#a-login').on('click', function () {
        $('#tab-login').tab('show');
    });

    $('#a-reg').on('click', function () {
        $('#tab-reg').tab('show');
    });

    $('#a-reg2').on('click', function () {
        $('#tab-reg').tab('show');
    });

    $('#a-fgtpass').on('click', function () {
        $('#tab-fgtpass').tab('show');
    });
});
