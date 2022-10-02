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




var $this 
var hashes= {}; 
var nonBuilt; 
var ctrlMShift= false; 
function rvsdatefinder(e){
var indc= -1
for(ind in edHistory){
    indc++
    if(indc == e) 
        return ind
}}
function datefinder(e){
var indc= -1
for(ind in edHistory){
    indc++
    if(edHistory[ind] ==edHistory[e])return indc
}}
var edition= function(e){
    $("body").append("<badguy></badguy>"); 
    switch(type){
        case "oC":
            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf("otherContainments") - 9, e.target.responseText.slice(e.target.responseText.lastIndexOf("otherContainments") - 9, e.target.responseText.length).indexOf("<aside") + e.target.responseText.lastIndexOf("otherContainments") - 9)); 
            $(".current .title").next().remove()
            $(".current .title").after($("badguy").find("#otherContainments").html())
            $(".current").find("text").html()
            for(var er= 0; er <= $(".current .media audio").length - 1; er++){
                audiojs.create($(".current .media audio")[er])
            }

            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') + 8, e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') + 8, e.target.responseText.length).indexOf("</p>") + e.target.responseText.lastIndexOf('"title"') + 8)); 

            if($(".current").find(".title").text().indexOf("We're L") != 0)$(".current").find(".title").html($("badguy").html())
            $("badguy").remove()
            break;
        case "c":
            $("badguy").html(e.target.responseText.slice(e.target.responseText.indexOf("<containment") , e.target.responseText.slice(e.target.responseText.lastIndexOf("<containment"), e.target.responseText.length).indexOf("</containment") + e.target.responseText.indexOf("<containment"))); 
            $(".current .title").next().remove()
            $(".current .title").after($("badguy").find("containment")[0].outerHTML)

            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') + 8, e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') + 8, e.target.responseText.length).indexOf("</p>") + e.target.responseText.lastIndexOf('"title"') + 8)); 

            $(".current").find(".title").html($("badguy").html())
            $("badguy").remove()
            break;
        case "mult_img":
            $("badguy").html(e.target.responseText.slice(e.target.responseText.indexOf('"navigation"') - 15, e.target.responseText.slice(e.target.responseText.indexOf('"navigation"') - 15, e.target.responseText.length).indexOf("Playuse") - 3 + e.target.responseText.indexOf('"navigation"') - 15)); 
            $(".current .Comentarios").prev().remove()
            $(".current .Comentarios").before($("badguy").find(".navigation")[0].outerHTML)
            $(".current").find("text").html()
            
            $(".current .nav_arrow.left .arrow").not("#picContainer .arrow").on("click", function(){
                th= $(".current");
                if($("#theater .nav_arrow.left").is(".disabled"))
                    {return}; 
                if(th.find(".nav_arrow.left").is(".disabled") && $("#theater").css("display") == "none")
                    {return}
                if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
                    if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].pause();
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
                        if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", "/" + username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
                }
            }); 

            $(".current .nav_arrow.right .arrow").not("#picContainer .arrow").on("click", function(){
                th= $(".current");
                if($("#theater .nav_arrow.right").is(".disabled"))
                    {return}; 
                if(th.find(".nav_arrow.right").is(".disabled") && $("#theater").css("display") == "none")
                    {return}
                if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
                    if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].pause();
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
                        if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", "/" + username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
                }
            }); 

            $(".current .carr").on("scroll", function(){ 
                rf= $(this)
                Math.round($(this)[0].scrollLeft / $(this).width()) == $(this).children().length - 1? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
                $(this)[0].scrollLeft == 0? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
            }) 

            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') + 8, e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') + 8, e.target.responseText.length).indexOf("</p>") + e.target.responseText.lastIndexOf('"title"') + 8)); 
            W= e.target.responseText
            console.log($("badguy").html())
            $("badguy").remove()
            break; 
        case "b":
            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf('id="text"') - 7, e.target.responseText.slice(e.target.responseText.lastIndexOf('id="text"') - 7, e.target.responseText.length).indexOf("</aside>") + e.target.responseText.lastIndexOf('id="text"') - 7)); 
            $("#text").not("badguy #text").html("")
            $("#text").not("badguy #text").html($("badguy #text").html())
            console.log($("badguy #text").html())
            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf('id="title"') + 11, e.target.responseText.slice(e.target.responseText.lastIndexOf('id="title"') + 11, e.target.responseText.length).indexOf("</aside>") + e.target.responseText.lastIndexOf('id="title"') + 11)); 

            $("#title").not("badguy #title").html($("badguy").html())
            $("badguy").remove()
            $("figure > div").resizable({
                handles: 'e',
                start: function() {
                    $("#setter")[0].innerHTML = "img{cursor:e-resize !important}"
                },
                stop: function() {
                    $("#setter")[0].innerHTML = ""
                }
            });
            break;
    }
}
wD= function(thi, b){ 
    if(typeof b == "undefined"){ 
        if(!thi.parent().next(".newComment").find("textarea").length){ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
                                                                         
            thi.parent().after('<div class="newComment"><textarea rows="1"></textarea></div>'); 
                                                                                                           
            $(thi.parent().next(".newComment").find("textarea")).on('input', function(){ 
                $(this).height(""); 
                                    
                !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
                            
                C= $(this); 
                            
                !!C.closest("#theater").length? C.closest(".Comentarios").scrollTop($(C.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(C.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - C.closest(".Comentarios").height() - (66 + $("#theater .info").height() - 38)): $("html").scrollTop($(C.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(C.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - $("html").height() + 112); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){!abc.parent().next().is(".respuestas")? (function(){ll= $(abc.closest(".comentarios").find("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='respuestas'><div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div><span class='Respuestas'><span class='Responder'></span></span></div>"; ll.next().find(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); ll.next().find(".comentario").on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); $(ll.next().find(".Respuestas .Responder")).on("click", function(){wD($(this), 1)}); $(ll.next().find(".comentario .Responder")).on("click", function(){wD($(this))}); badGuy(); })(): (function(){abc.parent().next().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().next().append('<span class="Respuestas"><span class="Responder"></span></span>'); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder"))[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); $(abc.parent().next().children()[abc.parent().next().children().length - 1]).before("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $($(abc.parent().next().children()[abc.parent().next().children().length - 2]).find(".Responder")).on("click", function(){wD($(this))}); $($(abc.parent().next().children()[abc.parent().next().children().length - 2])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); abc.parent().remove(); badGuy(); })()})(): 1; 

                $(".knob").knob(); 

                tooltipComentarios(); 
            }); 

            aa= thi; 
                         
            !!thi.closest("#theater").length? thi.closest(".Comentarios").scrollTop($(thi.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(thi.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - thi.closest(".Comentarios").height() - (66 + $("#theater .info").height() - 38)): $("html").scrollTop($(thi.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(thi.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - $("html").height() + 112); 
                                                                                          
            $($(aa).parent().next(".newComment").find("textarea")).focus(); 
        }else{ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
        } 
    }else{ 
        if(!thi.parent().next(".newComment").find("textarea").length){ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
                                                                         
            thi.parent().after('<div class="newComment"><textarea rows="1"></textarea></div>'); 
                                                                                                           
            $(thi.parent().next(".newComment").find("textarea")).on('input', function(){ 
                $(this).height(""); 
                                    
                !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
                            
                C= $(this); 
                            
                !!C.closest("#theater").length? C.closest(".comentarios").find(".Comentarios").scrollTop($(C.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(C.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - C.closest(".comentarios").find(".Comentarios").height() - (66 + $("#theater .info").height() - 38)): $("html").scrollTop($(C.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(C.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - $("html").height() + 112); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.parent().parent().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().parent().append('<span class="Respuestas"><span class="Responder"></span></span>'); $(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).children().filter(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); ll= $(abc.closest(".comentarios").find("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"; ll.next().on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); $(ll.next().find(".Responder")).on("click", function(){wD($(this))}); badGuy(); })(): 1; 

                $(".knob").knob(); 

                tooltipComentarios(); 
            }); 

            aa= thi; 
                         
            !!aa.closest("#theater").length? aa.closest(".Comentarios").scrollTop($(aa.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(aa.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - aa.closest(".Comentarios").height() - (66 + $("#theater .info").height() - 38)): $("html").scrollTop($(aa.closest(".comentarios").find("textarea")[0]).parent()[0].offsetTop + $(aa.closest(".comentarios").find("textarea")[0]).parent().outerHeight() - $("html").height() + 112); 
                                                                                          
            $($(aa).parent().next(".newComment").find("textarea")).focus(); 
        }else{ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
        } 
    } 
} 
wd= function(Tt, l){ 
    $(l.target).is(".Respuestas")? (function(){ 
        ///*console.log(l.target); */ 

        for(a= 1; a<= 3; a++){ 
            $(Tt.parent().children().filter(".comentario.hidden")[0]).next().is(".respuestas.hidden")? $(Tt.parent().children().filter(".comentario.hidden")[0]).next().removeClass("hidden"): 1; 
            $(Tt.parent().children().filter(".comentario.hidden")[0]).removeClass("hidden"); 
        } 
    
        !!Tt.parent().children().filter(".comentario.hidden").length? Tt.html((!$(Tt).next().length? '<span class="Responder"></span>': '') + "Más respuestas (" + Tt.parent().children().filter(".comentario.hidden").length + ")"): !$(Tt).next().length? Tt.html('<span class="Responder"></span>'): Tt.remove(); 

        !!Tt.find(".Responder").length? Tt.find(".Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }): 1; 
        Tt.find(".Responder").on("click",function(){wD($(this), 1)}) 
    })(): 1; 
}
wwd= function(t, tr){ 
    $(".respuestas .newComment").remove(); 

    $(t.parentElement.parentElement).children().each(function(){ 
        $(this).index() != $(this).parent().children().length - 1? $(this).addClass("hidden"): 1; 
    }); 
        
    typeof tr === "undefined"? $(t).closest(".respuestas").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}): 1; 
                                                                
    U= $(t).parent().parent().children().filter(".Respuestas"); 
                                                                
    (U.length == 2)? (function(){$(U[1]).html("<span class='Responder'></span>Respuestas (" + $(U[1]).parent().children().filter(".comentario").length + ")"); $(U[1]).click(function(l){wd($(this), l)}); $($(U[1]).find(".Responder")).on("click", function(){wD($(this), 1)}); U[0].remove()})(): (function(){U.html("<span class='Responder'></span>Respuestas (" + U.parent().children().filter(".comentario").length + ")"); U.click(function(l){wd($(this), l)}); $(U.find(".Responder")).on("click", function(){wD($(this), 1)}); })(); 
} 
bGComments= function(arg){ 
    (typeof arg == "undefined")? (function(){ 
        $("body").prepend("<badguy></badguy>"); 
        $("badguy").html($("#article .Comentarios").html()); 
        $("badguy .Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
        $("badguy").find(".Respuestas .Responder").each(function(){wwd($(this)[0], 1)}); 
        bG= $("badguy")[0].innerHTML; 
        $("badguy").remove(); 
    })(): (function(){bG= (typeof arg == "undefined")? 1: 1; })(); 
    return bG; 
}
badGuy= function(){ 
    iTS=  window.location.pathname.replaceAll(".html", ""); 
    localStorage.setItem(iTS, JSON.stringify({C: bGComments(), hash: ((localStorage.getItem(iTS) != null && (typeof JSON.parse(localStorage.getItem(iTS)).hash != "undefined"))? JSON.parse(localStorage.getItem(iTS)).hash: hashes[window.location.pathname.replaceAll(".html", "")])})); 
}

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
   
document.addEventListener("keydown", function(i){(i.keyCode == 13 && !!window.getSelection().focusNode && $(window.getSelection().focusNode.parentElement).is(".revelar"))? $(window.getSelection().focusNode.parentElement).click(): 1; }); 
                                   
$(window).load(function(){ 
    /*setTimeout(
        function(){ 
            ttl= $("title").text(); 
    
            $("title").html(" &nbsp &nbsp&nbsp&nbsp" + ttl); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 100); 
    
            setTimeout(function(){$("title").html(" &nbsp     " + ttl); }, 400); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 700); 
    
            setTimeout(function(){$("title").html(" &nbsp     " + ttl); }, 1100); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 1400); 

            setTimeout(function(){$("title").html(ttl); }, 1700); 
        } 
        , 593); */ 
}); 
function getNewComments(m, h){ 
    var arr= []; 
                 
    for(f= (m.children().filter(".comentario").length - (m.children().filter(".comentario").length - h.children().filter(".comentario").length)); f <= (m.children().filter(".comentario").length - 1); f++){ 
        arr[arr.length]= ["C", $(m.children().filter(".comentario")[f])[0].outerHTML]; 
        $(m.children().filter(".comentario")[f]).next().is(".respuestas")? arr[arr.length]= ["R", $(m.children().filter(".comentario")[f]).next()[0].outerHTML]: 1; 
    } 
      
    arr= !h.is(".Comentarios")? [arr, pathfinder(h)]: [arr]; 
                
    return arr; 
} 
pathfinder= function(w){ 
    tt= w; 
    c= []; 
    
    while(!tt.is(".Comentarios")){ 
        c[c.length]= tt.parent().children().filter(".comentario").index(tt.prev()); 
        tt= tt.parent();    
    }
    return c; 
}
function finder(i, n){ 
    y= n.find(".Comentarios"); 
    
    typeof i.is == "undefined"? (function(){c= []; for(ie in i){c[c.length]= i[ie]}})(): pathfinder(i); 

    while(c.length > 1){ 
        y= $(y.children().filter(".comentario")[c[c.length - 1]]).next(); 
        c= c.splice(0, c.length - 1); 
    } 
    
    return $(y.children().filter(".comentario")[c[c.length - 1]]).next(); 
}
function getCommentsAndAnswers(u, l){ 
    $(u).filter(".Comentarios").children().filter(".comentario").each(function(){ 
        if(!$(this).next().is(".respuestas") && $(l.find(".Comentarios").children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().is(".respuestas")){ 
            $(l.find(".Comentarios").children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().find(".Respuestas").remove(); 
            newAnswers[newAnswers.length]= [$(this).parent().children().filter(".comentario").index($(this)), $(l.find(".Comentarios").children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().html()]; 
        }; 
    }); 
    u.children().filter(".respuestas").each(function(){ 
        $(this).children().filter(".comentario").each(function(){ 
            if(!$(this).next().is(".respuestas") && $($(finder($(this).parent(), l)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().is(".respuestas")){
                $($(finder($(this).parent(), l)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().find(".Respuestas").remove(); 
                newAnswers[newAnswers.length]= [pathfinder($(this).parent()), $(this).parent().children().filter(".comentario").index($(this)), $($(finder($(this).parent(), l)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().html()]; 
            }; 
        }); 
        getNewComments($(finder($(this), l)[0]), $(this))[0].length? newComments[newComments.length]= getNewComments($(finder($(this), l)[0]), $(this)): 1; 
        getCommentsAndAnswers($(this), l); 
    }); 
} 

k200= function(f, ww1, a, u, ty){ 
    console.log(f)
switch(ty){
    case "blog": 
        a= $(".comentarios").last(); 
    break; 
}; 


console.log(a)
    aS= a; 
    $("badguy").remove();
    $("body").prepend("<badguy></badguy>");
    $("badguy").html(f.target.response.slice(f.target.response.lastIndexOf("biography") + 12, f.target.response.indexOf("sidebar") - 11).slice(0, f.target.response.slice(f.target.response.lastIndexOf("biography") + 12, f.target.response.indexOf("sidebar") - 11).lastIndexOf("</aside>")));
    newComments= []; 
    newAnswers= []; 
    $("badguy .Comentarios").children().filter(".comentario").each(function(){ 
    if(!$(this).next().is(".respuestas") && $($(finder($(this).parent(), aS)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().is(".respuestas")){ 
        newAnswers[newAnswers.length]= [pathfinder($(this).parent()), $(this).parent().children().filter(".comentario").index($(this))]; 
    }; 
}); 
newComments[newComments.length]= getNewComments(aS.find(".Comentarios"), $("badguy .Comentarios")); 
getCommentsAndAnswers($("badguy .Comentarios"), aS);

JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).B? aS.find(".options .bookmark").addClass("true"): aS.find(".options .bookmark").removeClass("true");
JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).S? aS.find(".options .star").addClass("true"): aS.find(".options .star").removeClass("true");
!!JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).C? (function(){aS.find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).C})(): 1;
$("badguy").remove(); 
for(w in newComments){ 
    if(newComments[w].length == 1){
        for(e in newComments[w][0]){
            aS.find(".Comentarios").append(newComments[w][0][e][1]); 
        }
    }else{
        for(e in newComments[w][0]){
            finder(newComments[w][1], aS).children().filter(".Respuestas").before(newComments[w][0][e][1]); 
        }
    }
} 
for(w in newAnswers){ 
    if(newAnswers[w].length == 2){
        if($(aS.find(".Comentarios").children().filter(".comentario")[newAnswers[w][0]]).next().is(".respuestas")){ 
            $(aS.find(".Comentarios").children().filter(".comentario")[newAnswers[w][0]]).next().children().filter(".Respuestas").before(newAnswers[w][1]); 
        }else{ 
            $(aS.find(".Comentarios").children().filter(".comentario")[newAnswers[w][0]]).after('<div class="respuestas">' + newAnswers[w][1] + '<span class="Respuestas"></span></div>')
        } 
    }else{ 
        if($(finder(newAnswers[w][0], aS).children().filter(".comentario")[newAnswers[w][1]]).next().is(".respuestas")){ 
            $(finder(newAnswers[w][0], aS).children().filter(".comentario")[newAnswers[w][1]]).next().children().filter(".Respuestas").before(newAnswers[w][2]); 
        }else{ 
            $(finder(newAnswers[w][0], aS).children().filter(".comentario")[newAnswers[w][1]]).after('<div class="respuestas hidden">' + newAnswers[w][2] + '<span class="Respuestas"></span></div>');
        } 
    } 
} 
console.log(u[0])

localStorage.setItem(f.target.responseURL.slice(100, -5), JSON.stringify({B: JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).B, S: JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).S, C: bGComments(), hash: u[0].sha})); 

$('#article .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    $("#article .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#article .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#article .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $("#article .comentario .Responder").on("click", function(){wD($(this))}); 

    $("#article .Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    $(".comentarios textarea").on('input', function() { 
        $(this).height(""); 
        !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
    }); 
    $(".comentarios > .newComment").on('keydown', function(i){ 
                abc= $(this).closest(".comentarios").find(".Comentarios"); 

                t= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.append("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + t.find("textarea").val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); t.find("textarea").val(""); $($(abc.children()[abc.children().length - 1]).find(".Responder")).on("click", function(){wD($(this))}); abc.scrollTop(abc[0].scrollHeight); $($(abc.children()[abc.children().length - 1])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); document.activeElement.blur(); $("html").scrollTop($("html")[0].scrollHeight); $(".comentarios > .newComment textarea").css({"height": ""}); badGuy(); })(): 1; 

                $(".knob").knob(); 


                tooltipComentarios(); 
            }); 
    $("#article .comentarios > .newComment").on('input', function(i){ 
        $("html").scrollTop($("html")[0].scrollHeight); 
    }); 
}
k300= function(C, p, y, ty){ 
    hashes[C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))]= (function(){built= true; for(eForensics in JSON.parse(C.target.response)){ 
            if(nonBuilt.indexOf(JSON.parse(C.target.response)[eForensics].sha) != -1){ 
                built= parseInt(eForensics) + 1; 
            } 
        }; return built !== true? JSON.parse(C.target.response)[built].sha: JSON.parse(C.target.response)[0].sha; })(); 
    //console.log(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))); 
    if(!!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))) && JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash != JSON.parse(C.target.response)[0].sha){
        //console.log(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))); 

        var oReq= new XMLHttpRequest(); 
        oReq.addEventListener("load", function(e){k200(e, p, y, JSON.parse(C.target.response), ty)}); 
        oReq.open("GET", "https://raw.githubusercontent.com/LirilC/Lirilc.github.io/" + JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash + C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")) + ".html"); 
        oReq.send(); 
    }else if(!!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))))){
        switch(ty){
            case "blog": 
                a= $(".comentarios").last(); 
            break; 
        }; 
        //console.log(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))); 
        !!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).C? (function(){a.find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).C})(): 1; 
        JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).B? a.find(".options .bookmark").addClass("true"): a.find(".options .bookmark").removeClass("true"); 
        JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).S? a.find(".options .star").addClass("true"): a.find(".options .star").removeClass("true"); 

        $('#article .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

        $("#article .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                        
        $("#article .Respuestas").click(function(l){wd($(this), l)}); 

        for(let collapse of document.querySelectorAll("#article .Respuestas .Responder")){ 
            collapse.addEventListener("contextmenu", function(e){ 
                e.preventDefault(); 
                wwd(this); 
            });  
        }; 

        $("#article .comentario .Responder").on("click", function(){wD($(this))}); 

        $("#article .Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

        $(".knob").knob(); 

        tooltipComentarios(); 

        tooltip(); 
    }
} 
K100= function(builds){ 
    nonBuilt= (function(){ 
        non_built= []; 

        for(eForensics in JSON.parse(builds.target.response)){ 
                if(JSON.parse(builds.target.response)[eForensics].status == "built"){ 
                    return non_built; 
                }else{ 
                    non_built[non_built.length]= JSON.parse(builds.target.response)[eForensics].commit; 
                } 
            } 
        })(); 
    $(".comentarios").last().each(function(){ 
        w1=  window.location.pathname.replaceAll(".html", ""); 
        console.log(w1) 
        cold= JSON.parse(localStorage.getItem(w1)); 
        t= $(this); 
        (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
            var oReq= new XMLHttpRequest(); 
            oReq.addEventListener("load", function(e){k300(e, w1, t, "blog")}); 
            oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/commits?path=" +  w1 + ".html"); 
            oReq.setRequestHeader('Authorization', "token " + token); 
            oReq.send(); 
        })(): 1; 
    }); 
} 
K0= function(){
    token= this.responseText; 

    var oReq= new XMLHttpRequest(); 
    oReq.addEventListener("load", function(e){K100(e)}); 
    oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/pages/builds"); 
    oReq.setRequestHeader('Authorization', "token " + token); 
    oReq.send();
}
$(document).on("ready",function(){ 
    purger.purge(); 

$("a").click(function(ed){if($(this).attr("target") !== "_blank" && $(this).attr("href") != undefined){ed.preventDefault(); loadPage($(this).attr("href"))}})
$(".Editado").on("contextmenu", function(er){er.preventDefault()})
$(".Editado").on("mouseup", function(e){
console.log(e)
if(e.which === 1 && datefinder($(this).attr("title")) + 1 <= Object.keys(edHistory).length - 1){
    console.log(edHistory[rvsdatefinder(datefinder($(this).attr("title")) + 1)]); 

    var wReq = new XMLHttpRequest();
    wReq.addEventListener("load", function(e){edition(e)}); 
    wReq.open("get", edHistory[rvsdatefinder(datefinder($(this).attr("title")) + 1)], true);
    wReq.send();
    rvsdatefinder(datefinder($(this).attr("title")) + 1).indexOf("Editado") != 0? $(this).css({"text-decoration": "line-through", "color": "#3773639f"}): $(this).css({"text-decoration": "", "color": "rgb(221, 221, 144)"})
    $(this).attr("title", rvsdatefinder(datefinder($(this).attr("title")) + 1))
}else if(e.which === 3 && datefinder($(this).attr("title")) - 1 >= 0){

    console.log(edHistory[rvsdatefinder(datefinder($(this).attr("title")) - 1)]); 

    var wReq = new XMLHttpRequest();
    wReq.addEventListener("load", function(e){edition(e)}); 
    wReq.open("get", edHistory[rvsdatefinder(datefinder($(this).attr("title")) - 1)], true);
    wReq.send();

    rvsdatefinder(datefinder($(this).attr("title")) - 1).indexOf("Editado") != 0? $(this).css({"text-decoration": "line-through", "color": "#3773639f"}): $(this).css({"text-decoration": "", "color": ""})
    $(this).attr("title", rvsdatefinder(datefinder($(this).attr("title")) - 1))
    if(datefinder($(this).attr("title"))== 0){$(this).css({"color": ""})}else{$(this).css({"color": "rgb(221, 221, 144)"})}
}

})
$(".nombre").on("click", function(){
    if(ctrlMShift){
        if($(this).attr("contenteditable") == "true"){
            $(this).attr("contenteditable", "false") 
        }else{
            $(this).attr("contenteditable", "true") 
            $(this).focus()
        }
  }
})

$("header").after(`<aside class="searchResults hidden">
        <div>
        </div>
    </aside>`)
possibleResults=[[["Megan Denise Fox", "MeganFox"], {users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Laura Escobar Bonnett", "L"], {users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], type: "Usuario"}], [["Luis Eduardo Gallego García", "A.K.A._Dizzy"], {users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], type: "Usuario"}], [["Dios Jesucristo", "G-Suschrist"], {users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Aura María Cardona Demasiado", "AuraCardonaC"], {users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], type: "Usuario"}], [["Juan José Martínez Vidal", "LamaMadora"], {users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], type: "Usuario"}], , [["Walter White", "user"], {users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], type: "Usuario"}], [["A0"], {name: "A0", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/A0", type: "Blog"}], [["Algo Más Sobre Mí"], {name: "Algo Más Sobre Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algo Más Sobre Mí", type: "Blog"}], [["Algunas Propiedades De Mis Escritos"], {name: "Algunas Propiedades De Mis Escritos", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunas Propiedades De Mis Escritos", type: "Blog"}], [["Algunos Poemas Que He Escrito"], {name: "Algunos Poemas Que He Escrito", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunos Poemas Que He Escrito", type: "Blog"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/aNGEL();", type: "Blog"}], [["Constructor And Business Partners (Dedicatorias)"], {name: "Constructor And Business Partners (Dedicatorias)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners (Dedicatorias)", type: "Blog"}], [["Constructor And Business Partners"], {name: "Constructor And Business Partners", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners", type: "Blog"}], [["Dinosaurios"], {name: "Dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Dinosaurios", type: "Blog"}], [["El Pueblo Blanco"], {name: "El Pueblo Blanco", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Pueblo Blanco", type: "Blog"}], [["El Salomé Castrillón"], {name: "El Salomé Castrillón", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Salomé Castrillón", type: "Blog"}], [["Equilibrio"], {name: "Equilibrio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Equilibrio", type: "Blog"}], [["FRANCIA Y ElDelprincipio"], {name: "FRANCIA Y ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/FRANCIA Y ElDelprincipio", type: "Blog"}], [["La Larga Historia"], {name: "La Larga Historia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Larga Historia", type: "Blog"}], [["La Perrita Del Poste"], {name: "La Perrita Del Poste", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Perrita Del Poste", type: "Blog"}], [["La Sagrada Biblia"], {name: "La Sagrada Biblia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Sagrada Biblia", type: "Blog"}], [["Las Flores Malditas (Introducción)"], {name: "Las Flores Malditas (Introducción)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Las Flores Malditas (Introducción)", type: "Blog"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/por_siLaBas();", type: "Blog"}], [["Regalos Para Mí"], {name: "Regalos Para Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Regalos Para Mí", type: "Blog"}], [["Sus Rizos Color Caramelo"], {name: "Sus Rizos Color Caramelo", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Sus Rizos Color Caramelo", type: "Blog"}], [["Una Breve Historia De La Creación"], {name: "Una Breve Historia De La Creación", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Una Breve Historia De La Creación", type: "Blog"}], [["xWo3"], {name: "xWo3", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/xWo3", type: "Blog"}], [["dinosaurios"], {name: "dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/82DcC9s2sS0cZ", type: "Proyecto"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/f9d2cCa2Cxc31", type: "Proyecto"}], [["Christmas Gifts From The Gallego Escobar Family"], {name: "Christmas Gifts From The Gallego Escobar Family", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/h3dd2cDcsW2R3", type: "Proyecto"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k92dJd29D920d", type: "Proyecto"}], [["Robot De Dedicatorias"], {name: "Robot De Dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k9u8hH78jJi27", type: "Proyecto"}], [["Robot de dedicatorias"], {name: "Robot de dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/s98f39c0d9090", type: "Proyecto"}], [["ElDelprincipio"], {name: "ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/tY829dD0290df", type: "Proyecto"}], [["myProjext1"], {name: "myProjext1", users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], href: "/MeganFox/p/k89dsV37S1XM7", type: "Proyecto"}], [["minesweeper"], {name: "minesweeper", users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], href: "/L/p/2kNoind8JsjD9", type: "Proyecto"}], [["lX"], {name: "lX", users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], href: "/AuraCardonaC/p/di29D8jj8dj2d", type: "Proyecto"}], [["snka"], {name: "snka", users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], href: "/G-Suschrist/p/aJ820d0d9fjnc", type: "Proyecto"}], [["Vv11"], {name: "Vv11", users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], href: "/LamaMadora/p/u889Dj8Q22dSC", type: "Proyecto"}], [["_dvlpmt"], {name: "_dvlpmt", users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], href: "/user/p/8d299s2gvkL9", type: "Proyecto"}], [["La Perrita Del Poste", "PpP"], {users_name: "La Perrita Del Poste", username: "PpP", profilePic: "/resources/images/PpP/bZj2vYrklo_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["ElDelprincipio", "Eld"], {users_name: "ElDelprincipio", username: "Eld", profilePic: "/resources/images/Eld/oow4doJxKO_tn.jpg", rol: ["G", "+100"], type: "Usuario"}]]
$(".buscar").on("focus", function(){$(".nombre").attr("contenteditable", "false")})
$(".buscar").on("input", function(){  if($(this).val() !== ""){$(".searchResults").removeClass("hidden")}else{ $(".searchResults").addClass("hidden"); return}
results= []
for(var e in possibleResults){
for(var u in possibleResults[e][0]){
if(possibleResults[e][0][u].toLowerCase().indexOf($(this).val().toLowerCase()) == 0){
if(results.indexOf(possibleResults[e][1]) == -1)results[results.length]= possibleResults[e][1]
}
}
}

$(".searchResults > div").html("")
for(var f in results){
if(results[f].type == "Usuario"){
$(".searchResults > div").append(
`<section class="result">
<a href= "/` + results[f].username + `"></a>
<div class="profilePic">
<img src="` + results[f].profilePic + `" alt="">
<input class="knob button" data-width="106" data-height="106" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="` + results[f].rol[1].slice(1) + `"></div>
<div class="username">` + results[f].users_name + `<p class="rol">` + results[f].rol[0] + ` <b>` + results[f].rol[1] + `</b></p></div>               
<span class="resulttype">Usuario</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "Blog"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="profilePic">
<img src="` + results[f].profilePic + `" alt="">
<input class="knob button" data-width="106" data-height="106" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="` + results[f].rol[1].slice(1) + `"></div>
<div class="username">` + results[f].users_name + `<a class= "name">&nbsp; | ` + results[f].name + `</a></div>               
<span class="resulttype">Blog</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "Proyecto"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="profilePic">
<img src="` + results[f].profilePic + `" alt="">
<input class="knob button" data-width="106" data-height="106" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="` + results[f].rol[1].slice(1) + `"></div>
<div class="username">` + results[f].users_name + `<a class= "name">&nbsp; | ` + results[f].name + `</a></div>               
<span class="resulttype">Proyecto</span>
</section>`
)
}
}
$(".searchResults a").click(function(ed){if($(this).attr("target") !== "_blank" && $(this).attr("href") != undefined){ed.preventDefault(); loadPage($(this).attr("href"))}})
$(".knob").knob()
})
$(document).on("keydown", function(r){
switch(r.keyCode){
  case 40:
        if(!$(".searchResults").is(".hidden") && !$(".result#resaltado").length){
            $($(".result")[0]).attr("id", "resaltado")
            $($(".result")[0]).children()[0].focus()
            setTimeout(function(){$(".searchResults > div").scrollTop(0)}, 20)
        }else if(!$(".searchResults").is(".hidden") && $(".result#resaltado").index() != $(".result").length - 1){
            $(".result#resaltado").next().children()[0].focus()
            $(".result#resaltado").next().attr("id", "resaltado")
            $($(".result#resaltado")[0]).attr("id", "")
        }
    break;
  case 38:
        if(!$(".searchResults").is(".hidden") && $(".result#resaltado").length && $(".result#resaltado").index() != 0){
            $(".result#resaltado").prev().children()[0].focus()
            $(".result#resaltado").prev().attr("id", "resaltado")
            $($(".result#resaltado")[1]).attr("id", "")
        }
    break;
}
})

document.onkeyup= function(o){
if(!o.shiftKey || !o.altKey)ctrlMShift= false
}
window.onblur= function(){
    ctrlMShift= false
    $(".nombre").attr("contenteditable", "false") 
}
document.addEventListener("keydown", function(e){if(e.shiftKey && e.ctrlKey){ctrlMShift= true}if(e.shiftKey && e.ctrlKey && e.altKey){e.preventDefault();$("#theater").css("display") == "block"?closeModal():1;$("#buscar input").val("");$("#buscar input").trigger("input");$("#buscar input").focus()}})
    $('#article .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    $("#article .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#article .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#article .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $("#article .comentario .Responder").on("click", function(){wD($(this))}); 

    $("#article .Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    $(".comentarios textarea").on('input', function() { 
        $(this).height(""); 
        !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
    }); 
    $(".comentarios > .newComment").on('keydown', function(i){ 
                abc= $(this).closest(".comentarios").find(".Comentarios"); 

                t= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.append("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + t.find("textarea").val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); t.find("textarea").val(""); $($(abc.children()[abc.children().length - 1]).find(".Responder")).on("click", function(){wD($(this))}); abc.scrollTop(abc[0].scrollHeight); $($(abc.children()[abc.children().length - 1])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); document.activeElement.blur(); $("html").scrollTop($("html")[0].scrollHeight); badGuy(); })(): 1; 

                $(".knob").knob(); 


                tooltipComentarios(); 
            }); 
    $("#article .comentarios > .newComment").on('input', function(i){ 
        $("html").scrollTop($("html")[0].scrollHeight); 
    }); 
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", K0);
    oReq.open("get", "https://cdn.filestackcontent.com/T1JT7NWRhigB2KGvZN7g");
    oReq.send(); 
    $("#theater .read").on("click", function(){ 
        !$("#theater .description").hasClass("closed")? $("#theater .description").addClass("closed"): $("#theater .description").removeClass("closed"); 
        !$("#theater .comentarios").hasClass("open")? $("#theater .comentarios").addClass("open"): $("#theater .comentarios").removeClass("open"); 
    })
    typeof videojs != "undefined"? (function(){ 
        $(".Playuse").click(function(i){ 
            $(i.target).parent().find("video")[0].play(); 
            $(i.target).addClass("playing"); 
        }); 

        videojs("Dinosaurios7").on("pause", function(i){ 
            $(videojs(i.target.parentElement.id).L.parentElement).siblings().filter(".Playuse").removeClass("playing"); 
        });
        
        videojs("Dinosaurios7").on("play", function(i){ 
            //console.log(i)
            $(videojs(i.target.parentElement.id).L.parentElement).siblings().filter(".Playuse").addClass("playing"); 
        });
    })(): 1; 

    $("#theater").on("click", function(i){$(i.target).is("#theater")? closeModal(): 1; }); 


    if($('.poema.autoScrollTo').length > 0){
      

    /*Haha*/
    let isPaused = false; /* Flag for auto-paused video */
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if(entry.intersectionRatio!=1){
          entry.target.firstTime= true; //Ha...
        }
      });
    }, {threshold: 1});
     for(aST= 0; aST < document.querySelectorAll('.poema.autoScrollTo').length; aST++){ 
            document.querySelectorAll('.poema.autoScrollTo')[aST].firstTime= true; 
            observer.observe(document.querySelectorAll('.poema.autoScrollTo')[aST]); 
        }
} 

    $($(".poema.autoScrollTo")).on("scroll", function(Zz){
        pageXOffset= $(this).scrollTop() || 0; 
        if($(this)[0].firstTime){
                    $(this).css({"overflowY": "hidden"}); 

            a=$(this)
                               

                    $(this)[0].firstTime= false; 
                    $("body, html").animate({
                        scrollTop: $(this).offset().top - 50
                    }, 400, function() {
    a.css({"overflowY": "scroll"}); 
  });
                }});
$(".revelar").on("click", function(){ 

    if(!$(this).parent().next().is(".hdn")){if($(this).text()[0] != "O"){ 
                $(this).parent().css({"height": "auto"}); 
                $(this).parent().find(".poema").css({"height": "auto"}); 
            $(this).parent().find("pre").css({"height": "auto"}); 
            $(this).parent().find("pre").css({"padding": "1em"}); 
            $($(this).parent().children()).each(function(){$(this).is(".code")? $(this).find(".code-scroll").css({"visibility": "visible"}): 1}); 
                $(this)[0].tx= $(this).text(); 
                $(this).text("Ocultar de nuevo."); 
                $(this).addClass("activado"); 
            }else{ 
                $(this).parent().css({"height": "0"}); 
                $(this).parent().find(".poema").css({"height": "0"}); 
            $(this).parent().find("pre").css({"height": "0"}); 
            $(this).parent().find("pre").css({"padding": "0"}); 
            $($(this).parent().children()).each(function(){$(this).is(".code")? $(this).find(".code-scroll").css({"visibility": "hidden"}): 1}); 
                $(this).text($(this)[0].tx); 
                $(this).removeClass("activado"); 
            } }else{
            
            $(this).parent().next().css({"height": "500px", "oveflow": ""})
            
                    if($(this).text()[0] != "O"){ 
                        $(this).parent().find(".poema").css({"height": "auto"}); 
                    $(this).parent().find("pre").css({"height": "auto"}); 
                    $(this).parent().find("pre").css({"padding": "1em"}); 
                    $($(this).parent().children()).each(function(){$(this).is(".code")? $(this).find(".code-scroll").css({"visibility": "visible"}): 1}); 
                        $(this)[0].tx= $(this).text(); 
                        $(this).parent().next().css({"height": "", "overflow": "", "border": "1px solid #ccc", "border-top": "none"}); 
                        $(this).parent().css({"border-bottom": "none"}); 
                        $(this).text("Ocultar de nuevo."); 
                        $(this).addClass("activado"); 
                    }else{ 
                        $(this).parent().next().css({"height": "0", "overflow": "hidden", "border": "none"}); 
                    $(this).parent().find("pre").css({"height": "0"}); 
                    $(this).parent().find("pre").css({"padding": "0"}); 
                    $($(this).parent().children()).each(function(){$(this).is(".code")? $(this).find(".code-scroll").css({"visibility": "hidden"}): 1}); 
                        $(this).parent().css({"border-bottom": ""}); 
                        $(this).text($(this)[0].tx); 
                        $(this).removeClass("activado"); 
                    } }
    })
    $("html").click(function(e) {
        $(".wrapper").removeClass("visible")
        $("#right-menu .index-arrow").removeClass("open");
        $("#profileSettings").removeClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 


});
$('#profileSettings').click(function(i){
    i.stopPropagation()
   
}); 

    responsive()
    function openBlImage(a) {
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 

    $("body")[0].style.overflowY= "hidden"; 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('figure')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);
    !!a.closest("figure").find("figcaption").length? $(".more").text(a.closest("figure").find("figcaption")[0].innerText): 1; 


    
    var info = a.closest('figure').find(".info").html();
    $('.theater .comments .info').html(info);

    var time = a.closest('figure').find(".time").html();
    $('.theater .comments .info .time').html(time);
    
    var title = a.closest('figure').find(".title").html();
    $('.theater .comments .title').html(title);

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 


    if (a.closest('figure').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('figure').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }
    
    var pic = a.closest('figure').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var comments = a.find(".Comentarios").last().html();
    $('.theater .comments .comentarios .Comentarios').html(comments); 

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    $("#theater .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#theater .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#theater .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    var ref = "";
    $('.theater .comments .options ul a').attr('href', ref);
    
    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
    $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()
}
    function openModal(a) {
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    $("body")[0].style.overflowY= "hidden"; 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    var user = a.closest('.story').find(".username").html();
    $('.theater .comments .info .username').html(user);

    var time = a.closest('.story').find(".time").html();
    $('.theater .comments .info .time').html(time);

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet varius lectus, congue rutrum urna. Suspendisse in ultrices enim. In hac habitasse platea dictumst. Praesent aliquet, nisi nec euismod vulputate, odio velit porta erat, ut semper lacus erat ac nulla. Aenean ex libero, volutpat vel sem et, blandit dictum dui. Duis suscipit sed nisi finibus vestibulum. Quisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculiuisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculis nibh.";
    $('.theater .comments .more').html(more);

    var pic = a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
    $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()
}

function closeModal() {
    $("#theater").find(".more")[0].outerHTML= "<p class= 'more'></p>"; 
                                            
    $("body")[0].style.overflowY= "scroll"; 
    if ($('.theater .comments .options .bookmark').hasClass("true")) {
        $this.find('.options .bookmark').addClass("true");
    } else {
        $this.find('.options .bookmark').removeClass("true");
    }
    if ($('.theater .comments .options .star').hasClass("true")) {
        $this.find('.options .star').addClass("true");
    } else {
        $this.find('.options .star').removeClass("true");
    }
    $(".theater").css({
        "display": "none"
    })
    responsive(); 

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 1 !important; }; "; 
}
		$('header .knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
    
    $(".star").on("click",function(){
		 $(this).toggleClass("true")
	});
    $(".bookmark").on("click",function(){
		 $(this).toggleClass("true")
	});
    
     $(".options.first .bookmark").on("click",function(){
        $('.options.ending .bookmark').toggleClass("true")
          
	});
    $(".options.ending .bookmark").on("click",function(){
        $('.options.first .bookmark').toggleClass("true")
          
	});
    
     $(".options.first .star").on("click",function(){
        $('.options.ending .star').toggleClass("true")
          
	});
    $(".options.ending .star").on("click",function(){
        $('.options.first .star').toggleClass("true")
          
	});
    
	$("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if ($("#profileSettings").hasClass("open")) {
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
             if ($("#profileSettings").hasClass("open")) {
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );}
            else{
                 $('header .knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
            }
        } else {
           $("header").removeClass("open");
           }
           if (!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")) {
               $('header .knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
            }
        });
 $(".story .pic").on("click", function () {
        openModal($(this))
    });
    $("#article figure img").on("click", function () {
        openBlImage($(this))
    });
    $("#close").on("click",function(){
        closeModal() 
	});
    
    $("#wrapper").on("click",function(){
         closeModal() 
	});
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            closeModal()        
        }

    };

$(document).on("keypress", function(e){ 
    if (e.keyCode == 108) {
        $("#theater").find('.options .star').toggleClass("true");        
        $(".current").find('.options .star').toggleClass("true");
    }
    if (e.keyCode == 98) {
        $("#theater").find('.options .bookmark').toggleClass("true");
        $(".current").find('.options .bookmark').toggleClass("true");
        
    }
})
	$("#profileTrigger").on("click", function (e) {
        $(".wrapper").toggleClass("visible")
        $("#right-menu .index-arrow").toggleClass("open");
        $("#profileSettings").toggleClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('header .knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 




    });
	
	
});

$( window ).on("resize", function(){
    responsive()
})
$( window ).on("load", function(){
    responsive()
})
function responsive(){
        $(".poema.autoScrollTo").css({"max-height": $(window).height() - 56 - 6.84})
        $("#article").width($(window).width()- $("#sidebar").outerWidth(true) );
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#sidebar").height($(window).height() - 46);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if($("#profileSettings").hasClass("open")){
            $('header .knob').trigger(
                'configure',
                {   
                    "fgColor":"#2ecc71"
                }
            );
        }if($("#Store").hasClass("open")){

            $("header").addClass("open");
            $('header .knob').trigger(
                'configure',
                {   
                    "fgColor":"#fff"
                }
            );
        }else{
            $("header").removeClass("open");
        }   
        if(!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")){
            $('header .knob').trigger(
                'configure',
                {   
                    "fgColor":"#2ecc71"
                }
            );
        }

        if($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")){
            $('header .knob').trigger(
                'configure',
                {   
                    "fgColor":"#2ecc71"
                }
            );
        }
        for(eForensics= 0; eForensics < document.getElementsByTagName('pre').length; eForensics++){ 


    const mainNode = document.getElementsByTagName('pre')[eForensics]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                               if(mutation.target.getAttribute("data-src-status") == "loaded"){ 
                                                               //alert(mutation.target) 

                                    $(mutation.target).prev().find(".code-filler").width(function () {
                                        return $(this).parent().next("pre").find("code").width() + ($(this).parent().next("pre").outerWidth() - $(this).parent().next("pre").width()) / 2 
                                    });
                               }
                               
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                 mutationObserver.observe(mainNode, { attributes: true }); 
                
                function create(t) {
                  // create an observer instance
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      var foo = t.getAttribute("data-src-status")
                
                      if (foo == "loaded")
                        responsive(); 
                    });
                  });
                  // configuration of the observer
                  var config = {
                    attributes: true
                  };
                
                  // pass in the target node, as well as the observer options
                  observer.observe(t, config);
                }
     
     }
}
function tooltip(){ 
    $('.title').tooltip({
        items: 'a.target',
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").knob();

            ý= $(this); 

            $(".chatear").click(function() {
                u = $(this).parent().parent().find(".username").text();

                $("#chat").find("ul").find("li").each(function() {
                    $(this).find("p").text() === u ? $(this).click() : 1;
                });

                !!Antheater? (function(){closeModal(); $( ".ui-tooltip.ui-widget.ui-corner-all.ui-widget-content" ).remove(); })(): 1;
            })
            var $id = $(ui.tooltip).attr('id');

            $('div.ui-tooltip').not('#' + $id).remove();
        },
        close: function(event, ui) {
            ui.tooltip.hover(function() {
                    $(this).stop(true).fadeTo(400, 1);
                },
                function() {
                    $(this).fadeOut('400', function() {
                        $(this).remove();
                    });
                });
        }
    });

    $('.username').tooltip({
        items: 'a.target',
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").knob();

            ý= $(this); 

            $(".chatear").click(function() {
                u = $(this).parent().parent().find(".username").text();

                $("#chat").find("ul").find("li").each(function() {
                    $(this).find("p").text() === u ? $(this).click() : 1;
                });

                !!Antheater? (function(){closeModal(); $( ".ui-tooltip.ui-widget.ui-corner-all.ui-widget-content" ).remove(); })(): 1; 
            })
            var $id = $(ui.tooltip).attr('id');

            $('div.ui-tooltip').not('#' + $id).remove();
        },
        close: function(event, ui) {
            ui.tooltip.hover(function() {
                    $(this).stop(true).fadeTo(400, 1);
                },
                function() {
                    $(this).fadeOut('400', function() {
                        $(this).remove();
                    });
                });
        }
    });
}
$(function($) {
    $.widget("ui.tooltip", $.ui.tooltip, {
        options: {
            content: function() {
                return $(this).prop('title');
            }
        }
    });

    tooltip(); 

    $(".knob").knob();

    $(".Enlargetic").on("contextmenu", function(j){j.preventDefault(); ab= $(this).children().filter(".active"); $(this).children().not(".active").addClass("active"); ab.removeClass("active"); }); 
});
function tooltipComentarios(){ 
    $('.comentario').tooltip({ 
        items: 'img', 
        open: function(event, ui) 
        { 
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").knob();

            ý= $(this); 

            $(".chatear").click(function() {
                u = $(this).parent().parent().find(".username").text();

                $("#chat").find("ul").find("li").each(function() {
                    $(this).find("p").text() === u ? $(this).click() : 1;
                });

                !!Antheater? (function(){closeModal(); $( ".ui-tooltip.ui-widget.ui-corner-all.ui-widget-content" ).remove(); })(): 1; 
            })
            var $id = $(ui.tooltip).attr('id');

            $('div.ui-tooltip').not('#' + $id).remove();
        }, 
        close: function(event, ui) 
        { 
            ui.tooltip.hover(function() 
            { 
                $(this).stop(true).fadeTo(400, 1);  
            }, 
            function() 
            { 
                $(this).fadeOut('400', function() 
                { 
                    $(this).remove(); 
                }); 
            }); 
        } 
    }); 
}