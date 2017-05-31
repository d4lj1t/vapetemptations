/*
 Log in form
 ----------------------------------- */

module.exports = function events() {
    'use strict';

    var self = this;

    // Dependencies
    var $ = require('jquery');


    /*
     External methods
     ----------------------------------- */

    self.init = function () {

        var animationSpeed = 200,
            container = $('.js-side-menu'),
            btnMenu = $('.js-btn-menu'),
            btnTimes = $('.js-btn-times'),
            clicked = ('clicked'),
            sideMenuWidth = '270px',

            navItem = $('.js-secondary-nav-item'),
            navItemContent = $('.js-secondary-nav-item-content'),
            overlay = $('.js-fade-me');



        $(window).resize(function () {
            var clientHeight = $(window).height();
            container.css('min-height', clientHeight);
        });

        btnMenu.click(function () {

                overlay.fadeIn('fast');
                container.addClass(clicked).show().stop().animate({width: sideMenuWidth}, animationSpeed);

                $(document).bind("mouseup touchend", function (e) {

                    if (!container.is(e.target) // if the target of the click isn't the container...
                        && container.has(e.target).length === 0 // ... nor a descendant of the container
                        || btnTimes.is(e.target)) // ... if target is the side-menu cross icon
                    {
                        /*container.animate({width: '0'});*/
                        if (container.hasClass(clicked)) {

                            container.stop().animate({
                                width: '0'
                            }, animationSpeed, function () {
                                $(this).removeClass(clicked).hide();
                                navItem.removeClass(clicked);
                                navItemContent.hide();
                                overlay.fadeOut('fast');
                            });
                        }
                    }

                });


            }
        );

        navItem.click(function () {

            if (!$(this).hasClass(clicked)) {
                $('.js-secondary-nav-item.clicked').removeClass(clicked).next().stop().slideUp();

                $(this).addClass(clicked).next().stop().slideDown();
            } else {
                $(this).removeClass(clicked).next().stop().slideUp();
            }

        });

    };


    /*
     Internal
     ----------------------------------- */

    self.init();


// Return instance
    return self;
};
