;(function($) {
    "use strict";

	$.fn.scrollStyles = function(options){
               
        var defaults = {
            "frameRate": 500,
            "scrollOffset": 50,
            "sectionElements": '.scrollstyles-section'
        };
        
        var settings = $.extend( {}, defaults, options );
        
        this.initialize = function() {
            addSlidesPosition();
            checkScrollPosition(scrollPos);
            return this;
        };

        var sections = [];
        var scrollPos = 0;
        var toggleElement = $(this);
        var targetElementInitialClass = $(this).attr('class');
        var timeout = false;

        // Create object with all slides positions
        var addSlidesPosition = function(){
            // Remove previous entries
            sections = [];
            
            // For every slides
            for (var i = 0 ; i < $(settings.sectionElements).length ; i++) {
                var element = $(settings.sectionElements)[i];
                var slideStartPos = $(element).offset().top;
                var slideHeight = $(element).height();
                var slideEndPos = slideStartPos + slideHeight;
                
                // Add new values to array
                sections.push({
                    "slide": $(element),
                    "slideStartPos": slideStartPos,
                    "slideEndPos": slideEndPos
                });
            }
        }

        var checkScrollPosition = function(scrollPos){
            var slideOver = false;

            sections.forEach(function(item) {
                if((scrollPos + settings.scrollOffset) >= item.slideStartPos && (scrollPos + settings.scrollOffset) < item.slideEndPos){
                    var slideColor = $(item.slide).data('styles-class');
                    toggleElement.attr('class', targetElementInitialClass + ' ' + slideColor);
                    slideOver = true;
                }
            });

            if (!slideOver){
                toggleElement.attr('class', targetElementInitialClass);
            }
        }

        // Compare scroll position and overlayed element on scroll
        $(window).scroll(function() {
            if (!timeout) {
                timeout = setTimeout(function () {            
                    clearTimeout(timeout);
                    timeout = false;
                    scrollPos = $(document).scrollTop();
                    checkScrollPosition(scrollPos);
                }, settings.frameRate);
            }
        });

        // On window resize
        $(window).resize(function(){
            addSlidesPosition();
            checkScrollPosition(scrollPos);
        });

        // Init
        return this.initialize();
    };
})(jQuery);