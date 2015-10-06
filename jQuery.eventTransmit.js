/*! jquery-event-transmit v1.0.0 | (c) 2015, TomoyaOtsuka | MIT Licence */
(function($) {
  $.fn.eventTransmit = function(option) {
    var defaults = {
      runtime:  5000,
      category: "",
      action:   "",
      label:    ""
    };
    var setting = $.extend(defaults,option);

    var $window = $(window);
    var $target = $(this);
    var targetOffset;
    var targetHeight;
    var windowHeight;
    var view;

    var flag = true;
    var clearflag = false;
    var timer;



    $window.on('load pjax:load',function() {
      targetOffset = $target.offset().top;
      targetHeight = $target.height();
      windowHeight = $window.height();
      view = {
        'top':    targetOffset - windowHeight/2,
        'bottom': targetOffset + targetHeight - windowHeight/2
      };

      set();
    });



    function set() {
      $window.on('scroll',function() {
        var value = $(this).scrollTop();

        if (value > view.top && value < view.bottom && flag) {

          run();
          flag = false;
          clearflag = true;

        } else if (value < view.top || value > view.bottom) {

          if (clearflag) {
            clear();
            flag = true;
            clearflag = false;
          }
        }
      });
    }

    function run() {
      timer = window.setTimeout(function() { transmit(); }, setting.runtime);
    }

    function clear() {
      clearTimeout(timer);
    }

    function transmit() {
      ga('send', 'event', setting.category, setting.action, setting.label, {'nonInteraction':true});
      flag = false;
      clearflag = false;
    }


    return(this);
  };
})(jQuery);
