var map= `
______________________________________________________________________________________________________
|                                                                                                    |
|                                                                                                    |
|                            ____________________________                                            |
|     _______________________█                                                                       |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                         ____           _                           |
|                                                              ______                                |
|                                                          _____                                     |
|____________________________________________________________________________________________________|
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
`; 
var x= 0; 
var y= 0; 
var jumping= false; 
var max_speed= 4; 
var speed= 0; 
var friction= 1; 
var l_r= [false, false]; 

$.fn.selectRange= function(start, end) {if(!end) end= start; return this.each(function() {if(this.setSelectionRange){this.focus(); this.setSelectionRange(start, end); }else if(this.createTextRange){var range= this.createTextRange(); range.collapse(true); range.moveEnd('character', end); range.moveStart('character', start); range.select(); }});}; 

set= function(z){ 
	$("#grid").selectRange((!!z[0] || !z[0]? (100 * z[1] + z[1] + z[0]): (1 || 2 || 3))); 
} 

$(function(){ 
	$("#grid").val(map.replaceAll("|", "").slice(104, -104)); 

	$("#grid").on("input keydown keyup", function(i){i.preventDefault(); }); 

	$("#grid").on("keydown", function(i){ 
		switch(i.keyCode){ 
	    	case 37: 
				(!jumping && x - 1 >= 0)? (function(){speed - 1 >= -max_speed? speed--: 1; l_r[0]= true; })(): 1; 
				break; 
	    	case 38: 
	    		($("#grid").val()[100 * y + y + x] == "_" && !jumping && y - 1 >= 0)? (function(){jumping= true; y--; set([x, y]); setTimeout(function(){y - 1 >= 0? (function(){y--; set([x, y]); })(): 1; jumping= false; }, 271)})(): 1; 
				break; 
	    	case 40: 
				break; 
	    	case 39: 
				(!jumping && x + 1 <= 100)? (function(){speed + 1 <= max_speed? speed++: 1; l_r[1]= true; })(): 1; 
				break; 
		} 
	}); 

	$(document).on("keyup", function(i){
		switch(i.keyCode){ 
	    	case 37: 
				l_r[0]= false; 
				break; 
	    	case 38: 
				break; 
	    	case 40: 
				break; 
	    	case 39: 
				l_r[1]= false; 
				break; 
		} 

		//console.log(l_r); 
	})

	setInterval(function(){ 
		if(!l_r[0] && !l_r[1]){
			speed > 0? speed -= friction: speed < 0? speed += friction: 1; 
		}

		if(x + speed >= 100){ 
			x= 100; 
			speed= 0; 
		}else if(x + speed <= 0){ 
			x= 0; 
			speed= 0; 
		}else{ 
			x += speed; 
		}; 

		(speed || x == 0 || x == 100)? set([x, y]): 1; 
		(!jumping && (($("#grid").val()[100 * y + y + x] != "_" && $("#grid").val()[100 * y + y + x - 1] != "_")))? (function(){y++; set([x, y])})(): 1; 
	}, 31); 
}); 