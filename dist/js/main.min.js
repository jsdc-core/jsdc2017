/*
	Photon by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    skel.breakpoints({
      xlarge: '(max-width: 1680px)',
      large: '(max-width: 1140px)',
      medium: '(max-width: 980px)',
      small: '(max-width: 736px)',
      xsmall: '(max-width: 480px)',
      xxsmall: '(max-width: 320px)'
    });

    $(function() {

      var $window = $(window),
          $body = $('body');

      // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
          window.setTimeout(function() {
              $body.removeClass('is-loading');
          }, 250);
      });

      // Fix: Placeholder polyfill.
      $('form').placeholder();

      // Prioritize "important" elements on mobile.
      skel.on('+mobile -mobile', function() {
        $.prioritize(
          '.important\\28 mobile\\29',
          skel.breakpoint('mobile').active
        );
      });

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

      // lazyload
      $('div.lazy').lazyload({
        effect : 'fadeIn'
      });
      $('img.lazy').lazyload({
        effect : 'fadeIn'
      });

    });

    setInterval(function(){
      var specifyDay = new Date('2017/11/04 08:30:00').getTime();
      var now = new Date().getTime();
      var diff = new Date(specifyDay - now).getTime();
      var util = {
        second: 1000,
        minute: 1000*60,
        hour: 1000*60*60,
        date: 1000*60*60*24,
      }
      // var year = diff.getFullYear();
      // var month = diff.getMonth() + 1;
      var date = Math.floor(diff / util.date);
      var hour = Math.floor((diff - (date * util.date)) / util.hour);
      var minute = Math.floor((diff - ((date * util.date) + (hour * util.hour))) / util.minute);
      var second = Math.floor((diff - ((date * util.date) + (hour * util.hour) + (minute * util.minute))) / util.second);
      $('.final-countdown').text('倒數' + date + '天 ' + hour + ':' + minute + ':' + (second < 10? '0' + second:second));
    }, 1000);

})(jQuery);
