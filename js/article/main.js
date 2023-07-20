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





/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
 paceOptions = {
    restartOnPushState: false
}
!function(){function o(t,e){return function(){return t.apply(e,arguments)}}var u,c,i,s,n,y,t,l,v,r,a,p,e,h,w,b,f,g,d,m,k,S,q,L,x,P,T,R,j,O,E,M,A,C,N,_,F,U,W,X,D,H,I,z,G,B,J=[].slice,K={}.hasOwnProperty,Q=function(t,e){for(var n in e)K.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},V=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function Y(){}for(g={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,f=window.cancelAnimationFrame||window.mozCancelAnimationFrame,p=function(t,e,n){if("function"==typeof t.addEventListener)return t.addEventListener(e,n,!1);var r;"function"!=typeof t["on"+e]||"object"!=typeof t["on"+e].eventListeners?(r=new s,"function"==typeof t["on"+e]&&r.on(e,t["on"+e]),t["on"+e]=function(t){return r.trigger(e,t)},t["on"+e].eventListeners=r):r=t["on"+e].eventListeners,r.on(e,n)},null==R&&(R=function(t){return setTimeout(t,50)},f=function(t){return clearTimeout(t)}),O=function(e){var n=P(),r=function(){var t=P()-n;return 33<=t?(n=P(),e(t,function(){return R(r)})):setTimeout(r,33-t)};return r()},j=function(){var t=arguments[0],e=arguments[1],n=3<=arguments.length?J.call(arguments,2):[];return"function"==typeof t[e]?t[e].apply(t,n):t[e]},d=function(){for(var t,e,n,r=arguments[0],s=2<=arguments.length?J.call(arguments,1):[],o=0,i=s.length;o<i;o++)if(e=s[o])for(t in e)K.call(e,t)&&(n=e[t],null!=r[t]&&"object"==typeof r[t]&&null!=n&&"object"==typeof n?d(r[t],n):r[t]=n);return r},h=function(t){for(var e,n,r=e=0,s=0,o=t.length;s<o;s++)n=t[s],r+=Math.abs(n),e++;return r/e},k=function(t,e){var n,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",t):void 0}}},Y.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},Y.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},Y.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},Y.prototype.trigger=function(){var t,e,n,r,s,o,i=arguments[0],a=2<=arguments.length?J.call(arguments,1):[];if(null!=(r=this.bindings)&&r[i]){for(n=0,o=[];n<this.bindings[i].length;)e=(s=this.bindings[i][n]).handler,t=s.ctx,s=s.once,e.apply(null!=t?t:this,a),s?o.push(this.bindings[i].splice(n,1)):o.push(n++);return o}},B=Y,y=window.Pace||{},window.Pace=y,d(y,B.prototype),T=y.options=d({},g,window.paceOptions,k()),X=0,H=(z=["ajax","document","eventLag","elements"]).length;X<H;X++)!0===T[C=z[X]]&&(T[C]=g[C]);function Z(){return Z.__super__.constructor.apply(this,arguments)}function $(){this.progress=0}function tt(){this.bindings={}}function et(){var e,o=this;et.__super__.constructor.apply(this,arguments),e=function(r){var s=r.open;return r.open=function(t,e,n){return A(t)&&o.trigger("request",{type:t,url:e,request:r}),s.apply(r,arguments)}},window.XMLHttpRequest=function(t){t=new W(t);return e(t),t};try{m(window.XMLHttpRequest,W)}catch(t){}if(null!=U){window.XDomainRequest=function(){var t=new U;return e(t),t};try{m(window.XDomainRequest,U)}catch(t){}}if(null!=F&&T.ajax.trackWebSockets){window.WebSocket=function(t,e){var n=null!=e?new F(t,e):new F(t);return A("socket")&&o.trigger("request",{type:"socket",url:t,protocols:e,request:n}),n};try{m(window.WebSocket,F)}catch(t){}}}function nt(){this.complete=o(this.complete,this);var t=this;this.elements=[],S().on("request",function(){return t.watch.apply(t,arguments)})}function rt(t){var e,n,r,s;for(null==t&&(t={}),this.complete=o(this.complete,this),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(s=t.selectors).length;n<r;n++)e=s[n],this.elements.push(new i(e,this.complete))}function st(t,e){this.selector=t,this.completeCallback=e,this.progress=0,this.check()}function ot(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}function it(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=T.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}B=Error,Q(Z,B),n=Z,$.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(T.target)))throw new n;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var e=""!==T.className?" "+T.className:"";this.el.innerHTML='<div class="pace-progress'+e+'">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},$.prototype.finish=function(){var t=this.getElement();return t.className=t.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},$.prototype.update=function(t){return this.progress=t,y.trigger("progress",t),this.render()},$.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){n=t}return this.el=void 0},$.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(T.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,o=(i=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),y.trigger("change",this.progress),this.lastRenderedProgress=this.progress},$.prototype.done=function(){return 100<=this.progress},c=$,tt.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},tt.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},s=tt,W=window.XMLHttpRequest,U=window.XDomainRequest,F=window.WebSocket,m=function(t,e){var n,r=[];for(n in e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(t){return function(){return e.prototype[t]}}(n),configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(t){0}return r},L=[],y.ignore=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("ignore"),e=t.apply(null,e),L.shift(),e},y.track=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("track"),e=t.apply(null,e),L.shift(),e},A=function(t){if(null==t&&(t="GET"),"track"===L[0])return"force";if(!L.length&&T.ajax){if("socket"===t&&T.ajax.trackWebSockets)return!0;if(t=t.toUpperCase(),0<=V.call(T.ajax.trackMethods,t))return!0}return!1},Q(et,s),t=et,D=null,M=function(t){for(var e,n=T.ajax.ignoreURLs,r=0,s=n.length;r<s;r++)if("string"==typeof(e=n[r])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(S=function(){return D=null==D?new t:D})().on("request",function(t){var o,i=t.type,a=t.request,e=t.url;if(!M(e))return y.running||!1===T.restartOnRequestAfter&&"force"!==A(i)?void 0:(o=arguments,"boolean"==typeof(e=T.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,n,r,s="socket"===i?a.readyState<1:0<(s=a.readyState)&&s<4;if(s){for(y.restart(),r=[],t=0,e=(n=y.sources).length;t<e;t++){if((C=n[t])instanceof u){C.watch.apply(C,o);break}r.push(void 0)}return r}},e))}),nt.prototype.watch=function(t){var e=t.type,n=t.request,t=t.url;if(!M(t))return n=new("socket"===e?r:a)(n,this.complete),this.elements.push(n)},nt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},u=nt,a=function(e,n){var t,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(p(e,"progress",function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2}),t=0,r=(o=["load","abort","timeout","error"]).length;t<r;t++)p(e,o[t],function(){return n(i),i.progress=100});else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?(n(i),i.progress=100):3===e.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}},r=function(t,e){for(var n,r=this,s=this.progress=0,o=(n=["error","open"]).length;s<o;s++)p(t,n[s],function(){return e(r),r.progress=100})},rt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},k=rt,st.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},T.elements.checkInterval)},st.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},i=st,ot.prototype.states={loading:0,interactive:50,complete:100},B=ot,Q=function(){var e,n,r,s,o,i=this;this.progress=0,o=[],s=0,r=P(),n=setInterval(function(){var t=P()-r-50;return r=P(),o.push(t),o.length>T.eventLag.sampleCount&&o.shift(),e=h(o),++s>=T.eventLag.minSamples&&e<T.eventLag.lagThreshold?(i.progress=100,clearInterval(n)):i.progress=3/(e+3)*100},50)},it.prototype.tick=function(t,e){return 100<=(e=null==e?j(this.source,"progress"):e)&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/T.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),e=1-Math.pow(this.progress/100,T.easeFactor),this.progress+=e*this.rate*t,this.progress=Math.min(this.lastProgress+T.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v=it,b=e=_=w=E=N=null,y.running=!1,q=function(){if(T.restartOnPushState)return y.restart()},null!=window.history.pushState&&(I=window.history.pushState,window.history.pushState=function(){return q(),I.apply(window.history,arguments)}),null!=window.history.replaceState&&(G=window.history.replaceState,window.history.replaceState=function(){return q(),G.apply(window.history,arguments)}),l={ajax:u,elements:k,document:B,eventLag:Q},(x=function(){var t,e,n,r,s,o,i,a;for(y.sources=N=[],e=0,r=(o=["ajax","elements","document","eventLag"]).length;e<r;e++)!1!==T[t=o[e]]&&N.push(new l[t](T[t]));for(n=0,s=(a=null!=(i=T.extraSources)?i:[]).length;n<s;n++)C=a[n],N.push(new C(T));return y.bar=w=new c,E=[],_=new v})(),y.stop=function(){return y.trigger("stop"),y.running=!1,w.destroy(),b=!0,null!=e&&("function"==typeof f&&f(e),e=null),x()},y.restart=function(){return y.trigger("restart"),y.stop(),y.start()},y.go=function(){var m;return y.running=!0,w.render(),m=P(),b=!1,e=O(function(t,e){w.progress;for(var n,r,s,o,i,a,u,c,l,p,h=a=0,f=!0,g=u=0,d=N.length;u<d;g=++u)for(C=N[g],i=null!=E[g]?E[g]:E[g]=[],s=c=0,l=(r=null!=(p=C.elements)?p:[C]).length;c<l;s=++c)o=r[s],f&=(o=null!=i[s]?i[s]:i[s]=new v(o)).done,o.done||(h++,a+=o.tick(t));return n=a/h,w.update(_.tick(t,n)),w.done()||f||b?(w.update(100),y.trigger("done"),setTimeout(function(){return w.finish(),y.running=!1,y.trigger("hide")},Math.max(T.ghostTime,Math.max(T.minTime-(P()-m),0)))):e()})},y.start=function(t){d(T,t),y.running=!0;try{w.render()}catch(t){n=t}return document.querySelector(".pace")?(y.trigger("start"),y.go()):setTimeout(y.start,50)},"function"==typeof define&&define.amd?define(function(){return y}):"object"==typeof exports?module.exports=y:T.startOnPageLoad&&y.start()}.call(this);

/*

$(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
var tiTle= $(alternating).find("h2").text()
var pp= tiTle.slice(0, tiTle.indexOf(" ("))
var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
var ww= $(this).attr("w")
console.log(obTain(ww, pp, hh))
$(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${obTain(ww, pp, hh).replaceAll("  ", "&nbsp;&nbsp;").toLowerCase()})`)
})


*/
Anti_joint= ["¡", "¿", "'"]; 
Chocolate= ["!", "?", "'"]; 
loaded= {}

accentuaTe= function(f, aL, m){
    switch(m){
        case "nd":
            var f= f.toLowerCase()
            var bW= ""
            for(var fi= f.length - 1; fi+1;fi--){
                if(((aL=="e"?"&+,.0123456789abcdefghijklmnopqrstuvwxyz ":"&+,.0123456789abcdefghijklmnñopqrstuvwxyz ").indexOf(f[f.length-1-fi])+1 && !((Chocolate.indexOf(f[f.length-fi])+1) || (Anti_joint.indexOf(f[f.length-2-fi])+1))) || (f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")){
                    bW=`${bW}${(f[f.length-1-fi]=="–"?"":f[f.length-1-fi])+((f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")?"    ":"  ")}`
                }else{
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi])bW=`${bW}${Tms(Alphabets["español"][i][iz][1]+1+(Chocolate.indexOf(f[f.length-fi])+1?1:0)+(Anti_joint.indexOf(f[f.length-2-fi])+1?1:0), `${i+(f[f.length-1-fi]==" "?"   ":"  ")}`)} `
                            }
                        }
                    }else if(aL== "e"){
                        Alphabets["english"] 
                        for(var i in Alphabets["english"]){
                            for(var iz in Alphabets["english"][i]){
                                if(Alphabets["english"][i][iz][0]==f[f.length-1-fi])bW=`${bW}${Tms(Alphabets["english"][i][iz][1]+1+(Chocolate.indexOf(f[f.length-fi])+1?1:0)+(Anti_joint.indexOf(f[f.length-2-fi])+1?1:0), `${i+(f[f.length-1-fi]==" "?"   ":"  ")}`)} `
                            }
                        }
                    }
                }
            }
            return bW.replaceAll("      ", "$_").replaceAll("   ", " ").replaceAll("  ", " ").replaceAll("$_", "   ").slice(0, -1).replaceAll("    ", "   ");
            break;
        case "na":
            var f= f.toLowerCase()
            var bW= ""
            for(var fi= f.length - 1; fi+1;fi--){
                if(((aL=="e"?"&+,.0123456789abcdefghijklmnopqrstuvwxyz ":"&+,.0123456789abcdefghijklmnñopqrstuvwxyz ").indexOf(f[f.length-1-fi])+1 && !((Anti_joint.indexOf(f[f.length-fi])+1) || (Chocolate.indexOf(f[f.length-2-fi])+1))) || (f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")){
                    bW=`${bW}${(f[f.length-1-fi]=="–"?"":f[f.length-1-fi])+((f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")?"    ":"  ")}`
                }else{
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi])bW=`${bW}${Tms(Alphabets["español"][i][iz][1]+1+((Anti_joint.indexOf(f[f.length-fi])+1?1:0)+Chocolate.indexOf(f[f.length-2-fi])+1?1:0), `${i+(f[f.length-1-fi]==" "?"   ":"  ")}`)} `
                            }
                        }
                    }else if(aL== "e"){
                        Alphabets["english"] 
                        for(var i in Alphabets["english"]){
                            for(var iz in Alphabets["english"][i]){
                                if(Alphabets["english"][i][iz][0]==f[f.length-1-fi])bW=`${bW}${Tms(Alphabets["english"][i][iz][1]+1+((Anti_joint.indexOf(f[f.length-fi])+1?1:0)+Chocolate.indexOf(f[f.length-2-fi])+1?1:0), `${i+(f[f.length-1-fi]==" "?"   ":"  ")}`)} `
                            }
                        }
                    }
                }
            }
            return bW.replaceAll("      ", "$_").replaceAll("   ", " ").replaceAll("  ", " ").replaceAll("$_", "   ").slice(0, -1).replaceAll("    ", "   ");
            break;
        case "hd":
            var f= f.toLowerCase()
            var bW= ""
            for(var fi= f.length - 1; fi+1;fi--){
                if(((aL=="e"?"+,.abcdefghijklmnopqrstuvwxyz ":"+,.abcdefghijklmnñopqrstuvwxyz ").indexOf(f[f.length-1-fi])+1 && !((Chocolate.indexOf(f[f.length+1-fi])+1) || (Anti_joint.indexOf(f[f.length-3-fi])+1) || (Chocolate.indexOf(f[f.length-fi])+1) || (Anti_joint.indexOf(f[f.length-2-fi])+1))) || (f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")){
                    bW=`${bW}${(f[f.length-1-fi]=="–"?"":f[f.length-1-fi])+((f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")?"   ":"  ")}`
                }else{
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${(f[f.length-1-fi]==" "?"   ":"  ")}`
                            }
                        }
                    }else if(aL== "e"){
                        Alphabets["english"] 
                        for(var i in Alphabets["english"]){
                            for(var iz in Alphabets["english"][i]){
                                if(Alphabets["english"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${(f[f.length-1-fi]==" "?"   ":"  ")}`
                            }
                        }
                    }
                }
            }
            return bW.replaceAll("      ", "$_").replaceAll("     ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").slice(0, -1);
            break;
        case "ha":
            var f= f.toLowerCase()
            var bW= ""
            for(var fi= f.length - 1; fi+1;fi--){
                if(((aL=="e"?"+,.abcdefghijklmnopqrstuvwxyz ":"+,.abcdefghijklmnñopqrstuvwxyz ").indexOf(f[f.length-1-fi])+1 && !((Anti_joint.indexOf(f[f.length+1-fi])+1) || (Chocolate.indexOf(f[f.length-3-fi])+1) || (Anti_joint.indexOf(f[f.length-fi])+1) || (Chocolate.indexOf(f[f.length-2-fi])+1))) || (f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")){
                    bW=`${bW}${(f[f.length-1-fi]=="–"?"":f[f.length-1-fi])+((f[f.length-1-fi]==" " || f[f.length-1-fi]=="–")?"   ":"  ")}`
                }else{
                    //alert(f[f.length-1-fi])
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${(f[f.length-1-fi]==" "?"   ":"  ")}`
                            }
                        }
                    }else if(aL== "e"){
                        Alphabets["english"] 
                        for(var i in Alphabets["english"]){
                            for(var iz in Alphabets["english"][i]){
                                if(Alphabets["english"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${(f[f.length-1-fi]==" "?"   ":"  ")}`
                            }
                        }
                    }
                }
            }
            return bW.replaceAll("      ", "$_").replaceAll("     ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").slice(0, -1);
            break;
        case "sa":
            var f= f.toLowerCase().replaceAll("-'", "$_").replaceAll("'-", "$_").replaceAll("$_", "'-'")
            var bW= ""
            Anti_joint= ["¡", "¿"]; 
            Chocolate= ["!", "?"]; 
            for(var di= f.length - 1; di+1;di--){
                if(f[f.length-1-di]=="-"||f[f.length-1-di]==" "||!(f.length-1-di)){
                    cc= 1
                    s= ""
                    for(var fi= di - (!(f.length-1-di)? 0:1); (fi+1 && f[f.length-1-fi]!=" " && f[f.length-1-fi]!="-");fi--){
                        if((aL=="e"?"&+.0123456789abcdefghijklmnopqrstuvwxyz -'":"&+.0123456789abcdefghijklmnñopqrstuvwxyz -'").indexOf(f[f.length-1-fi])+1 && !(Anti_joint.indexOf(f[f.length-fi])+1 || Chocolate.indexOf(f[f.length-2-fi])+1)){
                            cc;
                            s= `${s}${f[f.length-1-fi]}`
                        }else{
                            if(aL== "s"){
                                Alphabets["español"] 
                                for(var i in Alphabets["español"]){
                                    for(var iz in Alphabets["español"][i]){
                                        if(Alphabets["español"][i][iz][0]==f[f.length-1-fi]){cc+=((Alphabets["español"][i][iz][1]+(Anti_joint.indexOf(f[f.length-fi])+1?1:0)+(Chocolate.indexOf(f[f.length-2-fi])+1?1:0)));s= `${s}${i}`}
                                    }
                                }
                            }else if(aL== "e"){
                                Alphabets["english"] 
                                for(var i in Alphabets["english"]){
                                    for(var iz in Alphabets["english"][i]){
                                        if(Alphabets["english"][i][iz][0]==f[f.length-1-fi]){cc+=((Alphabets["english"][i][iz][1]+(Anti_joint.indexOf(f[f.length-fi])+1?1:0)+(Chocolate.indexOf(f[f.length-2-fi])+1?1:0)));s= `${s}${i}`}
                                    }
                                }
                            }
                        }
                    }
                    //alert(cc+(s.indexOf("'")+1?1:0))
                    bW= `${bW}${f[f.length-4-fi]==","?", ":"" }${f[f.length-4-fi]=="."?". ":"" }${f[f.length-4-fi]==";"?"; ":"" }${Tms(cc+(s.indexOf("'")+1?1:0), `${s}${f[f.length-1-fi]=="-"?" ":"  " }`)}  `.replaceAll("'", "")
                }
            }
            Anti_joint= ["¡", "¿", "'"]; 
            Chocolate= ["!", "?", "'"];
            return bW.slice(0, -2).replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "  ").slice(0, -1).replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "  ")
            break;
        case "sd":
            var f= f.toLowerCase().replaceAll("-'", "$_").replaceAll("'-", "$_").replaceAll("$_", "'-'")
            var bW= ""
            for(var di= f.length - 1; di+1;di--){
                if(f[f.length-1-di]=="-"||f[f.length-1-di]==" "||!(f.length-1-di)){
                    cc= 1
                    s= ""
                    for(var fi= di - (!(f.length-1-di)? 0:1); (fi+1 && f[f.length-1-fi]!=" " && f[f.length-1-fi]!="-");fi--){
                        if((aL=="e"?"&+,.0123456789abcdefghijklmnopqrstuvwxyz -":"&+,.0123456789abcdefghijklmnñopqrstuvwxyz -").indexOf(f[f.length-1-fi])+1 && !((Chocolate.indexOf(f[f.length-fi])+1) || (Anti_joint.indexOf(f[f.length-2-fi])+1))){
                            cc;
                            s= `${s}${f[f.length-1-fi]}`
                        }else{
                            if(aL== "s"){
                                Alphabets["español"] 
                                for(var i in Alphabets["español"]){
                                    for(var iz in Alphabets["español"][i]){
                                        if(Alphabets["español"][i][iz][0]==f[f.length-1-fi]){cc+=((Alphabets["español"][i][iz][1]+(Chocolate.indexOf(f[f.length-fi])+1?1:0)+(Anti_joint.indexOf(f[f.length-2-fi])+1?1:0)));s= `${s}${i}`}
                                    }
                                }
                            }else if(aL== "e"){
                                Alphabets["english"] 
                                for(var i in Alphabets["english"]){
                                    for(var iz in Alphabets["english"][i]){
                                        if(Alphabets["english"][i][iz][0]==f[f.length-1-fi]){cc+=((Alphabets["english"][i][iz][1]+(Chocolate.indexOf(f[f.length-fi])+1?1:0)+(Anti_joint.indexOf(f[f.length-2-fi])+1?1:0)));s= `${s}${i}`}
                                    }
                                }
                            }
                        }
                    }
                    //alert(cc)
                    bW= `${bW}${`${cc-1?"<b>":""}${s}${cc-1?"</b>":""}${f[f.length-1-fi]=="-"?" ":"  " }`}  `
                }
            }
            return bW.slice(0, -2).replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "  ").slice(0, -1).replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "  ")
            break;
        case "pd":
            var f= f.toLowerCase()
            var bW= ""
            for(var fi= f.length - 1; fi+1;fi--){
                if(((aL=="e"?"&+,.0123456789abcdefghijklmnopqrstuvwxyz '":"&+,.0123456789abcdefghijklmnñopqrstuvwxyz '").indexOf(f[f.length-1-fi])+1 && !(Chocolate.indexOf(f[f.length-fi])+1 || Anti_joint.indexOf(f[f.length-2-fi])+1)) || f[f.length-1-fi]== " "){
                    bW=`${bW}${f[f.length-1-fi]}${f[f.length-1-fi]==" "?"       ":"  " }`
                }else{
                    //alert(f[f.length-1-fi])
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${f[f.length-1-fi]==" "?"   ":"  " }`
                            }
                        }
                    }else if(aL== "e"){
                        Alphabets["english"] 
                        for(var i in Alphabets["english"]){
                            for(var iz in Alphabets["english"][i]){
                                if(Alphabets["english"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${f[f.length-1-fi]==" "?"   ":"  " }`
                            }
                        }
                    }
                }
            }
            return bW.replaceAll("  '  ", " ").replaceAll("          ", "$_").replaceAll("         ", "$_").replaceAll("  ", " ").replaceAll(" ", "").replaceAll("$_", "   ");
            break;
        case "pa":
            var f= f.toLowerCase()
            var bW= ""
            for(var fi= f.length - 1; fi+1;fi--){
                if(((aL=="e"?"&+,.0123456789abcdefghijklmnopqrstuvwxyz '":"&+,.0123456789abcdefghijklmnñopqrstuvwxyz '").indexOf(f[f.length-1-fi])+1 && !(Anti_joint.indexOf(f[f.length-fi])+1 || Chocolate.indexOf(f[f.length-2-fi])+1)) || f[f.length-1-fi]== " "){
                    bW=`${bW}${f[f.length-1-fi]}${f[f.length-1-fi]==" "?"       ":"  " }`
                }else{
                    //alert(f[f.length-1-fi])
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${f[f.length-1-fi]==" "?"   ":"  " }`
                            }
                        }
                    }else if(aL== "e"){
                        Alphabets["english"] 
                        for(var i in Alphabets["english"]){
                            for(var iz in Alphabets["english"][i]){
                                if(Alphabets["english"][i][iz][0]==f[f.length-1-fi])bW=`${bW}<b>${i}</b>${f[f.length-1-fi]==" "?"   ":"  " }`
                            }
                        }
                    }
                }
            }
            return bW.replaceAll("  '  ", " ").replaceAll("          ", "$_").replaceAll("         ", "$_").replaceAll("  ", " ").replaceAll(" ", "").replaceAll("$_", "   ");
            break;
    }
}

/*
pa

Anti_joint= ["¡", "¿", "'"]; 
Chocolate= ["!", "?", "'"]; 

accentuaTe= function(f, aL){
    var f= f.toLowerCase()
    var bW= ""
    for(var di= f.length - 1; di+1;di--){
        if(f[f.length-1-di]=="-"||f[f.length-1-di]==" "||!(f.length-1-di)){
            cc= 1
            s= ""
            for(var fi= di - (!(f.length-1-di)? 0:1); (fi+1 && f[f.length-1-fi]!=" " && f[f.length-1-fi]!="-");fi--){
                if(["&+,.0123456789abcdefghijklmnopqrstuvwxyz -"].indexOf(f[f.length-1-fi])+1){
                    cc;
                    s= `${s}${f[f.length-1-fi]}`
                }else{
                    if(aL== "s"){
                        Alphabets["español"] 
                        for(var i in Alphabets["español"]){
                            for(var iz in Alphabets["español"][i]){
                                if(Alphabets["español"][i][iz][0]==f[f.length-1-fi]){cc+=((Alphabets["español"][i][iz][1]+(Chocolate.indexOf(f[f.length-fi])+1?1:0)+(Anti_joint.indexOf(f[f.length-2-fi])+1?1:0)));s= `${s}${i}`}
                            }
                        }
                    }
                }
            }
            alert(cc)
            bW= `${bW}${Tms(cc, `${s}${f[f.length-1-fi]=="-"?" ":"  " }`)}  `
        }
    }
return bW.slice(0, -2).replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "  ")
}


// i.e.: 
//accentuaTe("a-ïc-raG og-ell-aG od-raud-E siuL", "s").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "  ").slice(0, -1)
*/

Tms= function(t, qy){var rW="";for(t;t;t--){
    rW= `${rW}${qy}`
}
return rW
}

de= function(d){
    if(d[0]=='e'){
        return d.slice(1)
    }else{
        return ` ${d}`
    }
}


Alphabets= { 
    "español": { 
        'a': [1, 
                ["a", 0], 
                ["á", 1], 
                ["à", 1], 
                ["ă", 2], 
                ["ắ", 3], 
                ["ằ", 3], 
                ["ẵ", 6], 
                ["ẳ", 5], 
                ["â", 2], 
                ["ấ", 3], 
                ["ầ", 3], 
                ["ẫ", 6], 
                ["ẩ", 5], 
                ["ǎ", 2], 
                ["å", 4], 
                ["ǻ", 5], 
                ["ä", 2], 
                ["ǟ", 3], 
                ["ã", 4], 
                ["ȧ", 1], 
                ["ǡ", 2], 
                ["ą", 2], 
                ["́ą́", 4], 
                ["̃ą̃", 6], 
                ["ā", 1], 
                ["̀ā̀", 3], 
                ["ả", 3], 
                ["̋ȁ", 4], 
                ["̋a̋", 2], 
                ["ȃ", 2], 
                ["ạ", 1], 
                ["ặ", 3], 
                ["ậ", 3], 
                ["ḁ", 4], 
                ["ⱥ", 1], 
                ["ᶏ", 2], 
                ["ẚ", 2] 
            ], 
        'b': [1, 
                ["b", 0], 
                ["ḃ", 1], 
                ["ḅ", 1], 
                ["ḇ", 1], 
                ["ƀ", 1], 
                ["ɓ", 2], 
                ["ꞗ", 3], 
                ["ᵬ", 4], 
                ["ᶀ", 2] 
            ] 
        , 
        'c': [1, 
                ["c", 0], 
                ["ć", 1], 
                ["ĉ", 2], 
                ["č", 2], 
                ["ċ", 1], 
                ["ç", 3], 
                ["ḉ", 2], 
                ["ȼ", 1], 
                ["ꞓ", 1], 
                ["ꞔ", 2], 
                ["ƈ", 2], 
                ["ɕ", 2] 
            ] 
        , 
        'd': [1, 
                ["d", 0], 
                ["ď", 1], 
                ["ḋ", 1], 
                ["ḑ", 1], 
                ["̦d̦", 1], 
                ["ḍ", 1], 
                ["ḓ", 2], 
                ["ḏ", 1], 
                ["đ", 1], 
                ["ð", 1], 
                ["ɖ", 2], 
                ["ɗ", 1], 
                ["ᵭ", 4], 
                ["ᶁ", 2], 
                ["ᶑ", 3], 
                ["ȡ", 4] 
            ] 
        , 
        'e': [1, 
                ["e", 0], 
                ["é", 1], 
                ["è", 1], 
                ["ĕ", 2], 
                ["ê", 2], 
                ["ế", 3], 
                ["ề", 3], 
                ["ễ", 6], 
                ["ể", 5], 
                ["̄ê̄", 4], 
                ["̌ê̌", 6], 
                ["ě", 2], 
                ["ë", 2], 
                ["ẽ", 4], 
                ["ė", 1], 
                ["́ė́", 3], 
                ["̃ė̃", 9], 
                ["ȩ", 1], 
                ["ḝ", 3], 
                ["ę", 2], 
                ["́ę́", 4], 
                ["̃ę̃", 6], 
                ["ē", 1], 
                ["ḗ", 2], 
                ["ḕ", 2], 
                ["ẻ", 3], 
                ["ȅ", 2], 
                ["e̋", 2], 
                ["ȇ", 2], 
                ["ẹ", 1], 
                ["ệ", 3], 
                ["ḙ", 2], 
                ["ḛ", 4], 
                ["ɇ", 1], 
                ["̩e̩", 1], 
                ["̩è̩", 2], 
                ["̩é̩", 2], 
                ["ᶒ", 2], 
                ["ⱸ", 2], 
                ["ꬴ", 2], 
                ["ꬳ", 1] 
            ] 
        , 
        'f': [2, 
                ["f", 0], 
                ["ḟ", 1], 
                ["ƒ", 1], 
                ["ꞙ", 2], 
                ["ᵮ", 5], 
                ["ᶂ", 2] 
            ] 
        , 
        'g': [1, 
                ["g", 0], 
                ["ǵ", 1], 
                ["ğ", 2], 
                ["ĝ", 2], 
                ["ǧ", 2], 
                ["ġ", 1], 
                ["̃g̃", 4], 
                ["ģ", 1], 
                ["ḡ", 1], 
                ["ǥ", 1], 
                ["ꞡ", 1], 
                ["ɠ", 1], 
                ["ᶃ", 3], 
                ["ꬶ", 2] 
            ] 
        , 
        'h': [2, 
                ["h", 0], 
                ["ĥ", 2], 
                ["ȟ", 2], 
                ["ḧ", 2], 
                ["ḣ", 2], 
                ["ḩ", 1], 
                ["ḥ", 1], 
                ["ḫ", 2], 
                ["̱ẖ", 1], 
                ["ħ", 1], 
                ["ⱨ", 1], 
                ["ɦ", 1], 
                ["ꞕ", 1] 
            ] 
        , 
        'i': [1, 
                ["i", 0], 
                ["í", 1], 
                ["i̇́", 2], 
                ["ì", 1], 
                ["i̇̀", 2], 
                ["ĭ", 2], 
                ["î", 2], 
                ["ǐ", 2], 
                ["ï", 2], 
                ["ḯ", 3], 
                ["ĩ", 4], 
                ["i̇̃", 5], 
                ["į", 2], 
                ["į́", 3], 
                ["į̇́", 4], 
                ["į̃", 6], 
                ["į̇̃", 7], 
                ["ī", 1], 
                ["ī̀", 2], 
                ["ỉ", 3], 
                ["ȉ", 2], 
                ["i̋", 2], 
                ["ȋ", 2], 
                ["ị", 2], 
                ["ḭ", 5], 
                ["ɨ", 2], 
                ["ᶖ", 3], 
                ["i̇", 1], 
                ["ı", 0] 
            ] 
        , 
        'j': [2, 
                ["j", 0], 
                ["ĵ", 2], 
                ["ɉ", 1], 
                ["ǰ", 2], 
                ["ʝ", 2], 
                ["j̃", 4], 
                ["j̇̃", 5], 
                ["ɟ", 1], 
                ["ʄ", 2] 
            ] 
        , 
        'k': [1, 
                ["k", 0], 
                ["ḱ", 1], 
                ["ǩ", 2], 
                ["ķ", 1], 
                ["ḳ", 1], 
                ["ḵ", 1], 
                ["ƙ", 2], 
                ["ⱪ", 1], 
                ["ᶄ", 2], 
                ["ꝁ", 1], 
                ["ꝃ", 1], 
                ["ꝅ", 2], 
                ["ꞣ", 1] 
            ] 
        , 
        'l': [2, 
                ["l", 0], 
                ["ĺ", 1], 
                ["ľ", 1], 
                ["ļ", 1], 
                ["ḷ", 1], 
                ["ḹ", 2], 
                ["̃l̃", 8], 
                ["ḽ", 2], 
                ["ḻ", 1], 
                ["ł", 1], 
                ["ŀ", 1], 
                ["ƚ", 1], 
                ["ꝉ", 1], 
                ["ⱡ", 2], 
                ["ɫ", 4], 
                ["ɬ", 4], 
                ["ꞎ", 4], 
                ["ꬷ", 6], 
                ["ꬸ", 8], 
                ["ꬹ", 4], 
                ["ᶅ", 2], 
                ["ɭ", 2], 
                ["ȴ", 5] 
            ] 
        , 
        'm': [2, 
                ["m", 0], 
                ["ḿ", 1], 
                ["̋m̋", 2], 
                ["ṁ", 1], 
                ["ṃ", 1], 
                ["̃m̃", 4], 
                ["ᵯ", 4], 
                ["ᶆ", 2], 
                ["ɱ", 2], 
                ["ꬺ", 4] 
            ] 
        , 
        'n': [2, 
                ["n", 0], 
                ["ń", 1], 
                ["ǹ", 1], 
                ["ň", 2], 
                ["ṅ", 1], 
                ["ņ", 1], 
                ["ṇ", 1], 
                ["ṋ", 2], 
                ["ṉ", 1], 
                ["̈n̈", 2], 
                ["ɲ", 1], 
                ["ŋ", 1], 
                ["ƞ", 1], 
                ["ꞑ", 1], 
                ["ꞥ", 1], 
                ["ᵰ", 4], 
                ["ᶇ", 2], 
                ["ɳ", 1], 
                ["ȵ", 4], 
                ["ꬻ", 4], 
                ["ꬼ", 2] 
            ] 
        , 
        'ñ': [2, 
                ['ñ', 0] 
            ] 
        , 
        'o': [1, 
                ["o", 0], 
                ["ó", 1], 
                ["ò", 1], 
                ["ŏ", 2], 
                ["ô", 2], 
                ["ố", 3], 
                ["ồ", 3], 
                ["ỗ", 6], 
                ["ổ", 5], 
                ["ǒ", 2], 
                ["ö", 2], 
                ["ȫ", 3], 
                ["ő", 2], 
                ["õ", 4], 
                ["ṍ", 5], 
                ["ṏ", 6], 
                ["ȭ", 5], 
                ["ȯ", 1], 
                ["͘o͘", 2], 
                ["ȱ", 2], 
                ["ø", 1], 
                ["ǿ", 2], 
                ["ǫ", 2], 
                ["ǭ", 3], 
                ["ō", 1], 
                ["ṓ", 2], 
                ["ṑ", 2], 
                ["ỏ", 3], 
                ["ȍ", 2], 
                ["ȏ", 2], 
                ["ơ", 1], 
                ["ớ", 2], 
                ["ờ", 2], 
                ["ỡ", 5], 
                ["ở", 4], 
                ["ợ", 2], 
                ["ọ", 1], 
                ["ộ", 3], 
                ["̩o̩", 1], 
                ["̩ò̩", 2], 
                ["̩ó̩", 2], 
                ["ɵ", 1], 
                ["ꝋ", 1], 
                ["ꝍ", 3], 
                ["ⱺ", 4] 
            ] 
        , 
        'p': [1, 
                ["p", 0], 
                ["ṕ", 1], 
                ["ṗ", 1], 
                ["ᵽ", 1], 
                ["ꝑ", 1], 
                ["ƥ", 1], 
                ["ꝓ", 1], 
                ["ꝕ", 3], 
                ["̃p̃", 4], 
                ["ᵱ", 4], 
                ["ᶈ", 2] 
            ] 
        , 
        'q': [1, 
                ["q", 0], 
                ["ꝗ", 1], 
                ["ꝙ", 2], 
                ["ɋ", 1], 
                ["ʠ", 1] 
            ] 
        , 
        'r': [2, 
                ["r", 0], 
                ["ŕ", 1], 
                ["ř", 2], 
                ["ṙ", 1], 
                ["ŗ", 1], 
                ["ȑ", 2], 
                ["ȓ", 2], 
                ["ṛ", 1], 
                ["ṝ", 2], 
                ["ṟ", 1], 
                ["̃r̃", 4], 
                ["ɍ", 1], 
                ["ꞧ", 1], 
                ["ɽ", 2], 
                ["ᵲ", 5], 
                ["ᶉ", 2], 
                ["ꭉ", 4] 
            ] 
        , 
        's': [2, 
                ["s", 0], 
                ["ś", 1], 
                ["ṥ", 2], 
                ["ŝ", 2], 
                ["š", 2], 
                ["ṧ", 3], 
                ["̈s̈", 2], 
                ["ṡ", 1], 
                ["ş", 3], 
                ["ṣ", 1], 
                ["ṩ", 2], 
                ["ș", 1], 
                ["̩s̩", 1], 
                ["ꞩ", 1], 
                ["ȿ", 2], 
                ["ʂ", 2], 
                ["ᶊ", 2], 
                ["ᵴ", 4] 
            ] 
        , 
        't': [1, 
                ["t", 0], 
                ["ť", 1], 
                ["ṫ", 1], 
                ["ţ", 1], 
                ["ṭ", 1], 
                ["ț", 1], 
                ["ṱ", 2], 
                ["ṯ", 1], 
                ["ŧ", 1], 
                ["ⱦ", 1], 
                ["ƭ", 3], 
                ["ʈ", 0], 
                ["̈ẗ", 4], 
                ["ᵵ", 4], 
                ["ƫ", 2], 
                ["ȶ", 4] 
            ] 
        , 
        'u': [1, 
                ["u", 0], 
                ["ú", 1], 
                ["ù", 1], 
                ["ŭ", 2], 
                ["û", 2], 
                ["ǔ", 2], 
                ["ů", 4], 
                ["ü", 2], 
                ["ǘ", 3], 
                ["ǜ", 3], 
                ["ǚ", 4], 
                ["ǖ", 3], 
                ["ű", 2], 
                ["ũ", 4], 
                ["ṹ", 5], 
                ["ų", 2], 
                ["́ų́", 4], 
                ["̃ų̃", 6], 
                ["ū", 1], 
                ["ṻ", 3], 
                ["̀ū̀", 3], 
                ["́ū́", 3], 
                ["̃ū̃", 9], 
                ["ủ", 3], 
                ["ȕ", 2], 
                ["ȗ", 2], 
                ["ư", 1], 
                ["ứ", 2], 
                ["ừ", 2], 
                ["ữ", 5], 
                ["ử", 4], 
                ["ự", 2], 
                ["ụ", 1], 
                ["ṳ", 2], 
                ["ṷ", 2], 
                ["ṵ", 4], 
                ["ʉ", 1], 
                ["ᶙ", 2], 
                ["ꭒ", 1] 
            ] 
        , 
        'v': [2, 
                ["v", 0], 
                ["ṽ", 4], 
                ["ṿ", 1], 
                ["ꝟ", 1], 
                ["ʋ", 1], 
                ["ỽ", 0], 
                ["ᶌ", 2], 
                ["ⱱ", 1], 
                ["ⱴ", 3] 
            ] 
        , 
        'w': [3, 
                ["w", 0], 
                ["ẃ", 1], 
                ["ẁ", 1], 
                ["ŵ", 2], 
                ["ẅ", 2], 
                ["ẇ", 1], 
                ["ẉ", 1], 
                ["̊ẘ", 4], 
                ["ⱳ", 1] 
            ] 
        , 
        'x': [2, 
                ["x", 0], 
                ["́x́", 1], 
                ["̂x̂", 2], 
                ["ẍ", 2], 
                ["̌x̌", 2], 
                ["ẋ", 1], 
                ["̧x̧", 1], //
                ["̱x̱", 1], 
                ["̣x̣", 1], 
                ["ᶍ", 2] 
            ] 
        , 
        'y': [3, 
                ["y", 0], 
                ["ý", 1], 
                ["ỳ", 1], 
                ["ŷ", 2], 
                ["̊ẙ", 4], 
                ["ÿ", 2], 
                ["ỹ", 4], 
                ["ẏ", 1], 
                ["ȳ", 1], 
                ["ỷ", 3], 
                ["ỵ", 1], 
                ["ɏ", 1], 
                ["ƴ", 1], 
                ["ỿ", 4] 
            ] 
        , 
        'z': [2, 
                ["z", 0], 
                ["ź", 1], 
                ["ẑ", 2], 
                ["ž", 2], 
                ["ż", 1], 
                ["ẓ", 1], 
                ["ẕ", 1], 
                ["ƶ", 1], 
                ["ȥ", 2], 
                ["ⱬ", 1], 
                ["ɀ", 2], 
                ["ᶎ", 2], 
                ["ᵶ", 4], 
                ["ʐ", 2], 
                ["ʑ", 3] 
            ] 
        /* 
        "español": [ 
            ['a', [2, 
                ['á', 1]  
            ]], 
        ] 
        */ 
    },/*, "english": [ 

    ] */  "english": { 
        'a': [2, 
                ["a", 0], 
                ["á", 1], 
                ["à", 1], 
                ["ă", 2], 
                ["ắ", 3], 
                ["ằ", 3], 
                ["ẵ", 6], 
                ["ẳ", 5], 
                ["â", 2], 
                ["ấ", 3], 
                ["ầ", 3], 
                ["ẫ", 6], 
                ["ẩ", 5], 
                ["ǎ", 2], 
                ["å", 4], 
                ["ǻ", 5], 
                ["ä", 2], 
                ["ǟ", 3], 
                ["ã", 4], 
                ["ȧ", 1], 
                ["ǡ", 2], 
                ["ą", 2], 
                ["́ą́", 4], 
                ["̃ą̃", 6], 
                ["ā", 1], 
                ["̀ā̀", 3], 
                ["ả", 3], 
                ["̋ȁ", 4], 
                ["̋a̋", 2], 
                ["ȃ", 2], 
                ["ạ", 1], 
                ["ặ", 3], 
                ["ậ", 3], 
                ["ḁ", 4], 
                ["ⱥ", 1], 
                ["ᶏ", 2], 
                ["ẚ", 2] 
            ], 
        'b': [1, 
                ["b", 0], 
                ["ḃ", 1], 
                ["ḅ", 1], 
                ["ḇ", 1], 
                ["ƀ", 1], 
                ["ɓ", 2], 
                ["ꞗ", 3], 
                ["ᵬ", 4], 
                ["ᶀ", 2] 
            ] 
        , 
        'c': [1, 
                ["c", 0], 
                ["ć", 1], 
                ["ĉ", 2], 
                ["č", 2], 
                ["ċ", 1], 
                ["ç", 3], 
                ["ḉ", 2], 
                ["ȼ", 1], 
                ["ꞓ", 1], 
                ["ꞔ", 2], 
                ["ƈ", 2], 
                ["ɕ", 2] 
            ] 
        , 
        'd': [1, 
                ["d", 0], 
                ["ď", 1], 
                ["ḋ", 1], 
                ["ḑ", 1], 
                ["̦d̦", 1], 
                ["ḍ", 1], 
                ["ḓ", 2], 
                ["ḏ", 1], 
                ["đ", 1], 
                ["ð", 1], 
                ["ɖ", 2], 
                ["ɗ", 1], 
                ["ᵭ", 4], 
                ["ᶁ", 2], 
                ["ᶑ", 3], 
                ["ȡ", 4] 
            ] 
        , 
        'e': [1, 
                ["e", 0], 
                ["é", 1], 
                ["è", 1], 
                ["ĕ", 2], 
                ["ê", 2], 
                ["ế", 3], 
                ["ề", 3], 
                ["ễ", 6], 
                ["ể", 5], 
                ["̄ê̄", 4], 
                ["̌ê̌", 6], 
                ["ě", 2], 
                ["ë", 2], 
                ["ẽ", 4], 
                ["ė", 1], 
                ["́ė́", 3], 
                ["̃ė̃", 9], 
                ["ȩ", 1], 
                ["ḝ", 3], 
                ["ę", 2], 
                ["́ę́", 4], 
                ["̃ę̃", 6], 
                ["ē", 1], 
                ["ḗ", 2], 
                ["ḕ", 2], 
                ["ẻ", 3], 
                ["ȅ", 2], 
                ["e̋", 2], 
                ["ȇ", 2], 
                ["ẹ", 1], 
                ["ệ", 3], 
                ["ḙ", 2], 
                ["ḛ", 4], 
                ["ɇ", 1], 
                ["̩e̩", 1], 
                ["̩è̩", 2], 
                ["̩é̩", 2], 
                ["ᶒ", 2], 
                ["ⱸ", 2], 
                ["ꬴ", 2], 
                ["ꬳ", 1] 
            ] 
        , 
        'f': [1, 
                ["f", 0], 
                ["ḟ", 1], 
                ["ƒ", 1], 
                ["ꞙ", 2], 
                ["ᵮ", 5], 
                ["ᶂ", 2] 
            ] 
        , 
        'g': [1, 
                ["g", 0], 
                ["ǵ", 1], 
                ["ğ", 2], 
                ["ĝ", 2], 
                ["ǧ", 2], 
                ["ġ", 1], 
                ["̃g̃", 4], 
                ["ģ", 1], 
                ["ḡ", 1], 
                ["ǥ", 1], 
                ["ꞡ", 1], 
                ["ɠ", 1], 
                ["ᶃ", 3], 
                ["ꬶ", 2] 
            ] 
        , 
        'h': [2, 
                ["h", 0], 
                ["ĥ", 2], 
                ["ȟ", 2], 
                ["ḧ", 2], 
                ["ḣ", 2], 
                ["ḩ", 1], 
                ["ḥ", 1], 
                ["ḫ", 2], 
                ["̱ẖ", 1], 
                ["ħ", 1], 
                ["ⱨ", 1], 
                ["ɦ", 1], 
                ["ꞕ", 1] 
            ] 
        , 
        'i': [2, 
                ["i", 0], 
                ["í", 1], 
                ["i̇́", 2], 
                ["ì", 1], 
                ["i̇̀", 2], 
                ["ĭ", 2], 
                ["î", 2], 
                ["ǐ", 2], 
                ["ï", 2], 
                ["ḯ", 3], 
                ["ĩ", 4], 
                ["i̇̃", 5], 
                ["į", 2], 
                ["į́", 3], 
                ["į̇́", 4], 
                ["į̃", 6], 
                ["į̇̃", 7], 
                ["ī", 1], 
                ["ī̀", 2], 
                ["ỉ", 3], 
                ["ȉ", 2], 
                ["i̋", 2], 
                ["ȋ", 2], 
                ["ị", 2], 
                ["ḭ", 5], 
                ["ɨ", 2], 
                ["ᶖ", 3], 
                ["i̇", 1], 
                ["ı", 0] 
            ] 
        , 
        'j': [2, 
                ["j", 0], 
                ["ĵ", 2], 
                ["ɉ", 1], 
                ["ǰ", 2], 
                ["ʝ", 2], 
                ["j̃", 4], 
                ["j̇̃", 5], 
                ["ɟ", 1], 
                ["ʄ", 2] 
            ] 
        , 
        'k': [2, 
                ["k", 0], 
                ["ḱ", 1], 
                ["ǩ", 2], 
                ["ķ", 1], 
                ["ḳ", 1], 
                ["ḵ", 1], 
                ["ƙ", 2], 
                ["ⱪ", 1], 
                ["ᶄ", 2], 
                ["ꝁ", 1], 
                ["ꝃ", 1], 
                ["ꝅ", 2], 
                ["ꞣ", 1] 
            ] 
        , 
        'l': [1, 
                ["l", 0], 
                ["ĺ", 1], 
                ["ľ", 1], 
                ["ļ", 1], 
                ["ḷ", 1], 
                ["ḹ", 2], 
                ["̃l̃", 8], 
                ["ḽ", 2], 
                ["ḻ", 1], 
                ["ł", 1], 
                ["ŀ", 1], 
                ["ƚ", 1], 
                ["ꝉ", 1], 
                ["ⱡ", 2], 
                ["ɫ", 4], 
                ["ɬ", 4], 
                ["ꞎ", 4], 
                ["ꬷ", 6], 
                ["ꬸ", 8], 
                ["ꬹ", 4], 
                ["ᶅ", 2], 
                ["ɭ", 2], 
                ["ȴ", 5] 
            ] 
        , 
        'm': [1, 
                ["m", 0], 
                ["ḿ", 1], 
                ["̋m̋", 2], 
                ["ṁ", 1], 
                ["ṃ", 1], 
                ["̃m̃", 4], 
                ["ᵯ", 4], 
                ["ᶆ", 2], 
                ["ɱ", 2], 
                ["ꬺ", 4] 
            ] 
        , 
        'n': [1, 
                ["n", 0], 
                ["ń", 1], 
                ["ǹ", 1], 
                ["ň", 2], 
                ["ñ", 4], 
                ["ṅ", 1], 
                ["ņ", 1], 
                ["ṇ", 1], 
                ["ṋ", 2], 
                ["ṉ", 1], 
                ["̈n̈", 2], 
                ["ɲ", 1], 
                ["ŋ", 1], 
                ["ƞ", 1], 
                ["ꞑ", 1], 
                ["ꞥ", 1], 
                ["ᵰ", 4], 
                ["ᶇ", 2], 
                ["ɳ", 1], 
                ["ȵ", 4], 
                ["ꬻ", 4], 
                ["ꬼ", 2] 
            ] 
        , 
        'o': [2, 
                ["o", 0], 
                ["ó", 1], 
                ["ò", 1], 
                ["ŏ", 2], 
                ["ô", 2], 
                ["ố", 3], 
                ["ồ", 3], 
                ["ỗ", 6], 
                ["ổ", 5], 
                ["ǒ", 2], 
                ["ö", 2], 
                ["ȫ", 3], 
                ["ő", 2], 
                ["õ", 4], 
                ["ṍ", 5], 
                ["ṏ", 6], 
                ["ȭ", 5], 
                ["ȯ", 1], 
                ["͘o͘", 2], 
                ["ȱ", 2], 
                ["ø", 1], 
                ["ǿ", 2], 
                ["ǫ", 2], 
                ["ǭ", 3], 
                ["ō", 1], 
                ["ṓ", 2], 
                ["ṑ", 2], 
                ["ỏ", 3], 
                ["ȍ", 2], 
                ["ȏ", 2], 
                ["ơ", 1], 
                ["ớ", 2], 
                ["ờ", 2], 
                ["ỡ", 5], 
                ["ở", 4], 
                ["ợ", 2], 
                ["ọ", 1], 
                ["ộ", 3], 
                ["̩o̩", 1], 
                ["̩ò̩", 2], 
                ["̩ó̩", 2], 
                ["ɵ", 1], 
                ["ꝋ", 1], 
                ["ꝍ", 3], 
                ["ⱺ", 4] 
            ] 
        , 
        'p': [1, 
                ["p", 0], 
                ["ṕ", 1], 
                ["ṗ", 1], 
                ["ᵽ", 1], 
                ["ꝑ", 1], 
                ["ƥ", 1], 
                ["ꝓ", 1], 
                ["ꝕ", 3], 
                ["̃p̃", 4], 
                ["ᵱ", 4], 
                ["ᶈ", 2] 
            ] 
        , 
        'q': [3, 
                ["q", 0], 
                ["ꝗ", 1], 
                ["ꝙ", 2], 
                ["ɋ", 1], 
                ["ʠ", 1] 
            ] 
        , 
        'r': [1, 
                ["r", 0], 
                ["ŕ", 1], 
                ["ř", 2], 
                ["ṙ", 1], 
                ["ŗ", 1], 
                ["ȑ", 2], 
                ["ȓ", 2], 
                ["ṛ", 1], 
                ["ṝ", 2], 
                ["ṟ", 1], 
                ["̃r̃", 4], 
                ["ɍ", 1], 
                ["ꞧ", 1], 
                ["ɽ", 2], 
                ["ᵲ", 5], 
                ["ᶉ", 2], 
                ["ꭉ", 4] 
            ] 
        , 
        's': [1, 
                ["s", 0], 
                ["ś", 1], 
                ["ṥ", 2], 
                ["ŝ", 2], 
                ["š", 2], 
                ["ṧ", 3], 
                ["̈s̈", 2], 
                ["ṡ", 1], 
                ["ş", 3], 
                ["ṣ", 1], 
                ["ṩ", 2], 
                ["ș", 1], 
                ["̩s̩", 1], 
                ["ꞩ", 1], 
                ["ȿ", 2], 
                ["ʂ", 2], 
                ["ᶊ", 2], 
                ["ᵴ", 4] 
            ] 
        , 
        't': [1, 
                ["t", 0], 
                ["ť", 1], 
                ["ṫ", 1], 
                ["ţ", 1], 
                ["ṭ", 1], 
                ["ț", 1], 
                ["ṱ", 2], 
                ["ṯ", 1], 
                ["ŧ", 1], 
                ["ⱦ", 1], 
                ["ƭ", 3], 
                ["ʈ", 0], 
                ["̈ẗ", 4], 
                ["ᵵ", 4], 
                ["ƫ", 2], 
                ["ȶ", 4] 
            ] 
        , 
        'u': [2, 
                ["u", 0], 
                ["ú", 1], 
                ["ù", 1], 
                ["ŭ", 2], 
                ["û", 2], 
                ["ǔ", 2], 
                ["ů", 4], 
                ["ü", 2], 
                ["ǘ", 3], 
                ["ǜ", 3], 
                ["ǚ", 4], 
                ["ǖ", 3], 
                ["ű", 2], 
                ["ũ", 4], 
                ["ṹ", 5], 
                ["ų", 2], 
                ["́ų́", 4], 
                ["̃ų̃", 6], 
                ["ū", 1], 
                ["ṻ", 3], 
                ["̀ū̀", 3], 
                ["́ū́", 3], 
                ["̃ū̃", 9], 
                ["ủ", 3], 
                ["ȕ", 2], 
                ["ȗ", 2], 
                ["ư", 1], 
                ["ứ", 2], 
                ["ừ", 2], 
                ["ữ", 5], 
                ["ử", 4], 
                ["ự", 2], 
                ["ụ", 1], 
                ["ṳ", 2], 
                ["ṷ", 2], 
                ["ṵ", 4], 
                ["ʉ", 1], 
                ["ᶙ", 2], 
                ["ꭒ", 1] 
            ] 
        , 
        'v': [1, 
                ["v", 0], 
                ["ṽ", 4], 
                ["ṿ", 1], 
                ["ꝟ", 1], 
                ["ʋ", 1], 
                ["ỽ", 0], 
                ["ᶌ", 2], 
                ["ⱱ", 1], 
                ["ⱴ", 3] 
            ] 
        , 
        'w': [3, 
                ["w", 0], 
                ["ẃ", 1], 
                ["ẁ", 1], 
                ["ŵ", 2], 
                ["ẅ", 2], 
                ["ẇ", 1], 
                ["ẉ", 1], 
                ["̊ẘ", 4], 
                ["ⱳ", 1] 
            ] 
        , 
        'x': [1, 
                ["x", 0], 
                ["́x́", 1], 
                ["̂x̂", 2], 
                ["ẍ", 2], 
                ["̌x̌", 2], 
                ["ẋ", 1], 
                ["̧x̧", 1], //
                ["̱x̱", 1], 
                ["̣x̣", 1], 
                ["ᶍ", 2] 
            ] 
        , 
        'y': [3, 
                ["y", 0], 
                ["ý", 1], 
                ["ỳ", 1], 
                ["ŷ", 2], 
                ["̊ẙ", 4], 
                ["ÿ", 2], 
                ["ỹ", 4], 
                ["ẏ", 1], 
                ["ȳ", 1], 
                ["ỷ", 3], 
                ["ỵ", 1], 
                ["ɏ", 1], 
                ["ƴ", 1], 
                ["ỿ", 4] 
            ] 
        , 
        'z': [1, 
                ["z", 0], 
                ["ź", 1], 
                ["ẑ", 2], 
                ["ž", 2], 
                ["ż", 1], 
                ["ẓ", 1], 
                ["ẕ", 1], 
                ["ƶ", 1], 
                ["ȥ", 2], 
                ["ⱬ", 1], 
                ["ɀ", 2], 
                ["ᶎ", 2], 
                ["ᵶ", 4], 
                ["ʐ", 2], 
                ["ʑ", 3] 
            ] 
        /* 
        "español": [ 
            ['a', [2, 
                ['á', 1]  
            ]], 
        ] 
        */ 
    }
}; 

obTain= function(m, p, h, grd){
    p= p.trim()
    h= h.trim()
    if(ind= grd.indexOf("auC") + 1){
        m= m.split("")
        m[0]= m[0]=="d"? "i": "d";
        m[1]= m[1]=="d"? "a": "d";
        m= m.join("")
        grd= grd.replace("l1", "$__").replace("f1", "l1").replace("$__", "f1")
    }
    if(ind= grd.indexOf("slc") + 1){
        switch(grd.slice(ind+2, ind +4)){
            case "f1":
                if(p.indexOf(" ") + 1){
                    p= p.slice(p.indexOf(" ") + 1)
                    h= h.slice(h.indexOf(" ") + 1)
                }else{
                    p= ""
                    h= ""
                }
                break;
            case "l1":
                if(p.lastIndexOf(" ") + 1){
                    p= p.slice(0, p.lastIndexOf(" "))
                    h= h.slice(0, h.lastIndexOf(" "))
                }else{
                    p= ""
                    h= ""
                }
                
                break;
        }
    }
    if(ind= grd.indexOf("oly") + 1){
        switch(grd.slice(ind+2, ind +4)){
            case "f1":
                if(p.indexOf(" ") + 1){
                    p= p.slice(0, p.indexOf(" "))
                    h= h.slice(0, h.indexOf(" "))
                }else{
                    p
                    h
                }
                break;
            case "l1":
                if(p.indexOf(" ") + 1){
                    p= p.slice(p.lastIndexOf(" ") + 1)
                    h= h.slice(h.lastIndexOf(" ") + 1)
                }else{
                    p
                    h
                }
                break;
        }
    }
    if(ind= grd.indexOf("jst") + 1){
        switch(grd.slice(ind+2, ind +4)){
            case "f1":
                p= h.split("-")[0];
                h= p;
                break;
            case "l1":
                p= h.split("-")[h.split("-").length -1];
                h= p;
                break;
        }
    }
    if(ind= grd.indexOf("csa") + 1){
        ez= ""
        for(x in h.split("-")){
            for(y= h.split("-")[x].length - 1; y>=0;y--){
                ez= `${ez}${h.split("-")[x][y]}`
            }
            ez= `${ez} `
        }
        h=ez.trim()
        p= h.split(" ").join(" ")
    }
    if(ind= grd.indexOf("csd") + 1){
        ez= ""
        for(x= h.split("-").length - 1; x+1; x--){
            ez= `${ez}${h.split("-")[x]}`
            ez= `${ez} `
        }
        h=ez.trim()
        p= h.split(" ").join(" ")
    }
    if(ind= grd.indexOf("ign") + 1){
        switch(grd.slice(ind+2, ind +4)){
            case "cp":
                switch(grd.slice(ind+4, ind +8)){
                    case "dpds":
                        p1= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pd");
                        p2= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sd").slice(0, -1); delete h;
                        ii= []
                        for(var f= 0; f <= p1.trim().split("   ").length-1; f++){
                            ii[ii.length]= `<span title= "${expand(`p${m[3]}`)}">${p1.trim().split("   ")[f]}</span>`
                            ii[ii.length]= `<span title= "${expand(`s${m[3]}`)}">${p2.trim().split("   ")[f]}</span>`
                        }
                        p= ii.join("   ")
                        break
                    case "dsdp":
                        p1= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sd").slice(0, -1); delete h;
                        p2= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pd");
                        ii= []
                        for(var f= 0; f <= p1.trim().split("   ").length-1; f++){
                            ii[ii.length]= `<span title= "${expand(`s${m[3]}`)}">${p1.trim().split("   ")[f]}</span>`
                            ii[ii.length]= `<span title= "${expand(`p${m[3]}`)}">${p2.trim().split("   ")[f]}</span>`
                        }
                        p= ii.join("   ")
                        break
                    case "apas":
                        p1= accentuaTe((function(i){bW= "";bgW= "";for(var z= 0; z<=i.length;z++){if(i[i.length - 1-z]!=" "&&z!=i.length){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pa");
                        p2= accentuaTe((function(i){bW= "";bgW= "";for(var z= 0; z<=i.length;z++){if(i[i.length - 1-z]!=" "&&z!=i.length){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sa").slice(0, -1); delete h;
                        ii= []
                        for(var f= 0; f <= p1.trim().split("   ").length-1; f++){
                            ii[ii.length]= `<span title= "${expand(`p${m[3]}`)}">${p1.trim().split("   ")[f]}</span>`
                            ii[ii.length]= `<span title= "${expand(`s${m[3]}`)}">${p2.trim().split("   ")[f]}</span>`
                        }
                        p= ii.join("   ")
                        break
                    case "asap":
                        p1= accentuaTe((function(i){bW= "";bgW= "";for(var z= 0; z<=i.length;z++){if(i[i.length - 1-z]!=" "&&z!=i.length){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sa").slice(0, -1); delete h;
                        p2= accentuaTe((function(i){bW= "";bgW= "";for(var z= 0; z<=i.length;z++){if(i[i.length - 1-z]!=" "&&z!=i.length){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pa");
                        ii= []
                        for(var f= 0; f <= p1.trim().split("   ").length-1; f++){
                            ii[ii.length]= `<span title= "${expand(`s${m[3]}`)}">${p1.trim().split("   ")[f]}</span>`
                            ii[ii.length]= `<span title= "${expand(`p${m[3]}`)}">${p2.trim().split("   ")[f]}</span>`
                        }
                        p= ii.join("   ")
                        break
                }
                break;
            case "it":
                switch(grd.slice(ind+4, ind +7)){
                    case "nds":
                        lA= m[3]
                        p= `${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}<span title= "${expand(`n${lA}`)}">${accentuaTe(i[i.length - 1-z], lA, "nd")}</span> `; lA=lA=="s"?"e":"s"}else{bW= `${bW}${bgW}   `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `;
                        f_f_lA=lA=="s"?"e":"s"
                        break;
                    case "ndc":
                        lA;
                        p= `${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}<span title= "${expand(`n${lA}`)}">${accentuaTe(i[i.length - 1-z], lA, "nd")}</span> `; lA=lA=="s"?"e":"s"}else{bW= `${bW}${bgW}   `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `;
                        f_f_lA=lA=="s"?"e":"s"
                        break;
                    case "nac":
                        lA;
                        p= `${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${bgW}<span title= "${expand(`n${lA}`)}">${accentuaTe(i[z], lA, "na")}</span> `; lA=lA=="s"?"e":"s"}else{bW= `${bW}${bgW}   `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `;
                        break;
                    case "nak":
                        lA= f_f_lA
                        p= `${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${bgW}<span title= "${expand(`n${lA}`)}">${accentuaTe(i[z], lA, "na")}</span> `; lA=lA=="s"?"e":"s"}else{bW= `${bW}${bgW}   `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `;
                        break;
                }
                break;
        }
    }else{
        switch(m[0]){
            case "i":
                //alert("Hacia atrás")
                switch(m[1]){
                    case "d":
                        //alert("Cada palabra derecho")
                        switch(m[2]){
                            case "p":
                                //alert("Por Palabras!")
                                p=accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${i[z]}${bgW}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pd");
                                break;
                            case "s":
                                //alert("Por Sílabas!")
                                p=accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${i[z]}${bgW}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sd").slice(0, -1); delete h;
                                break;
                            case "n":
                                //alert("Por Letras, Su Nombre En El Abecedario!")
                                p=accentuaTe(`${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${i[z]}${bgW} `}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `, m[3], "nd").replaceAll("       ", "   ").replaceAll("     ", "   ").slice(0, -2);
                                break;
                            case "h":
                                //alert("Por Letras, ElSonidoQueHacen!")
                                p=accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${i[z]} ${bgW}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("  ' ", " '").replaceAll(" '  ", "' ").replaceAll(" ' ", "'"), m[3], "hd").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ");
                                break;
                        }
                        break;
                    case "a":
                        //alert("Cada palabra al revés")
                        switch(m[2]){
                            case "p":
                                //alert("Por Palabras!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${bgW}${i[z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pa");
                                break;
                            case "s":
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${bgW}${i[z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sa").slice(0, -1); delete h;
                                //alert("Por Sílabas!")
                                break;
                            case "n":
                                p= accentuaTe(p, m[3], "na")
                                p=`${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${bgW}${i[z]} `}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `;
                                //alert("Por Letras, Su Nombre En El Abecedario!")
                                break;
                            case "h":
                                //alert("Por Letras, ElSonidoQueHacen!")
                                p=accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[z]!=" "&&z!=-1){bgW= `${bgW}${i[z]} `}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("  ' ", " '").replaceAll(" '  ", "' ").replaceAll(" ' ", "'"), m[3], "ha").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ");
                                break;
                        }
                        break;
                }
                break;
            case "d":
                //alert("Hacia adelante")
                switch(m[1]){
                    case "d":
                        //alert("Cada palabra derecho")
                        switch(m[2]){
                            case "p":
                                //alert("Por Palabras!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p), m[3], "pd");
                                break;
                            case "s":
                                //alert("Por Sílabas!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(h), m[3], "sd").slice(0, -1); delete h;
                                break;
                            case "n":
                                //alert("Por Letras, Su Nombre En El Abecedario!")
                                p= accentuaTe(p, m[3], "nd")
                                p= `${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]} `}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `;
                                break;
                            case "h":
                                //alert("Por Letras, ElSonidoQueHacen!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]} `}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("  ' ", " '").replaceAll(" '  ", "' ").replaceAll(" ' ", "'"), m[3], "hd").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ");
                                break;
                        }
                        break;
                    case "a":
                        //alert("Cada palabra al revés")
                        switch(m[2]){
                            case "p":
                                //alert("Por Palabras!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW.split("").reverse().join("")}  `; bgW= ""}}return bW})(p), m[3], "pa");
                                break;
                            case "s":
                                //alert("Por Sílabas!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW}${i[i.length - 1-z]}`}else{bW= `${bW}${bgW.split("").reverse().join("")}  `; bgW= ""}}return bW})(h), m[3], "sa").slice(0, -1); delete h;
                                break;
                            case "n":
                                //alert("Por Letras, Su Nombre En El Abecedario!")
                                p=accentuaTe(`${(function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${i[i.length - 1-z]}${bgW} `}else{bW= `${bW}${bgW}  `; bgW= ""}}return bW})(p).replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ")} `, m[3], "na").replaceAll("       ", "   ").replaceAll("     ", "   ").slice(0, -3);
                                break;
                            case "h":
                                //alert("Por Letras, ElSonidoQueHacen!")
                                p= accentuaTe((function(i){bW= "";bgW= "";for(var z= i.length-1; z>=-1;z--){if(i[i.length - 1-z]!=" "&&z!=-1){bgW= `${bgW} ${i[i.length - 1-z]}`}else{bW= `${bW}${bgW.split("").reverse().join("")}  `; bgW= ""}}return bW})(p).replaceAll("  ' ", " '").replaceAll(" '  ", "' ").replaceAll(" ' ", "'"), m[3], "ha").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ");
                                break;
                        }
                        break;
                }
                break;
        }
    }
    switch(m[2]){
        case "h":
            p= p.replaceAll("          ", "$_").replaceAll("         ", "$_").replaceAll("        ", "$_").replaceAll("       ", "$_").replaceAll("      ", "$_").replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("   ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").trim()
            break;
        case "n":
            p= p.replaceAll("       ", "$_").replaceAll("      ", "$_").replaceAll("     ", "$_").replaceAll("    ", "$_").replaceAll("  ", " ").replaceAll("$_", "   ").trim()
            break;
        case "p": case "s":
            p= p.trim()
            break;
    }
    if(grd.indexOf("p0") + 1 && p.length){
        p= `<i>${p}</i>`
    }
    return p.replaceAll("   ", "$_").replaceAll("  ", "   ").replaceAll("$_", "   ").replaceAll("'", "")
}

fill_Table= function(A){
    $("#superInformation_as table tbody").html(``)
    for(var AA in A){
        if(`undefined`===typeof A[AA]._cusTom){
            $("#superInformation_as table tbody").append(`<tr><th>${A[AA].T}</th><th><input class= "${A[AA]._id}"></th><th help= "${A[AA]._inf}"">?</th></tr>`)
        }else{
            $("#superInformation_as table tbody").append(`<tr><th>${A[AA].T}</th><th>${A[AA]._cusTom}</th><th help= "${A[AA]._inf}"">?</th></tr>`)
            $("#superInformation_as table tbody tr:last-child th:nth-child(2) input:first-child").addClass(A[AA]._id)
        }
    }
    $("#superInformation_as table tbody tr th:nth-child(3)").on("mouseenter", function(){
        $("#superInformation_as #help_secTion").addClass("visible") 
        $("#superInformation_as #help_secTion").html($(this).attr("help")) 
        if($(document.activeElement).is("#superInformation_as input"))aE= $(document.activeElement)
        if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length)aE.blur()
        console.log(document.activeElement)
        setTimeout(function(){$("#superInformation_as #help_secTion").focus()}, 231)
    })
    $("#superInformation_as table tbody tr th:nth-child(3)").on("mouseleave click", function(){
        $("#superInformation_as #help_secTion").removeClass("visible") 
        if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length)aE.focus()
    })
    $("#superInformation_as input").on("focus", function(r){
        $(".nokbwarning").removeClass("visible")
        r.stopPropagation()
        aE= $(this)
    })
}

fill_Table= function(A){
    $("#superInformation_as table tbody").html(``)
    for(var AA in A){
        if(`undefined`===typeof A[AA]._cusTom){
            $("#superInformation_as table tbody").append(`<tr><th>${A[AA].T}</th><th><input class= "${A[AA]._id}"></th><th help= "${A[AA]._inf}"">?</th></tr>`)
        }else{
            $("#superInformation_as table tbody").append(`<tr><th>${A[AA].T}</th><th>${A[AA]._cusTom}</th><th help= "${A[AA]._inf}"">?</th></tr>`)
            $("#superInformation_as table tbody tr:last-child th:nth-child(2) input:first-child").addClass(A[AA]._id)
        }
    }
    $("#superInformation_as table tbody tr th:nth-child(3)").on("mouseenter", function(){
        $("#superInformation_as #help_secTion").addClass("visible") 
        $("#superInformation_as #help_secTion").html($(this).attr("help")) 
        if($(document.activeElement).is("#superInformation_as input"))aE= $(document.activeElement)
        if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length)aE.blur()
        console.log(document.activeElement)
        setTimeout(function(){$("#superInformation_as #help_secTion").focus()}, 231)
    })
    $("#superInformation_as table tbody tr th:nth-child(3)").on("mouseleave click", function(){
        $("#superInformation_as #help_secTion").removeClass("visible") 
        if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length)aE.focus()
    })
    $("#superInformation_as input").on("focus", function(r){
        $(".nokbwarning").removeClass("visible")
        r.stopPropagation()
        aE= $(this)
    })
}

fill_daTa= function(type, superInf){
    if(type === `wd_filling_superInformation` && !$(".accessibiliTyDialog").is(".visible")){
        $(".accessibiliTyDialog").addClass("visible")
        $(".accessibiliTyDialog").addClass("fill_daTa")
        $(".accessibiliTyDialog > aside").removeClass("visible")
        $("#superInformation_as").addClass("visible")
        switch(alternatives["id"]){
            case "FGlqw2x":
                 fill_Table([{T: "Nombre de herman@(s) con parentesco", _id: "sib_name", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento del artista que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de éste.</span>
                    <h4>@<b>parentesco</b> (Obligatorio)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN@p| nombre‼lDN@p
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[5]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre del artista o la banda incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en éste o ésta hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "alcN329":case "Ondoi2n":
                 fill_Table([{T: "Nombre del artista", _id: "art_name", _inf: 
                   `nombre‼lenguajeDelNombre
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento del artista o el nombre oficial de la banda que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o ésta.</span>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[2]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[3]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio del artista", _id: "art_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento del artista u el oficial de la banda que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o ésta.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento del artista u el oficial de la banda que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o ésta.</span>
                    `}, {T: "Cómo referirse al artista", _id: "art_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el cantautor
                    <br>
                    la banda de rock
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse al artista o la banda según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o ésta en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    singer and songwriter
                    <br>
                    rock band
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse al artista o la banda según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o ésta en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>.</span>
                    <br>
                    `}])
                break;
            case "m32c2b4":
                 fill_Table([{T: "Nombre de herman@ con parentesco", _id: "sib_name", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento del artista que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de éste.</span>
                    <h4>@<b>parentesco</b> (Obligatorio)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN@p| nombre‼lDN@p
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[5]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio del artista", _id: "art_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento del artista que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento del artista que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste.</span>
                    `}, {T: "Cómo referirse al artista", _id: "art_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el cantautor
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse al artista según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>tu herm..., ____ lirilian@</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    singer and songwriter
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse al artista según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>your ...er, the Lirilian ____</span>.</span>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre artístico de mi herman@ incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en éste hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "alLNd2d":
                 fill_Table([{T: "Nombre del grupo musical", _id: "ban_name", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    rock Led Zeppelin
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa el género y nombre de la agrupación musical según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>La banda de ____</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    rock band Led Zeppelin
                    <br>
                    <span class='pseudo_undeRlineInfo'>Escribe el género, tipo y nombre de la agrupación musical según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta.</span>
                    `}, {T: "Cómo referirse al grupo musical", _id: "ban_hTrt", _cusTom: `<input placeholder= "en español"></input><input disabled= "true" placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    la banda de
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa el tipo de la agrupación musical según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ rock L-d Z-p-e-i-</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    
                    <br>
                    <span class='pseudo_undeRlineInfo'>No escribas nada, <i style= 'display: inline'>(desactivado)</i>.</span>
                    `}, {T: "Nombre de herman@(s) con parentesco", _id: "sib_name", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento del artista que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de éste.</span>
                    <h4>@<b>parentesco</b> (Obligatorio)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN@p| nombre‼lDN@p
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[5]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio de hermano(s)", _id: "sib_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) artista(s), que aparezca(n) en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los artistas a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) artista(s), que aparezca(n) en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los artistas a quienes les corresponden.</span>
                    `}, {T: "Cómo referirse a hermano(s)", _id: "sib_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el cantautor
                    <br>
                    el cantautor y el guitarrista
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) artista(s) herman@s míos que participan en la agrupación según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>tu herm..., ____ lirilian@</span>; si son varios, en el orden en que van a quedar los artistas a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    singer and songwriter
                    <br>
                    singer and songwriter and guitarrist
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) artista(s) herman@s míos que participan en la agrupación según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>your ...er, the Lirilian ____</span>; si son varios, en el orden en que van a quedar los artistas a quienes les corresponden.</span>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre de la agrupación musical incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en éste hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "2oJdin2":case "nJBw2f3":
                 fill_Table([{T: "Nombre de la película", _id: "mov_name", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    Sistema
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la película que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta.</span>
                    <br>
                    <i>En Inglés:</i>
                    System
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la película que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta.</span>
                    `}, {T: "Nombre de director(es)", _id: "dir_name", _inf: 
                   `nombre‼lenguajeDelNombre
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) director(a) de la película que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[2]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[3]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN| nombre‼lDN
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio de director(es)", _id: "dir_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) director(es), que aparezca(n) en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) director(es), que aparezca(n) en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    `}, {T: "Cómo referirse a director(es)", _id: "dir_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el director
                    <br>
                    los directores
                    <br>
                    el director y el director y paleontólogo
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) directores(es) de la película según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    director
                    <br>
                    directors
                    <br>
                    director and director and paleontologist
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) directores(s) de la película según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    `}])
                break;
            case "Biujbc2":
                 fill_Table([{T: "Nombre de la película", _id: "mov_name", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    Sistema
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la película que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta.</span>
                    <br>
                    <i>En Inglés:</i>
                    System
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la película que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta.</span>
                    `}, {T: "Nombre de director(es) con o sin parentescos", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) director(a) de la película que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>@<b>parentesco</b> (Mínimo un nombre con parentezco)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN@p| nombre‼lDN@p
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[5]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `, _id: "dir_name"}, {T: "Gentilicio de director(es)", _id: "dir_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) director(es), que aparezca(n) en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) director(es), que aparezca(n) en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    `}, {T: "Cómo referirse a director(es)", _id: "dir_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el director
                    <br>
                    los directores
                    <br>
                    el director y el director y paleontólogo
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) directores(es) de la película según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    director
                    <br>
                    directors
                    <br>
                    director and director and paleontologist
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) directores(s) de la película según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>; si son varios, en el orden en que van a quedar los directores a quienes les corresponden.</span>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre de la película incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en éste hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "jnIFn3d":case "Hi2Cj29":
                 fill_Table([{T: "Nombre de la serie", _id: "ser_name", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    Sistema
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la serie que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta.</span>
                    <br>
                    <i>En Inglés:</i>
                    System
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la serie que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta.</span>
                    `}, {T: "Nombre de creador(es)", _id: "cre_name", _inf: 
                   `nombre‼lenguajeDelNombre
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) creador(a) de la serie que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[2]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[3]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN| nombre‼lDN
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio de creador(es)", _id: "cre_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) creador(es) de la serie, que aparezca(n) en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) creador(es) de la serie, que aparezca(n) en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    `}, {T: "Cómo referirse a creador(es)", _id: "cre_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el creador
                    <br>
                    los creadores
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) creador(es) de la serie según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    creator
                    <br>
                    creators
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) creador(s) de la serie según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    `}])
                break;
            case "LNjndn1":
                 fill_Table([{T: "Nombre de la serie", _id: "ser_name", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    Sistema
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la serie que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta.</span>
                    <br>
                    <i>En Inglés:</i>
                    System
                    <br>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la serie que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta.</span>
                    `}, {T: "Nombre de creador(es) con o sin parentescos", _id: "cre_name", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) creador(a) de la serie que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>@<b>parentesco</b> (Mínimo un nombre con parentezco)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN@p| nombre‼lDN@p
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[5]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio de creador(es)", _id: "cre_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) creador(es) de la serie, que aparezca(n) en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de nacimiento de( )l(os) creador(es) de la serie, que aparezca(n) en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    `}, {T: "Cómo referirse a creador(es)", _id: "cre_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    el creador
                    <br>
                    los creadores
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) creador(es) de la serie según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    creator
                    <br>
                    creators
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(os) creador(s) de la serie según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de éste o éstos en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>; si son varios, en el orden en que van a quedar los creadores de la serie a quienes les corresponden.</span>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre de la serie incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en éste hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "LKKCoi2":case "Ll3nod1":
                 fill_Table([{T: "Nombre del escritor", _id: "wri_name", _inf: 
                   `nombre‼lenguajeDelNombre
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) escritor(a) del libro que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[2]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[3]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN| nombre‼lDN
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio del escritor", _id: "wri_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) escritor(a) del libro, que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) escritor(a) del libro, que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste.</span>
                    `}, {T: "Cómo referirse al escritor", _id: "wri_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    la escritora
                    <br>
                    el escritor
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) escritor(a) del libro según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    writer
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) escritor(a) del libro según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>.</span>
                    `}])
                break;
            case "Llndj3c":
                 fill_Table([{T: "Nombre del escritor con parentesco", _id: "wri_name", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) escritor(a) del libro que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>@<b>parentesco</b> (Obligatorio)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio del escritor", _id: "wri_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) escritor(a) del libro, que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) escritor(a) del libro, que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste.</span>
                    `}, {T: "Cómo referirse al escritor", _id: "wri_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    la escritora
                    <br>
                    el escritor
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) escritor(a) del libro según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    writer
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) escritor(a) del libro según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>.</span>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre del libro incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en éste hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "NiCju2d":case "cH2dDnC":
                 fill_Table([{T: "Nombre del artista", _id: "art_name", _inf: 
                   `nombre‼lenguajeDelNombre
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) artista que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[2]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[3]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN| nombre‼lDN
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio del artista", _id: "art_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) artista, que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) artista, que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste.</span>
                    `}, {T: "Cómo referirse al artista", _id: "art_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    la pintora y escultora
                    <br>
                    el pintor
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) artista según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    painter and sculptor
                    <br>
                    painter
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) artista según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>.</span>
                    `}])
                break;
            case "Lmdi2md":
                 fill_Table([{T: "Nombre del artista con parentesco", _id: "art_name", _inf: 
                   `nombre‼lenguajeDelNombre@parentesco
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre completo de nacimiento de( )l(a) artista que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <h4>@<b>parentesco</b> (Obligatorio)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>na</th><th>Hermana</th></tr>
                            <tr><th>ta</th><th>Hermanita</th></tr>
                            <tr><th>no</th><th>Hermano</th></tr>
                            <tr><th>to</th><th>Hermanito</th></tr>
                        </tbody>
                    </table>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>@</i> en el teclado?</th><th>Alt + 64</th></tr>
                            <tr><th>Copiar <i>@</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(aT);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[2]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[3]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio del artista", _id: "art_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) artista, que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El gentilicio de nacimiento de( )l(a) artista, que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste.</span>
                    `}, {T: "Cómo referirse al artista", _id: "art_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    la pintora y escultora
                    <br>
                    el pintor
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) artista según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>.</span>
                    <br>
                    <i>En Inglés:</i>
                    painter and sculptor
                    <br>
                    painter
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a( )l(a) artista según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éste en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>.</span>
                    `}, {T: "¿Está al contrario la dedicatoria?", _id: "auC", _cusTom: `<input type= "checkbox"></input>`, _inf: 
                   `<i>Si el nombre de la obra de arte, el nombre de la colección o el nombre artístico de( )l(a) artista incluye una creación, una parte de una o algo que derive de una, como términos de las áreas que las estudian o se sabe que alguna palabra en uno de éstos hace referencia a una, no por nombres propios reales ni números, o por nada que esté, estando, en un nombre propio real; deberías chequear esta caja.</i>`}])
                break;
            case "amcaoMd":case "kLwicn2":
                 fill_Table([{T: "Nombre de la(s) desarrolladora(s) de videojuegos", _id: "dev_name", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `nombre‼lenguajeDelNombre
                    <h4><b>nombre</b></h4>
                    <span class='pseudo_undeRlineInfo'>El nombre oficial de la desarrolladora de videojuegos que aparezca en la página de <a>wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://www.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta.</span>
                    <h4>‼<b>lenguajeDelNombre</b> (Opcional)</h4>
                    <i>, puede ser:</i>
                    <br>
                    <span class='pseudo_undeRlineInfo'>Nada o el código IETF&hairsp;<sup><a target= '_blank' href='/A.K.A._Dizzy/raw/p/Mx2DX0Ds1hc2D/index.html'>[2]</a></sup>&nbsp;de un lenguaje</span>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>‼</i> en el teclado?</th><th>Alt + 19</th></tr>
                            <tr><th>Copiar <i>‼</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(dEP);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[3]</a></sup></th></tr>
                        </tbody>
                    </table>
                    <h4>Puedes especificar <b>varios</b> nombres separándolos con una raya vertical y un espacio, así:</h4>
                    <br>
                    nombre‼lDN| nombre‼lDN
                    <br>
                    <br>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr><th>¿Cómo escribir <i>|</i> en el teclado?</th><th>Alt + 124</th></tr>
                            <tr><th>Copiar <i>|</i> al portapapeles</th><th>&hairsp;<sup><a onclick= '(function(a){a.preventDefault();to_copy_to_clipboaRd.text(verTl);to_copy_to_clipboaRd.CopyToClipboard()})(event)'>[4]</a></sup></th></tr>
                        </tbody>
                    </table>
                    `}, {T: "Gentilicio de la(s) desarrolladora(s) de videojuegos", _id: "dev_gent", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    liriliano
                    <br>
                    lirilianos
                    <br>
                    liriliano y liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de la(s) desarrolladora(s) de videojuegos que aparezca(n) en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éstas; si son varias, en el orden en que van a quedar las desarrolladoras de videojuegos a las cuales les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    Lirilian
                    <br>
                    Lirilian and Liriliense
                    <br>
                    <span class='pseudo_undeRlineInfo'>El o los gentilicio(s) de la(s) desarrolladora(s) de videojuegos que aparezca(n) en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éstas; si son varias, en el orden en que van a quedar las desarrolladoras de videojuegos a las cuales les corresponden.</span>
                    `}, {T: "Cómo referirse a la(s) desarrolladora(s) de videojuegos", _id: "dev_hTrt", _cusTom: `<input placeholder= "en español"></input><input placeholder= "en inglés"></input>`, _inf: 
                   `<i>E.g.:</i>
                    <i>En Español:</i>
                    la desarrolladora de videojuegos
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a la(s) desarrolladora(s) de videojuegos según la información que aparezca en la página de <a style= 'text-decoration: underline;'>es.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://es.wikipedia.org/'>[1]</a></sup>&nbsp;de ésta o éstas en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>____ lirilian@</span>; si son varias, en el orden en que van a quedar las desarrolladoras de videojuegos a las cuales les corresponden.</span>
                    <br>
                    <i>En Inglés:</i>
                    video game developer
                    <br>
                    <span class='pseudo_undeRlineInfo'>Completa cómo referirse a la(s) desarrolladora(s) de videojuegos según la información que aparezca en la página de <a style= 'text-decoration: underline;'>en.wikipedia.org</a>&hairsp;<sup><a target= '_blank' href='https://en.wikipedia.org/'>[2]</a></sup>&nbsp;de ésta o éstas en esta frase a modo de ejemplo, por ejemplo: <span style= 'color: #d28364'>the Lirilian ____</span>; si son varias, en el orden en que van a quedar las desarrolladoras de videojuegos a las cuales les corresponden.</span>
                    `}])
                break;
            default:
                 fill_Table([{T: "superInformation irrelevante", _id: "sib_name", _cusTom: `Autodestrucción (3)`, _inf: 
                   `<i>De nuevo, teniendo presionadas las teclas Control + Shift, da click a los títulos si no tienes que suministrar información extra luego de cambiarlos.</i>`}])
                 var counTdown= 3
                 console.log(counTdown)
                 const selfDest= setInterval(function(){
                    if(counTdown > 0){
                        counTdown--
                        $("#superInformation_as table tbody th:nth-child(2)").text(`Autodestrucción (${counTdown})`)
                    }if(!!!counTdown){
                        $(".accessibiliTyDialog").removeClass("visible")
                        $(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
                            var tiTle= $(alternating).find("h2").text()
                            var pp= tiTle.slice(0, tiTle.indexOf(" ("))
                            var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
                            var ww= $(this).attr("w").split(" ")
                            var btW= []
                            for(aa in ww){
                                var greed= `${ww[aa].slice(4, ww[aa].length)}${(function(){if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){return (alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC != alternatives[Object.keys(alternatives).slice(2)[0]].auC)?'auC':''}else{return ''}})()?'auC':''}`
                                acq= obTain(ww[aa].slice(0, 4), pp, hh, greed)
                                !!acq?btW[btW.length]= `${!(greed.indexOf("dWra")+1)?`<span title= "${expand(ww[aa].slice(0, 4).slice(2, 4))}">`: ``}${acq.replaceAll("span ", "$pan").replaceAll("   ", "&#32;&#32;").replaceAll(" ", "&nbsp;").replaceAll("$pan", "span ")}${!(greed.indexOf("dWra")+1)?`</span>`: ``}`: 1
                            }
                            btW= btW.join("&nbsp;&nbsp;").replaceAll(" </span>&nbsp;&nbsp;", "</span>&#32;&#32;").replaceAll("&nbsp;&nbsp;<span> ", "&#32;&#32;<span>").replaceAll("span>&nbsp;&nbsp;<s", "span>&#32;&#32;<s").replaceAll("title=&nbsp;", "title= ")
                            $(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${btW})`.replaceAll(`por sílabas`, `<i>por sílabas</i>`).replaceAll(`por letras, su nombre en el abecedario`, `<i>por letras, su nombre en el abecedario</i>`).replaceAll(`por letras, el sonido que hacen`, `<i>por letras, el sonido que hacen</i>`).replaceAll(`por palabras`, `<i>por palabras</i>`))
                        })
                        alternating.find('p span').tooltip({
                            track: true,
                            show: {
                                effect: "none",
                                delay: 0
                            },
                            open: function(event, ui) {
                                if (typeof(event.originalEvent) === 'undefined') {
                                    return false;
                                }
                                ý= $(this); 
                               
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
                        alternating.find(".name").on("click", function(){
                            play_Tts($(this).text(), $(this).attr("lang"))
                        })   
                        clearInterval(selfDest)
                    }
                 }, 1000)
                break;
        }
        return
    }else if(type === `md_filling_superInformation`){
        $(".accessibiliTyDialog").removeClass("visible")
        $(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
            var tiTle= $(alternating).find("h2").text()
            var pp= tiTle.slice(0, tiTle.indexOf(" ("))
            var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
            var ww= $(this).attr("w").split(" ")
            var btW= []
            for(aa in ww){
                var greed= `${ww[aa].slice(4, ww[aa].length)}${(function(){if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){return (alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC != alternatives[Object.keys(alternatives).slice(2)[0]].auC)?'auC':''}else{return ''}})()?'auC':''}`
                acq= obTain(ww[aa].slice(0, 4), pp, hh, greed)
                !!acq?btW[btW.length]= `${!(greed.indexOf("dWra")+1)?`<span title= "${expand(ww[aa].slice(0, 4).slice(2, 4))}">`: ``}${acq.replaceAll("span ", "$pan").replaceAll("   ", "&#32;&#32;").replaceAll(" ", "&nbsp;").replaceAll("$pan", "span ")}${!(greed.indexOf("dWra")+1)?`</span>`: ``}`: 1
            }
            btW= btW.join("&nbsp;&nbsp;").replaceAll(" </span>&nbsp;&nbsp;", "</span>&#32;&#32;").replaceAll("&nbsp;&nbsp;<span> ", "&#32;&#32;<span>").replaceAll("span>&nbsp;&nbsp;<s", "span>&#32;&#32;<s").replaceAll("title=&nbsp;", "title= ")
            $(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${btW})`.replaceAll(`por sílabas`, `<i>por sílabas</i>`).replaceAll(`por letras, su nombre en el abecedario`, `<i>por letras, su nombre en el abecedario</i>`).replaceAll(`por letras, el sonido que hacen`, `<i>por letras, el sonido que hacen</i>`).replaceAll(`por palabras`, `<i>por palabras</i>`))
        })
        alternating.find('p span').tooltip({
            track: true,
            show: {
                effect: "none",
                delay: 0
            },
            open: function(event, ui) {
                if (typeof(event.originalEvent) === 'undefined') {
                    return false;
                }
                ý= $(this); 
               
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
        alternating.find(".name").on("click", function(){
            play_Tts($(this).text(), $(this).attr("lang"))
        })   
        if("undefined" !=typeof informaTion.auC){
            $(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
                if("undefined" ==typeof loaded[alternatives.id]){
                    if(informaTion.auC){
                        if(!alternatives[Object.keys(alternatives).slice(2)[0]].auC){
                            $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                            $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                            $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                            $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                        }
                    }else{
                        if(alternatives[Object.keys(alternatives).slice(2)[0]].auC){
                            $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                            $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                            $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                            $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                        }
                    }
                }else if([`duper`, `super`].indexOf(loaded[alternatives.id]) +1){
                    if(informaTion.auC){
                        if(!alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                            $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                            $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                            $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                            $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                        }
                    }else{
                        if(alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                            $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                            $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                            $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                            $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                        }
                    }  
                }else if(loaded[alternatives.id].indexOf(`Rooper`) +1){
                    if(informaTion.auC){
                        if(loaded[alternatives.id].split("er")[1] == "false"){
                            $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                            $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                            $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                            $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                        }
                    }else{
                        if(loaded[alternatives.id].split("er")[1] == "true"){
                            $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                            $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                            $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                            $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                        }
                    }
                }
                var tiTle= $(alternating).find("h2").text()
                var pp= tiTle.slice(0, tiTle.indexOf(" ("))
                var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
                var ww= $(this).attr("w").split(" ")
                var btW= []
                for(aa in ww){
                    var greed= `${ww[aa].slice(4, ww[aa].length)}${(function(){if("undefined"!=typeof informaTion.auC){return ((informaTion.auC && !alternatives[Object.keys(alternatives).slice(2)[0]].auC) || (!informaTion.auC && alternatives[Object.keys(alternatives).slice(2)[0]].auC))?'auC':''}else{return ''}})()}`
                    acq= obTain(ww[aa].slice(0, 4), pp, hh, greed)
                    !!acq?btW[btW.length]= `${!(greed.indexOf("dWra")+1)?`<span title= "${expand(ww[aa].slice(0, 4).slice(2, 4))}">`: ``}${acq.replaceAll("span ", "$pan").replaceAll("   ", "&#32;&#32;").replaceAll(" ", "&nbsp;").replaceAll("$pan", "span ")}${!(greed.indexOf("dWra")+1)?`</span>`: ``}`: 1
                }
                btW= btW.join("&nbsp;&nbsp;").replaceAll(" </span>&nbsp;&nbsp;", "</span>&#32;&#32;").replaceAll("&nbsp;&nbsp;<span> ", "&#32;&#32;<span>").replaceAll("span>&nbsp;&nbsp;<s", "span>&#32;&#32;<s").replaceAll("title=&nbsp;", "title= ")
                $(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${btW})`.replaceAll(`por sílabas`, `<i>por sílabas</i>`).replaceAll(`por letras, su nombre en el abecedario`, `<i>por letras, su nombre en el abecedario</i>`).replaceAll(`por letras, el sonido que hacen`, `<i>por letras, el sonido que hacen</i>`).replaceAll(`por palabras`, `<i>por palabras</i>`))
            })
            if("undefined" ==typeof loaded[alternatives.id]){
                loaded[alternatives.id]= `Rooperster${informaTion.auC}`
            }else if([`duper`, `super`].indexOf(loaded[alternatives.id]) +1){
                loaded[alternatives.id]= `Rooper${informaTion.auC}`
            }else if(loaded[alternatives.id].indexOf(`Rooper`) +1){
                loaded[alternatives.id]= `Rooper${informaTion.auC}`
            }
        }
        eInf= informaTion
        dInf= informaTion[Object.keys(informaTion)[0]]
        type= superInf
    }else{
        eInf= alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]]    
        dInf= alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]][Object.keys(alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]])[1]];
    }

    //alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]][Object.keys(alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]])[1]]
    switch(type){
        case "dir":
            dInf= eInf[Object.keys(eInf)[1]]

            var hTml= alternating.find(".dir_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dir_es").html(hTml)

            var hTml= alternating.find(".dir_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} de la película ${eInf.name.nT.es} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dir_es").prev().prev().html(hTml)

            var hTml= alternating.find(".dir_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dir_en").html(hTml)

            var hTml= alternating.find(".dir_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} of the movie ${eInf.name.nT.en} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dir_en").prev().prev().html(hTml)
            break
        case "cre":
            dInf= eInf[Object.keys(eInf)[1]]

            var hTml= alternating.find(".cre_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cre_es").html(hTml)

            var hTml= alternating.find(".cre_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} de la serie ${eInf.name.nT.es} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cre_es").prev().prev().html(hTml)

            var hTml= alternating.find(".cre_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cre_en").html(hTml)

            var hTml= alternating.find(".cre_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} of the series ${eInf.name.nT.en} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cre_en").prev().prev().html(hTml)
            break
        case "pin":
            var hTml= alternating.find(".pin_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".pin_es").html(hTml)

            var hTml= alternating.find(".pin_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".pin_es").prev().prev().html(hTml)

            var hTml= alternating.find(".pin_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".pin_en").html(hTml)

            var hTml= alternating.find(".pin_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".pin_en").prev().prev().html(hTml)
            break
        case "dev":
            var hTml= alternating.find(".dev_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.es.nombre.split("| ").length>1?dInf.es.nombre.split("| ").join(" , ").split("").reverse().join("").replace(",", "y").split("").reverse().join("").replaceAll(" , ", ", ") :dInf.es.nombre} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dev_es").html(hTml)

            var hTml= alternating.find(".dev_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dev_es").prev().prev().html(hTml)

            var hTml= alternating.find(".dev_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.en.nombre.split("| ").length>1?dInf.en.nombre.split("| ").join(" , ").split("").reverse().join("").replace(",", "dna").split("").reverse().join("").replaceAll(" , ", ", ") :dInf.en.nombre} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dev_en").html(hTml)

            var hTml= alternating.find(".dev_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".dev_en").prev().prev().html(hTml)
            break
        case "esc":
            var hTml= alternating.find(".esc_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esc_es").html(hTml)

            var hTml= alternating.find(".esc_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esc_es").prev().prev().html(hTml)

            var hTml= alternating.find(".esc_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esc_en").html(hTml)

            var hTml= alternating.find(".esc_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esc_en").prev().prev().html(hTml)
            break
        case "art":
            var hTml= alternating.find(".art_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".art_es").html(hTml)

            var hTml= alternating.find(".art_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".art_es").prev().prev().html(hTml)

            var hTml= alternating.find(".art_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".art_en").html(hTml)

            var hTml= alternating.find(".art_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".art_en").prev().prev().html(hTml)
            break
        case "sib":
            var hTml= alternating.find(".sib_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple_Sr(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".sib_es").html(hTml)

            var hTml= alternating.find(".sib_es").next().next().next().next().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}Para ${mulTiple_r(sortgnp(dInf.nombre), "y", "el hijo de Satanás Belcebú")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".sib_es").next().next().next().next().html(hTml)

            var hTml= alternating.find(".sib_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple_Sr(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".sib_en").html(hTml)

            var hTml= alternating.find(".sib_en").next().next().next().next().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}For ${mulTiple_r(sortgnp(dInf.nombre), "and", "the son of The Devil")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".sib_en").next().next().next().next().html(hTml)
            break
        case "arS":
            var hTml= alternating.find(".arS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(sortgnp(dInf.nombre), "y"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".arS_es").html(hTml)

            var hTml= alternating.find(".arS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[1][1]=="a"? `Para mi ${dInf.nombre.split("@")[1][0]=="t"?"hermano":"hermanito"}; el hijo de Satanás Belcebú`:`Para el hijo de Satanás Belcebú; mi ${dInf.nombre.split("@")[1][0]=="t"?"hermano":"hermanito"}`} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".arS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".arS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".arS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".arS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(dInf.nombre, "and"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".arS_en").html(hTml)

            var hTml= alternating.find(".arS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[1][1]=="a"? `For my ${dInf.nombre.split("@")[1][0]=="t"?"brother":"little brother"}; the son of The Devil`: `For the son of The Devil; my ${dInf.nombre.split("@")[1][0]=="t"?"brother":"little brother"}`} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".arS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".arS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".arS_en").prev().prev().html(hTml)
            break
        case "bnS":
            var hTml= alternating.find(".bnS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}... ${dInf.es.bnd} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".bnS_es").html(hTml)

            var hTml= alternating.find(".bnS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}Para ${mulTiple_r(sortgnp(dInf.nombre), "y", "el hijo de Satanás Belcebú")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".bnS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".bnS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De ${mulTiple(sortgnp(dInf.nombre), "y")}, y ${dInf.es.hTRTb}... ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".bnS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".bnS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}... ${dInf.en.bnd} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".bnS_en").html(hTml)

            var hTml= alternating.find(".bnS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}For ${mulTiple_r(sortgnp(dInf.nombre), "and", "the son of The Devil")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".bnS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".bnS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From ${mulTiple(sortgnp(dInf.nombre), "and")}, and the... ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".bnS_en").prev().prev().html(hTml)
            break
        case "piS":
            var hTml= alternating.find(".piS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[1][1]=="a"? `Para mi ${dInf.nombre.split("@")[1][0]=="t"?"hermano":"hermanito"}; el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles`:`Para el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles; mi ${dInf.nombre.split("@")[1][0]=="t"?"hermano":"hermanito"}`} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".piS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".piS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}<span class= "name" lang= "${dInf.nombre.split("@")[0].split('‼').length-1?dInf.nombre.split("@")[0].split('‼')[1]:'en'}">${dInf.nombre.split("@")[0].split('‼')[0]}</span> ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".piS_es").html(hTml)

            var hTml= alternating.find(".piS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De tu ${(function(){switch(dInf.nombre.split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()}, ${dInf.es.hTRT} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".piS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".piS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[1][1]=="a"? `For my ${dInf.nombre.split("@")[1][0]=="t"?"brother":"little brother"}; the love of the life of Mother Nature, She Who Makes Trees Grow`: `For the love of the life of Mother Nature, She Who Makes Trees Grow; my ${dInf.nombre.split("@")[1][0]=="t"?"brother":"little brother"}`} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".piS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".piS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}<span class= "name" lang= "${dInf.nombre.split("@")[0].split('‼').length-1?dInf.nombre.split("@")[0].split('‼')[1]:'en'}">${dInf.nombre.split("@")[0].split('‼')[0]}</span> ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".piS_en").html(hTml)

            var hTml= alternating.find(".piS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From your ${(function(){switch(dInf.nombre.split("@")[1]){case "na":return "sister";break;case "ta":return "little sister";break;case "no":return "brother";break;case "to":return "little brother";break;}})()}, the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".piS_en").prev().prev().html(hTml)
            break
        case "esS":
            var hTml= alternating.find(".esS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[1][1]=="a"?`Para mi ${dInf.nombre.split("@")[1][0]=="t"?"hermano":"hermanito"}; el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles`:`Para el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles; mi ${dInf.nombre.split("@")[1][0]=="t"?"hermano":"hermanito"}`} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".esS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[0]} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esS_es").html(hTml)

            var hTml= alternating.find(".esS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De tu ${(function(){switch(dInf.nombre.split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()}, ${dInf.es.hTRT} ${dInf.es.gentilicio} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".esS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[1][1]=="a"?`For my ${dInf.nombre.split("@")[1][0]=="t"?"brother":"little brother"}; the love of the life of Mother Nature, She Who Makes Trees Grow`:`For the love of the life of Mother Nature, She Who Makes Trees Grow; my ${dInf.nombre.split("@")[1][0]=="t"?"brother":"little brother"}`} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".esS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${dInf.nombre.split("@")[0]} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esS_en").html(hTml)

            var hTml= alternating.find(".esS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From your ${(function(){switch(dInf.nombre.split("@")[1]){case "na":return "sister";break;case "ta":return "little sister";break;case "no":return "brother";break;case "to":return "little brother";break;}})()}, the ${dInf.en.gentilicio} ${dInf.en.hTRT} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".esS_en").prev().prev().html(hTml)
            break
        case "crS":
            dInf= eInf[Object.keys(eInf)[1]]
            
            var hTml= alternating.find(".crS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}Para ${mulTiple_crr(sortgnp(dInf.nombre), "y", "el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".crS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".crS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(sortgnp(dInf.nombre), "y"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".crS_es").html(hTml)

            var hTml= alternating.find(".crS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} de la serie ${eInf.name.nT.es} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".crS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".crS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}For ${mulTiple_crr(sortgnp(dInf.nombre), "and", "the love of the life of Mother Nature, She Who Makes Trees Grow")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".crS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".crS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(sortgnp(dInf.nombre), "and"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".crS_en").html(hTml)

            var hTml= alternating.find(".crS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} of the series ${eInf.name.nT.en} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".crS_en").prev().prev().html(hTml)
            break
        case "cr_pS":
            
            var hTml= alternating.find(".cr_pS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}Para ${mulTiple_r(sortgnp([dInf.par, dInf.nombre].join("| ")), "y", "el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cr_pS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".cr_pS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(sortgnp(dInf.nombre), "y"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cr_pS_es").html(hTml)

            var hTml= alternating.find(".cr_pS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De ${mulTiple(dInf.par, "y")}, y ${dInf.es.hTRT} ${dInf.es.gentilicio} de la serie ${eInf.name.nT.es} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cr_pS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".cr_pS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}For ${mulTiple_r(sortgnp([dInf.par, dInf.nombre].join("| ")), "and", "the love of the life of Mother Nature, She Who Makes Trees Grow")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cr_pS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".cr_pS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(dInf.nombre, "and"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cr_pS_en").html(hTml)

            var hTml= alternating.find(".cr_pS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From ${mulTiple(sortgnp(dInf.par), "and")}, and the ${dInf.en.gentilicio} ${dInf.en.hTRT} of the series ${eInf.name.nT.en} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".cr_pS_en").prev().prev().html(hTml)
            break
        case "di_pS":
            
            var hTml= alternating.find(".di_pS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}Para ${mulTiple_r(sortgnp([dInf.par, dInf.nombre].join("| ")), "y", "el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".di_pS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".di_pS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "y")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".di_pS_es").html(hTml)

            var hTml= alternating.find(".di_pS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De ${mulTiple(sortgnp(dInf.par), "y")}, y ${dInf.es.hTRT} ${dInf.es.gentilicio} de la película ${eInf.name.nT.es} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".di_pS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".di_pS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}For ${mulTiple_r(sortgnp([dInf.par, dInf.nombre].join("| ")), "and", "the love of the life of Mother Nature, She Who Makes Trees Grow")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".di_pS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".di_pS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${mulTiple(sortgnp(dInf.nombre), "and")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".di_pS_en").html(hTml)

            var hTml= alternating.find(".di_pS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From ${mulTiple(sortgnp(dInf.par), "and")}, and the ${dInf.en.gentilicio} ${dInf.en.hTRT} of the movie ${eInf.name.nT.en} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".di_pS_en").prev().prev().html(hTml)
            break
        case "diS":
            dInf= eInf[Object.keys(eInf)[1]]

            var hTml= alternating.find(".diS_es").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}Para ${mulTiple_crr(sortgnp(dInf.nombre), "y", "el amor de la vida de la Madre Naturaleza, La Que Hace Que Crezcan Los Árboles")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".diS_es").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".diS_es").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(sortgnp(dInf.nombre), "y"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".diS_es").html(hTml)

            var hTml= alternating.find(".diS_es").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}De${de(dInf.es.hTRT)} ${dInf.es.gentilicio} de la película ${eInf.name.nT.es} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".diS_es").prev().prev().html(hTml)

            var hTml= alternating.find(".diS_en").prev().prev().prev().prev().prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}For ${mulTiple_crr(sortgnp(dInf.nombre), "and", "the love of the life of Mother Nature, She Who Makes Trees Grow")} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".diS_en").prev().prev().prev().prev().prev().prev().html(hTml)

            var hTml= alternating.find(".diS_en").html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}${capitalize(mulTiple(sortgnp(dInf.nombre), "and"))} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".diS_en").html(hTml)

            var hTml= alternating.find(".diS_en").prev().prev().html()
            hTml= `${hTml.slice(0, (hTml.lastIndexOf("←") > hTml.lastIndexOf("→")? hTml.lastIndexOf("←"): hTml.lastIndexOf("→")) + 1)}From the ${dInf.en.gentilicio} ${dInf.en.hTRT} of the movie ${eInf.name.nT.en} ${hTml.slice(hTml.indexOf("("), hTml.length)}`
            alternating.find(".diS_en").prev().prev().html(hTml)
            break
        case "com":
            if(!eInf.auC){
                alternating.find(".com_in").html(`Leyendo <i>por palabras</i>, en ${eInf.lang}, en este caso, y derecho, el lema de <i>${eInf.com}</i> en ${eInf.lang}, <i>${eInf.name.name}</i>, es perfectamente hasta el final el nombre de la empresa <i>${eInf.com}</i>, y tiene un "Take care of the ladies for me", así:`)
            }else{
                alternating.find(".com_in").html(`Leyendo <i>por palabras</i>, en ${eInf.lang}, en este caso, y al revés, el lema de <i>${eInf.com}</i> en ${eInf.lang}, <i>${eInf.name.name}</i>, es perfectamente hasta el principio el nombre de la empresa <i>${eInf.com}</i>, y tiene un "Take care of the ladies for me", así:`)
            }
            break
        case "pro":
            if(!eInf.auC){
                alternating.find(".pro_in").html(`Leyendo <i>por palabras</i>, en ${eInf.lang}, en este caso, y derecho, el lema de <i>${eInf.pro}</i> en ${eInf.lang}, <i>${eInf.name.name}</i>, es perfectamente hasta el final el nombre de <i>${eInf.pro}</i>, y tiene un "Cuídeme a las niñas", así:`)
            }else{
                alternating.find(".pro_in").html(`Leyendo <i>por palabras</i>, en ${eInf.lang}, en este caso, y al revés, el lema de <i>${eInf.pro}</i> en ${eInf.lang}, <i>${eInf.name.name}</i>, es perfectamente hasta el principio el nombre de <i>${eInf.pro}</i>, y tiene un "Cuídeme a las niñas", así:`)
            }
            break
    }
}

var $this 
var hashes= {}; 
var nonBuilt; 
var ctrlMShift= false; 
var ctrl_k= false;
var shift_k= false; 
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
                    $("#setter")[0].innerHTML = "";
                    $(".ui-resizable").width(function(){return `${$(this).width() * 100 / $(this).parent().width()}%`})

                }
            });

            jQuery('#text > p > b').filter(function(){return jQuery(this).text() == '⚠'? true: false}).each(function(){
                observer.observe(jQuery(this)[0]); 
            })
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
            
purger.index= 28;
                 
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
        console.log("Purged!"); 
    }; 
}; 

purger.super_purge= function( a ){
if(!((typeof purger.index.in !== "undefined" && purger.index.in !== parseInt(localStorage.getItem("safety_purge"))) || (typeof a != "undefined" && a === "bypass")))return
localStorage.clear()
localStorage.setItem("safety_purge", purger.index.in)
console.log("superPurged All files and file_trees were also deleted!")
}
   
document.addEventListener("keydown", function(i){(i.keyCode == 13 && !!window.getSelection().focusNode && $(window.getSelection().focusNode.parentElement).is(".revelar"))? $(window.getSelection().focusNode.parentElement).click(): 1; 
//

}); 
                                   
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
$(document).on("mousemove", function(l){
    $(l.target).is(".quoTe")?$(".quoTe").text() == `"ricas, ricas hasta la chimba"`?1:$(".quoTe").text(`"ricas, ricas hasta la chimba"`):$(".quoTe").text() == `ricas, ricas hasta la chimba`?2:$(".quoTe").text(`ricas, ricas hasta la chimba`)
})

function selectText(nodeId) {
    const node = jQuery(nodeId)[0];

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
    }
}

function clearSelection()
{
 if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}

options = {
  root: document,
  rootMargin: "0px",
  threshold: 1.0,
};

callback = (entries, observer) => {
  entries.forEach((entry) => {
        if(entry.intersectionRatio == 1 && typeof entry.target.blink_interval == "undefined"){
            entry.target.blinks= 0;
            entry.target.blink_interval= setInterval(function(){
                if(entry.target.blinks <= 4){
                    if(entry.target.blinks/2 == parseInt(entry.target.blinks/2)){
                        selectText(entry.target)
                    }else{
                        clearSelection()
                    }
                    entry.target.blinks++
                }else{
                    clearInterval(entry.target.blink_interval)
                    clearSelection()
                    delete entry.target.blink_interval
                }
            }, 353)
        }
  });
};
observer = new IntersectionObserver(callback, options);

jQuery('#text > p > b').filter(function(){return jQuery(this).text() == '⚠'? true: false}).each(function(){
    observer.observe(jQuery(this)[0]); 
})

if("undefined"!=typeof $("h2").filter(function(){if($(this).text() == decodeURI(window.location.hash).slice(1)){return true}else{return false}})[0])$("h2").filter(function(){if($(this).text() == decodeURI(window.location.hash).slice(1)){return true}else{return false}})[0].scrollIntoView({block:"center"})

$(".nombre").on("click", function(){
    if("undefined"!=typeof useLinks){
        /*$(this).is(".activeforURIinfo")?*/window.location.hash= `${alternatives[Object.keys(alternatives)[2]].name.name} (${alternatives[Object.keys(alternatives)[2]].name.hyphenation})`/*:1*/
        $("#to_copy_to_clipboaRd").text(`${decodeURI(window.location.origin)}${decodeURI(window.location.pathname)}#${alternatives[Object.keys(alternatives)[2]].name.name} (${alternatives[Object.keys(alternatives)[2]].name.hyphenation})`)
        $(this).is(".activeforURIinfo")?$("#to_copy_to_clipboaRd").CopyToClipboard():1
    }
})

$('.poema p span, #article #text span.tiTle, #article #text span.Titled').tooltip({
    track: true,
    show: {
        effect: "none",
        delay: 0
    },
    open: function(event, ui) {
        if (typeof(event.originalEvent) === 'undefined') {
            return false;
        }
        ý= $(this); 
       
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
$(".poema .name").on("click", function(){
  play_Tts($(this).text(), $(this).attr("lang"))
})

$(".pseudoBuTton").on("click", function(){
//
play_Tts(saved_selecTed_text, $(".accessibiliTyDialog select option:selected").attr("value"))
})
$(".pseudoBuTton1").on("click", function(){
//
play_Tts($("#full_TextTextToSpeech textarea").val(), $($(".accessibiliTyDialog select option:selected")[1]).attr("value"))
})
$(".nokbwarning").on("click", function(e){
    setTimeout(function(){$(this).removeClass("visible")}, 210)
            //e.preventDefault()
    e.stopPropagation()
    if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length)aE.focus()
})
$(window).on("focus", function(e){
    if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length){
        setTimeout(function(){!$(document.activeElement).is("#superInformation_as input")?(function(){if("undefined" !=typeof aE && $("#superInformation_as").find(aE).length){aE.focus()}else{$(".nokbwarning").removeClass("visible")}})():1341;}, 217)
    }else{
        $(".nokbwarning").removeClass("visible")
    }
})

$(".video .Enlarge").on("click", function(){
    var vid = $(this).parent().find("video")[0];
    vid.play();
    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
      vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    }
});
to_copy_to_clipboaRd= $("#to_copy_to_clipboaRd")
dEP= "‼"
aT= "@"
verTl= "|"

$(".pseudoSendBuTton").on("click", function(){
switch(alternatives["id"]){
    case "FGlqw2x":
         informaTion= {'sib': {nombre: $("#superInformation_as table .sib_name").val()}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `sib`)
        break;
    case "alcN329":case "Ondoi2n":
         informaTion= {'art': {nombre: $("#superInformation_as table .art_name").val(), 'es':{gentilicio: $("#superInformation_as table .art_gent").val(), hTRT: $("#superInformation_as table .art_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .art_gent").next().val(), hTRT: $("#superInformation_as table .art_hTrt").next().val()}}}
         fill_daTa(`md_filling_superInformation`, `art`)
        break;
    case "m32c2b4":
         informaTion=  {'arS': {nombre: $("#superInformation_as table .sib_name").val(), 'es':{gentilicio: $("#superInformation_as table .art_gent").val(), hTRT: $("#superInformation_as table .art_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .art_gent").next().val(), hTRT: $("#superInformation_as table .art_hTrt").next().val()}}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `arS`)
        break;
    case "alLNd2d":
         informaTion= {'bnS': {nombre: `${$("#superInformation_as table .sib_name").val()}@${$("#superInformation_as table .sib_hTrt").val()} ${$("#superInformation_as table .sib_gent").val()}=${$("#superInformation_as table .sib_gent").next().val()} ${$("#superInformation_as table .sib_hTrt").next().val()}`, 'es':{hTRTb: $("#superInformation_as table .ban_hTrt").val(), bnd: $("#superInformation_as table .ban_name").val()}, 'en':{hTRTb: $("#superInformation_as table .ban_hTrt").next().val(), bnd: $("#superInformation_as table .ban_name").next().val()}}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `bnS`)
        break;
    case "2oJdin2":case "nJBw2f3":
         informaTion= {'name': {nT: {es: $("#superInformation_as table .mov_name").val(), en: $("#superInformation_as table .mov_name").next().val()}}, 'dir': {nombre: $("#superInformation_as table .dir_name").val(),'es':{gentilicio: $("#superInformation_as table .dir_gent").val(), hTRT: $("#superInformation_as table .dir_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .dir_gent").next().val(), hTRT: $("#superInformation_as table .dir_hTrt").next().val()}}}
         fill_daTa(`md_filling_superInformation`, `dir`)
        break;
    case "Biujbc2":
         informaTion= {'name': {nT: {es: $("#superInformation_as table .mov_name").val(), en: $("#superInformation_as table .mov_name").next().val()}}, 'dir': {nombre: $("#superInformation_as table .dir_name").val(),'es':{gentilicio: $("#superInformation_as table .dir_gent").val(), hTRT: $("#superInformation_as table .dir_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .dir_gent").next().val(), hTRT: $("#superInformation_as table .dir_hTrt").next().val()}}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `diS`)
        break;
    case "jnIFn3d":case "Hi2Cj29":
         informaTion= {'name': {nT: {es: $("#superInformation_as table .ser_name").val(), en: $("#superInformation_as table .ser_name").next().val()}}, 'cre': {nombre: $("#superInformation_as table .cre_name").val(),'es':{gentilicio: $("#superInformation_as table .cre_gent").val(), hTRT: $("#superInformation_as table .cre_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .cre_gent").next().val(), hTRT: $("#superInformation_as table .cre_hTrt").next().val()}}}
         fill_daTa(`md_filling_superInformation`, `cre`)
        break;
    case "LNjndn1":
         informaTion= {'name': {nT: {es: $("#superInformation_as table .ser_name").val(), en: $("#superInformation_as table .ser_name").next().val()}}, 'cre': {nombre: $("#superInformation_as table .cre_name").val(),'es':{gentilicio: $("#superInformation_as table .cre_gent").val(), hTRT: $("#superInformation_as table .cre_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .cre_gent").next().val(), hTRT: $("#superInformation_as table .cre_hTrt").next().val()}}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `crS`)
        break;
    case "LKKCoi2":case "Ll3nod1":
         informaTion= {'esc': {nombre: $("#superInformation_as table .wri_name").val(),'es':{gentilicio: $("#superInformation_as table .wri_gent").val(), hTRT: $("#superInformation_as table .wri_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .wri_gent").next().val(), hTRT: $("#superInformation_as table .wri_hTrt").next().val()}}}
         fill_daTa(`md_filling_superInformation`, `esc`)
        break;
    case "Llndj3c":
         informaTion= {'esc': {nombre: $("#superInformation_as table .wri_name").val(),'es':{gentilicio: $("#superInformation_as table .wri_gent").val(), hTRT: $("#superInformation_as table .wri_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .wri_gent").next().val(), hTRT: $("#superInformation_as table .wri_hTrt").next().val()}}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `esS`)
        break;
    case "NiCju2d":case "cH2dDnC":
         informaTion= {'pin': {nombre: $("#superInformation_as table .art_name").val(),'es':{gentilicio: $("#superInformation_as table .art_gent").val(), hTRT: $("#superInformation_as table .art_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .art_gent").next().val(), hTRT: $("#superInformation_as table .art_hTrt").next().val()}}}
         fill_daTa(`md_filling_superInformation`, `pin`)
        break;
    case "Lmdi2md":
         informaTion= {'pin': {nombre: $("#superInformation_as table .art_name").val(),'es':{gentilicio: $("#superInformation_as table .art_gent").val(), hTRT: $("#superInformation_as table .art_hTrt").val()}, 'en':{gentilicio: $("#superInformation_as table .art_gent").next().val(), hTRT: $("#superInformation_as table .art_hTrt").next().val()}}, auC: $("#superInformation_as table .auC")[0].checked}
         fill_daTa(`md_filling_superInformation`, `piS`)
        break;
    case "amcaoMd":case "kLwicn2":
         informaTion= {'dev': {'es':{nombre: $("#superInformation_as table .dev_name").val(), gentilicio: $("#superInformation_as table .dev_gent").val(), hTRT: $("#superInformation_as table .dev_hTrt").val()}, 'en':{nombre: $("#superInformation_as table .dev_name").next().val(), gentilicio: $("#superInformation_as table .dev_gent").next().val(), hTRT: $("#superInformation_as table .dev_hTrt").next().val()}}}
         fill_daTa(`md_filling_superInformation`, `dev`)
        break;
    default:
         fill_Table([{T: "superInformation irrelevante", _id: "sib_name", _cusTom: `Autodestrucción (3)`}])
         var counTdown= 3
         console.log(counTdown)
         const selfDest= setInterval(function(){
            if(counTdown > 0){
                counTdown--
                $("#superInformation_as table tbody th:last-child").text(`Autodestrucción (${counTdown})`)
            }if(!!!counTdown){
                $(".accessibiliTyDialog").removeClass("visible")
                clearInterval(selfDest)
            }
         }, 1000)
        break;
    }
    alternating.find('p span').tooltip({
        track: true,
        show: {
            effect: "none",
            delay: 0
        },
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            ý= $(this); 
           
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
    alternating.find(".name").on("click", function(){
        play_Tts($(this).text(), $(this).attr("lang"))
    })   
})
numb= ''
$(document).on("keydown", function(R){
    if($(".accessibiliTyDialog").is(".visible") && $("#superInformation_as").is(".visible") && $("#help_secTion").is(".visible")){  
    switch(R.keyCode){
        case 49:
            numb= `${numb}1`
            break;
        case 50:
            numb= `${numb}2`
            break;
        case 51:
            numb= `${numb}3`
            break;
        case 52:
            numb= `${numb}4`
            break;
        case 53:
            numb= `${numb}5`
            break;
        case 54:
            numb= `${numb}6`
            break;
        case 55:
            numb= `${numb}7`
            break;
        case 56:
            numb= `${numb}8`
            break;
        case 57:
            numb= `${numb}9`
            break;
        case 113:
            if($(".accessibiliTyDialog").is(".visible") && $("#superInformation_as").is(".visible") && $("#help_secTion").is(".visible")){$("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}]`) == 0){return true}else{return false}}).find("a").length?(function(){aTJ_8= $("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}]`) == 0){return true}else{return false}}).find("a"); aTJ_8.css({"outline": "2px solid #93cbff"});setTimeout(function(){aTJ_8.css({"outline": ""})}, 1253);$("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}]`) == 0){return true}else{return false}}).find("a")[0].click()})():0;$("#help_secTion sup a").html(function(){return $(this).text()})};numb= '';
            break;

    }
    if([49,50,51,52,53,54,55,56,57].indexOf(R.keyCode)+1){
        $("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}`) == 0){return true}else{return false}}).find("a").html(function(){return ('[<span>' + numb + '</span>' + $(this).text().slice(1, -1).slice(numb.length) + ']')})
        $("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}`) == 0){return false}else{return true}}).find("a").html(function(){return $(this).text()})
        if("undefined" !=typeof(a))clearTimeout(a)
        a= setTimeout(function(){if($(".accessibiliTyDialog").is(".visible") && $("#superInformation_as").is(".visible") && $("#help_secTion").is(".visible")){$("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}]`) == 0){return true}else{return false}}).find("a").length?(function(){aTJ_8= $("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}]`) == 0){return true}else{return false}}).find("a"); aTJ_8.css({"outline": "2px solid #93cbff"});setTimeout(function(){aTJ_8.css({"outline": ""})}, 1253);$("#help_secTion sup").filter(function(){if($(this).text().indexOf(`[${numb}]`) == 0){return true}else{return false}}).find("a")[0].click()})():0;$("#help_secTion sup a").html(function(){return $(this).text()})};numb= '';}, 2900)
    }
    }
})
$( function($) {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";

        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
            delay: 0,
            unselectable: false,
            minLength: 0,
            source: this._source.bind( this ),
            select: function(event, ui) {/**/}
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Mostrar todas las opciones" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .on( "mousedown", function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on( "click", function() {
            input.trigger( "focus" );
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " no tiene coincidencias" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
 
    $( "#combobox" ).combobox();
    $( "#combobox1" ).combobox();
  } );
document.addEventListener("mousedown", function(x){
    $(x.target).is(".ui-menu#ui-id-1 .ui-menu-item-wrapper ")? $(".custom-combobox-input")[0].dispatchEvent(new KeyboardEvent('keydown',{keyCode: 13})):12;
    $(x.target).is(".ui-menu#ui-id-2 .ui-menu-item-wrapper ")? $(".custom-combobox-input")[1].dispatchEvent(new KeyboardEvent('keydown',{keyCode: 13})):12;
})
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
        console.log('this');
        if($(this).attr("contenteditable") == "true"){
            $(this).attr("contenteditable", "false") 
            alternating= $(this).parent(); alternate(`notSuperInformation`);
        }else{
            $(".nombre").filter(function(){if($(this).attr("contenteditable")=="true"){return true}}).attr("contenteditable", "false")
            $(this).attr("contenteditable", "true") 
            $(this).focus()
        }
  }
})

$("header").after(`<aside class="searchResults hidden">
        <div>
        </div>
    </aside>`)
possibleResults=[[["Megan Denise Fox", "MeganFox"], {users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Laura Escobar Bonnett", "L"], {users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], type: "Usuario"}], [["Shailene Diann Woodley", "whale_Shailene"], {users_name: "Shailene Diann Woodley", username: "whale_Shailene", profilePic: "/resources/images/whale_Shailene/RKRWeNhDgJ_tn.jpg", rol: ["SEO", "+98"], type: "Usuario"}], [["Luis Eduardo Gallego García", "A.K.A._Dizzy"], {users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], type: "Usuario"}], [["Dios Jesucristo", "G-Suschrist"], {users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Aura María Cardona Demasiado", "AuraCardonaC"], {users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], type: "Usuario"}], [["Juan José Martínez Vidal", "LamaMadora"], {users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], type: "Usuario"}], , [["Walter White", "user"], {users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], type: "Usuario"}], [["A0"], {name: "A0", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/A0", type: "Blog"}], [["Algo Más Sobre Mí"], {name: "Algo Más Sobre Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algo Más Sobre Mí", type: "Blog"}], [["Algunas Propiedades De Mis Escritos"], {name: "Algunas Propiedades De Mis Escritos", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunas Propiedades De Mis Escritos", type: "Blog"}], [["Algunos Poemas Que He Escrito"], {name: "Algunos Poemas Que He Escrito", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunos Poemas Que He Escrito", type: "Blog"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/aNGEL();", type: "Blog"}], [["Constructor And Business Partners (Dedicatorias)"], {name: "Constructor And Business Partners (Dedicatorias)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners (Dedicatorias)", type: "Blog"}], [["Constructor And Business Partners"], {name: "Constructor And Business Partners", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners", type: "Blog"}], [["Dinosaurios"], {name: "Dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Dinosaurios", type: "Blog"}], [["El Pueblo Blanco"], {name: "El Pueblo Blanco", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Pueblo Blanco", type: "Blog"}], [["El Salomé Castrillón"], {name: "El Salomé Castrillón", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Salomé Castrillón", type: "Blog"}], [["Equilibrio"], {name: "Equilibrio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Equilibrio", type: "Blog"}], [["FRANCIA Y ElDelprincipio"], {name: "FRANCIA Y ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/FRANCIA Y ElDelprincipio", type: "Blog"}], [["La Larga Historia"], {name: "La Larga Historia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Larga Historia", type: "Blog"}], [["La Perrita Del Poste"], {name: "La Perrita Del Poste", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Perrita Del Poste", type: "Blog"}], [["La Sagrada Biblia"], {name: "La Sagrada Biblia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Sagrada Biblia", type: "Blog"}], [["Las Flores Malditas (Introducción)"], {name: "Las Flores Malditas (Introducción)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Las Flores Malditas (Introducción)", type: "Blog"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/por_siLaBas();", type: "Blog"}], [["Regalos Para Mí"], {name: "Regalos Para Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Regalos Para Mí", type: "Blog"}], [["Sus Rizos Color Caramelo"], {name: "Sus Rizos Color Caramelo", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Sus Rizos Color Caramelo", type: "Blog"}], [["Una Breve Historia De La Creación"], {name: "Una Breve Historia De La Creación", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Una Breve Historia De La Creación", type: "Blog"}], [["xWo3"], {name: "xWo3", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/xWo3", type: "Blog"}], [["dinosaurios"], {name: "dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/82DcC9s2sS0cZ", type: "Proyecto"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/f9d2cCa2Cxc31", type: "Proyecto"}], [["Christmas Gifts From The Gallego Escobar Family"], {name: "Christmas Gifts From The Gallego Escobar Family", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/h3dd2cDcsW2R3", type: "Proyecto"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k92dJd29D920d", type: "Proyecto"}], [["Robot De Dedicatorias"], {name: "Robot De Dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k9u8hH78jJi27", type: "Proyecto"}], [["Robot de dedicatorias"], {name: "Robot de dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/s98f39c0d9090", type: "Proyecto"}], [["Widgets"], {name: "Widgets", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/i9d2g2cftdCds", type: "Proyecto"}], [["ElDelprincipio"], {name: "ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/tY829dD0290df", type: "Proyecto"}], [["myProjext1"], {name: "myProjext1", users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], href: "/MeganFox/p/iD8299D88d3D2", type: "Proyecto"}], [["minesweeper"], {name: "minesweeper", users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], href: "/L/p/2kNoind8JsjD9", type: "Proyecto"}], [["lX"], {name: "lX", users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], href: "/AuraCardonaC/p/di29D8jj8dj2d", type: "Proyecto"}], [["--The Whole Board--", "The Whole Board"], {name: "--The Whole Board--", users_name: "Shailene Diann Woodley", username: "whale_Shailene", profilePic: "/resources/images/whale_Shailene/RKRWeNhDgJ_tn.jpg", rol: ["SEO", "+98"], href: "/whale_Shailene/p/K28fcCjs9J20v", type: "Proyecto"}], [["snka"], {name: "snka", users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], href: "/G-Suschrist/p/Jkik39djfX8iX", type: "Proyecto"}], [["Vv11"], {name: "Vv11", users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], href: "/LamaMadora/p/u889Dj8Q22dSC", type: "Proyecto"}], [["_dvlpmt"], {name: "_dvlpmt", users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], href: "/user/p/8d299s2gvkL9", type: "Proyecto"}], [["La Perrita Del Poste", "PpP"], {users_name: "La Perrita Del Poste", username: "PpP", profilePic: "/resources/images/PpP/bZj2vYrklo_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["ElDelprincipio", "Eld"], {users_name: "ElDelprincipio", username: "Eld", profilePic: "/resources/images/Eld/oow4doJxKO_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Para Que Rayes", "Photopea", "app"], {app_name: "Para Que Rayes", href: "/app/ParaQueRayes", screenshot_photo: "/resources/screenshots/ParaQueRayes_screenshot.jpg", type: "app"}], [["Matemáticas", "Curso", "Curso de Matemáticas"], {curso_name: "Curso de Matemáticas", href: "/curso-mat", screenshot_photo: "/resources/screenshots/matemáticas_screenshot.png", type: "curso"}], [["Filosofía", "Curso", "Curso de Filosofía"], {curso_name: "Curso de Filosofía", href: "/curso-fil", screenshot_photo: "/resources/screenshots/filosofía_screenshot.png", type: "curso"}]]
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
if(results[f].type == "app"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="screenshot">
<img src="` + results[f].screenshot_photo + `" alt=""></div>
<div class="appName">` + `<a class= "name">`  + results[f].app_name +  `</a></div>               
<span class="resulttype">App</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "curso"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="screenshot">
<img src="` + results[f].screenshot_photo + `" alt=""></div>
<div class="cursoName">` + `<a class= "name">`  + results[f].curso_name +  `</a></div>               
<span class="resulttype">Curso</span>
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
nexT= function(L, k){
    return L + 1 <= k? L + 1: 0
}
pRev= function(L, k){
    return L - 1 >= 0? L - 1: k
}
sortgnp= function(a){
    s= a.split("| ")
    s= s.sort(Intl.Collator().compare);
    var k= []
    for(e in s){
        if(s[e].split("@").length - 1){
            if(s[e].split("@")[1]== "na"){
                k[k.length]= s[e]
            }
        }
    }
    for(e in s){
        if(s[e].split("@").length - 1){
            if(s[e].split("@")[1]== "ta"){
                k[k.length]= s[e]
            }
        }
    }
    for(e in s){
        if(s[e].split("@").length - 1){
            if(s[e].split("@")[1]== "no"){
                k[k.length]= s[e]
            }
        }
    }
    for(e in s){
        if(s[e].split("@").length - 1){
            if(s[e].split("@")[1]== "to"){
                k[k.length]= s[e]
            }
        }
    }
    for(e in s){
        if(!(s[e].split("@").length - 1)){
                k[k.length]= s[e]
        }
    }
    return k.join("| ")
}
mulTiple= function(a, sep){
    if(sep=="y"){
        bb= a.split("| ")
        c= ""
        if(bb[0].split("@").length<3){
            for(ik in bb){
                if(bb[ik].split("@").length > 1){
                    par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
                    if(c.indexOf(par) != -1){
                        c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                        par= ""
                    }
                    var nexxt= bb[parseInt(ik) + 1]
                    var prrev= bb[parseInt(ik) - 1]
                    c= `${c}${(("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par}, `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }else{
                    c= `${c}${(parseInt(ik) == bb.length - 1 && !!(bb.length-1))? ` ${sep} `: ", "}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }
            }
        }else{
            for(ik in bb){
                hTR_t=sep=="y"? bb[ik].split("@")[2].split("=")[0]:bb[ik].split("@")[2].split("=")[1]
                if(bb[ik].split("@").length > 1){
                    par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
                    if(c.indexOf(par) != -1){
                        c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                        par= ""
                    }
                    var nexxt= bb[parseInt(ik) + 1]
                    var prrev= bb[parseInt(ik) - 1]
                    c= `${c}${(("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par},`:``} ${hTR_t} <span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }else{
                    c= `${c}${parseInt(ik) == bb.length - 1? ` ${sep} `: ", "}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }
            }
        }
        return c.slice(2).trim().replaceAll("  ", " ")
    }else{

        bb= a.split("| ")
        c= ""
        if(bb[0].split("@").length<3){
            for(ik in bb){
                if(bb[ik].split("@").length > 1){
                    par= (function(){switch(bb[ik].split("@")[1]){case "na":return "sister";break;case "ta":return "little sister";break;case "no":return "brother";break;case "to":return "little brother";break;}})()
                    if(c.indexOf(par) != -1){
                        c= c.replaceAll(`your ${par},`, `your ${par}s,`)
                        par= ""
                    }
                    var nexxt= bb[parseInt(ik) + 1]
                    var prrev= bb[parseInt(ik) - 1]
                    c= `${c}${(("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'your'}${!!par?` ${par}, `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }else{
                    c= `${c}${(parseInt(ik) == bb.length - 1 && !!(bb.length-1))? ` ${sep} `: ", "}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }
            }
        }else{
            for(ik in bb){
                hTR_t=sep=="y"? bb[ik].split("@")[2].split("=")[0]:bb[ik].split("@")[2].split("=")[1]
                if(bb[ik].split("@").length > 1){
                    par= (function(){switch(bb[ik].split("@")[1]){case "na":return "sister";break;case "ta":return "little sister";break;case "no":return "brother";break;case "to":return "little brother";break;}})()
                    if(c.indexOf(par) != -1){
                        c= c.replaceAll(`your ${par},`, `your ${par}s,`)
                        par= ""
                    }
                    var nexxt= bb[parseInt(ik) + 1]
                    var prrev= bb[parseInt(ik) - 1]
                    c= `${c}${(("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'your'}${!!par?` ${par},`:``} ${hTR_t} <span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }else{
                    c= `${c}${parseInt(ik) == bb.length - 1? ` ${sep} `: ", "}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
                }
            }
        }
        return c.replaceAll("s's", "s'").slice(2).trim().replaceAll("  ", " ")
    }
}
capitalize= function(a){
    return a.replace(/^\w/, c => c.toUpperCase())
}
mulTiple_r= function(a, sep, r_){
if(sep=="y"){
    a= a.split("| ").filter(function(R){if(R.split("@").length-1){return true}else{return false}}).join("| ")
    bb= a.split("| ")
    c= ""

    for(ik in bb){
        
        par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
        if(c.indexOf(par) != -1){
            c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
            par= ""
        }
        var nexxt= bb[parseInt(ik) + 1]
        var prrev= bb[parseInt(ik) - 1]
        if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]!='a' && ("undefined"==typeof prrev || ("undefined"!=typeof prrev && prrev.split("@")[1][1]=='a')))){
            c= `${c}; ${r_};`
        }
        c= `${c}${((("undefined"!=typeof nexxt) && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
        if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]=='a' && parseInt(ik) == bb.length - 1)){
            c= `${c}; ${r_}`
        }
    }
    return c.slice(2).trim().replaceAll("tus hermanas","el hermanito de").replaceAll("tu hermana","el hermanito de").replaceAll("tus hermanitas","el hermano de").replaceAll("tu hermanita","el hermano de").replaceAll("tus hermanos","el hermanito de").replaceAll("tu hermano","el hermanito de").replaceAll("tus hermanitos","el hermano de").replaceAll("tu hermanito","el hermano de").replaceAll(";,", ";")
}else{
    a= a.split("| ").filter(function(R){if(R.split("@").length-1){return true}else{return false}}).join("| ")
    bb= a.split("| ")
    c= ""

    for(ik in bb){
        
        par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
        if(c.indexOf(par) != -1){
            c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
            par= ""
        }
        var nexxt= bb[parseInt(ik) + 1]
        var prrev= bb[parseInt(ik) - 1]
        if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]!='a' && ("undefined"==typeof prrev || ("undefined"!=typeof prrev && prrev.split("@")[1][1]=='a')))){
            c= `${c}; ${r_};`
        }
        c= `${c}${((("undefined"!=typeof nexxt) && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
        if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]=='a' && parseInt(ik) == bb.length - 1)){
            c= `${c}; ${r_}`
        }
    }
    c= c.slice(2).trim().replaceAll("tus hermanas","el hermanito de").replaceAll("tu hermana","el hermanito de").replaceAll("tus hermanitas","el hermano de").replaceAll("tu hermanita","el hermano de").replaceAll("tus hermanos","el hermanito de").replaceAll("tu hermano","el hermanito de").replaceAll("tus hermanitos","el hermano de").replaceAll("tu hermanito","el hermano de").replaceAll(";,", ";")
    if(c.indexOf("el hermanito")+1 && c.indexOf("el hermano")+1 && c.indexOf(`; ${r_}`)> c.indexOf(`el hermanito`) && c.indexOf(`; ${r_}`)> c.indexOf(`el hermano`)){
    c=c.replaceAll(`; ${r_}`, `'s ${((c.indexOf("el hermanito")+1 &&c.indexOf("el hermano")+1) && c.indexOf("el hermanito")>c.indexOf("el hermano"))?"brother": "little brother"}; ${r_}` )
    c= c.replace(`'s little brother`, `'s brother`)
    c= c.replace(`, el hermano de`, `'s little brother,`)
    c= c.replace(`el hermanito de`, ``)
    if((c.indexOf("el hermanito")+1 && c.indexOf("el hermano")+1)){
    c= c.replace("el hermano de", "'s little brother")
    c= c.replace(" and 's little brother", "'s little brother, and")
    c= `${c}'s brother`
    c= c.replace(" el hermanito de", "")
    }
    }else if(c.indexOf("el hermanito")+1 && c.indexOf(`; ${r_}`)> c.indexOf(`el hermanito`)){
        c=c.replaceAll(`; ${r_}`, `'s little brother; ${r_}` )
        c= c.replace("el hermanito de", "")
    }else if(c.indexOf("el hermano")+1 && c.indexOf(`; ${r_}`)> c.indexOf(`el hermano`)){
        c=c.replaceAll(`; ${r_}`, `'s brother; ${r_}` )
        c= c.replace("el hermano de", "")
    }
    if(c.indexOf(`el hermanito`)+1 && c.indexOf(`el hermano`)+1){
    c=c.replace("el hermano de", "'s little brother").replace(` and 's little brother`, `'s little brother and`).replace(`, 's little brother`, `'s little brother, `)
    c=`${c}'s brother`
    c=c.replace(" el hermanito de", "")
    }else if(c.indexOf(`el hermanito`)+1){
    c=`${c}'s little brother`
    c=c.replace(" el hermanito de", "").replace("el hermanito de", "")
    }else if(c.indexOf(`el hermano`)+1){
    c=`${c}'s brother`
    c=c.replace(" el hermano de", "").replace("el hermano de", "")
    }
    
    return c.replaceAll("s's", "s'").trim()
}
}
    
    
    
mulTiple_Sr= function(a, sep){
var ak
if(sep=="y"){
    a= a.split("| ").filter(function(R){if(R.split("@").length-1){return true}else{return false}}).join("| ")
    bb= a.split("| ")
    c= ""
    if(a.indexOf("@na")+1 || a.indexOf("@ta")+1){
        for(ik in bb){
            if(parseInt(ik)==0){
                c= `${c}Del padre de`
            }
            par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
            if(c.indexOf(par) != -1){
                c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                par= ""
            }
            var nexxt= bb[parseInt(ik) + 1]
            var prrev= bb[parseInt(ik) - 1]
            if(bb[ik].split("@")[1][1]=="o" && prrev.split("@")[1][1]== "a"){
                c= `${c}; el tuyo y el de`
            }
            c= `${c}${("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1))))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
            if(bb[ik].split("@")[1][1]=="a" && parseInt(ik)== bb.length-1){
                c= `${c}; y el tuyo`
            }
        }
    }else{
        for(ik in bb){
            if(parseInt(ik)==0){
                c= `${c}De tu padre y el de`
            }
            par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
            if(c.indexOf(par) != -1){
                c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                par= ""
            }
            var nexxt= bb[parseInt(ik) + 1]
            var prrev= bb[parseInt(ik) - 1]
            c= `${c}${("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1))))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
        }
    }
    return c.trim().replaceAll("tus hermanas","el hermanito de").replaceAll("tu hermana","el hermanito de").replaceAll("tus hermanitas","el hermano de").replaceAll("tu hermanita","el hermano de").replaceAll("tus hermanos","el hermanito de").replaceAll("tu hermano","el hermanito de").replaceAll("tus hermanitos","el hermano de").replaceAll("tu hermanito","el hermano de").replaceAll(";,", ";").replaceAll("el hermano de", " ").replaceAll("el hermanito de", " ").replaceAll("de,", "de").replaceAll("   ", " ").split("").reverse().join("").replace(" ,", " y ").split("").reverse().join("")
}else{
a= a.split("| ").filter(function(R){if(R.split("@").length-1){return true}else{return false}}).join("| ")
    bb= a.split("| ")
    c= ""
    if(a.indexOf("@na")+1 || a.indexOf("@ta")+1){
        for(ik in bb){
            if(parseInt(ik)==0){
                c= `${c}From`
            }
            par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
            if(c.indexOf(par) != -1){
                c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                par= ""
            }
            var nexxt= bb[parseInt(ik) + 1]
            var prrev= bb[parseInt(ik) - 1]
            if(bb[ik].split("@")[1][1]=="o" && prrev.split("@")[1][1]== "a"){
                c= `${c}'s father; yours`
                ak= 3
            }
            c= `${c}${("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1))))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
            if(bb[ik].split("@")[1][1]=="a" && parseInt(ik)== bb.length-1){
                c= `${c}'s father; and yours`
                ak= 1
            }
        }
    }else{
        for(ik in bb){
            if(parseInt(ik)==0){
                c= `${c}From yours`
                ak= 2
            }
            par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
            if(c.indexOf(par) != -1){
                c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                par= ""
            }
            var nexxt= bb[parseInt(ik) + 1]
            var prrev= bb[parseInt(ik) - 1]
            c= `${c}${("undefined"!=typeof nexxt && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1))))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
        }
    }
    c= `${c.trim().replaceAll("tus hermanas","el hermanito de").replaceAll("tu hermana","el hermanito de").replaceAll("tus hermanitas","el hermano de").replaceAll("tu hermanita","el hermano de").replaceAll("tus hermanos","el hermanito de").replaceAll("tu hermano","el hermanito de").replaceAll("tus hermanitos","el hermano de").replaceAll("tu hermanito","el hermano de").replaceAll(";,", ";").replaceAll("el hermano de", " ").replaceAll("el hermanito de", " ").replaceAll("de,", "de").replaceAll("   ", " ").split("").reverse().join("").replace(" ,", " y ").split("").reverse().join("")}${ak==2?"'s father":ak==3?"'s":""}`
c=c.replaceAll("Del padre de", "From").replaceAll(" y ", " and ").replace("el de", "").replaceAll("From,", "From").replaceAll("and,", "and").replaceAll("From and ", "From ")
}
return c.replaceAll("s's", "s'")
}
mulTiple_crr= function(a, sep, r_){
if(sep== "y"){
    if(!(a.split("| ").length - 1)){
        bb= a.split("| ")
        par= (function(){switch(bb[0].split("@")[1][0]){case "n":return "hermanito";break;case "t":return "hermano";break;}})()
        if(bb[0].split("@")[1][1]=="a"){
            c= `mi ${par}; ${r_}`
        }else{
            c= `${r_}; mi ${par}`
        }
        return c.trim()
    }else{
        a= a.split("| ").filter(function(R){if(R.split("@").length-1){return true}else{return false}}).join("| ")
        bb= a.split("| ")
        c= ""
        for(ik in bb){

            par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
            if(c.indexOf(par) != -1){
                c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                par= ""
            }
            var nexxt= bb[parseInt(ik) + 1]
            var prrev= bb[parseInt(ik) - 1]
            if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]!='a' && ("undefined"==typeof prrev || ("undefined"!=typeof prrev && prrev.split("@")[1][1]=='a')))){
                c= `${c}; ${r_};`
            }
            c= `${c}${((("undefined"!=typeof nexxt) && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
            if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]=='a' && parseInt(ik) == bb.length - 1)){
                c= `${c}; ${r_}`
            }
        }
        return c.slice(2).trim().replaceAll("tus hermanas","el hermanito de").replaceAll("tu hermana","el hermanito de").replaceAll("tus hermanitas","el hermano de").replaceAll("tu hermanita","el hermano de").replaceAll("tus hermanos","el hermanito de").replaceAll("tu hermano","el hermanito de").replaceAll("tus hermanitos","el hermano de").replaceAll("tu hermanito","el hermano de").replaceAll(";,", ";")
    }
}else{
    if(!(a.split("| ").length - 1)){
        bb= a.split("| ")
        par= (function(){switch(bb[0].split("@")[1][0]){case "n":return "little brother";break;case "t":return "brother";break;}})()
        if(bb[0].split("@")[1][1]=="a"){
            c= `my ${par}; ${r_}`
        }else{
            c= `${r_}; my ${par}`
        }
        return c.trim()
    }else{
        a= a.split("| ").filter(function(R){if(R.split("@").length-1){return true}else{return false}}).join("| ")
        bb= a.split("| ")
        c= ""
        for(ik in bb){

            par= (function(){switch(bb[ik].split("@")[1]){case "na":return "hermana";break;case "ta":return "hermanita";break;case "no":return "hermano";break;case "to":return "hermanito";break;}})()
            if(c.indexOf(par) != -1){
                c= c.replaceAll(`tu ${par}`, `tus ${par}s`)
                par= ""
            }
            var nexxt= bb[parseInt(ik) + 1]
            var prrev= bb[parseInt(ik) - 1]
            if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]!='a' && ("undefined"==typeof prrev || ("undefined"!=typeof prrev && prrev.split("@")[1][1]=='a')))){
                c= `${c}; ${r_};`
            }
            c= `${c}${((("undefined"!=typeof nexxt) && "undefined"!=typeof prrev && bb[ik].split("@")[1] == prrev.split("@")[1] && ((bb[ik].split("@")[1] != nexxt.split("@")[1]) || (!(nexxt.split("@").length-1)))) || (parseInt(ik)==bb.length-1 && !!(bb.length-1)))?` ${sep} `: ', '}${!par?'':'tu'}${!!par?` ${par} `:``}<span class= "name" lang= "${bb[ik].split("@")[0].split('‼').length-1?bb[ik].split("@")[0].split('‼')[1]:'en'}">${bb[ik].split("@")[0].split('‼')[0]}</span>`
            if("undefined"!=typeof r_ && (bb[ik].split("@")[1][1]=='a' && parseInt(ik) == bb.length - 1)){
                c= `${c}; ${r_}`
            }
        }

        c= c.slice(2).trim().replaceAll("tus hermanas","el hermanito de").replaceAll("tu hermana","el hermanito de").replaceAll("tus hermanitas","el hermano de").replaceAll("tu hermanita","el hermano de").replaceAll("tus hermanos","el hermanito de").replaceAll("tu hermano","el hermanito de").replaceAll("tus hermanitos","el hermano de").replaceAll("tu hermanito","el hermano de").replaceAll(";,", ";")
        if(c.indexOf("el hermanito")+1 && c.indexOf("el hermano")+1 && c.indexOf(`; ${r_}`)> c.indexOf(`el hermanito`) && c.indexOf(`; ${r_}`)> c.indexOf(`el hermano`)){
        c=c.replaceAll(`; ${r_}`, `'s ${((c.indexOf("el hermanito")+1 &&c.indexOf("el hermano")+1) && c.indexOf("el hermanito")>c.indexOf("el hermano"))?"brother": "little brother"}; ${r_}` )
        c= c.replace(`'s little brother`, `'s brother`)
        c= c.replace(`, el hermano de`, `'s little brother,`)
        c= c.replace(`el hermanito de`, ``)
        if((c.indexOf("el hermanito")+1 && c.indexOf("el hermano")+1)){
        c= c.replace("el hermano de", "'s little brother")
        c= c.replace(" and 's little brother", "'s little brother, and")
        c= `${c}'s brother`
        c= c.replace(" el hermanito de", "")
        }
        }else if(c.indexOf("el hermanito")+1 && c.indexOf(`; ${r_}`)> c.indexOf(`el hermanito`)){
            c=c.replaceAll(`; ${r_}`, `'s little brother; ${r_}` )
            c= c.replace("el hermanito de", "")
        }else if(c.indexOf("el hermano")+1 && c.indexOf(`; ${r_}`)> c.indexOf(`el hermano`)){
            c=c.replaceAll(`; ${r_}`, `'s brother; ${r_}` )
            c= c.replace("el hermano de", "")
        }
        if(c.indexOf(`el hermanito`)+1 && c.indexOf(`el hermano`)+1){
        c=c.replace("el hermano de", "'s little brother").replace(` and 's little brother`, `'s little brother and`).replace(`, 's little brother`, `'s little brother, `)
        c=`${c}'s brother`
        c=c.replace(" el hermanito de", "")
        }else if(c.indexOf(`el hermanito`)+1){
        c=`${c}'s little brother`
        c=c.replace(" el hermanito de", "")
        }else if(c.indexOf(`el hermano`)+1){
        c=`${c}'s brother`
        c=c.replace(" el hermano de", "")
        }
        return c.replaceAll("s's","s'").trim()
    }
}
}
expand= function(c){
    switch(c){
        case "ns":
            return "<i>Letras, su nombre en el abecedario</i> en Español" 
            break;
        case "ne":
            return "<i>Letras, su nombre en el abecedario</i> en Inglés" 
            break;
        case "hs":
            return "<i>Letras, el sonido que hacen</i> en Español" 
            break;
        case "he":
            return "<i>Letras, el sonido que hacen</i> en Inglés" 
            break;
        case "ps":
            return "<i>Palabras</i>, pronunciando en Español" 
            break;
        case "pe":
            return "<i>Palabras</i>, pronunciando en Inglés" 
            break;
        case "ss":
            return "<i>Sílabas</i>, pronunciando en Español" 
            break;
        case "se":
            return "<i>Sílabas</i>, pronunciando en Inglés" 
            break;
    }
}
alternate= function(Smpqw){
    if("undefined"!=typeof Smpqw){
        switch(Smpqw){
            case "superInformation":
                if(typeof blog_special!= "undefined" && blog_special == "amsm"){
                    $(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
                        var tiTle= $(alternating).find("h2").text()
                        var pp= tiTle.slice(0, tiTle.indexOf(" ("))
                        var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
                        var ww= $(this).attr("w").split(" ")
                        var btW= []
                        for(aa in ww){
                            var greed= `${ww[aa].slice(4, ww[aa].length)}${(function(){if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){return (alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC != alternatives[Object.keys(alternatives).slice(2)[0]].auC)?'auC':''}else{return ''}})()?'auC':''}`
                            acq= obTain(ww[aa].slice(0, 4), pp, hh, greed)
                            !!acq?btW[btW.length]= `${!(greed.indexOf("dWra")+1)?`<span title= "${expand(ww[aa].slice(0, 4).slice(2, 4))}">`: ``}${acq.replaceAll("span ", "$pan").replaceAll("   ", "&#32;&#32;").replaceAll(" ", "&nbsp;").replaceAll("$pan", "span ")}${!(greed.indexOf("dWra")+1)?`</span>`: ``}`: 1
                        }
                        btW= btW.join("&nbsp;&nbsp;").replaceAll(" </span>&nbsp;&nbsp;", "</span>&#32;&#32;").replaceAll("&nbsp;&nbsp;<span> ", "&#32;&#32;<span>").replaceAll("span>&nbsp;&nbsp;<s", "span>&#32;&#32;<s").replaceAll("title=&nbsp;", "title= ")
                        $(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${btW})`.replaceAll(`por sílabas`, `<i>por sílabas</i>`).replaceAll(`por letras, su nombre en el abecedario`, `<i>por letras, su nombre en el abecedario</i>`).replaceAll(`por letras, el sonido que hacen`, `<i>por letras, el sonido que hacen</i>`).replaceAll(`por palabras`, `<i>por palabras</i>`))
                    })
                    alternating.find('p span').tooltip({
                        track: true,
                        show: {
                            effect: "none",
                            delay: 0
                        },
                        open: function(event, ui) {
                            if (typeof(event.originalEvent) === 'undefined') {
                                return false;
                            }
                            ý= $(this); 
                           
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
                }else{
                    fill_daTa(`wd_filling_superInformation`)                
                }
                break;
            case "notSuperInformation":
                $(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
                    var tiTle= $(alternating).find("h2").text()
                    var pp= tiTle.slice(0, tiTle.indexOf(" ("))
                    var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
                    var ww= $(this).attr("w").split(" ")
                    var btW= []
                    for(aa in ww){
                        var greed= `${ww[aa].slice(4, ww[aa].length)}${(function(){if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){return (alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC != alternatives[Object.keys(alternatives).slice(2)[0]].auC)?'auC':''}else{return ''}})()?'auC':''}`
                        acq= obTain(ww[aa].slice(0, 4), pp, hh, greed)
                        !!acq?btW[btW.length]= `${!(greed.indexOf("dWra")+1)?`<span title= "${expand(ww[aa].slice(0, 4).slice(2, 4))}">`: ``}${acq.replaceAll("span ", "$pan").replaceAll("   ", "&#32;&#32;").replaceAll(" ", "&nbsp;").replaceAll("$pan", "span ")}${!(greed.indexOf("dWra")+1)?`</span>`: ``}`: 1
                    }
                    btW= btW.join("&nbsp;&nbsp;").replaceAll(" </span>&nbsp;&nbsp;", "</span>&#32;&#32;").replaceAll("&nbsp;&nbsp;<span> ", "&#32;&#32;<span>").replaceAll("span>&nbsp;&nbsp;<s", "span>&#32;&#32;<s").replaceAll("title=&nbsp;", "title= ")
                    $(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${btW})`.replaceAll(`por sílabas`, `<i>por sílabas</i>`).replaceAll(`por letras, su nombre en el abecedario`, `<i>por letras, su nombre en el abecedario</i>`).replaceAll(`por letras, el sonido que hacen`, `<i>por letras, el sonido que hacen</i>`).replaceAll(`por palabras`, `<i>por palabras</i>`))
                })
                alternating.find('p span').tooltip({
                    track: true,
                    show: {
                        effect: "none",
                        delay: 0
                    },
                    open: function(event, ui) {
                        if (typeof(event.originalEvent) === 'undefined') {
                            return false;
                        }
                        ý= $(this); 
                       
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
                break;
        }
        return;
    }
    
    $(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).each(function(){
        if((localStorage.getItem(alternatives.id) != null && "undefined" ==typeof loaded[alternatives.id])|| ("undefined" !=typeof loaded[alternatives.id] && loaded[alternatives.id].split("er")[1] == "st")){
            if($(this).is($(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).first()))alternatives.__a= localStorage.getItem(alternatives.id)
            "undefined" !=typeof loaded[alternatives.id]?console.log(loaded[alternatives.id].split("er")[2]): 1
            if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC && alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(("undefined" ==typeof loaded[alternatives.id] && !alternatives[Object.keys(alternatives).slice(2)[0]].auC) || ("undefined" !=typeof loaded[alternatives.id] && loaded[alternatives.id].split("er")[2] == "false")){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }else if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(("undefined" ==typeof loaded[alternatives.id] && alternatives[Object.keys(alternatives).slice(2)[0]].auC) || ("undefined" !=typeof loaded[alternatives.id] && loaded[alternatives.id].split("er")[2] == "true")){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }
        }else if($(this).is($(alternating.find("p").filter(function(){return "undefined"!=typeof $(this).attr("w")?true:false})[0])) && ("undefined" !=typeof loaded[alternatives.id] && loaded[alternatives.id].indexOf(`Rooper`))){
            if($(this).is($(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).first()))alternatives.__a= nexT(alternatives.__a, Object.keys(alternatives).slice(2).length - 1)
            if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC && alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(!alternatives[Object.keys(alternatives).slice(2)[pRev(alternatives.__a, Object.keys(alternatives).slice(2).length - 1)]].auC){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }else if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(alternatives[Object.keys(alternatives).slice(2)[pRev(alternatives.__a, Object.keys(alternatives).slice(2).length - 1)]].auC){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }
        }else if("undefined" !=typeof loaded[alternatives.id] && !loaded[alternatives.id].indexOf(`Rooper`)){
            if($(this).is($(alternating).find("p").filter(function(){return $(this).attr("w")? true: false}).first()))alternatives.__a= nexT(alternatives.__a, Object.keys(alternatives).slice(2).length - 1)
            if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC && alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(loaded[alternatives.id].split("er")[1]== "false"){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }else if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(loaded[alternatives.id].split("er")[1]== "true"){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }
        }else if("undefined" !=typeof loaded[alternatives.id] && loaded[alternatives.id]!=`super`){
            if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC && alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(!alternatives[Object.keys(alternatives).slice(2)[pRev(alternatives.__a, Object.keys(alternatives).slice(2).length - 1)]].auC){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }else if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(alternatives[Object.keys(alternatives).slice(2)[pRev(alternatives.__a, Object.keys(alternatives).slice(2).length - 1)]].auC){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }
        }else{
            if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC && alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(!alternatives[Object.keys(alternatives).slice(2)[0]].auC){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }else if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){
                if(alternatives[Object.keys(alternatives).slice(2)[0]].auC){
                    $(this).html($(this).html().replaceAll("→", "_x_$").replaceAll("←", "→").replaceAll("_x_$", "←"))
                    $(this).html($(this).html().replaceAll("al revés", "_x_$").replaceAll("derecho", "al revés").replaceAll("_x_$", "derecho"))
                    $(this).html($(this).html().replaceAll("última", "_x_$").replaceAll("primera", "última").replaceAll("_x_$", "primera"))
                    $(this).html($(this).html().replaceAll("delante de", "__x_$").replaceAll("detrás de", "delante de").replaceAll("__x_$", "detrás de"))
                }
            }
        }
        alternating.attr("a", alternatives.__a)
        localStorage.setItem(alternatives.id, alternatives.__a)
        console.log(Object.keys(alternatives).slice(2)[alternatives.__a])
        alternating.find(".nombre").text(`${alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].name.name} (${alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].name.hyphenation})`)
        var tiTle= $(alternating).find("h2").text()
        var pp= tiTle.slice(0, tiTle.indexOf(" ("))
        var hh= tiTle.slice(tiTle.indexOf(" (") + 2, tiTle.indexOf(") "))
        var ww= $(this).attr("w").split(" ")
        var btW= []
        for(aa in ww){
            var greed= `${ww[aa].slice(4, ww[aa].length)}${(function(){if("undefined"!=typeof alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC){return (alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]].auC != alternatives[Object.keys(alternatives).slice(2)[0]].auC)?'auC':''}else{return ''}})()?'auC':''}`
            acq= obTain(ww[aa].slice(0, 4), pp, hh, greed)
            !!acq?btW[btW.length]= `${!(greed.indexOf("dWra")+1)?`<span title= "${expand(ww[aa].slice(0, 4).slice(2, 4))}">`: ``}${acq.replaceAll("span ", "$pan").replaceAll("   ", "&#32;&#32;").replaceAll(" ", "&nbsp;").replaceAll("$pan", "span ")}${!(greed.indexOf("dWra")+1)?`</span>`: ``}`: 1
        }
        btW= btW.join("&nbsp;&nbsp;").replaceAll(" </span>&nbsp;&nbsp;", "</span>&#32;&#32;").replaceAll("&nbsp;&nbsp;<span> ", "&#32;&#32;<span>").replaceAll("span>&nbsp;&nbsp;<s", "span>&#32;&#32;<s").replaceAll("title=&nbsp;", "title= ")
        $(this).html(`${$(this).text().slice(0, $(this).text().indexOf(")")+1)} (${btW})`.replaceAll(`por sílabas`, `<i>por sílabas</i>`).replaceAll(`por letras, su nombre en el abecedario`, `<i>por letras, su nombre en el abecedario</i>`).replaceAll(`por letras, el sonido que hacen`, `<i>por letras, el sonido que hacen</i>`).replaceAll(`por palabras`, `<i>por palabras</i>`))
    })
    if((localStorage.getItem(alternatives.id) != null && "undefined" ==typeof loaded[alternatives.id])|| ("undefined" !=typeof loaded[alternatives.id] && loaded[alternatives.id].split("er")[1] == "st")){
        loaded[alternatives.id]= `super`
    }else if(loaded[alternatives.id].indexOf(`Rooper`)){
        loaded[alternatives.id]= `duper`
    }else if(!loaded[alternatives.id].indexOf(`Rooper`)){
        loaded[alternatives.id]= `duper`
    }
    fill_daTa(Object.keys(alternatives[Object.keys(alternatives).slice(2)[alternatives.__a]])[1])
    alternating.find(".name").on("click", function(){
      play_Tts($(this).text(), $(this).attr("lang"))
    })
    alternating.find('p span').tooltip({
        track: true,
        show: {
            effect: "none",
            delay: 0
        },
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            ý= $(this); 
           
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
    window.location.hash= `${alternatives[Object.keys(alternatives)[2]].name.name} (${alternatives[Object.keys(alternatives)[2]].name.hyphenation})`/*:1*/
    $("#to_copy_to_clipboaRd").text(`${decodeURI(window.location.origin)}${decodeURI(window.location.pathname)}#${alternatives[Object.keys(alternatives)[2]].name.name} (${alternatives[Object.keys(alternatives)[2]].name.hyphenation})`)
}
document.onkeyup= function(o){
if(!o.shiftKey){
    $(".edit").removeClass("shifted")
}
if(!o.shiftKey || !o.ctrlKey)ctrlMShift= false
if(!o.ctrlKey)ctrl_k= false
if(!o.shiftKey)shift_k= false
if("undefined"!=typeof useLinks && o.ctrlKey && o.altKey && o.keyCode==83){o.preventDefault();$(".nombre").toggleClass("activeforURIinfo");$(".nombre").hasClass("activeforURIinfo")?history.pushState("", document.title, window.location.pathname
                                                       + window.location.search):134;}
if(o.keyCode == 87 && o.ctrlKey && o.altKey){
//
if($(".accessibiliTyDialog").is(".visible")){
    $(".accessibiliTyDialog").removeClass("visible")
    $(".accessibiliTyDialog > aside").removeClass("visible")
}else{
    $(".accessibiliTyDialog").removeClass("fill_daTa")
    $(".accessibiliTyDialog").addClass("full_Text")
    $(".accessibiliTyDialog").addClass("visible")
    $(".accessibiliTyDialog > aside").removeClass("visible")
    $(".accessibiliTyDialog > aside#full_TextTextToSpeech").addClass("visible")
}
}

if(o.keyCode == 65 && o.ctrlKey && o.altKey){
//
saved_selecTed_text= selecTedText()
if($(".accessibiliTyDialog").is(".visible")){
    $(".accessibiliTyDialog").removeClass("visible")
    $(".accessibiliTyDialog > aside").removeClass("visible")
    saved_selecTed_text= ""
}else{
    if(!!saved_selecTed_text){
        $(".accessibiliTyDialog").removeClass("fill_daTa")
        $(".accessibiliTyDialog").removeClass("full_Text")
        $(".accessibiliTyDialog").addClass("visible")
        $(".accessibiliTyDialog > aside").removeClass("visible")
        $(".accessibiliTyDialog > aside#text_To_speech").addClass("visible")
    }else{
        alert("Selecciona algo de texto primero.")
    }
}
}
}
window.onblur= function(){
    ctrlMShift= false
    ctrl_k= false
    shift_k= false
    $(".edit").removeClass("shifted")
    /*alternating= $(".nombre").filter(function(){if($(this).attr("contenteditable")=="true"){return true}}).parent();*/ $(".nombre").filter(function(){if($(this).attr("contenteditable")=="true"){return true}}).length?alternate(`superInformation`):192465;
    $(".nombre").attr("contenteditable", "false")
    $(".nokbwarning").addClass("visible")
    $(".quoTe").text(`ricas, ricas hasta la chimba`)
}
document.addEventListener("keydown", function(e){if(e.shiftKey){shift_k= true; $(".edit").addClass("shifted")}if(e.ctrlKey){ctrl_k= true}if(e.shiftKey && e.ctrlKey){ctrlMShift= true}if(e.shiftKey && e.ctrlKey && e.altKey){e.preventDefault();$("#theater").css("display") == "block"?closeModal():1;$("#buscar input").val("");$("#buscar input").trigger("input");$("#buscar input").focus()}})
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
    
    $("#theater .read").on("click", function(){ 
        !$("#theater .description").hasClass("closed")? $("#theater .description").addClass("closed"): $("#theater .description").removeClass("closed"); 
        !$("#theater .comentarios").hasClass("open")? $("#theater .comentarios").addClass("open"): $("#theater .comentarios").removeClass("open"); 
    }) 

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
        if($(this)[0].firstTime){
                    $(this).css({"overflowY": "hidden"}); 

            aCX=$(this)
                               

                    $(this)[0].firstTime= false; 
                    $("html").animate({
                        scrollTop: $(this).offset().top - 50
                    }, 400, function() {
    aCX.css({"overflowY": "scroll"}); 
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
                        $(this).parent().next().css({"height": "", "overflow": "", "border": "1px solid #ccc", "padding": "", "border-top": "none"}); 
                        $(this).parent().css({"border-bottom": "none"}); 
                        $(this).text("Ocultar de nuevo."); 
                        $(this).addClass("activado"); 
                    }else{ 
                        $(this).parent().next().css({"height": "0", "overflow": "hidden", "padding": "0", "border": "none"}); 
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

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", K0);
    oReq.open("get", "https://cdn.filestackcontent.com/T1JT7NWRhigB2KGvZN7g");
    oReq.send(); 
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

var play_Tts= function(text, lang){
   $("#tts-audio")[0].src= `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(text)}`
   $("#tts-audio")[0].play()
};

var selecTedText= function(){
    return (window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection?document.selection.createRange():"falló obtener la selección").toString()
}



/*





















*/