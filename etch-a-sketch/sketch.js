
$(document).ready(function() {
	
	//populates the page on initial load
  
  var divs = "";
	for (var i = 1;  i <= 256;  i++) {
		divs += '<div class="squares" id='+i+' value="0"  style="background-color: rgb(13,13,12);"></div>';
  };
   
  $(".wrapper").append(divs);
	$('.squares').one("mouseenter",function() {
      var color = '#' + Math.random().toString(16).substring(2, 8);
      $(this).css("background-color", color); 
      $('.squares').attr('value', color);
      
      
        
        
  });

$('squares').mouseenter(function() {
  
  var inputColor = $(this).css("background-color",color),
  brightness = '#'+ (10).toString(16).substring(2, 8),
  outputColor = getNewBrightnessColor(inputColor, brightness);
  $('squares').css('background-color');
  $('#original_brightness').text(inputColor);
  $('#origin_color').css('background-color', inputColor);
  $('.squares').css('background-color', outputColor);
 // $(this).addClass("over");
});
	
	$('#16x16').click(function() {
		populate16x16();
		$('.squares').one("mouseenter",function() {
      var color = '#' + Math.random().toString(16).substring(2, 8);
      $(this).css("background-color", color);
      $('squares').mouseenter(function() {
  
        var inputColor = $(this).css("background-color",color),
        brightness = '#'+ (10).toString(16).substring(2, 8),
        outputColor = getNewBrightnessColor(inputColor, brightness);
        $('squares').css('background-color');
        $('#original_brightness').text(inputColor);
        $('#origin_color').css('background-color', inputColor);
        $('.squares').css('background-color', outputColor);
       // $(this).addClass("over");
      });
      
      
   
		});
	});
	$('#64x64').click(function() {
		populate64x64();
		$('.squares').one("mouseenter",function() {
      var color = '#' + Math.random().toString(16).substring(2, 8);
      $(this).css("background-color", color);
      $('squares').mouseenter(function() {
  
        var inputColor = $(this).css("background-color",color),
        brightness = '#'+ (10).toString(16).substring(2, 8),
        outputColor = getNewBrightnessColor(inputColor, brightness);
        $('squares').css('background-color');
        $('#original_brightness').text(inputColor);
        $('#origin_color').css('background-color', inputColor);
        $('.squares').css('background-color', outputColor);
       // $(this).addClass("over");
      });
      
		});
  });
  $('#Clear').click(function() {
		Clear();
		$('.squares').one("mouseenter",function() {
      var color = '#' + Math.random().toString(16).substring(2, 8);
      $(this).css("background-color", color);
      $('squares').mouseenter(function() {
  
        var inputColor = $(this).css("background-color",color),
        brightness = '#'+ (10).toString(16).substring(2, 8),
        outputColor = getNewBrightnessColor(inputColor, brightness);
        $('squares').css('background-color');
        $('#original_brightness').text(inputColor);
        $('#origin_color').css('background-color', inputColor);
        $('.squares').css('background-color', outputColor);
       // $(this).addClass("over");
      });
      
     
		});
	});
	
});


	function populate16x16() {
    var count= $('div.squares').length;
		var temp = "";
		var div = '<div class="squares" id='+i+' value="0"  style="background-color: rgb(13,13,12);"></div>';
    var input = 16;
    if(count >= 256){
      $('.squares').remove();
    }
		for (var i = 1;  i <= input * input;  i++) {
			temp += div;
		};
		$(".wrapper").append(temp);
		var height = 640 / input;
		$('.squares').css('height', height);
		$('.squares').css('width', height);
	}
	function populate64x64() {
    var count= $('div.squares').length;
		var temp = "";
		var div = '<div class="squares" id='+i+' value="0"  style="background-color: rgb(13,13,12);"></div>';
    var input = 64;
    if(count <= 256){
      $('.squares').remove();
    }
		for (var i = 1;  i <= input * input;  i++) {
			temp += div;
		};
		$(".wrapper").append(temp);
		var height = 640 / input;
		$('.squares').css('height', height);
		$('.squares').css('width', height);
}
  function Clear() {
    var count= $('div.squares').length;
    var temp = "";
    var div = '<div class="squares" id='+i+' value="0"  style="background-color: rgb(13,13,12);"></div>'
    if(count == 256){
		$('.squares').remove();
		for (var i = 1;  i <= 16*16;  i++) {
			temp += div;
		};
		$(".wrapper").append(temp);
		var height = 640/16;
		$('.squares').css('height', height);
    $('.squares').css('width', height);
  }
  else if(count > 256){
    $('.squares').remove();
		for (var i = 1;  i <= 64*64;  i++) {
			temp += div;
		};
		$(".wrapper").append(temp);
		var height = 640/64;
		$('.squares').css('height', height);
    $('.squares').css('width', height);
  }
  }
function getNewBrightnessColor(rgbcode, brightness) {
  var r = parseInt(rgbcode.slice(1, 3), 16),
      g = parseInt(rgbcode.slice(3, 5), 16),
      b = parseInt(rgbcode.slice(5, 7), 16),
      HSL = rgbToHsl(r, g, b),
      newBrightness = HSL[2] + HSL[2] * (brightness / -100), 
      RGB;
      
  $('#original_brightness').text(HSL[2] * 100);
  
  RGB = hslToRgb(HSL[0], HSL[1], newBrightness);
  rgbcode = '#'
      + convertToTwoDigitHexCodeFromDecimal(RGB[0])
      + convertToTwoDigitHexCodeFromDecimal(RGB[1])
      + convertToTwoDigitHexCodeFromDecimal(RGB[2]);
      return rgbcode;
    }

function convertToTwoDigitHexCodeFromDecimal(decimal){
  var code = Math.round(decimal).toString(16);
  
  (code.length > 1) || (code = '0' + code);
  return code;
}
/*
* Converts an RGB color value to HSL. Conversion formula
* adapted from http://en.wikipedia.org/wiki/HSL_color_space.
* Assumes r, g, and b are contained in the set [0, 255] and
* returns h, s, and l in the set [0, 1].
*
* @param   Number  r       The red color value
* @param   Number  g       The green color value
* @param   Number  b       The blue color value
* @return  Array           The HSL representation*/

function rgbToHsl(r, g, b){
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min){
      h = s = 0; // achromatic
  }else{
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }

  return [h, s, l];
}


/* Converts an HSL color value to RGB. Conversion formula
* adapted from http://en.wikipedia.org/wiki/HSL_color_space.
* Assumes h, s, and l are contained in the set [0, 1] and
* returns r, g, and b in the set [0, 255].
*
* @param   Number  h       The hue
* @param   Number  s       The saturation
* @param   Number  l       The lightness
* @return  Array           The RGB representation*/

function hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }

  return [r * 255, g * 255, b * 255];
}
