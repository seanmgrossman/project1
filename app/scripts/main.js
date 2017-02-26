


  
  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
      $isAnimatedFith = $('.fith .is-animated'),
      $isAnimatedFithSingle = $('.fith .is-animated__single');      

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
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
        $isAnimatedFith.eq(0).addClass('animated rotateInDownRight').css('animation-delay', '.3s'); 
        $isAnimatedFith.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedFith.addClass('animated bounceInDown').css('animation-delay', '1.2s');
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



//color changer 
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = 'rgb('+r1+','+g1+','+b1+')';

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = 'rgb('+r2+','+g2+','+b2+')';

 $('#gradient').css({
   background: '-webkit-gradient(linear, left top, right top, from('+color1+'), to('+color2+'))'}).css({
    background: '-moz-linear-gradient(left, '+color1+' 0%, '+color2+' 100%)'});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    

    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
   