var map= `
______________________________________________________________________________________________________
|                                                                                                    |
|                                                                                                    |
|                             ___________________________                                            |
|     _______________________                                                                        |
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
				(!jumping && x - 1 >= 0)? (function(){x--; set([x, y])})(): 1; 
				break; 
	    	case 38: 
	    		(!jumping && y - 1 >= 0)? (function(){jumping= true; y--; set([x, y]); setTimeout(function(){y - 1 >= 0? (function(){y--; set([x, y]); })(): 1; jumping= false; }, 271)})(): 1; 
				break; 
	    	case 40: 
				break; 
	    	case 39: 
				(!jumping && x + 1 <= 100)? (function(){x++; set([x, y])})(): 1; 
				break; 
		} 
	}); 

	setInterval(function(){ 
		(!jumping && $("#grid").val()[100 * y + y + x] != "_")? (function(){y++; set([x, y])})(): 1; 
	}, 782); 
}); 