jQuery(document).ready(function(){
  jQuery(".onhover-div").click(function(){
    jQuery.getJSON('/cart.js', function(data) {
      console.log(data);
      var html = '';
      
      if(data.items.length) {
        var items_subtotal_price = data.items_subtotal_price;
        html += '<ul class="cart_product">';
        for( i=0; i < data.items.length; i++  ) {
        	var featured_image = data.items[i].featured_image.url;
          	var product_title = data.items[i].product_title;
          	var quantity = data.items[i].quantity;
          	var original_price = data.items[i].original_price;
          	var final_price = data.items[i].final_price;
          	var url = data.items[i].url;
            html += '<li data-cart-item="">';
            html += '<div class="media">';
            html += '<a href="'+url+'">';
            html += '<img alt="" class="mr-3" src="'+featured_image+'"></a>'
            html += '<div class="media-body">'
            html += '<a href="'+url+'">';
            html += '<h4 data-cart-popup-title="">'+product_title+'</h4>';
            html += '</a>';
            html += '<h4>';
            html += '<span data-cart-count="">'+quantity+'</span> x <span>'+Shopify.formatMoney(original_price)+' </span>';
            html += '</h4>';
            html += '</div>';
            html += '</div>';
            html += '<div class="close-circle">';
            html += '<a href="#">';
            html += '<i class="ti-trash" aria-hidden="true"></i>';
            html += '</a>';
            html += '</div>';
            html += '</li>';
        }
        html += '</ul>';
        html += '<ul class="cart_total"><li><div class="total">subtotal : <span data-cart-subtotal="">'+Shopify.formatMoney(items_subtotal_price)+'</span></div></li>';
        html += '<li>';
        html += '<div class="buttons">';
        html += '<a href="https://cheeky-chirp.myshopify.com/cart" class="btn btn-solid btn-block btn-solid-sm view-cart">view cart</a>';
        //html += '<div class="btn btn-solid btn-block btn-solid-sm view-cart" name="checkout">checkout</div>';
        //html += '<div class="cart__submit-controls">';
        //html += '<input type="submit" name="checkout" class="cart__submit btn btn--small-wide" value="Checkout">';
        //html += '</div>';
        html += '<a class="checkout btn btn-solid btn-block btn-solid-sm view-cart" href="/checkout">Checkout</a>';
        html += '</div>';
        html += '</li>';
        html += '</ul>';
        jQuery(".cart_media").html(html);
      } else {
      	jQuery(".cart_media").html('<div class="no-result-found"><h4> Your cart is currently empty</h4><br><a href="https://chirpnation.co.uk/collections" class="btn btn-default"> Continue Shopping.. </a></div>');
      }
      
    });
  });
  
});

// Loadmore functionality Anis
jQuery(function () {
    jQuery(".el-blog").slice(0, 3).show();
    jQuery(".loadMore").on('click', function (e) {
        e.preventDefault();
        jQuery(".el-blog:hidden").slice(0, 3).slideDown();
        if (jQuery(".el-blog:hidden").length == 0) {
            jQuery(".loadMore").hide();
        }
        jQuery('html,body').animate({
            //scrollTop: jQuery(this).offset().top
        }, 1500);
    });
});
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
        jQuery('.totop a').fadeIn();
    } else {
        jQuery('.totop a').fadeOut();
    }
});
  
// Find Us On Start
jQuery('.find_us_slide').slick({
  autoplay: true,
  nav: false,
  autoplaySpeed: 2000,
  fade: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        fade: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        fade: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        fade: true,
      }
    }
  ]
});  

// Dropdown Menu Toggle
jQuery(".ei_dropdown_menu_3").hover(function(){
  jQuery('.ei_dropdown_submenu').show();
},
function(){
  jQuery('.ei_dropdown_submenu').hide();
});

// jQuery('.ei_dropdown_menu_3').on("click", function(e) {
//   jQuery('.ei_dropdown_submenu').slideToggle(1000);
// });

// Instantiate EasyZoom instances
//var $easyzoom = $('.easyzoom').easyZoom();
// Get an instance API
//var api = $easyzoom.data('easyZoom');

//jQuery(' #blog-demo .zoom_01').elevateZoom({
  //zoomType: "inner",
  //cursor: "crosshair",
//   easing: true,
//   cursor: "crosshair",
//   zoomWindowFadeIn: 320,
//   zoomWindowFadeOut: 480
//});

jQuery(document).ready(function(){
    jQuery('.image-zoom')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom({
      url: jQuery(this).find('img').attr('data-zoom')
    });
  });

jQuery('.slide-4').slick({
        autoplay: true,
        autoplaySpeed: 5000,
       slidesToShow: 4,
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
