/*-----------------------------------------------------------------------------------

 ----------------------------------------------------------------------------------- */

(function($) {
    "use strict";

    /*=====================
     01.Tap to Top
     ==========================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });

    $('.tap-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /*=====================
     02. Furniture layout hover effect
     ==========================*/
    jQuery('.hover-box').hover(function() {
        var hoverclass = jQuery(this).attr('data-class');
        jQuery('[data-class=' + hoverclass + ']').addClass('hovered-btn');
        jQuery(this).addClass('hovered-btn');
    }, function() {
        var hoverclass = jQuery(this).attr('data-class');
        jQuery('[data-class=' + hoverclass + ']').removeClass('hovered-btn');
        jQuery(this).removeClass('hovered-btn');
    });


    /*=====================
     03. Add to cart js
     ==========================*/

        $(document).on('click', '.addcart-box', function() {
        $(this).parents('.product-box').find('.addtocart_box').addClass("open");
    });
    $(".close-cart, .closeCartbox").click(function(){
        $(this).parents('.addtocart_box').removeClass("open");
    });


    /*=====================
     04. Footer js
     ==========================*/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '990') {
        jQuery('.footer-title h4').append('<span class="according-menu"></span>');
        jQuery('.footer-title').click(function () {
            jQuery('.footer-title').removeClass('active');
            jQuery('.footer-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.footer-content').hide();
    } else {
        jQuery('.footer-content').show();
    }

    /*=====================
     05. Menu js
     ==========================*/
    $(".toggle-nav").click(function(){
        $('.sm-horizontal').css("right","0px");
    });
    $(".mobile-back").click(function(){
        $('.sm-horizontal').css("right","-410px");
    });

    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '1200') {
        jQuery('.menu-title h6').append('<span class="according-menu"></span>');
        jQuery('.menu-title').click(function () {
            jQuery('.menu-title').removeClass('active');
            jQuery('.menu-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.menu-content').hide();
    } else {
        jQuery('.menu-content').show();
    }

    if ($(window).width() > '1200') {
        $('#hover-cls').hover(
            function () {
                $('.sm').addClass('hover-unset');
            }
        )
    }

    if ($(window).width() > '1200') {
        $('#sub-menu > li').hover(
            function () {
                if ($(this).children().hasClass('has-submenu')) {
                    $(this).parents().find('nav').addClass('sidebar-unset');
                }
            },
            function () {
                $(this).parents().find('nav').removeClass('sidebar-unset');
            }
        )
    }


    /*=====================
     06. Image to background js
     ==========================*/
    $(".bg-top" ).parent().addClass('b-top');
    $(".bg-bottom" ).parent().addClass('b-bottom');
    $(".bg-center" ).parent().addClass('b-center');
    $(".bg-left" ).parent().addClass('b-left');
    $(".bg-right" ).parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up" ).parent().addClass('');
    jQuery('.bg-img').each(function() {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();

        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'display' : 'block'
        });

        el.hide();
    });


    /*=====================
     07. Slick slider js
     ==========================*/
    $('.slide-1').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
      console.log("1111111");
       $('.slide-2').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*=====================
     10. Add to cart notification js
     ==========================*/
    $('.addtocart_btn a').on('click', function () {
        $.notify({
            icon: 'fa fa-check',
            title: 'Success!',
            message: 'Item Successfully added to your cart'
        },{
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: true,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    });

    /*=====================
     15. Rtl menu js
     ==========================*/
    $(".rtl .toggle-nav").click(function(){
        $('.sm-horizontal').css("left","0px");
        $('.sm-horizontal').css("right","unset");
    });
    $(".rtl .mobile-back").click(function(){
        $('.sm-horizontal').css("left","-410px");
        $('.sm-horizontal').css("right","unset");
    });


})(jQuery);



/*=====================
 18. Menu js
 ==========================*/
function openNav() {
    document.getElementById("mySidenav").classList.add('open-side');
}
function closeNav() {
    document.getElementById("mySidenav").classList.remove('open-side');
}
$(function() {
    $('#main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
    });
    $('#sub-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
    });
});

$("#sub_addcartbtn").click(function(){
  $("#ei_add_to_cart_button").click();
  })


/*=====================
 20. Sidebar js
 ==========================*/

function closeCart() {
    document.getElementById("cart_side").classList.remove('open-side');
}

/*=====================
 21.Tooltip
 ==========================*/
$(window).on('load', function() {
    $('[data-toggle="tooltip"]').tooltip()
});

$( document ).ready(function() {
  $("#slidecarthq .header button").click(function(){
  	alert("adsfasdf");
  });

 
});

/*=====================
 22.Dropdown Menu
 ==========================*/

$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

 /*------------------------
   23.loader
     --------------------------*/
     $('.loader-wrapper').fadeOut('3000', function() {
            $(this).remove();
        });


/*
	Owl-Courousel
*/

var owl = $('.owl-carousel');
console.log("asdfasfd");
$("#blog-demo").owlCarousel( {
  loop:true,
  //autoplay:true,
  autoplayTimeout:5000,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    550:{
      items:1,
      nav:true
    },
    768:{
      items:1,
      nav:true,
      loop:true
    }
  }
});

/*
	related Products Slider
*/

// $("#frequently").owlCarousel( {
//   loop:true,
//   autoplay:false,
//   autoplayTimeout:5000,
//   responsiveClass:true,
//   responsive:{
//     0:{
//       items:1,
//       nav:true
//     },
//     550:{
//       items:1,
//       nav:true
//     },
//     768:{
//       items:3,
//       nav:true
//     },
//     992:{
//       items:4,
//       nav:true,
//       loop:true
//     }
//   }
// });

/*
	Testimonials
*/

// $("#testimonial").owlCarousel( {
//   loop:true,
//   autoplay:false,
//   autoplayTimeout:5000,
//   responsiveClass:true,
//   responsive:{
//     0:{
//       items:1,
//       nav:true
//     },
//     550:{
//       items:1,
//       nav:true
//     },
//     768:{
//       items:1,
//       nav:true,
//       loop:true
//     }
//   }
// });

/*
	Add to Cart Number
*/

$(function() {
  // This button will increment the value
  $('.qtyplus').click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});