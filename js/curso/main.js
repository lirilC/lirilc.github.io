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
let noTify= function(text_symbol){
	var Title= $("title").text();
    $("title").text(` ${typeof text_symbol != "undefined"? text_symbol: '⊙'} ${$("title").text()}`)
    setTimeout(function(){$("title").text(Title)}, 2100)
}
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
		return {left: ((vOW - (vW/rat)) / 2),top: 0,bottom:0, right: ((vOW - (vW/rat)) / 2)}
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
$(".presetter").css({
"height": "",
"width": "",
"margin-top": 46,
"margin-left": ""})
if(getSpace().top){
$(".widgetero").css({
"height": ($("body").height() - 46) / 2 - getSpace().top * 2,
"margin-top": getSpace().top + 46})
$(".presetter").css({
"height": ($("body").height() - 46) / 2 - getSpace().top * 2,
"margin-top": getSpace().top + 46})}else{
$(".widgetero").css({
"width": $("body").width() / 2 - getSpace().left * 2,
"margin-left": getSpace().left})
$(".presetter").css({
"width": $("body").width() / 2 - getSpace().left * 2,
"margin-left": getSpace().left})
}}else{
$(".widgetero").css({
"height": "",
"width": "",
"margin-top": 46,
"margin-left": ""})
$(".presetter").css({
"height": "",
"width": "",
"margin-top": 46,
"margin-left": ""})
if(getSpace().top){
$(".widgetero").css({
"height": $("body").height() - 61 - getSpace().top * 2,
"margin-top": getSpace().top + 46})
$(".presetter").css({
"height": $("body").height() - 61 - getSpace().top * 2,
"margin-top": getSpace().top + 46})}else{
$(".widgetero").css({
"width": $("body").width() - getSpace().left * 2,
"margin-left": getSpace().left})
$(".presetter").css({
"width": $("body").width() - getSpace().left * 2,
"margin-left": getSpace().left})
}}	
}
function integerer(i){
return parseInt(i.slice(0, -1))}
window.onresize= function(e){
sizeWidgetero()
}
function getUniqueId(){ 
    pSBl= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    pSBlNaN= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
           
    lnk= ""; 
           
    for(e= 17; e >= 0; e--){ 
	if(e==17){
    lnk= lnk + pSBlNaN[parseInt(Math.random() * pSBlNaN.length)]; 
	}else{
    lnk= lnk + pSBl[parseInt(Math.random() * pSBl.length)]; 
	}
    } 
    
    return lnk; 
} 
window.injectCSS = (function(doc){
    // wrapper for all injected styles and temp el to create them
    var wrap = doc.createElement('div');
    var temp = doc.createElement('div');
    // rules like "a {color: red}" etc.
    return function (cssRules) {
        // append wrapper to the body on the first call
        if (!wrap.id) {
            wrap.id = 'injected-css';
            wrap.style.display = 'none';
            doc.body.appendChild(wrap);
        }
        // <br> for IE: http://goo.gl/vLY4x7
        temp.innerHTML = '<br><style>'+ cssRules +'</style>';
        wrap.appendChild( temp.children[1] );
    };
})(document);
function sizeRelatively(_z){
	if(typeof _z != "undefined"){
		$(".widgetero .widget").each(function(){
		  $(_z).width(`${$(_z).width() / $(".widgetero").width() * 100}%`)
		  $(_z).height(`${$(_z).height() / $(".widgetero").height() * 100}%`)
		  $(_z).css({"left": `${$(_z).position().left / $(".widgetero").width() * 100}%`})
		  $(_z).css({"top": `${$(_z).position().top / $(".widgetero").height() * 100}%`})
		  $("#injected-css style").filter(function(){
			  return !($(this).text().indexOf(_z.attr("id")) + 1)?false: true
		  }).remove()
		  injectCSS(`#${$(_z).attr("id")}{ left: ${$(_z).position().left / $(".widgetero").width() * 100}% !important;}`)
		  injectCSS(`#${$(_z).attr("id")}{ top: ${$(_z).position().top / $(".widgetero").height() * 100}% !important;}`)
		})
		return;	
	}
	$(".widgetero .widget").each(function(){
	  $(this).width(`${$(this).width() / $(".widgetero").width() * 100}%`)
	  $(this).height(`${$(this).height() / $(".widgetero").height() * 100}%`)
	  $(this).css({"left": `${$(this).position().left / $(".widgetero").width() * 100}%`})
	  $(this).css({"top": `${$(this).position().top / $(".widgetero").height() * 100}%`})
	})
}
$(document).on("ready",function(){
	purger.purge(); 

caSe= function(i){ 
    for(eForensics in i){ 
        if(parseFloat(eForensics) != i.length - 1 && ($('video')[$('video').length - 1].currentTime >= i[eForensics][0] && $('video')[$('video').length - 1].currentTime < i[parseFloat(eForensics) + 1][0]) || (parseFloat(eForensics) == i.length - 1 && $('video')[$('video').length - 1].currentTime >= i[eForensics][0])){
        	$('.presetter')[0].innerHTML != i[eForensics][1]? $('.presetter')[0].innerHTML= i[eForensics][1]: 1
        }
    } 
} 

observer= new MutationObserver(function(mutationRecords){ ill= mutationRecords; for(eForensics in ill[0].addedNodes){(ill[0].addedNodes[eForensics].outerHTML && ill[0].addedNodes[eForensics].outerHTML.indexOf("Pausar") != -1)? $("video")[$("video").length - 1].pause(): 1; }; }); 
console.log('$("video")[$("video").length - 1].style.opacity= 0.045534; '); 

__checks=[];
_check= function(E, w){
    $("video")[$("video").length - 1].play()
    switch(E){
        case 1:
            __checks[1-1] =($(`.input${E}`).val() == "11"? 1: 0)
            break;
        case 2:
            __checks[2-1] =($(`.input${E}`).val() == "3"? 1: 0)
            break;
        case 3:
            __checks[3-1] =($(`.input${E}`).val() == "1"? 1: 0)
            break;
        case 4:
            __checks[4-1] =($(`.input${E}`).val() == "6"? 1: 0)
            break;
        case 5:
            __checks[5-1] =($(`.input${E}`).val() == "4"? 1: 0)
            break;
        case 6:
            __checks[6-1] =(w == "0"? 1: 0)
            break;
        case 7:
            __checks[7-1] =($(`.input${E}`).val().toLowerCase() == "casa"? 1: 0)
            break;
    }
}
_c= function(a, b){
	if(typeof __checks[a] == "undefined" || typeof __checks[a] != "undefined" && __checks[a] == 0){
		$("#completion_info .corrections p").html(`${$("#completion_info .corrections p").html()} ${b}<br>`)
	}
}

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
    if(!firstPlay){(function(){sizeWidgetero(); firstPlay= true})(); observer.observe(document.getElementsByClassName('presetter')[0], {childList: true}); setInterval(function(){caSe(preset1); }, 1000/60); };
});
$("video")[0].addEventListener('ended', (e) => {
	_ans=0
	_tot=0
	for(e in __checks){
	_ans++
	if(typeof __checks[e] != "undefined"){
		_tot+=__checks[e]
	}else{
		_tot
	}
	}

	_c(0, "Once se escribe '11'.")
	_c(1, "Dos más uno es igual a '3'.")
	_c(2, "Tres menos dos es igual a '1'.")
	_c(3, "Tres multiplicado por dos es igual a '6'.")
	_c(4, "Dos multiplicado por dos es igual a '4'.")
	_c(5, "NO es correcto 'Verbo + Sustantivo'.")
	_c(6, "Se escribe 'Casa'.")

	$("#completion_info .summary table tr:first-child th:nth-child(2)").text(`${_tot}/${7}`)
    $("#completion_info").addClass("visible")

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
	snapTolerance: 10,
	grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())],
containment: "window",
cursorAt: { left: $('.widgetero .widget').last().width() / 2, top: $('.widgetero .widget').last().height() / 2},
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
if($(".button.select").is(".on")){
	$('.widgetero .widget').last().addClass("select")
}
$('.widgetero .widget').last().css({
	left: e.pageX - $('.widgetero .widget').last().width()/2,
	top: e.pageY -($('.widgetero .widget').last().height()/2)}).trigger(e)
}
});
$(document).on("mousemove", function(o){
mouseX= o.pageX
mouseY= o.pageY
if($(".select").is(".on") && $("#customizationBars").hasClass("open")){
	$(".horizontalredlight").css({"left": `${(mouseX - parseFloat($(".widgetero").css("margin-left")) - (parseFloat($(".horizontalredlight").css("width"))/2))}px`, "top": `${((mouseY - 46) - 0.5 - (parseFloat($(".widgetero").css("margin-top")) - 46))}px`})
	$(".verticalredlight").css({"left": `${mouseX - parseFloat($(".widgetero").css("margin-left")) - 0.5}px`, "top": `${((mouseY - 46 - (parseFloat($(".widgetero").css("margin-top")) - 46) - (parseFloat($(".verticalredlight").css("height")))/2))}px`})
	$(".horizontalredlight").css({"display": "block"})
	$(".verticalredlight").css({"display": "block"})
}else{
	$(".horizontalredlight").css({"display": "none"})
	$(".verticalredlight").css({"display": "none"})
}

n_marker= {
x: parseFloat($(".verticalredlight").css("left")),
y: parseFloat($(".verticalredlight").css("top")) + parseFloat($(".verticalredlight").css("height")) / 2 - 36
}
s_marker= {
x: parseFloat($(".verticalredlight").css("left")),
y: parseFloat($(".verticalredlight").css("top")) + parseFloat($(".verticalredlight").css("height")) / 2 + 36
}
e_marker= {
x: parseFloat($(".horizontalredlight").css("left")) + parseFloat($(".horizontalredlight").css("width")) / 2 - 36,
y: parseFloat($(".horizontalredlight").css("top")) 
}
w_marker= {
x: parseFloat($(".horizontalredlight").css("left")) + parseFloat($(".horizontalredlight").css("width")) / 2 + 36,
y: parseFloat($(".horizontalredlight").css("top"))
}
var closest_y_n= {dist: Infinity, elem: null}
var closest_y_s= {dist: Infinity, elem: null}
var closest_x_e= {dist: Infinity, elem: null}
var closest_x_w= {dist: Infinity, elem: null}
$(".widgetero .widget").each(function(){
this.border={
top: parseFloat($(this).css("top")), 
bottom: parseFloat($(this).css("top")) + parseFloat($(this).css("height")), 
left: parseFloat($(this).css("left")), 
right: parseFloat($(this).css("left")) + parseFloat($(this).css("width"))
}
if(n_marker.x >= this.border.left && n_marker.x <= this.border.right){
	if(Math.abs(closest_y_n.dist) > Math.abs(n_marker.y - this.border.top)){
		closest_y_n= {
			dist: (n_marker.y + 1 - this.border.top),
			elem: $(this)
		}
	}
	if(Math.abs(closest_y_n.dist) > Math.abs(n_marker.y - this.border.bottom)){
		closest_y_n= {
			dist: (n_marker.y - this.border.bottom + 1),
			elem: $(this)
		}
	}
}
if(s_marker.x >= this.border.left && s_marker.x <= this.border.right){
	if(Math.abs(closest_y_s.dist) > Math.abs(s_marker.y - this.border.top)){
		closest_y_s= {
			dist: (s_marker.y + 1 - this.border.top),
			elem: $(this)
		}
	}
	if(Math.abs(closest_y_s.dist) > Math.abs(s_marker.y - this.border.bottom)){
		closest_y_s= {
			dist: (s_marker.y - this.border.bottom + 1),
			elem: $(this)
		}
	}
}
if(e_marker.y >= this.border.top && e_marker.y <= this.border.bottom){
	if(Math.abs(closest_x_e.dist) > Math.abs(e_marker.x - this.border.left)){
		closest_x_e= {
			dist: (e_marker.x + 1 - this.border.left),
			elem: $(this)
		}
	}
	if(Math.abs(closest_x_e.dist) > Math.abs(e_marker.x - this.border.right)){
		closest_x_e= {
			dist: (e_marker.x - this.border.right + 1),
			elem: $(this)
		}
	}
}
if(w_marker.y >= this.border.top && w_marker.y <= this.border.bottom){
	if(Math.abs(closest_x_w.dist) > Math.abs(w_marker.x - this.border.left)){
		closest_x_w= {
			dist: (w_marker.x + 1 - this.border.left),
			elem: $(this)
		}
	}
	if(Math.abs(closest_x_w.dist) > Math.abs(w_marker.x - this.border.right)){
		closest_x_w= {
			dist: (w_marker.x - this.border.right + 1),
			elem: $(this)
		}
	}
}
})
if(closest_y_n.dist !== Infinity){
	if(Math.abs(closest_y_n.dist)<=5 && $(".magnet").is(".on")){
		$(".verticalredlight .marker-n").css({"top": `calc(50% - 36px - ${closest_y_n.dist}px)`})
	}else{
		$(".verticalredlight .marker-n").css({"top": ``})
	}
}
if(closest_y_s.dist !== Infinity){
	if(Math.abs(closest_y_s.dist)<=5 && $(".magnet").is(".on")){
		$(".verticalredlight .marker-s").css({"top": `calc(50% + 36px - ${closest_y_s.dist}px)`})
	}else{
		$(".verticalredlight .marker-s").css({"top": ``})
	}
}
if(closest_x_e.dist !== Infinity){
	if(Math.abs(closest_x_e.dist)<=5 && $(".magnet").is(".on")){
		$(".horizontalredlight .marker-e").css({"left": `calc(50% - 36px - ${closest_x_e.dist}px)`})
	}else{
		$(".horizontalredlight .marker-e").css({"left": ``})
	}
}
if(closest_x_w.dist !== Infinity){
	if(Math.abs(closest_x_w.dist)<=5 && $(".magnet").is(".on")){
		$(".horizontalredlight .marker-w").css({"left": `calc(50% + 36px - ${closest_x_w.dist}px)`})
	}else{
		$(".horizontalredlight .marker-w").css({"left": ``})
	}
}
})
/////////////////////////////////////
saved= {}
help_= 0
$(document).on("keydown", function(l){
if(l.keyCode== 27){
	if($(".hot_keys").is(".visible")){
		$(".hot_keys").removeClass("visible")
	}else{
		if(help_== 1){
			$(".hot_keys").addClass("visible")
			help_= 0
		}
		if(!help_){
			help_++
			setTimeout(function(){
				help_= 0
			}, 1000)
		}
	}
}
	if(!mouseDown || !$(".button.select").is(".on"))return;
	switch(l.keyCode){
		case 50:
			if(typeof saved.s == "undefined" || (typeof saved.s != "undefined" && (parseFloat( $(".marker-n").parent().css("top")) + parseFloat( $(".marker-n").parent().css("height")) / 2 + (parseFloat($(".marker-n").css("top"))- parseFloat($(".verticalredlight").css("height")) / 2) + 1) < saved.s)){
				if($(".marker-n").is(".saved")){
					$(".marker-n").removeClass("saved");
					delete saved.n
					$($(".greylight.x")[0]).css({"top": ``, "display": "", "left": ``})
				}else{
					$(".marker-n").addClass("saved");
					saved.n= parseFloat( $(".marker-n").parent().css("top")) + parseFloat( $(".marker-n").parent().css("height")) / 2 + (parseFloat($(".marker-n").css("top"))- parseFloat($(".verticalredlight").css("height")) / 2) + 1
					$($(".greylight.x")[0]).css({"top": `${saved.n}px`, "display": "block"})
				}
			}else{
				$(".marker-n").addClass("save_failed")
			}
			break;
		case 51:
			if(typeof saved.e == "undefined" || (typeof saved.e != "undefined" && (parseFloat( $(".marker-w").parent().css("left")) + parseFloat( $(".marker-w").parent().css("width")) / 2 + (parseFloat($(".marker-w").css("left"))- parseFloat($(".horizontalredlight").css("width")) / 2) + 1) > saved.e)){
				if($(".marker-w").is(".saved")){
					$(".marker-w").removeClass("saved");
					delete saved.w
					$($(".greylight.y")[0]).css({"top": ``, "display": "", "left": ``})
				}else{
					$(".marker-w").addClass("saved");
					saved.w= parseFloat( $(".marker-w").parent().css("left")) + parseFloat( $(".marker-w").parent().css("width")) / 2 + (parseFloat($(".marker-w").css("left"))- parseFloat($(".horizontalredlight").css("width")) / 2) + 1
					$($(".greylight.y")[0]).css({"left": `${saved.w}px`, "display": "block"})
				}
			}else{
				$(".marker-w").addClass("save_failed")
			}
			break;
		case 52:
			if(typeof saved.n == "undefined" || (typeof saved.n != "undefined" && (parseFloat( $(".marker-s").parent().css("top")) + parseFloat( $(".marker-s").parent().css("height")) / 2 + (parseFloat($(".marker-s").css("top"))- parseFloat($(".verticalredlight").css("height")) / 2) + 1) > saved.n)){
				if($(".marker-s").is(".saved")){
					$(".marker-s").removeClass("saved");
					delete saved.s
					$($(".greylight.x")[1]).css({"top": ``, "display": "", "left": ``})

				}else{
					$(".marker-s").addClass("saved");
					saved.s= parseFloat( $(".marker-s").parent().css("top")) + parseFloat( $(".marker-s").parent().css("height")) / 2 + (parseFloat($(".marker-s").css("top"))- parseFloat($(".verticalredlight").css("height")) / 2) + 1
					$($(".greylight.x")[1]).css({"top": `${saved.s}px`, "display": "block"})
				}
			}else{
				$(".marker-s").addClass("save_failed")
			}
			break;
		case 49:
			if(typeof saved.w == "undefined" || (typeof saved.w != "undefined" && (parseFloat( $(".marker-e").parent().css("left")) + parseFloat( $(".marker-e").parent().css("width")) / 2 + (parseFloat($(".marker-e").css("left"))- parseFloat($(".horizontalredlight").css("width")) / 2) + 1) < saved.w)){
				if($(".marker-e").is(".saved")){
					$(".marker-e").removeClass("saved");
					delete saved.e
					$($(".greylight.y")[1]).css({"top": ``, "display": "", "left": ``})
				}else{
					$(".marker-e").addClass("saved");
					saved.e= parseFloat( $(".marker-e").parent().css("left")) + parseFloat( $(".marker-e").parent().css("width")) / 2 + (parseFloat($(".marker-e").css("left"))- parseFloat($(".horizontalredlight").css("width")) / 2) + 1
					$($(".greylight.y")[1]).css({"left": `${saved.e}px`, "display": "block"})
				}
			}else{
				$(".marker-e").addClass("save_failed")
				setTimeout(function(){$(".marker-e").removeClass("save_failed")}, 1500)
			}
			break;
	}
})
mouseDown= false
$(document).on("mousedown", function(){
mouseDown= true
})
$(document).on("mouseup", function(){
mouseDown= false
$(".greylight").css({"top": ``, "display": "", "left": ``})
$(".saved").removeClass("saved")
})
$(window).on("blur", function(){
mouseDown= false
$(".greylight").css({"top": ``, "display": "", "left": ``})
$(".saved").removeClass("saved")
})
/////////////////////////////////////
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
		grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())],
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
    			$(ui.draggable).width((($(ui.draggable)[0].getBoundingClientRect().width) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 )+ "%")
    			$(ui.draggable).height((($(ui.draggable)[0].getBoundingClientRect().height) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 )+ "%")
    			$(ui.draggable).css({"left": ($(ui.draggable).position().left / ($(".widgetero")[0].getBoundingClientRect().width) * 100 ) + "%"})
    			$(ui.draggable).css({"top": (($(ui.draggable).position().top) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 ) + "%"})
    			console.log("drop")
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
    				if(parseFloat($(this).css("left")) < parseFloat($(".verticalredlight").css("left")) && parseFloat($(this).css("left")) + parseFloat($(this).css("width")) > parseFloat($(".verticalredlight").css("left"))){
    					intersects.vertically[intersects.vertically.length]= $(this)
    				}
    				if(parseFloat($(this).css("top")) < parseFloat($(".horizontalredlight").css("top")) && parseFloat($(this).css("top")) + parseFloat($(this).css("height")) > parseFloat($(".horizontalredlight").css("top"))){
    					intersects.horizontally[intersects.horizontally.length]= $(this)
    				}
				})
    			intersects.vertically.forEach(function(intersected){
    				if((parseFloat($(intersected).css("top")) + parseFloat($(intersected).css("height")) + 1) > neaRestTop && (mouseY - 46 - parseFloat($(".widgetero").css("margin-top")) + 46) > (parseFloat($(intersected).css("top")) + parseFloat($(intersected).css("height")) + 1)){
    					neaRestTop= (parseFloat($(intersected).css("top")) + parseFloat($(intersected).css("height")) + 1)
    				}
    				if((parseFloat($(intersected).css("top")) + 1) < neaRestBottom && (mouseY - 46 - parseFloat($(".widgetero").css("margin-top")) + 46) < (parseFloat($(intersected).css("top")) + 1)){
    					neaRestBottom= (parseFloat($(intersected).css("top")) + 1)
    				}
					//console.log(`${$(intersected).index()} top:${parseFloat($(intersected).css("top"))} bottom:${(parseFloat($(intersected).css("top")) + parseFloat($(intersected).css("height")))}`)
    			})

    			intersects.horizontally.forEach(function(intersected){
    				if((parseFloat($(intersected).css("left")) + parseFloat($(intersected).css("width")) + 1) > neaRestLeft && (mouseX - parseFloat($(".widgetero").css("margin-left"))) > (parseFloat($(intersected).css("left")) + parseFloat($(intersected).css("width")) + 1)){
    					neaRestLeft= (parseFloat($(intersected).css("left")) + parseFloat($(intersected).css("width")) + 1)
    				}
    				if((parseFloat($(intersected).css("left")) + 1) < neaRestRight && (mouseX - parseFloat($(".widgetero").css("margin-left"))) < (parseFloat($(intersected).css("left")) + 1)){
    					neaRestRight= (parseFloat($(intersected).css("left")) + 1)
    				}
    			})
    			neaRestBottom= typeof saved.s != "undefined"?(saved.s + 1):neaRestBottom
    			neaRestTop= typeof saved.n != "undefined"?(saved.n + 1):neaRestTop
    			neaRestLeft= typeof saved.e != "undefined"?(saved.e + 1):neaRestLeft
    			neaRestRight= typeof saved.w != "undefined"?(saved.w + 1):neaRestRight

				delete saved.s
				delete saved.n
				delete saved.e
				delete saved.w

    	
    			$(".widget.selectedWidget").css({"height": `${(neaRestBottom == 10000? (mouseY - 46> (parseFloat($(".widgetero").css("margin-top")) - 46 + $(".widgetero").height()))?$(".widgetero").height() + parseFloat($(".widgetero").css("margin-top")) - 46:$(".widgetero").height(): neaRestBottom) - 1 - (neaRestTop == -10000? (mouseY - 46 < parseFloat($(".widgetero").css("margin-top")) - 46)?-parseFloat($(".widgetero").css("margin-top")) + 46: 0: (neaRestTop - 1))}px`})
	
				$(".widget.selectedWidget").css({"width": `${(neaRestRight == 10000? (mouseX > parseFloat($(".widgetero").css("margin-left")) + $(".widgetero").width())?$(".widgetero").width() + parseFloat($(".widgetero").css("margin-left")):$(".widgetero").width(): (neaRestRight - 1)) - (neaRestLeft == -10000?mouseX < parseFloat($(".widgetero").css("margin-left"))?-parseFloat($(".widgetero").css("margin-left")): 0: (neaRestLeft - 1))}px`})
				$(".widget.selectedWidget").css({"top": `${neaRestTop == -10000? (mouseY - 46 < parseFloat($(".widgetero").css("margin-top")) - 46)?-parseFloat($(".widgetero").css("margin-top")) + 46:0: (neaRestTop - 1)}px`})
				$(".widget.selectedWidget").css({"left": `${neaRestLeft == -10000?mouseX < parseFloat($(".widgetero").css("margin-left"))?-parseFloat($(".widgetero").css("margin-left")): 0: (neaRestLeft - 1)}px`})
    			$(ui.draggable).width((($(ui.draggable)[0].getBoundingClientRect().width) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 )+ "%")
    			$(ui.draggable).height((($(ui.draggable)[0].getBoundingClientRect().height) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 )+ "%")
    			$(ui.draggable).css({"left": (($(ui.draggable).position().left) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 ) + "%"})
    			$(ui.draggable).css({"top": (($(ui.draggable).position().top) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 ) + "%"})
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
	snap: ".widgetero .widget", 
  snapMode: "both", 
snapTolerance: 10,
grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())],

stop: function(event, ui)
    		{        
    			$(ui.element).width((($(ui.element)[0].getBoundingClientRect().width) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 )+ "%")
    			$(ui.element).height((($(ui.element)[0].getBoundingClientRect().height) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 )+ "%")
    			$(ui.element).css({"left": ($(ui.element).position().left / ($(".widgetero")[0].getBoundingClientRect().width) * 100 ) + "%"})
    			$(ui.element).css({"top": ($(ui.element).position().top / ($(".widgetero")[0].getBoundingClientRect().height) * 100 ) + "%"})
		}
})
		if(snapping){
    		$('.widgetero .widget').resizable("option", "snap", ".widgetero .widget" );
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
			$(".presetter").removeClass("open")
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
		$(".presetter").toggleClass("open")


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
			$(".presetter").addClass("open")

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
        
	});
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
    var z = parseFloat($(this).css('z-index'));
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
				if(typeof magnet == "undefined"){magnet=$(".magnet").is(".on")?true:false; if($(".magnet").is(".on"))controls(null, "magnet");}
		    	select = true
				break;
			case "resize":
				$(".widget").removeClass("select");
		    	$(".resize").addClass("on");
		    	$(".select").removeClass("on");
				typeof magnet != "undefined" && magnet === true?controls(null, "magnet"): 1;
				delete magnet;
				break;
			case "cut":
				pasteCount = 0
				pasteCopiedTop= parseFloat($(".selectedWidget").css("top"))
		    	pasteCopiedLeft= parseFloat($(".selectedWidget").css("left"))
		    	copiedWidget = $(".selectedWidget").html()
		    	copiedTop= parseFloat($(".selectedWidget").css("top"))
		    	pasteCountTopRef = 0;
		    	pasteCountLeftRef=0;
		    	copiedLeft = parseFloat($(".selectedWidget").css("left"))    
		    	copiedWidth =  parseFloat($(".selectedWidget").css("width"))
		    	copiedHeight =  parseFloat($(".selectedWidget").css("height"))
		    	$(".selectedWidget").remove()
				break;
			case "copy":
    			pasteCount = 0
				pasteCopiedTop= parseFloat($(".selectedWidget").css("top"))
		    	pasteCopiedLeft= parseFloat($(".selectedWidget").css("left"))
		    	copiedWidget = $(".selectedWidget").html()
		    	copiedTop= parseFloat($(".selectedWidget").css("top"))
		    	pasteCountTopRef = 0;
		    	pasteCountLeftRef=0;
		    	copiedLeft = parseFloat($(".selectedWidget").css("left"))    
		    	copiedWidth =  parseFloat($(".selectedWidget").css("width"))
		    	copiedHeight =  parseFloat($(".selectedWidget").css("height"))
				break;
			case "paste":
    			if(copiedWidget != undefined){
					pasteCopiedTop = parseFloat($('.widgetero .widget').last().css("top"))
					pasteCopiedLeft = parseFloat($('.widgetero .widget').last().css("left"))
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
	            		$(this).width((($(this)[0].getBoundingClientRect().width) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 )+ "%")
    					$(this).height((($(this)[0].getBoundingClientRect().height) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 )+ "%")
    					$(this).css({"left": ($(this).position().left / ($(".widgetero")[0].getBoundingClientRect().width) * 100 ) + "%"})
    					$(this).css({"top": (($(this).position().top) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 ) + "%"})
	            	})
    			}
    			if($(".select").is(".on")){
    			$(".widget.on").width(function(){return (($(this)[0].getBoundingClientRect().width) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 )+ "%"})
    			$(".widget.on").height(function(){return (($(this)[0].getBoundingClientRect().height) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 )+ "%"})
    			$(".widget.on").css({"left": (($(this).position().left) / ($(".widgetero")[0].getBoundingClientRect().width) * 100 ) + "%"})
    			$(".widget.on").css({"top": (($(this).position().top) / ($(".widgetero")[0].getBoundingClientRect().height) * 100 ) + "%"})
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
		    		$(".widgetero .widget").draggable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())])
					$(".widgetero .widget").resizable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())])
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
		if(typeof magnet == "undefined"){magnet=$(".magnet").is(".on")?true:false; if($(".magnet").is(".on"))controls(null, "magnet");}
    	select = true
	}
	if ($(a.target).parents().andSelf().is(".resize")){
    	$(".widget").removeClass("select");
    	$(".resize").addClass("on");
    	$(".select").removeClass("on");
		typeof magnet != "undefined" && magnet === true?controls(null, "magnet"): 1;
		delete magnet;
		select = false
	}
	if ($(a.target).parents().andSelf().is(".cut")){
    	pasteCount = 0
		pasteCopiedTop= parseFloat($(".selectedWidget").css("top"))
    	pasteCopiedLeft= parseFloat($(".selectedWidget").css("left"))
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop= parseFloat($(".selectedWidget").css("top"))
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseFloat($(".selectedWidget").css("left"))    
    	copiedWidth =  parseFloat($(".selectedWidget").css("width"))
    	copiedHeight =  parseFloat($(".selectedWidget").css("height"))
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".copy")){
		pasteCount = 0
		pasteCopiedTop= parseFloat($(".selectedWidget").css("top"))
    	pasteCopiedLeft= parseFloat($(".selectedWidget").css("left"))
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop= parseFloat($(".selectedWidget").css("top"))
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseFloat($(".selectedWidget").css("left"))    
    	copiedWidth =  parseFloat($(".selectedWidget").css("width"))
    	copiedHeight =  parseFloat($(".selectedWidget").css("height"))
    	
	}
	if ($(a.target).parents().andSelf().is(".paste")){
		if(copiedWidget != undefined){
				pasteCopiedTop = parseFloat($('.widgetero .widget').last().css("top"))
				pasteCopiedLeft = parseFloat($('.widgetero .widget').last().css("left"))
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
    		$(".widgetero .widget").draggable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())])
			$(".widgetero .widget").resizable("option", "grid", $("#gridWidth").val() == "0" && $("#gridHeight").val() == "0"? false: [parseFloat($("#gridWidth").val()), parseFloat($("#gridHeight").val())])
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
		pasteCopiedTop= parseFloat($(".selectedWidget").css("top"));
    	pasteCopiedLeft= parseFloat($(".selectedWidget").css("left"));
    	copiedWidget = $(".selectedWidget").html();
    	copiedTop= parseFloat($(".selectedWidget").css("top"));
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseFloat($(".selectedWidget").css("left"));    
    	copiedWidth =  parseFloat($(".selectedWidget").css("width"));
    	copiedHeight =  parseFloat($(".selectedWidget").css("height"));
            }
            if (ctrlDown &&  e.keyCode == 88){
            		copiedWidget = $(".selectedWidget").html()
    				copiedTop = parseFloat($(".selectedWidget").css("top"))
    				copiedLeft = parseFloat($(".selectedWidget").css("left"))
    				$(".selectedWidget").remove()
            }
    }).keyup(function(e)
    {
            if (ctrlDown &&  e.keyCode == 86){
            	if(copiedWidget != undefined){
				pasteCopiedTop = parseFloat($('.widgetero .widget').last().css("top"))
				pasteCopiedLeft = parseFloat($('.widgetero .widget').last().css("left"))
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
            
purger.index= 35;
                 
purger.purge= function( a ){ 
    if(typeof purger.index.in !== "undefined")return
    fT= localStorage.getItem("file_tree")
    wFT= localStorage.getItem("w_file_tree")
    if( ( localStorage.getItem( "safety_purge" ) === null || ( localStorage.getItem( "safety_purge" ) !== null && parseInt( localStorage.getItem( "safety_purge" ) ) != purger.index ) ) || ( typeof a != "undefined" && a == "bypass" ) ){ 
        for( ii in localStorage ){ 
            if( typeof localStorage[ii] != "function" && ii != "length" && ["safety_purge", "tooltip", "knob", "filesWidth", "user", "selected"].indexOf( ii ) == -1 ){ 
                (( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "raw" ) === 0 || ( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "$_" ) !== -1)? console.log( ii ): localStorage.removeItem( ii ); 
            } 
        } 
          
        localStorage.setItem("safety_purge", purger.index); 
                                
        localStorage.setItem("file_tree", fT)
        localStorage.setItem("w_file_tree", wFT)
        localStorage.setItem("knob", `<input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='60'><img title=`)
        localStorage.setItem("tooltip", `<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='60'><img src='/resources/images/white.jpg' alt='' style='object-fit: cover;  object-position: 50% 50%;'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Walter White'>Walter White</p><p class='rol'>Moderador <b style='color:#fff;'>+60</b></p></div><div class='insignia' title='Hum ' style='top: 28.405797101449274px; '></div><div class='insignia' title='Hum' style='top: 11.565217391304348px; '></div><div class='insignia' title='Hum ' style='top: 36.927536231884055px; '></div></div>` )
        localStorage.setItem("user", ` src='/resources/images/white.jpg' style= 'object-fit: cover; object-position: 50% 50%;' alt=''>&nbsp<a target= '_blank'  href='/user' >Walter White</a><span class='is'>: </span><span class='Comentario'>` )
        console.log("Purged!"); 
    }; 
}; 

purger.super_purge= function( a ){
if(!((typeof purger.index.in !== "undefined" && purger.index.in !== parseInt(localStorage.getItem("safety_purge"))) || (typeof a != "undefined" && a === "bypass")))return
localStorage.clear()
localStorage.setItem("safety_purge", purger.index.in)
localStorage.setItem("knob", `<input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='60'><img title=`)
localStorage.setItem("tooltip", `<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='60'><img src='/resources/images/white.jpg' alt='' style='object-fit: cover;  object-position: 50% 50%;'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Walter White'>Walter White</p><p class='rol'>Moderador <b style='color:#fff;'>+60</b></p></div><div class='insignia' title='Hum ' style='top: 28.405797101449274px; '></div><div class='insignia' title='Hum' style='top: 11.565217391304348px; '></div><div class='insignia' title='Hum ' style='top: 36.927536231884055px; '></div></div>` )
localStorage.setItem("user", ` src='/resources/images/white.jpg' style= 'object-fit: cover; object-position: 50% 50%;' alt=''>&nbsp<a target= '_blank'  href='/user' >Walter White</a><span class='is'>: </span><span class='Comentario'>` )
console.log("superPurged All files and file_trees were also deleted!")
}