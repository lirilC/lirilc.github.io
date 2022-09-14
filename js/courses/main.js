/*
Copyright © 2021 Codrops

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
$(document).on("ready",function(){
    purger.purge(); 
                    
$("header").after(`<aside class="searchResults hidden">
        <div>
        </div>
    </aside>`)
possibleResults=[[["Megan Denise Fox", "MeganFox"], {users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Laura Escobar Bonnett", "L"], {users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], type: "Usuario"}], [["Luis Eduardo Gallego García", "A.K.A._Dizzy"], {users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], type: "Usuario"}], [["Dios Jesucristo", "G-Suschrist"], {users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Aura María Cardona Demasiado", "AuraCardonaC"], {users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], type: "Usuario"}], [["Juan José Martínez Vidal", "LamaMadora"], {users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], type: "Usuario"}], , [["Walter White", "user"], {users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], type: "Usuario"}], [["A0"], {name: "A0", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/A0", type: "Blog"}], [["Algo Más Sobre Mí"], {name: "Algo Más Sobre Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algo Más Sobre Mí", type: "Blog"}], [["Algunas Propiedades De Mis Escritos"], {name: "Algunas Propiedades De Mis Escritos", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunas Propiedades De Mis Escritos", type: "Blog"}], [["Algunos Poemas Que He Escrito"], {name: "Algunos Poemas Que He Escrito", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunos Poemas Que He Escrito", type: "Blog"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/aNGEL();", type: "Blog"}], [["Constructor And Business Partners (Dedicatorias)"], {name: "Constructor And Business Partners (Dedicatorias)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners (Dedicatorias)", type: "Blog"}], [["Constructor And Business Partners"], {name: "Constructor And Business Partners", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners", type: "Blog"}], [["Dinosaurios"], {name: "Dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Dinosaurios", type: "Blog"}], [["El Pueblo Blanco"], {name: "El Pueblo Blanco", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Pueblo Blanco", type: "Blog"}], [["El Salomé Castrillón"], {name: "El Salomé Castrillón", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Salomé Castrillón", type: "Blog"}], [["Equilibrio"], {name: "Equilibrio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Equilibrio", type: "Blog"}], [["FRANCIA Y ElDelprincipio"], {name: "FRANCIA Y ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/FRANCIA Y ElDelprincipio", type: "Blog"}], [["La Larga Historia"], {name: "La Larga Historia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Larga Historia", type: "Blog"}], [["La Perrita Del Poste"], {name: "La Perrita Del Poste", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Perrita Del Poste", type: "Blog"}], [["La Sagrada Biblia"], {name: "La Sagrada Biblia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Sagrada Biblia", type: "Blog"}], [["Las Flores Malditas (Introducción)"], {name: "Las Flores Malditas (Introducción)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Las Flores Malditas (Introducción)", type: "Blog"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/por_siLaBas();", type: "Blog"}], [["Regalos Para Mí"], {name: "Regalos Para Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Regalos Para Mí", type: "Blog"}], [["Sus Rizos Color Caramelo"], {name: "Sus Rizos Color Caramelo", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Sus Rizos Color Caramelo", type: "Blog"}], [["Una Breve Historia De La Creación"], {name: "Una Breve Historia De La Creación", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Una Breve Historia De La Creación", type: "Blog"}], [["xWo3"], {name: "xWo3", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/xWo3", type: "Blog"}], [["dinosaurios"], {name: "dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/82DcC9s2sS0cZ", type: "Proyecto"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/f9d2cCa2Cxc31", type: "Proyecto"}], [["Christmas Gifts From The Gallego Escobar Family"], {name: "Christmas Gifts From The Gallego Escobar Family", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/h3dd2cDcsW2R3", type: "Proyecto"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k92dJd29D920d", type: "Proyecto"}], [["Robot De Dedicatorias"], {name: "Robot De Dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k9u8hH78jJi27", type: "Proyecto"}], [["Robot de dedicatorias"], {name: "Robot de dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/s98f39c0d9090", type: "Proyecto"}], [["ElDelprincipio"], {name: "ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/tY829dD0290df", type: "Proyecto"}], [["myProjext1"], {name: "myProjext1", users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], href: "/MeganFox/p/k89dsV37S1XM7", type: "Proyecto"}], [["minesweeper"], {name: "minesweeper", users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], href: "/L/p/2kNoind8JsjD9", type: "Proyecto"}], [["lX"], {name: "lX", users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], href: "/AuraCardonaC/p/di29D8jj8dj2d", type: "Proyecto"}], [["snka"], {name: "snka", users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], href: "/G-Suschrist/p/aJ820d0d9fjnc", type: "Proyecto"}], [["Vv11"], {name: "Vv11", users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], href: "/LamaMadora/p/u889Dj8Q22dSC", type: "Proyecto"}], [["_dvlpmt"], {name: "_dvlpmt", users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], href: "/user/p/8d299s2gvkL9", type: "Proyecto"}]]

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
	$("html").click(function(e) {
        $(".wrapper").removeClass("visible")
        $("#right-menu .index-arrow").removeClass("open");
        $("#profileSettings").removeClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
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
	var wasPlaying = false;
    
	$("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if ($("#profileSettings").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
            if ($("#profileSettings").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );}
            else{
                 $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
            }} else {
           $("header").removeClass("open");
           }
           if (!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")) {
               $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
            }
        });


	 $("#profileTrigger").on("click", function (e) {
        $(".wrapper").toggleClass("visible")
        $("#right-menu .index-arrow").toggleClass("open");
        $("#profileSettings").toggleClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 




    });
	
	
});

function responsive(){
	$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
    
}
$(window).on("resize", function(){
	responsive()
})
$(window).on("load",
	function(){
		responsive()
	}
)

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