


  
  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUpBig'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s'); 
        $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        });
      }
    }

  });
  




//Change the liquid settings
    d3.select('#fillgauge2').call(d3.liquidfillgauge, 28, {
      circleColor: '#0f8bca',
      textColor: '#ffffff',
      waveTextColor: '#174f80',
      waveColor: '#0f8bca',
      circleThickness: 0.1,
      circleFillGap: 0.2,
      textVertPosition: 0.52,
      waveAnimateTime: 1000,
      backgroundColor: '#757D75',
      valueCountUpAtStart: false,
      waveRiseAtStart: false,
      fillWithGradient: true,
      gradientPoints: [0.2, 0, 0.9, 1],
      gradientFromColor: '#0f8bca',
      gradientToColor: '#ffffff'

    });
    d3.select('#fillgauge3').call(d3.liquidfillgauge, 40, {
      circleColor: '#0f8bca',
      textColor: '#ffffff',
      waveTextColor: '#174f80',
      waveColor: '#0f8bca',
      circleThickness: 0.1,
      circleFillGap: 0.2,
      textVertPosition: 0.52,
      waveAnimateTime: 2000,
      waveHeight: 0.3,
      waveCount: 1,
      fillWithGradient: true,
      gradientPoints: [0.2, 0, 0.9, 1],
      gradientFromColor: '#0f8bca',
      gradientToColor: '#ffffff'
    });
    d3.select('#fillgauge4').call(d3.liquidfillgauge, 50, {
      circleThickness: 0.1,
      circleFillGap: 0.2,
      textColor: '#ffffff',
      waveTextColor: '#174f80',      
      textVertPosition: 0.52,
      waveAnimateTime: 5000,
      waveHeight: 0.15,
      waveAnimate: true,
      waveOffset: 0.25,
      valueCountUp: false,
      fillWithGradient: true,
      gradientPoints: [0.2, 0, 0.9, 1],
      gradientFromColor: '#0f8bca',
      gradientToColor: '#ffffff'
    });
    d3.select('#fillgauge5').call(d3.liquidfillgauge, 60, {
      circleThickness: 0.1,
      circleFillGap: 0.2,
      circleColor: '#0f8bca',
      textColor: '#ffffff',
      waveTextColor: '#174f80',
      waveColor: '#0f8bca',
      textVertPosition: 0.52,
      waveAnimateTime: 1000,
      waveHeight: 0.05,
      waveAnimate: true,
      waveRise: false,
      waveOffset: 0.25,
      textSize: 0.75,
      waveCount: 3,
      fillWithGradient: true,
      gradientPoints: [0.2, 0, 0.9, 1],
      gradientFromColor: '#0f8bca',
      gradientToColor: '#ffffff'      
    });
    d3.select('#fillgauge6').call(d3.liquidfillgauge, 90, {
      circleColor: '#0f8bca',
      textColor: '#ffffff',
      waveTextColor: '#174f80',
      waveColor: '#0f8bca',
      circleThickness: 0.1,
      circleFillGap: 0.2,
      textVertPosition: 0.52,
      waveAnimateTime: 2000,
      waveHeight: 0.3,
      waveCount: 1,
      fillWithGradient: true,
      gradientPoints: [0.2, 0, 0.9, 1],
      gradientFromColor: '#0f8bca',
      gradientToColor: '#ffffff'
    });
   