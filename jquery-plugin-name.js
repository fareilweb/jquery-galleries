(function ( $ ) {

    $.fn.pluginName = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
          option1: "",
          option2: 1,
          option3: false
        }, options );



        return this;
    };

}( jQuery ));
