(function($) {

    // skel.breakpoints({
    //   xlarge: '(max-width: 1680px)',
    //   large: '(max-width: 1140px)',
    //   medium: '(max-width: 980px)',
    //   small: '(max-width: 736px)',
    //   xsmall: '(max-width: 480px)',
    //   xxsmall: '(max-width: 320px)'
    // });

    // $(function() {

    //   var $window = $(window),
    //       $body = $('body');

    //   // Disable animations/transitions until the page has loaded.
    //   $body.addClass('is-loading');

    //   $window.on('load', function() {
    //       window.setTimeout(function() {
    //           $body.removeClass('is-loading');
    //       }, 250);
    //   });

    //   // Fix: Placeholder polyfill.
    //   $('form').placeholder();

    //   // Prioritize "important" elements on mobile.
    //   skel.on('+mobile -mobile', function() {
    //     $.prioritize(
    //       '.important\\28 mobile\\29',
    //       skel.breakpoint('mobile').active
    //     );
    //   });

      // Scrolly 目前看起來還用不到，所以先隱藏起來
      // $('.scrolly').scrolly();

      // backstretch
      // $('#header').backstretch([
      //   "./images/jsdc-scenario-1.jpg",
      //   "./images/jsdc-scenario-2.jpg",
      //   "./images/jsdc-scenario-3.jpg",
      //   "./images/jsdc-scenario-4.jpg",
      //   "./images/jsdc-scenario-5.jpg",
      // ], {duration: 3000, fade: 1200, lazyload: true,});

    //   // lazyload
    //   $('div.lazy').lazyload({
    //     effect : 'fadeIn'
    //   });
    //   $('img.lazy').lazyload({
    //     effect : 'fadeIn'
    //   });

    // });

    // if (location.pathname === '/')
      // setInterval(function(){
      //   var specifyDay = new Date('2017/10/01 23:59:59').getTime();
      //   var now = new Date().getTime();
      //   var diff = new Date(specifyDay - now).getTime();
      //   var util = {
      //     seconds: 1000,
      //     minutes: 1000*60,
      //     hours: 1000*60*60,
      //     date: 1000*60*60*24,
      //   }

      //   var date = Math.floor(diff / util.date);
      //   var hours = Math.floor((diff - (date * util.date)) / util.hours);
      //   var minutes = Math.floor((diff - ((date * util.date) + (hours * util.hours))) / util.minutes);
      //   var seconds = Math.floor((diff - ((date * util.date) + (hours * util.hours) + (minutes * util.minutes))) / util.seconds);

      //   $('.date').text(date.toString().length === 1?'0'+ date:date);
      //   $('.hours').text(hours.toString().length === 1?'0'+ hours:hours);
      //   $('.minutes').text(minutes.toString().length === 1?'0'+ minutes:minutes);
      //   $('.seconds').text(seconds.toString().length === 1?'0'+ seconds:seconds);
      // }, 1000);

})(jQuery);
