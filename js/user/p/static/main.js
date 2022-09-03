document.addEventListener("DOMContentLoaded", function(){ 
_w= window
const pId_from_end_of_url= (function(w){return (w.p.indexOf( pId ) + 1, 
w.p.length, 
w.p.length - (w.p.indexOf( pId ) + 1 + pId.length))})({p:_w.location.pathname})

console.log(pId_from_end_of_url)
if( pId_from_end_of_url == -1 || _w.location.pathname === "/" + username + "/p/" + pId + ".html" ){
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".inScope").removeClass("inScope")
$("#preview .file_tree").removeClass("visible")
$(".code-filler").width(0)
$("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"})
$("#preview #file_preview #filePr")[0].innerHTML= ""
$("#preview #file_preview #file")[0].innerHTML=""
$("#preview #file_preview #edit")[0].innerHTML=""
$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666
$(".file").css({"top": "initial"})
$(".folder_cont").css({"top": "initial"})
/*$( "#root > div > DIV" ).last().children().filter("a").trigger( "click" )*/
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$( "#files .file_tree" ).children().each( function(){$( this ).is( ".folder_cont" )? $( $( this ).find( ".folder" )[0] ).addClass( "inScope" ): $( this ).addClass( "inScope" )} )
$( "#files .file_tree" ).children().removeAttr( "style" )
$( "#files .file_tree > .folder_cont > .folder" ).removeAttr( "style" )
$("#root")[0].children[0].innerHTML= "<div><a url= \"/" + username + "\">" + users_name + `</a></div><div><a url="/` + username + `/p">Proyectos</a></div><span><span>` + pNa + `</span></span>`
return
}

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".inScope").removeClass("inScope")
$("#preview .file_tree").removeClass("visible")
$(".code-filler").width(0)
$("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"})
$("#preview #file_preview #filePr")[0].innerHTML= ""
$("#preview #file_preview #file")[0].innerHTML=""
$("#preview #file_preview #edit")[0].innerHTML=""
$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666
$(".file").css({"top": "initial"})
$(".folder_cont").css({"top": "initial"})
/*$( "#root > div > DIV" ).last().children().filter("a").trigger( "click" )*/
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".folder_cont .folder").removeAttr( "style" )
$(".file").removeAttr( "style" )

sprtdUrl= separateUrl(getToBusiness(decodeURIComponent(_w.location.pathname))); 

LEB= $("#files .file_tree"); 
                             
for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB).children().length - 1; fi++){
if(($($(LEB).children()[fi]).hasClass("folder_cont") || $($(LEB).children()[fi]).hasClass("file"))){
(!$($(LEB).children()[fi]).hasClass("file") && $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics])? LEB= $($(LEB).children()[fi])[0]: $($(LEB).children()[fi])[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1
}
}
}
 
$(LEB).is(".folder_cont")? LEB= $(LEB).children()[0]: 1; 
$(".inScope").removeClass("inScope"); 
//_w.location.hash == "#infor"? $(LEB)[0].dispatchEvent(new CustomEvent('contextmenu')): $(LEB).trigger("click", true);  
/*LEB= $( LEB )*/
if($(LEB).is("#files .file_tree"))return
if( $(LEB).is( ".file" )  ){
$(LEB).addClass( "inScope" )
var i= {target: LEB}
// var this= LEB
var tr= false
// if( $(LEB).is( ".editing" ) )return
//$T= $("#files .file_tree")[0].scrollTop 
if( !$("#information #historia li").is( ".selected" ) && $("#file_expl #information_cont").hasClass("visible") && !!FileToRequest )return

$("#information_cont #information li.selected").removeClass("selected")
if(!ok){return}
$("#preview .file_tree").removeClass("visible")
$("#preview #file_preview #file")[0].innerHTML=""
arr= [];

eleo= $(LEB)[0]
    
for(eForensics in eleo.parentElement.children){
if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){
arr[arr.length]= eleo.parentElement.children[eForensics]
}
}

topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})


!tr? topS= topS: topS= 0

$(LEB).css({"position": "absolute", "top": topS + "px"})

$(LEB).css({"opacity": "1"})
$(LEB).css({"height": "auto"})
$(LEB).css({"padding": ""})
$(LEB).css({"border-bottom": ""})

    
setTimeout(function(){i.target.style.top= 0; ok= false; 
}, 1); 
setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); $(".Historia").on("click", function(){var oReq= new XMLHttpRequest();oReq.addEventListener("load", ee);oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" + FileToRequest);oReq.setRequestHeader('Authorization', "token " + token);crawl();oReq.send();}); })(): 666; ok= true; 
}, 101); 

uRL= ""; 

t= $(LEB); 

while(!t.is(".file_tree")){ 
if(!t.hasClass("folder_cont")){ 
uRL= t[0].innerText + uRL; 
}else{ 
uRL= t[0].children[0].textContent + "/" + uRL; 
} 

t= t.parent(); 
}

// history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
pageI++;

(!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 

updateRoot(separateUrl(uRL)); 

FileToRequest= decodeURIComponent(window.location.pathname)
slashCt= 0; 
strtgIx= 0; 
    
for(eForensics in FileToRequest){ 
FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
if(slashCt < 2){ 
strtgIx= parseInt(eForensics); 
}   
} 
FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

if($("#preview #file_preview #options #Archivo").hasClass("selected")){
$("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
$("#preview #file_preview #filePr")[0].innerHTML= ""; 
$("#preview #file_preview #edit")[0].innerHTML= ""; 
switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
case "png": 
case "jpg": 
case "webp": 
case "ico": 
case "svg": 
$("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
break; 
case "webm": 
case "mp4": 
$("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
break; 
default: 
$("#preview #file_preview #file")[0].innerHTML= "<pre data-src=" + '"' + FileToRequest + '"' + "></pre>"; 

const mainNode = document.getElementsByTagName('pre')[0]

function callback(mutationsList, observer) {
mutationsList.forEach(mutation => {
if (mutation.attributeName === 'data-src-status') {
//$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
}
})
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(mainNode, { attributes: true }) 

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

Prism.highlightAll(); 
break; 
} 
}else if($("#Live").hasClass("selected")){ 
$(".code-filler").width(0); 

$("#preview #file_preview #file")[0].innerHTML= ""; 
$("#preview #file_preview #edit")[0].innerHTML= ""; 
$("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 

if( !$( "#Live" ).is( ".modified" ) )return

function reqListener () {
respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

//console.log( respuesta ); 
for( t in tagReplacer( respuesta ) ){ 
if(tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )] != undefined)
if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ){ 
respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ) ; 
} 
if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] )  ) ) ){ 
respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ) ; 
}; 
/*console.log( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
}; 

respuesta= respuesta.indexOf( "<!" ) !== 0? "<pre>" + respuesta + "</pre>": respuesta; 

var ifrm= document.getElementsByTagName('iframe')[0]; 

ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
ifrm.document.open(); 
ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
ifrm.document.close(); 
};

var xxa = new XMLHttpRequest(); 
xxa.addEventListener("load", reqListener); 
xxa.open("GET", FileToRequest); 
xxa.send(); 
}else{ 
$(".code-filler").width(0); 

$("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
$("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
$("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
a= ""; 

switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
case "js": case "css": case "html": case "as": case "py": 
function reqListener () {
respuestaOriginal= this.responseText; 
$("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
ace.require("ace/ext/language_tools"); 
editor = ace.edit("editor"); 
editor.setTheme("ace/theme/monokai"); 
editor.setValue( this.responseText ); 

if( localStorage.getItem( FileToRequest ) != null ){
(function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 

session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 

session.folds.forEach(function(fold){ 
editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
}); 
editor.session.setAnnotations(session.annotations); 
editor.session.setBreakpoints(session.breakpoints); 
editor.session.$undoManager.$undoStack= session.history.undo; 
editor.session.$undoManager.$redoStack= session.history.redo; 
editor.session.$undoManager.$rev= session.history.rev; 
editor.session.$undoManager.mark= session.history.mark; 
editor.session.setMode(session.mode); 
editor.session.setScrollLeft(session.scrollLeft); 
editor.session.setScrollTop(session.scrollTop); 
editor.session.selection.fromJSON(session.selection); 
} 

editor.getSession().on('change', function(){ 
localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
}); 

setTimeout(function(){ 
editor.focus(); 
}, 310); 

editor.valorOriginal= this.responseText; 
editor.setOption("enableEmmet", true);
editor.setOption("enableBasicAutocompletion", true); 
editor.setOption("enableLiveAutocompletion", true); 
editor.setOption("enableSnippets", true); 




switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
case "js": 
var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "css": 
var JavaScriptMode = ace.require("ace/mode/css").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "html": 
var JavaScriptMode = ace.require("ace/mode/html").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "as": 
var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "py": 
var JavaScriptMode = ace.require("ace/mode/python").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
} 

}
break; 
case "png": case "jpg": case "webp": case "ico": case "svg": 
$("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
}

    
    
var xxa = new XMLHttpRequest();
xxa.addEventListener("load", reqListener);
xxa.open("GET", FileToRequest);
xxa.send(); 


    
    
} 
/*function reqListener () {

}

    
    
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", FileToRequest);
oReq.send(); */ 


title(); 

return
}
if(_w.location.hash === "#infor")
{
sprtdUrl= separateUrl(getToBusiness(decodeURIComponent(_w.location.pathname)))
console.log( "#" )
/*$("#information_cont #information li.selected").removeClass("selected"); */ 
                        
$("#preview .file_tree").addClass("visible")

arr= []; 

eleo= $(LEB).parent()[0]; 
    
for(eForensics in eleo.parentElement.children){ 
if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
arr[arr.length]= eleo.parentElement.children[eForensics]
}
} 

$(".inScope").removeClass("inScope"); 
topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): arr.length * 26; 

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


$($(eleo).children()[0]).css({"opacity": "1"}); 
$($(eleo).children()[0]).css({"height": "auto"}); 


$(LEB).parent().css({"position": "absolute", "top": topS + "px"}); 

(function () {
$('.file.inScope').filter(function () {
return $(LEB).css('height') != '0';
}).css({"padding": "","border-bottom": ''});
})(); 
(function () {
$('.folder.inScope').filter(function () {
return $(LEB).css('height') != '0';
}).css({"padding": "","border-bottom": ''});
})(); 
setTimeout(function(){eleo.style.top= 0; ok= false; 
}, 1); 
setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); })(): 666; ok= true; 
}, 101); 

uRL= ""; 

t= $(LEB).parent(); 

while(!t.is(".file_tree")){ 
if(!t.hasClass("folder_cont")){ 
uRL= t[0].innerText + uRL; 
}else{ 
uRL= t[0].children[0].textContent + "/" + uRL; 
} 
      
t= t.parent(); 
    } 
      
uRL= uRL.slice(0, uRL.length - 1); 

// history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL);  
//pageI++;

$(LEB).addClass("inScope")
LEB.removeAttribute( "style" );

(!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
//window.location.hash= "infor"

updateRoot(separateUrl(uRL)); 

aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

spr= ""; 

if(aar == ""){ 
el= document.getElementsByClassName("file_tree")[0]; 

for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
$(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
} 
LEB_2= $("#preview .file_tree"); 

for(eForensics in sprtdUrl){ 
for(fi= 0; fi <= $(LEB_2).children().length - 1; fi++){ 
if($($(LEB_2).children()[fi]).hasClass("folder_cont") && !$($(LEB_2).children()[fi]).hasClass("folder")){ 
$($(LEB_2).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB_2= $($(LEB_2).children()[fi])[0]: 1; 
}
} 
} 
}else{ 

setTimeout(function(){ 
spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} 
LEB_2= $("#preview .file_tree"); 

for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB_2).children().length - 1; fi++){
if($($(LEB_2).children()[fi]).hasClass("folder_cont") && !$($(LEB_2).children()[fi]).hasClass("folder")){
$($(LEB_2).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB_2= $($(LEB_2).children()[fi])[0]: 1
}
}
}
}, 10); 

spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} LEB_2= $("#preview .file_tree"); 

for(eForensics in sprtdUrl){ 
for(fi= 0; fi <= $(LEB_2).children().length - 1; fi++){ 
if($($(LEB_2).children()[fi]).hasClass("folder_cont") && !$($(LEB_2).children()[fi]).hasClass("folder")){ 
$($(LEB_2).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB_2= $($(LEB_2).children()[fi])[0]: 1; 
}
}
}
}
$($(LEB_2).children()[0]).trigger("click", true)
return
}
var i= {target: LEB}
oF= $(LEB).parent()
console.log( oF )

setTimeout(function(){ok= true; 
}, 101); 
$("#preview .file_tree").removeClass("visible"); 
$("#preview #file_preview #file")[0].innerHTML=""; 
$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
$(".file").css({"top": "initial"}); 
$(".folder_cont").css({"top": "initial"}); 
index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
$(".inScope").removeClass("inScope"); 
$(LEB).siblings().addClass("inScope"); 

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 

uRL= ""; 

t= $(LEB).parent(); 

while(!t.is(".file_tree")){ 
if(!t.hasClass("folder_cont")){ 
uRL= t[0].innerText + uRL; 
}else{ 
uRL= t[0].children[0].textContent + "/" + uRL; 
} 

t= t.parent();  
    } 
      
uRL= uRL.slice(0, uRL.length - 1); 

/*history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); */ 

pageI++; 

(!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children.length - 1].outerHTML= '<div><a href=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children.length - 1].innerText + '</a></div>': 1; 

updateRoot(separateUrl(uRL)); 

    

aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

spr= ""; 

if(aar == ""){ 
$(".inScope").removeClass("inScope"); 

for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
} 
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
$(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
}else{ 
$(".inScope").removeClass("inScope"); 

setTimeout(function(){ 
spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
$(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
}, 10); 

spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
$(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
} 
th= {isLast: (LEB === $(".inScope").parent().children()[0])}
if( th.isLast && typeof $T !== "undefined" )( function(){console.log("entered!"); $("#files .file_tree")[0].scrollTop= $T} )()
 }); 