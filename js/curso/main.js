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


/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
 paceOptions = {
    restartOnPushState: false
}
!function(){function o(t,e){return function(){return t.apply(e,arguments)}}var u,c,i,s,n,y,t,l,v,r,a,p,e,h,w,b,f,g,d,m,k,S,q,L,x,P,T,R,j,O,E,M,A,C,N,_,F,U,W,X,D,H,I,z,G,B,J=[].slice,K={}.hasOwnProperty,Q=function(t,e){for(var n in e)K.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},V=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function Y(){}for(g={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,f=window.cancelAnimationFrame||window.mozCancelAnimationFrame,p=function(t,e,n){if("function"==typeof t.addEventListener)return t.addEventListener(e,n,!1);var r;"function"!=typeof t["on"+e]||"object"!=typeof t["on"+e].eventListeners?(r=new s,"function"==typeof t["on"+e]&&r.on(e,t["on"+e]),t["on"+e]=function(t){return r.trigger(e,t)},t["on"+e].eventListeners=r):r=t["on"+e].eventListeners,r.on(e,n)},null==R&&(R=function(t){return setTimeout(t,50)},f=function(t){return clearTimeout(t)}),O=function(e){var n=P(),r=function(){var t=P()-n;return 33<=t?(n=P(),e(t,function(){return R(r)})):setTimeout(r,33-t)};return r()},j=function(){var t=arguments[0],e=arguments[1],n=3<=arguments.length?J.call(arguments,2):[];return"function"==typeof t[e]?t[e].apply(t,n):t[e]},d=function(){for(var t,e,n,r=arguments[0],s=2<=arguments.length?J.call(arguments,1):[],o=0,i=s.length;o<i;o++)if(e=s[o])for(t in e)K.call(e,t)&&(n=e[t],null!=r[t]&&"object"==typeof r[t]&&null!=n&&"object"==typeof n?d(r[t],n):r[t]=n);return r},h=function(t){for(var e,n,r=e=0,s=0,o=t.length;s<o;s++)n=t[s],r+=Math.abs(n),e++;return r/e},k=function(t,e){var n,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",t):void 0}}},Y.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},Y.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},Y.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},Y.prototype.trigger=function(){var t,e,n,r,s,o,i=arguments[0],a=2<=arguments.length?J.call(arguments,1):[];if(null!=(r=this.bindings)&&r[i]){for(n=0,o=[];n<this.bindings[i].length;)e=(s=this.bindings[i][n]).handler,t=s.ctx,s=s.once,e.apply(null!=t?t:this,a),s?o.push(this.bindings[i].splice(n,1)):o.push(n++);return o}},B=Y,y=window.Pace||{},window.Pace=y,d(y,B.prototype),T=y.options=d({},g,window.paceOptions,k()),X=0,H=(z=["ajax","document","eventLag","elements"]).length;X<H;X++)!0===T[C=z[X]]&&(T[C]=g[C]);function Z(){return Z.__super__.constructor.apply(this,arguments)}function $(){this.progress=0}function tt(){this.bindings={}}function et(){var e,o=this;et.__super__.constructor.apply(this,arguments),e=function(r){var s=r.open;return r.open=function(t,e,n){return A(t)&&o.trigger("request",{type:t,url:e,request:r}),s.apply(r,arguments)}},window.XMLHttpRequest=function(t){t=new W(t);return e(t),t};try{m(window.XMLHttpRequest,W)}catch(t){}if(null!=U){window.XDomainRequest=function(){var t=new U;return e(t),t};try{m(window.XDomainRequest,U)}catch(t){}}if(null!=F&&T.ajax.trackWebSockets){window.WebSocket=function(t,e){var n=null!=e?new F(t,e):new F(t);return A("socket")&&o.trigger("request",{type:"socket",url:t,protocols:e,request:n}),n};try{m(window.WebSocket,F)}catch(t){}}}function nt(){this.complete=o(this.complete,this);var t=this;this.elements=[],S().on("request",function(){return t.watch.apply(t,arguments)})}function rt(t){var e,n,r,s;for(null==t&&(t={}),this.complete=o(this.complete,this),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(s=t.selectors).length;n<r;n++)e=s[n],this.elements.push(new i(e,this.complete))}function st(t,e){this.selector=t,this.completeCallback=e,this.progress=0,this.check()}function ot(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}function it(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=T.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}B=Error,Q(Z,B),n=Z,$.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(T.target)))throw new n;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var e=""!==T.className?" "+T.className:"";this.el.innerHTML='<div class="pace-progress'+e+'">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},$.prototype.finish=function(){var t=this.getElement();return t.className=t.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},$.prototype.update=function(t){return this.progress=t,y.trigger("progress",t),this.render()},$.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){n=t}return this.el=void 0},$.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(T.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,o=(i=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),y.trigger("change",this.progress),this.lastRenderedProgress=this.progress},$.prototype.done=function(){return 100<=this.progress},c=$,tt.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},tt.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},s=tt,W=window.XMLHttpRequest,U=window.XDomainRequest,F=window.WebSocket,m=function(t,e){var n,r=[];for(n in e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(t){return function(){return e.prototype[t]}}(n),configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(t){0}return r},L=[],y.ignore=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("ignore"),e=t.apply(null,e),L.shift(),e},y.track=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("track"),e=t.apply(null,e),L.shift(),e},A=function(t){if(null==t&&(t="GET"),"track"===L[0])return"force";if(!L.length&&T.ajax){if("socket"===t&&T.ajax.trackWebSockets)return!0;if(t=t.toUpperCase(),0<=V.call(T.ajax.trackMethods,t))return!0}return!1},Q(et,s),t=et,D=null,M=function(t){for(var e,n=T.ajax.ignoreURLs,r=0,s=n.length;r<s;r++)if("string"==typeof(e=n[r])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(S=function(){return D=null==D?new t:D})().on("request",function(t){var o,i=t.type,a=t.request,e=t.url;if(!M(e))return y.running||!1===T.restartOnRequestAfter&&"force"!==A(i)?void 0:(o=arguments,"boolean"==typeof(e=T.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,n,r,s="socket"===i?a.readyState<1:0<(s=a.readyState)&&s<4;if(s){for(y.restart(),r=[],t=0,e=(n=y.sources).length;t<e;t++){if((C=n[t])instanceof u){C.watch.apply(C,o);break}r.push(void 0)}return r}},e))}),nt.prototype.watch=function(t){var e=t.type,n=t.request,t=t.url;if(!M(t))return n=new("socket"===e?r:a)(n,this.complete),this.elements.push(n)},nt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},u=nt,a=function(e,n){var t,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(p(e,"progress",function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2}),t=0,r=(o=["load","abort","timeout","error"]).length;t<r;t++)p(e,o[t],function(){return n(i),i.progress=100});else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?(n(i),i.progress=100):3===e.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}},r=function(t,e){for(var n,r=this,s=this.progress=0,o=(n=["error","open"]).length;s<o;s++)p(t,n[s],function(){return e(r),r.progress=100})},rt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},k=rt,st.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},T.elements.checkInterval)},st.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},i=st,ot.prototype.states={loading:0,interactive:50,complete:100},B=ot,Q=function(){var e,n,r,s,o,i=this;this.progress=0,o=[],s=0,r=P(),n=setInterval(function(){var t=P()-r-50;return r=P(),o.push(t),o.length>T.eventLag.sampleCount&&o.shift(),e=h(o),++s>=T.eventLag.minSamples&&e<T.eventLag.lagThreshold?(i.progress=100,clearInterval(n)):i.progress=3/(e+3)*100},50)},it.prototype.tick=function(t,e){return 100<=(e=null==e?j(this.source,"progress"):e)&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/T.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),e=1-Math.pow(this.progress/100,T.easeFactor),this.progress+=e*this.rate*t,this.progress=Math.min(this.lastProgress+T.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v=it,b=e=_=w=E=N=null,y.running=!1,q=function(){if(T.restartOnPushState)return y.restart()},null!=window.history.pushState&&(I=window.history.pushState,window.history.pushState=function(){return q(),I.apply(window.history,arguments)}),null!=window.history.replaceState&&(G=window.history.replaceState,window.history.replaceState=function(){return q(),G.apply(window.history,arguments)}),l={ajax:u,elements:k,document:B,eventLag:Q},(x=function(){var t,e,n,r,s,o,i,a;for(y.sources=N=[],e=0,r=(o=["ajax","elements","document","eventLag"]).length;e<r;e++)!1!==T[t=o[e]]&&N.push(new l[t](T[t]));for(n=0,s=(a=null!=(i=T.extraSources)?i:[]).length;n<s;n++)C=a[n],N.push(new C(T));return y.bar=w=new c,E=[],_=new v})(),y.stop=function(){return y.trigger("stop"),y.running=!1,w.destroy(),b=!0,null!=e&&("function"==typeof f&&f(e),e=null),x()},y.restart=function(){return y.trigger("restart"),y.stop(),y.start()},y.go=function(){var m;return y.running=!0,w.render(),m=P(),b=!1,e=O(function(t,e){w.progress;for(var n,r,s,o,i,a,u,c,l,p,h=a=0,f=!0,g=u=0,d=N.length;u<d;g=++u)for(C=N[g],i=null!=E[g]?E[g]:E[g]=[],s=c=0,l=(r=null!=(p=C.elements)?p:[C]).length;c<l;s=++c)o=r[s],f&=(o=null!=i[s]?i[s]:i[s]=new v(o)).done,o.done||(h++,a+=o.tick(t));return n=a/h,w.update(_.tick(t,n)),w.done()||f||b?(w.update(100),y.trigger("done"),setTimeout(function(){return w.finish(),y.running=!1,y.trigger("hide")},Math.max(T.ghostTime,Math.max(T.minTime-(P()-m),0)))):e()})},y.start=function(t){d(T,t),y.running=!0;try{w.render()}catch(t){n=t}return document.querySelector(".pace")?(y.trigger("start"),y.go()):setTimeout(y.start,50)},"function"==typeof define&&define.amd?define(function(){return y}):"object"==typeof exports?module.exports=y:T.startOnPageLoad&&y.start()}.call(this);





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
					
$("a").click(function(ed){if($(this).attr("target") !== "_blank" && $(this).attr("href") != undefined){ed.preventDefault(); loadPage($(this).attr("href"))}})
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
$('.widgetero .widget').last().draggable({
	stack:".widgetero .widget",
	cursor: "move", 
	snap: ".vidVidCustomizationMode, .widgetero, .widgetero .widget", 
	snapMode: "both", 
	revertDuration: 100,
	snapTolerance: 10,
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
	top: e.pageY -($('.widgetero .widget').last().height()/2)-46}).trigger(e)
}
});
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
    			$(ui.draggable).width((($(ui.draggable).width() - ($(ui.draggable).is(".select")?11:0)) / ($(".widgetero").width()) * 100 )+ "%")
    			$(ui.draggable).height((($(ui.draggable).height() - ($(ui.draggable).is(".select")?5:0)) / ($(".widgetero").height()) * 100 )+ "%")
    			$(ui.draggable).css({"left": (parseInt($(ui.draggable).css("left").replaceAll("px", "")) / ($(".widgetero").width()) * 100 ) + "%"})
    			$(ui.draggable).css({"top": ((parseInt($(ui.draggable).css("top").replaceAll("px", ""))) / ($(".widgetero").height()) * 100 ) + "%"})

    			ui.draggable.data('dropped', true);
				dropped = true; 
				$('.widgetero .widget').last().addClass("dropped")
				
		}})
		$('.trash').droppable({
    		accept: '.widget',
    		   tolerance: "fit",
    		drop: function(event, ui)
    		{        
    			ui.draggable.remove();

		}})

		$(".widgetero .widget").resizable({

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
	snap: ".vidVidCustomizationMode, .widgetero, .widgetero .widget", 
  snapMode: "both", 
snapTolerance: 10,
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
			$("header").removeClass("open")
			$(".widgetero").removeClass("open")
		}
		if($("#customizationBars").hasClass("open")){
			$(".widgetero").height(0)
		}
		$("#right-menu #customize").toggleClass("open");
		$("#customizationBars").toggleClass("open");
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
function controls(a){
	if ($(a.target).parents().andSelf().is(".delete")){
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".select")){
    	$(".widget").addClass("select")
    	$(".select").addClass("on");
    	$(".resize").removeClass("on");
    	select = true
	}
	if ($(a.target).parents().andSelf().is(".resize")){
    	$(".widget").removeClass("select");
    	$(".resize").addClass("on");
    	$(".select").removeClass("on");
    	    	select = false
	}
	if ($(a.target).parents().andSelf().is(".cut")){
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop = parseInt($(".selectedWidget").css("top"), 10)
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)
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
        if (e.keyCode == ctrlKey) {ctrlDown = true;}
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
    }
}
    );

purger= {}; 
            
purger.index= 16; 
                 
purger.purge= function( a ){ 
    if(typeof purger.index.in !== "undefined")return
    fT= localStorage.getItem("file_tree")
    if( ( localStorage.getItem( "safety_purge" ) === null || ( localStorage.getItem( "safety_purge" ) !== null && parseInt( localStorage.getItem( "safety_purge" ) ) != purger.index ) ) || ( typeof a != "undefined" && a == "bypass" ) ){ 
        for( ii in localStorage ){ 
            if( typeof localStorage[ii] != "function" && ii != "length" && ["safety_purge", "tooltip", "knob", "filesWidth", "user", "selected"].indexOf( ii ) == -1 ){ 
                ( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "raw" ) === 0? console.log( ii ): localStorage.removeItem( ii ); 
            } 
        } 
          
        localStorage.setItem("safety_purge", purger.index); 
                                
        localStorage.setItem("file_tree", fT)
        console.log("Purged!"); 
    }; 
}; 

purger.super_purge= function( a ){
if(!((typeof purger.index.in !== "undefined" && purger.index.in !== parseInt(localStorage.getItem("safety_purge"))) || (typeof a != "undefined" && a === "bypass")))return
localStorage.clear()
localStorage.setItem("safety_purge", purger.index.in)
console.log("superPurged All files and file_trees were also deleted!")
}