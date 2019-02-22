$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
        $('body').css("overflow-y","auto");
    });      
});

/*global $ */
$(document).ready(function ($) {
    'use strict';

    $('select').niceSelect();

    $('.form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('animation');
            
        }
    });

    $('.side-menue li').click(function(){
        $('.side-menue li').removeClass('active');
        $(this).addClass('active');
    });

    $('.check_all').click(function() {
        if ($(this).is(':checked')) {
            $('.basic-table input').attr('checked', true);
        } else {
            $('.basic-table input').attr('checked', false);
        }
    });

    $(".basic-table input").click(function () {
        if ($(this).is(":checked")){
          var isAllChecked = 0;
          $(".basic-table input").each(function(){
            if(!this.checked)
               isAllChecked = 1;
          })              
          if(isAllChecked == 0){ $(".check_all").prop("checked", true); }     
        }else {
          $(".check_all").prop("checked", false);
        }
    });

    $(".profile-input-file").change(function () {
        var input = (this);
        var image = $(this).siblings('.profile-input-image');
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                image.attr('src', e.target.result);
                console.log(this);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });

    $('.btn-collapse').click(function(){
        $(this).toggleClass('rottate');
    });

    $('.input-collpse-box input').on('change' ,function(){
        $(this).closest('.input-collpse-box').find('.btn-collapse span').text($(this).val());
        $(this).closest('.collapse').toggleClass('show');
    });

    $('.edit-field').click(function()
    {
        $(this).parent('.setting-field').find('input').removeAttr("readonly");  
    });

    $('.show-map').click(function()
    {
        $(this).parent('.setting-field').find('input').removeAttr("readonly");  
        $('.map').slideToggle("slow");  
    });
    



});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.top-header').addClass('navbar-fixed-top');
    }
    else {
        $('.top-header').removeClass('navbar-fixed-top');
    }
});

$('.dashboard-header .toggle-btn').click(function(){
    $('.main-content').toggleClass('full-width');
    $('.side-bar').toggleClass('closed');
});




function showpassword() {
    var passfield = document.getElementById('password');
    if (passfield.type === "password") {
        passfield.type = "text";
    } else {
        passfield.type = "password";
    }
}

$('.form-control').focus(function(){
    $(this).parent('.field').addClass('animation');
});

$('.form-control').focusout(function(){
    if($(this).val() === "")
    $(this).parent('.field').removeClass('animation');
});


