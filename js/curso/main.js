function reqListenerForPageLoad (e) { 
    urL= e.explicitOriginalTarget.responseURL
    urL= urL.slice(urL.indexOf("/") + 1, urL.length)
    urL= urL.slice(urL.indexOf("/") + 1, urL.length)
    urL= urL.slice(urL.indexOf("/"), urL.length)
    console.log(urL)
    history.pushState({page: 1}, "", urL);  
    document.open(); 
    document.write( e.target.responseText ); 
    document.close(); 
}; 
       
function loadPage(x, s){
    if(x != window.location.pathname || (typeof s != undefined && s == "p")){
        var xxa = new XMLHttpRequest(); 
        xxa.addEventListener("load", reqListenerForPageLoad); 
        xxa.open("GET", x); 
        xxa.send(); 
    }
}
   


window.onpopstate= function(){
loadPage(window.location.pathname, "p")
}






var vidHeight;
var maxz = 0;
var best = 0;
var out = false;
var copiedWidget;
var snapping = true;
var gridSnapping = false;
var firstPlay = false;
pasted = true;
type = "none";
copiedTop = 0;
copiedHeight = 0;
copiedWidth = 0;
pasteCopiedTop = 0;
pasteCopiedLeft = 0;
pasteCountTopRef = 0;
pasteCountLeftRef = 0;
select = false;
copiedLeft = 0;
widg= ""; 
magnet= undefined;
getSpace= function(){
  vW= $("video")[0].videoWidth
  vH= $("video")[0].videoHeight
  vOW= $("video")[0].offsetWidth
  vOH= $("video")[0].offsetHeight
	
	if(vW / vH < vOW / vOH){
		rat= vH / vOH
		return {left: ((vOW - (vW/rat)) / 2) + ($("#customizationBars").is(".open")?4: 0),top: 0,bottom:0, right: ((vOW - (vW/rat)) / 2) - ($("#customizationBars").is(".open")?4: 0)}
	}else if(vW / vH > vOW / vOH){
		rat= vW / vOW
		return {left: 0,top: ((vOH - (vH/rat)) / 2),bottom:((vOH - (vH/rat)) / 2), right: 0}
	}
}
function sizeWidgetero(){
if($("#customizationBars").is(".open")){
$(".widgetero").css({
"height": "",
"width": "",
"margin-top": 46,
"margin-left": ""})
if(getSpace().top){
$(".widgetero").css({
"height": ($("body").height() - 46) / 2 - getSpace().top * 2,
"margin-top": getSpace().top + 46})}else{
$(".widgetero").css({
"width": $("body").width() / 2 - getSpace().left * 2,
"margin-left": getSpace().left})
}}else{
$(".widgetero").css({
"height": "",
"width": "",
"margin-top": 46,
"margin-left": ""})
if(getSpace().top){
$(".widgetero").css({
"height": $("body").height() - 61 - getSpace().top * 2,
"margin-top": getSpace().top + 46})}else{
$(".widgetero").css({
"width": $("body").width() - getSpace().left * 2,
"margin-left": getSpace().left})
}}	
}
function integerer(i){
return parseInt(i.slice(0, -1))}
window.onresize= function(e){
sizeWidgetero()
}
$(document).on("ready",function(){
	purger.purge(); 
				
for(e in Object.keys(localStorage)){
	if(Object.keys(localStorage)[e].indexOf("/A.K.A._Dizzy/raw/p/i9d2g2cftdCds") === 0 && Object.keys(localStorage)[e].indexOf(".html") == Object.keys(localStorage)[e].length - 5){
		console.log(Object.keys(localStorage)[e])

$(".widgets").append(`<li>
	<div class="widget" cont= "<iframe src= '${Object.keys(localStorage)[e].replace("/raw/p/", "/raw/#/")}' width= '100%' height= '100%'></iframe>" style="height:200px; width: 320px">  
	</div>
	<img src="resources/images/widgets/unknown.jpg" alt="">
</li>`)
	}
}	

$("video")[0].addEventListener('loadeddata', (e) => {
    !firstPlay? (function(){sizeWidgetero(); firstPlay= true})(): 1;
});
	$("html").click(function() {
		$(".wrapper").removeClass("visible")
		$(".back-arrow").removeClass("open");
		$("#right-menu .index-arrow").removeClass("open");
		$("#profileSettings").removeClass("open");
		$("#index-menu").removeClass("open");
		$("#index-text").removeClass("open");
		$("#index-trigger .index-arrow").removeClass("open");
		$(".indexMenuItem").removeClass("fadeInDown");
		$(".indexMenuItem").addClass("fadeOutUp");
		$(".indexMenuItem").removeClass("open");
});
$('#index').click(function(i){
	i.stopPropagation()
   
});	
$('#profileSettings').click(function(i){
	i.stopPropagation()
   
});	
    $(".indexMenuItem ").prop("title", function(){ 
    return $(this).text();
    e.stopPropagation()
	});
    			player.play();
			player.pause();
			$("#actions section").height($("#actions").height()- $("#actions tabs").height() )
	$("#index-trigger").on("click",function(e){
		$(".wrapper").toggleClass("visible")
		$("#index-menu").toggleClass("open");
		$("#index-text").toggleClass("open");
		$("#index-trigger .index-arrow").toggleClass("open");
		$(".indexMenuItem").toggleClass("fadeInDown");
		$(".indexMenuItem").toggleClass("fadeOutUp");
		$(".indexMenuItem").toggleClass("open");
		if($("#profileSettings").hasClass("open")){
			$(".wrapper").addClass("visible")
			$(".back-arrow").removeClass("open");
			$("#right-menu .index-arrow").removeClass("open");
			$("#profileSettings").removeClass("open");
		}
		e.stopPropagation();
	});
	
	$('.widgetero').mousedown(function(e) {
		if($("#customizationBars").hasClass("open")){
				getActual().addClass("selectedWidget");
		}		
	})

	$('.widgets li').mousedown(function(e) {
if($("#customizationBars").hasClass("open")){
	widg= '<div class="widget draggable"  style="height:' + $(this).find($( ".widgets .widget" ))[0].style.height + '; width:' + $(this).find($( ".widgets .widget" ))[0].style.width + '"><div class="ui-resizable-handle ui-resizable-nw" id="nwgrip"></div><div class="ui-resizable-handle ui-resizable-ne" id="negrip"></div><div class="ui-resizable-handle ui-resizable-sw" id="swgrip"></div><div class="ui-resizable-handle ui-resizable-se" id="segrip"></div><div class="ui-resizable-handle ui-resizable-n" id="ngrip"></div><div class="ui-resizable-handle ui-resizable-s" id="sgrip"></div><div class="ui-resizable-handle ui-resizable-e" id="egrip"></div><div class="ui-resizable-handle ui-resizable-w" id="wgrip"></div><div class="content" ><div class="coverDiv" style="position: absolute; top: 0;left: 0;width: 100%;height:100%; display: block;z-index: 5;"></div>' + $(this).find($( ".widgets .widget" ))[0].getAttribute("cont") + '</div></div>'; 
	$( ".widgetero" )[0].insertAdjacentHTML("beforeend", widg); 
var dropped = false;
""
$('.widgetero .widget').last().draggable({
	stack:".widgetero .widget",
	cursor: "move", 
	snap: ".vidVidCustomizationMode, .widgetero, .widgetero .widget", 
	snapMode: "both", 
	revertDuration: 100,
	snapTolerance: 30,
	grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())],
containment: "window",
cursorAt: { left: $('.widgetero .widget').last().width() / 2 },
	revert: false,
    start: function(event, ui) {
    	if(!$('.widgetero .widget').last().hasClass("dropped")){ 
    		ui.helper.data('dropped', false);
    	}else{
    		
    	}
      
    },
    stop: function(event, ui)
    {
		if(!ui.helper.data('dropped')){
			if($("#customizationBars").hasClass("open")){
			$(this).remove()}
		}      
    }
})
$('.widgetero .widget').last().css({
	left: e.pageX - $('.widgetero .widget').last().width()/2,
	top: e.pageY -($('.widgetero .widget').last().height()/2)}).trigger(e)
}
});
$(document).on("mousemove", function(o){
mouseX= o.pageX
mouseY= o.pageY
if($(".select").is(".on") && $("#customizationBars").hasClass("open")){
	$(".horizontalredlight").css({"left": `${(mouseX - parseInt($(".widgetero").css("margin-left")) - (parseInt($(".horizontalredlight").css("width"))/2))}px`, "top": `${((mouseY - 46) - 0.5 - (parseInt($(".widgetero").css("margin-top")) - 46))}px`})
	$(".verticalredlight").css({"left": `${mouseX - parseInt($(".widgetero").css("margin-left")) - 0.5}px`, "top": `${((mouseY - 46 - (parseInt($(".widgetero").css("margin-top")) - 46) - (parseInt($(".verticalredlight").css("height")))/2))}px`})
	$(".horizontalredlight").css({"display": "block"})
	$(".verticalredlight").css({"display": "block"})
}else{
	$(".horizontalredlight").css({"display": "none"})
	$(".verticalredlight").css({"display": "none"})
}
})
$(document).on("keydown", function(r){switch(r.keyCode){
  case 81:
			controls(null, "resize")
		break;
	case 86:
			!r.ctrlKey? controls(null, "select"): controls(null, "paste")
		break;
	case 67:
			r.ctrlKey? controls(null, "copy"): false
		break;
	case 77:
			controls(null, "magnet")
		break;
}})
$(document).mouseup(function(e) {
	if($("#customizationBars").hasClass("open")){
		$('.widgetero .widget').draggable({ 
		distance: 0,
		containment: "window",
		stack:".widgetero .widget",
		cursor: "move", 
		snap: ".vidVidCustomizationMode, .widgetero, .widgetero .widget", 
		snapMode: "both", 
		revert: 'invalid', 
		revertDuration: 86,
		cursorAt: false,
		grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())],
		snapTolerance: 10});
		if(snapping){
    		$('.widgetero .widget').draggable("option", "snap", ".vidVidCustomizationMode, .widgetero, .widgetero .widget" );
		}else{
    		$('.widgetero .widget').draggable("option", "snap", false );
		}
		$('.vidVidCustomizationMode').droppable({
    		accept: '.widget',
    		  
    		drop: function(event, ui)
    		{   

    			if(!$(ui.draggable).is(".select")){
    			$(ui.draggable).width((($(ui.draggable).width()) / ($(".widgetero").width()) * 100 )+ "%")
    			$(ui.draggable).height((($(ui.draggable).height()) / ($(".widgetero").height()) * 100 )+ "%")
    			$(ui.draggable).css({"left": (parseInt($(ui.draggable).css("left").replaceAll("px", "")) / ($(".widgetero").width()) * 100 ) + "%"})
    			$(ui.draggable).css({"top": ((parseInt($(ui.draggable).css("top").replaceAll("px", ""))) / ($(".widgetero").height()) * 100 ) + "%"})
    			}
    			if($(ui.draggable).is(".select")){
    			neaRestTop= -10000
    			neaRestLeft= -10000
    			neaRestBottom= 10000
    			neaRestRight= 10000
    			intersects= {};
    			intersects.vertically= [];
    			intersects.horizontally= [];
    			$(".widget.dropped").not(".selectedWidget").each(function(){
    				if(parseInt($(this).css("left")) < parseInt($(".verticalredlight").css("left")) && parseInt($(this).css("left")) + parseInt($(this).css("width")) > parseInt($(".verticalredlight").css("left"))){
    					intersects.vertically[intersects.vertically.length]= $(this)
    				}
    				if(parseInt($(this).css("top")) < parseInt($(".horizontalredlight").css("top")) && parseInt($(this).css("top")) + parseInt($(this).css("height")) > parseInt($(".horizontalredlight").css("top"))){
    					intersects.horizontally[intersects.horizontally.length]= $(this)
    				}
				})
    			intersects.vertically.forEach(function(intersected){
    				if((parseInt($(intersected).css("top")) + parseInt($(intersected).css("height"))) > neaRestTop && (mouseY - 46 - parseInt($(".widgetero").css("margin-top")) + 46) > (parseInt($(intersected).css("top")) + parseInt($(intersected).css("height")))){
    					neaRestTop= (parseInt($(intersected).css("top")) + parseInt($(intersected).css("height")))
    				}
    				if(parseInt($(intersected).css("top")) < neaRestBottom && (mouseY - 46 - parseInt($(".widgetero").css("margin-top")) + 46) < parseInt($(intersected).css("top"))){
    					neaRestBottom= parseInt($(intersected).css("top"))
    				}
					console.log(`${$(intersected).index()} top:${parseInt($(intersected).css("top"))} bottom:${(parseInt($(intersected).css("top")) + parseInt($(intersected).css("height")))}`)
    			})

    			intersects.horizontally.forEach(function(intersected){
    				if((parseInt($(intersected).css("left")) + parseInt($(intersected).css("width"))) > neaRestLeft && (mouseX - parseInt($(".widgetero").css("margin-left"))) > (parseInt($(intersected).css("left")) + parseInt($(intersected).css("width")))){
    					neaRestLeft= (parseInt($(intersected).css("left")) + parseInt($(intersected).css("width")))
    				}
    				if(parseInt($(intersected).css("left")) < neaRestRight && (mouseX - parseInt($(".widgetero").css("margin-left"))) < parseInt($(intersected).css("left"))){
    					neaRestRight= parseInt($(intersected).css("left"))
    				}
    			})
    			$(".widget.selectedWidget").css({"height": `${(neaRestBottom == 10000? (mouseY - 46> (parseInt($(".widgetero").css("margin-top")) - 46 + $(".widgetero").height()))?$(".widgetero").height() + parseInt($(".widgetero").css("margin-top")) - 46:$(".widgetero").height(): neaRestBottom) - (neaRestTop == -10000? (mouseY - 46 < parseInt($(".widgetero").css("margin-top")) - 46)?-parseInt($(".widgetero").css("margin-top")) + 46: 0: neaRestTop)}px`})
				$(".widget.selectedWidget").css({"width": `${(neaRestRight == 10000? (mouseX > parseInt($(".widgetero").css("margin-left")) + $(".widgetero").width())?$(".widgetero").width() + parseInt($(".widgetero").css("margin-left")):$(".widgetero").width(): neaRestRight) - (neaRestLeft == -10000?mouseX < parseInt($(".widgetero").css("margin-left"))?-parseInt($(".widgetero").css("margin-left")): 0: neaRestLeft)}px`})
				$(".widget.selectedWidget").css({"top": `${neaRestTop == -10000? (mouseY - 46 < parseInt($(".widgetero").css("margin-top")) - 46)?-parseInt($(".widgetero").css("margin-top")) + 46:0: neaRestTop}px`})
				$(".widget.selectedWidget").css({"left": `${neaRestLeft == -10000?mouseX < parseInt($(".widgetero").css("margin-left"))?-parseInt($(".widgetero").css("margin-left")): 0: neaRestLeft}px`})
    			$(ui.draggable).width((($(ui.draggable).width()) / ($(".widgetero").width()) * 100 )+ "%")
    			$(ui.draggable).height((($(ui.draggable).height()) / ($(".widgetero").height()) * 100 )+ "%")
    			$(ui.draggable).css({"left": ((parseInt($(ui.draggable).css("left").replaceAll("px", ""))) / ($(".widgetero").width()) * 100 ) + "%"})
    			$(ui.draggable).css({"top": ((parseInt($(ui.draggable).css("top").replaceAll("px", ""))) / ($(".widgetero").height()) * 100 ) + "%"})
    			console.log(`Mouse, X:${mouseX} Y:${mouseY - 46} neaRestTop:${neaRestTop} neaRestBottom:${neaRestBottom} neaRestLeft:${neaRestLeft} neaRestRight: ${neaRestRight} intersectsVertically:`)
    			console.log(intersects)
    			}

    			ui.draggable.data('dropped', true);
				dropped = true; 
				$('.widgetero .widget').last().addClass("dropped")
				if($(".resize").is(".on")){
					controls(null, "resize")
				}else{
					controls(null, "select")
				}
				
		}})
		$('.delete').droppable({
    		accept: '.widget',
    		   tolerance: "pointer",
    		drop: function(event, ui)
    		{        
    			$(".selectedWidget").remove();

		}})

		$(".widgetero .widget").resizable({
distance: 0,
 handles: {
        'nw': '#nwgrip',
        'ne': '#negrip',
        'sw': '#swgrip',
        'se': '#segrip',
        'n': '#ngrip',
        'e': '#egrip',
        's': '#sgrip',
        'w': '#wgrip'
    },
	snap: ".widgetero, .vidVidCustomizationMode, .widget", 
  snapMode: "both", 
snapTolerance: 12,
grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())],

stop: function(event, ui)
    		{        
    			$(ui.element).width((($(ui.element).width()) / ($(".widgetero").width()) * 100 )+ "%")
    			$(ui.element).height((($(ui.element).height()) / ($(".widgetero").height()) * 100 )+ "%")
    			$(ui.element).css({"left": (parseInt($(ui.element).css("left").replaceAll("px", "")) / ($(".widgetero").width()) * 100 ) + "%"})
    			$(ui.element).css({"top": (parseInt($(ui.element).css("top").replaceAll("px", "")) / ($(".widgetero").height()) * 100 ) + "%"})
		}
})
		if(snapping){
    		$('.widgetero .widget').resizable("option", "snap", ".vidVidCustomizationMode, .widgetero, .widgetero .widget" );
		}else{
    		$('.widgetero .widget').resizable("option", "snap", false );
		}
		if(out){
			getActual().removeClass("selectedWidget");
			out = false;
		}else
		{
			
		getActual().addClass("selectedWidget");
		}
				
}
})
	var wasPlaying = false;
	$("#dots").on("click",function(){
		$("#Store").toggleClass("open");
		$(".widgetero").toggleClass("invisible");
		if(!$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open")){
			$("#index-trigger").children().removeClass("openedStore");
		$("#right-menu #dots").children().removeClass("openedStore");
		$("#right-menu").children().removeClass("openedStore");
		$("#right-menu").children().removeClass("store");
		$(".back-arrow").removeClass("openedStore");
		$("#cover").addClass("open");
		}
		if(!$("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			$("#right-menu").children().addClass("openedStore");
		$("#right-menu").children().removeClass("store");
		}
		if(!$("#customizationBars").hasClass("open")){
			if(!player.paused() && $("#Store").hasClass("open")){
			player.pause();
			wasPlaying = true;
		}
		if(player.paused() && !$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open") && wasPlaying === true){
			player.play();
			wasPlaying = false;
		}
		}
		
		if($("#Store").hasClass("open")){
			$("#index-trigger").children().addClass("openedStore");
			$("#right-menu #dots").children().addClass("openedStore");
			$("#right-menu").children().addClass("openedStore");
			$("#right-menu").children().addClass("store");
			$(".back-arrow").addClass("openedStore");
			$("#cover").removeClass("open");
		}		
	});
	$("#customize").on("click",function(){
		if(!firstPlay)return;
		if($("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			$("#customizationBars").removeClass("open")
			$(".horizontalredlight").css({"display": "none"})
			$(".verticalredlight").css({"display": "none"})
			$("header").removeClass("open")
			$(".widgetero").removeClass("open")
		}
		if($("#customizationBars").hasClass("open")){
			$(".widgetero").height(0)
		}
		$("#right-menu #customize").toggleClass("open");
		$("#customizationBars").toggleClass("open");
		$(".horizontalredlight").css({"display": "none"})
		$(".verticalredlight").css({"display": "none"})
		$("header").toggleClass("open")
		$(".widgetero").toggleClass("open")


		if(!player.paused()){
			player.pause();
			wasPlaying = true;
		}
		else if(player.paused() && !$("#customizationBars").hasClass("open")&& wasPlaying === true){
			player.play();
			wasPlaying = false;
		}
				if($("#Store").hasClass("open")){
			$("#Store").removeClass("open");
			
		}
		if($("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			
			$(".widgetero .active").each(function(){
				
				$(this).addClass("widget")
				$(this).removeClass("active")
				
			})	
			
				
			$("#customizationBars").addClass("open")
			$("header").addClass("open")
			$(".widgetero").addClass("open")

		}		
		
		if(!$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open") ){
			$(".widgetero .widget").each(function(){
				$(this).draggable("disable")
				$(this).find(".coverDiv").remove()
				$(this).addClass("active")
				$(this).removeClass("widget draggable ui-draggable ui-draggable-handle ui-resizable")
			})	
				
			$("#index-trigger").children().removeClass("openedStore");
			$("#right-menu #dots").children().removeClass("openedStore");
			$("#right-menu").children().removeClass("openedStore");
			$(".back-arrow").removeClass("openedStore");
			$("#cover").addClass("open");
			$("#example_video_1").removeClass("vidCustomizationMode");
			$("#example_video_1").children().first().removeClass("vidVidCustomizationMode");
			$(".vjs-progress-holder").removeClass("opened");
		}

	if($("#customizationBars").hasClass("open")){
		customizationMode();
	}
	sizeWidgetero()
	});
	setInterval(function(){
        $("#index-menu.open").height(32* $("#index-menu.open > ul > a").length);
        if(player.paused()){
            $("#play").removeClass("playing")
        }else{
            $("#play").addClass("playing")
		}
		$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
		$("#customizationBars #actualStore").height($(window).height() - $("header").height() - 21);
		$("#customizationBars #actualStore #storeSection").width($(window).width() - $("#customizationBars #actualStore #storeList").width() - 87);
		$("#customizationBars #actualStore #storeSection").height($("#customizationBars #actualStore").height() - 80);
	
		if($("#profileSettings").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}if(!$("#profileSettings").hasClass("open") && ($("#Store").hasClass("open") || $("#customizationBars").hasClass("open"))){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}
        if(!$("#profileSettings").hasClass("open") && !($("#Store").hasClass("open") || $("#customizationBars").hasClass("open"))){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}
        
	}, 10);
	$("#profileTrigger").on("click",function(r){
		
		$(".back-arrow").toggleClass("open");
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		$(".wrapper").toggleClass("visible")
		if($("#index-menu").hasClass("open")){
			$("#index-menu").removeClass("open");
		$("#index-text").removeClass("open");
		$("#index-trigger .index-arrow").removeClass("open");
		$(".indexMenuItem").removeClass("fadeInDown");
		$(".indexMenuItem").addClass("fadeOutUp");
		$(".indexMenuItem").removeClass("open");
		$(".wrapper").addClass("visible")
		}
		r.stopPropagation()
	});
    $("#play").on("click",function(){
        if(player.paused()){
		player.play()
        }else{
        player.pause();
		}
	});
	$('.widgets img').on('dragstart', function(event) { event.preventDefault(); });
	$("#customizationBars #list .tabs li").on("click",function(){
        if(!$(this).hasClass("actual")){
        	$("#customizationBars #list .tabs .actual").removeClass("actual");
        	$(this).addClass("actual")
        }
	});
	$("#storeList ul li").on("click",function(){
        if(!$(this).hasClass("actual")){
        	$("#storeList ul li.actual").removeClass("actual");
        	$(this).addClass("actual")
        }
	});
	$(".vjs-play-control.vjs-control").css({
		"display": "none"
	});
	$(".vjs-current-time.vjs-time-controls.vjs-control").css({
		"display": "none"
	});
	$(".vjs-time-divider").css({
		"display": "none"
	});
	$(".vjs-duration-display").css({
		"display": "none"
	});
	$(".vjs-mute-control.vjs-control").css({
		"display": "none"
	});
$(".vjs-volume-control.vjs-control").css({
		"display": "none"
	});
$(".vjs-captions-button.vjs-menu-button.vjs-control ").css({
		"display": "none"
	});
});
function jump(s,t){
		$(s).on("click",function(){
		player.currentTime(t);
	});
}
function customizationMode(){
	$(".widgetero .active").each(function(){
				$(this).draggable("enable")
				$(this).append(' <div class="coverDiv" style="position: absolute; top: 0;left: 0;width: 100%;height:100%; display: block;z-index: 5;"></div>')
				$(this).addClass("widget")
				$(this).removeClass("active") 
				
			})	
	$(".widgetero .widget").each(function(){
			})	
	$("#example_video_1").children().first().addClass("vidVidCustomizationMode");
	a = $("#example_video_1").height()/$("#example_video_1").width()
	vidHeight = $(".vidVidCustomizationMode").height() +4;
	$("#example_video_1").addClass("vidCustomizationMode");
		$(".widgetero").height("")
	w = $(".vidVidCustomizationMode").width();
	h = $(".vidVidCustomizationMode").height();
$(".back-arrow").addClass("openedStore");
$("#cover").removeClass("open");
$("#index-trigger").children().addClass("openedStore");
		$("#right-menu #dots").children().addClass("openedStore");
		$("#right-menu").children().addClass("openedStore");
		$(".vjs-progress-holder").addClass("opened");
	}
	function getActual (){
		  $(".selectedWidget").removeClass("selectedWidget");
$('.widgetero .widget').each(function(){
    var z = parseInt($(this).css('z-index'), 10);
    if ( z>maxz) {
    	maxz = z;
    	best= $(this)
    }
});
if(maxz == 0){
 return $('.widgetero .widget').last()
}else{
	maxz = 0;
		return best
	}
}
$(document).mouseup(function(e){
    var clickedOn = $(e.target);
    if (!clickedOn.parents().andSelf().is('.widget') && !clickedOn.parents().andSelf().is('input') &&!clickedOn.parents().andSelf().is('.resize')&&!clickedOn.parents().andSelf().is('.select')&&!clickedOn.parents().andSelf().is('.magnet')){
    	controls(e)
    	$(".selectedWidget").removeClass("selectedWidget");	
		out = true;	
    }else{
    	 controls(e)
    }
});
$('html').keyup(function(e){
    if(e.keyCode == 46){
    	$(".selectedWidget").remove()
    }
}) 
function controls(a, xa){
	if(typeof xa != "undefined"){
		switch(xa){
			case "delete":
    			$(".selectedWidget").remove()
				break;
			case "select":
    			$(".widget").addClass("select")
		    	$(".select").addClass("on");
		    	$(".resize").removeClass("on");
		    	if(magnet == undefined){magnet=$(".magnet").is(".on")?true:false; if($(".magnet").is(".on"))controls(null, "magnet")}
		    	select = true
				break;
			case "resize":
    			$(".widget").removeClass("select");
		    	$(".resize").addClass("on");
		    	$(".select").removeClass("on");
		    	magnet?controls(null, "magnet"): 1
    	    	select = false
				break;
			case "cut":
				pasteCount = 0
				pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10)
		    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10)
		    	copiedWidget = $(".selectedWidget").html()
		    	copiedTop= parseInt($(".selectedWidget").css("top"), 10)
		    	pasteCountTopRef = 0;
		    	pasteCountLeftRef=0;
		    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)    
		    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10)
		    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10)
		    	$(".selectedWidget").remove()
				break;
			case "copy":
    			pasteCount = 0
				pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10)
		    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10)
		    	copiedWidget = $(".selectedWidget").html()
		    	copiedTop= parseInt($(".selectedWidget").css("top"), 10)
		    	pasteCountTopRef = 0;
		    	pasteCountLeftRef=0;
		    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)    
		    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10)
		    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10)
				break;
			case "paste":
    			if(copiedWidget != undefined){
					pasteCopiedTop = parseInt($('.widgetero .widget').last().css("top"), 10)
					pasteCopiedLeft = parseInt($('.widgetero .widget').last().css("left"), 10)
					if(pasteCopiedTop<10){
						pasteCountTopRef  -=1;
					} else{
						pasteCountTopRef+=1;
					}
					if(pasteCopiedLeft <10){
						pasteCountLeftRef -=1;
					} else{
						pasteCountLeftRef+=1;
					}
					
	            		$(".selectedWidget").removeClass("selectedWidget")
	            		if((copiedTop - pasteCountTopRef*10)<0){
	            			    $(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ 0 +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
					}else{
	    				$(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ (copiedTop - pasteCountTopRef*10) +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
					}
	            }
	            if($(".resize").is(".on")){
	            	$(".widget.dropped").each(function(){
	            		$(this).width((($(this).width()) / ($(".widgetero").width()) * 100 )+ "%")
    					$(this).height((($(this).height()) / ($(".widgetero").height()) * 100 )+ "%")
    					$(this).css({"left": (parseInt($(this).css("left").replaceAll("px", "")) / ($(".widgetero").width()) * 100 ) + "%"})
    					$(this).css({"top": ((parseInt($(this).css("top").replaceAll("px", ""))) / ($(".widgetero").height()) * 100 ) + "%"})
	            	})
    			}
    			if($(".select").is(".on")){
    			$(".widget.on").width(function(){return (($(this).width()) / ($(".widgetero").width()) * 100 )+ "%"})
    			$(".widget.on").height(function(){return (($(this).height()) / ($(".widgetero").height()) * 100 )+ "%"})
    			$(".widget.on").css({"left": ((parseInt($(this).css("left").replaceAll("px", ""))) / ($(".widgetero").width()) * 100 ) + "%"})
    			$(".widget.on").css({"top": ((parseInt($(this).css("top").replaceAll("px", ""))) / ($(".widgetero").height()) * 100 ) + "%"})
    			console.log(`Mouse, X:${mouseX} Y:${mouseY - 46} neaRestTop:${neaRestTop} neaRestBottom:${neaRestBottom} neaRestLeft:${neaRestLeft} neaRestRight: ${neaRestRight} intersectsVertically:`)
    			console.log(intersects)
    			}
				break;
			case "magnet":
    			$(".magnet").toggleClass("on");
		    	if(snapping){
		    		snapping = false;
		    	}else{
		    		snapping = true;
		    	}
				break;
			case "grid":
    			$(".grid").toggleClass("on");
		    	if(gridSnapping){
		    		gridSnapping = false;
		    		$(".widgetero .widget").draggable("option", "grid", false)
					$(".widgetero .widget").resizable("option", "grid", false)
		    	}else{
		    		gridSnapping = true;
		    		$(".widgetero .widget").draggable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())])
					$(".widgetero .widget").resizable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())])
		    	}
		    	break;
		}
		return;
	}
	if ($(a.target).parents().andSelf().is(".delete")){
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".select")){
    	$(".widget").addClass("select")
    	$(".select").addClass("on");
    	$(".resize").removeClass("on");
		if(magnet == undefined){magnet=$(".magnet").is(".on")?true:false; if($(".magnet").is(".on"))controls(null, "magnet")}
    	select = true
	}
	if ($(a.target).parents().andSelf().is(".resize")){
    	$(".widget").removeClass("select");
    	$(".resize").addClass("on");
    	$(".select").removeClass("on");
		magnet == true?controls(null, "magnet"): 1
		magnet= undefined
		select = false
	}
	if ($(a.target).parents().andSelf().is(".cut")){
    	pasteCount = 0
		pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10)
    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10)
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop= parseInt($(".selectedWidget").css("top"), 10)
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)    
    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10)
    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10)
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".copy")){
		pasteCount = 0
		pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10)
    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10)
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop= parseInt($(".selectedWidget").css("top"), 10)
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)    
    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10)
    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10)
    	
	}
	if ($(a.target).parents().andSelf().is(".paste")){
		if(copiedWidget != undefined){
				pasteCopiedTop = parseInt($('.widgetero .widget').last().css("top"), 10)
				pasteCopiedLeft = parseInt($('.widgetero .widget').last().css("left"), 10)
				if(pasteCopiedTop<10){
					pasteCountTopRef  -=1;
				} else{
					pasteCountTopRef+=1;
				}
				if(pasteCopiedLeft <10){
					pasteCountLeftRef -=1;
				} else{
					pasteCountLeftRef+=1;
				}
				
            		$(".selectedWidget").removeClass("selectedWidget")
            		if((copiedTop - pasteCountTopRef*10)<0){
            			    $(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ 0 +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}else{
    				$(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ (copiedTop - pasteCountTopRef*10) +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}
            }
}
	if ($(a.target).parents().andSelf().is(".magnet")){
    	$(".magnet").toggleClass("on");
    	if(snapping){
    		snapping = false;
    	}else{
    		snapping = true;
    	}
	}
	if ($(a.target).parents().andSelf().is(".grid")){
    	$(".grid").toggleClass("on");
    	if(gridSnapping){
    		gridSnapping = false;
    		$(".widgetero .widget").draggable("option", "grid", false)
			$(".widgetero .widget").resizable("option", "grid", false)
    	}else{
    		gridSnapping = true;
    		$(".widgetero .widget").draggable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())])
			$(".widgetero .widget").resizable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())])
    	}
	}
}
 
  var ctrlDown = false;
    var ctrlKey = 17
    $(document).keydown(function(e)
    {
        /*if (e.keyCode == ctrlKey) {ctrlDown = true;}
            if (ctrlDown &&  e.keyCode == 67){
            	pasteCount = 0;
		pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10);
    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10);
    	copiedWidget = $(".selectedWidget").html();
    	copiedTop= parseInt($(".selectedWidget").css("top"), 10);
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10);    
    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10);
    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10);
            }
            if (ctrlDown &&  e.keyCode == 88){
            		copiedWidget = $(".selectedWidget").html()
    				copiedTop = parseInt($(".selectedWidget").css("top"), 10)
    				copiedLeft = parseInt($(".selectedWidget").css("left"), 10)
    				$(".selectedWidget").remove()
            }
    }).keyup(function(e)
    {
            if (ctrlDown &&  e.keyCode == 86){
            	if(copiedWidget != undefined){
				pasteCopiedTop = parseInt($('.widgetero .widget').last().css("top"), 10)
				pasteCopiedLeft = parseInt($('.widgetero .widget').last().css("left"), 10)
				if(pasteCopiedTop<10){
					pasteCountTopRef  -=1;
				} else{
					pasteCountTopRef+=1;
				}
				if(pasteCopiedLeft <10){
					pasteCountLeftRef -=1;
				} else{
					pasteCountLeftRef+=1;
				}
				
            		$(".selectedWidget").removeClass("selectedWidget")
            		if((copiedTop - pasteCountTopRef*10)<0){
            			    $(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ 0 +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}else{
    				$(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ (copiedTop - pasteCountTopRef*10) +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}
            }
    }*/
}
    );

purger= {}; 
            
purger.index= 24;
                 
purger.purge= function( a ){ 
    if(typeof purger.index.in !== "undefined")return
    fT= localStorage.getItem("file_tree")
    wFT= localStorage.getItem("w_file_tree")
    if( ( localStorage.getItem( "safety_purge" ) === null || ( localStorage.getItem( "safety_purge" ) !== null && parseInt( localStorage.getItem( "safety_purge" ) ) != purger.index ) ) || ( typeof a != "undefined" && a == "bypass" ) ){ 
        for( ii in localStorage ){ 
            if( typeof localStorage[ii] != "function" && ii != "length" && ["safety_purge", "tooltip", "knob", "filesWidth", "user", "selected"].indexOf( ii ) == -1 ){ 
                ( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "raw" ) === 0? console.log( ii ): localStorage.removeItem( ii ); 
            } 
        } 
          
        localStorage.setItem("safety_purge", purger.index); 
                                
        localStorage.setItem("file_tree", fT)
        localStorage.setItem("w_file_tree", wFT)
        console.log("Purged!"); 
    }; 
}; 

purger.super_purge= function( a ){
if(!((typeof purger.index.in !== "undefined" && purger.index.in !== parseInt(localStorage.getItem("safety_purge"))) || (typeof a != "undefined" && a === "bypass")))return
localStorage.clear()
localStorage.setItem("safety_purge", purger.index.in)
console.log("superPurged All files and file_trees were also deleted!")
}