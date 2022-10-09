var R= {}
var foReach= "foReach"
var one= function(a, b, c){
	switch(a){
    	case "story":
			var reTurn= ""
			for(var e in c){
				switch(c[e].type){
					case "links":
						reTurn+=   `<section class="story links">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="${user.profilePic}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}">${user.users_name}</a> <br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                ${c[e].contents}
		                                <div class="Comentarios">${c[e].Comentarios}</div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <li class="Enlargetic">
		                                            <a href="${e}" target="_blank" class="read active" title=""></a>
		                                            <span title="" class="Enlarge"></span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </section>
		                            `
						break
					case "informativeImg":
						reTurn+=   `<section class="story informative img">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="${user.profilePic}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}">${user.users_name}</a> ${c[e].information}<br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                ${c[e].contents}
		                                <div class="Comentarios">${c[e].Comentarios}</div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <li class="Enlargetic">
		                                            <a href="${e}" target="_blank" class="read active" title=""></a>
		                                            <span title="" class="Enlarge"></span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </section>
		                            `
						break
					case "img":
						reTurn+=   `<section class="story img">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="${user.profilePic}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}">${user.users_name}</a><br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <section id="picture">
		                                    <img class="pic" src="${c[e].contents.image}" alt="" class="big">
		                                </section>
		                                <div class="Comentarios">${c[e].Comentarios}</div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <li class="Enlargetic">
		                                            <a href="${e}" target="_blank" class="read active" title=""></a>
		                                            <span title="" class="Enlarge"></span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </section>
		                            `
						break
					case "mult_img":
						reTurn+=   `<section class="story mult_img">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="${user.profilePic}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}">${user.users_name}</a><br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                <section class="navigation">
				                            <div class="nav_arrow left disabled">
				                                <div class="arrow"></div>
				                            </div>
				                            <div class="nav_arrow right">
				                                <div class="arrow"></div>
				                            </div>
				                            <section class="carr">
		                                		${one("carrItem", foReach, c[e].contents.carrContents)}
		                                	</section>
		                                </section>
		                                <div class="Comentarios">${c[e].Comentarios}</div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <li class="Enlargetic">
		                                            <a href="${e}" target="_blank" class="read active" title=""></a>
		                                            <span title="" class="Enlarge"></span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </section>
		                            `
						break
					case "mult_carr":
						reTurn+=   `<section class="story mult_carr">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="${user.profilePic}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}">${user.users_name}</a><br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                <section class="navigation">
				                            <div class="nav_arrow left disabled">
				                                <div class="arrow"></div>
				                            </div>
				                            <div class="nav_arrow right">
				                                <div class="arrow"></div>
				                            </div>
				                            <section class="carr">
		                                		${one("carrItem", foReach, c[e].contents.carrContents)}
		                                	</section>
		                                </section>
		                                <div class="Comentarios">${c[e].Comentarios}</div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <li class="Enlargetic">
		                                            <a href="${e}" target="_blank" class="read active" title=""></a>
		                                            <span title="" class="Enlarge"></span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </section>
		                            `
						break
					case "repostLinks":
						reTurn+=   `<section class="story repost links">
		                                <div class="info">
		                                    <img class="repost" src="${user.profilePic}" alt="">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <div class="repostedFrom"></div>
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${c[e].originalPoster.rol.level}'>
		                                    <img class="repost" src="${c[e].originalPoster.profilePic}" alt="">
		                                    <p class="username repost"><a class="target" href="/${user.username}" title="">${user.users_name}</a> Reposteó de <a class="target" href="/${c[e].originalPoster.username}" title="">${c[e].originalPoster.users_name}</a><br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                ${c[e].contents}
		                                <div class="Comentarios">${c[e].Comentarios}</div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <li class="Enlargetic">
		                                            <a href="${e}" target="_blank" class="read active" title=""></a>
		                                            <span title="" class="Enlarge"></span>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </section>
		                            `
						break
				}
			}
			return reTurn
			break
		case "carrItem":
			var reTurn= ""
			for(var e in c){
				switch(c[e][0]){
					case "vi":
						reTurn+=   `<section class="video">
	                                    <div class="Playuse">
	                                    </div>
	                                    <div class="Enlarge">
	                                    </div>
	                                    <video id="x4" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="325" data-setup='{"poster":"/resources/images/${user.username}/${c[e][1]}_poster.png"}' data-setup="{}">
	                                        <source src="/resources/videos/${user.username}/${c[e][1]}.mp4" type='video/mp4' />
	                                        <p class="vjs-no-js">
	                                            Para ver este vídeo, por favor activa el Javascript y considera actualizar tu navegador a uno que
	                                            <a href="http://videojs.com/html5-video-support/" target="_blank">
	                                                soporte vídeo en Html5
	                                            </a>
	                                        </p>
	                                    </video>
	                                </section>
	                                `
	                    break;
	                case "im":
						reTurn+=   `<section class="picture">
	                                    <img class="pic" src="/resources/images/${user.username}/${c[e][1]}.jpg" alt="" class="big">
	                                </section>
	                                `
	                    break;
	                default:
						reTurn+=   `<section class="picture">
	                                    <img class="pic" src="/resources/images/${user.username}/${c[e]}.jpg" alt="" class="big">
	                                </section>
	                                `
	                    break;
				}
			}
			return reTurn
	}
}
/*Bind first pageDOMContentLoaded*/
R.ready= function(e){
	/**/
	$(".knob").knob();
	/*Size, populate, and event sidebar*/
	$("#resizeTop").css({"height": "calc(50% - 7px)"})
	$("#resizeBottom").resizable({ handles: "n", maxHeight: ($(window).height() - $("#sidebar #search").outerHeight() - 51), minHeight: 50, stop: function(event, ui)
    		{        
        		$("#resizeTop").css({"height": "calc(" + (100 - (($(ui.element).height()) / ($("#sidebar #container").height()) * 100 )) + "% - 7px)"})
    			$(ui.element).height((($(ui.element).height()) / ($("#sidebar #container").height()) * 100 )+ "%")
		} }).bind("resize", function(e, ui) {
        $("#resizeTop").css({"height": ($(window).height() - 83 - $(this).height())})
    });
    Used= []; 
    Urls= ["Abigail O'Neill.jpg", "Alana Campos.png", "Alexandra Tyler.jpeg", "Ali Chanel.jpg", "Ali Michael.jpg", "Alicia Loraina Olivas.jpg", "Allie Leggett.jpg", "Allie Silva.jpg", "Alyssa Arcè.jpg", "Amanda Booth.jpg", "Amanda Cerny.webp", "Amanda Streich.jpg", "Amberleigh West.jpg", "Amelia Talon.jpg", "Amy Leigh Andrews.jpg", "Ana Cheri.webp", "Anita Pathammavong.jpg", "Anna Sophia Berglund.jpg", "Ashley Doris.jpg", "Ashley Hobbs.jpg", "Ashley Smith.webp", "Audrey Aleen Allen.jpg", "Beth Williams.jpg", "Bridget Malcolm.jpg", "Britany Nola.jpg", "Britt Linn.jpeg", "Brittany Brousseau.jpg", "Brittny Ward.jpg", "Brook Power.jpg", "Bryiana Noelle.jpg", "Camille Rowe.jpg", "Carly Lauren.jpg", "Carolina Ballesteros.jpg", "Cassandra Dawn.webp", "Chasity Samone.jpg", "Chelsie Aryn.jpg", "Ciara Price.jpg", "Claire Sinclair.jpg", "Dana Taylor.jpg", "Dani Mathers.jpg", "Danielle Alcaraz.jpg", "Dominique Jane.jpg", "Dree Hemingway.jpg", "Elizabeth Elam.webp", "Elizabeth Ostrander.webp", "Elsie Hewitt.jpg", "Emily Agnes.jpg", "Enikő Mihalik.jpg", "Eugena Washington.jpg", "Fo Porter.jpg", "Francesca Frigo.jpg", "Geena Rocero.jpg", "Gemma Lee Farrell.jpg", "Gia Marie.jpg", "Gillian Chan.jpg", "Heather Knox.jpg", "Heather Rae Young.webp", "Hilda Dias Pimentel.jpg", "Ines Rau.jpg", "Iryna Ivanova.jpg", "Jaclyn Swedberg.jpg", "Jaime Faith Edmonson.jpg", "Jaslyn Ome.jpg", "Jenny Watwood.jpg", "Jessa Lynn Hinton.jpg", "Jessica Ashley.jpg", "Jessica Wall.jpg", "Jordan Emanuel.webp", "Jordy Murray.jpg", "Josie Canseco.jpg", "Joy Corrigan.jpg", "Karina Marie.jpg", "Kassie Lyn Logsdon.jpg", "Katie Vernola.jpg", "Kayla Garvin.jpg", "Kayla Rae Reid.webp", "Kaylia Cassandra.webp", "Kayslee Collins.webp", "Kelly Gale.png", "Kennedy Summers.jpg", "Khrystyana.jpg", "Kirby Griffin.jpg", "Kristen Nicole.jpeg", "Kristy Garett.jpg", "Kylie Johnson.jpg", "Kyra Milan.jpg", "Lada Kravchenko.jpg", "Leola Bell.jpg", "Lisa Seiffert.jpg", "Liza Kei.png", "Lorena Medina.jpg", "Maggie May.jpg", "Marsha Elle.jpg", "Megan Moore.jpg", "Megan Samperi.jpg", "Mei-Ling Lam.jpg", "Miki Hamano.jpg", "Milan Dixon.jpg", "Monica Sims.jpg", "Nereyda Bird.jpg", "Nikki Leigh.jpg", "Nina Daniele.jpg", "Olga de Mar.jpg", "Olivia Paige.jpg", "Pamela Horton.jpg", "Priscilla Huggins.jpg", "Rachel Harris.jpg", "Rainy Day Jordan.jpg", "Raquel Pomplun.jpg", "Riley Ticotin.jpg", "Roos van Montfort.jpg", "Roxanna June.jpg", "Sasha Bonilova.jpg", "Savannah Smith.jpeg", "Shanice Jordyn.jpg", "Shanna McLaughlin.jpg", "Shauna Sexton.jpg", "Shawn Dillon.jpeg", "Shelby Chesnes.jpg", "Shelby Rose.jpg", "Shelby Rose.webp", "Shera Bechard.jpg", "Sophie O’Neil.jpg", "Stephanie Branton.jpg", "Tanerélle.jpg", "Teela LaRoux.jpg", "Tiffany Toth.jpg", "Val Keil.jpeg", "Valeria Lakhina.jpg", "Vendela Lindblom.jpg", "Yoli Lara.jpg", "Megan Denise Fox.jpg", "Laura Escobar Bonnett.jpg", "Luis Eduardo Gallego García.gif", "Dios Jesucristo.jpg", "Aura María Cardona Demasiado.jpg", "Juan José Martínez Vidal.jpg", "Walter White.jpg", "La Perrita Del Poste.jpg", "ElDelprincipio.jpg"]; 

    while(Used.length != Urls.length){ 
        randmIntgr= parseInt(Math.random() * Urls.length );

        while(Used.indexOf(randmIntgr) != -1){ 
            randmIntgr= parseInt(Math.random() * Urls.length ); 
        }

        $("#resizeBottom ul")[0].innerHTML= $("#resizeBottom ul")[0].innerHTML + '<li class="button offline"><img src="/resources/images/chat/' + Urls[randmIntgr] + '" alt=""><p>' + Urls[randmIntgr].slice(0, Urls[randmIntgr].indexOf(".")) + '</p><span ></span></li>'
        Used[Used.length]= randmIntgr
    }

    Number= 7 + parseInt(Math.random() * 78);  
                                          
    for(eForensics in document.querySelector("#resizeBottom ul").children){ 
        if(Number > 0){ 
            $($("#resizeBottom ul").children()[eForensics]).removeClass("offline"); 
            $($("#resizeBottom ul").children()[eForensics]).addClass("connected"); 
            Number--; 
        }
    }
    /*Activate jQuery UI's tooltips on the badges*/
    $(".line").tooltip({
        track: true,
        position:{
            my: "center bottom-6",
            at: "center top"
        },
        open: function(){
            $(".ui-tooltip input").on("keydown", function(e){
                if(e.keyCode == 13){
                    $('.line').filter(function(){return $(this).attr('aria-describedby')}).attr("title", $(".ui-tooltip input").val())
                    $('.line').filter(function(){return $(this).attr('aria-describedby')}).tooltip("option", "content", $(".ui-tooltip input").val()); 
                    updateUser(); 
                }
            })
            $(".ui-tooltip input").focus(); }
    });
}
var responsive= function(){
    $("#otherContainments").is(".visible")? $("#otherContainments > div").height() < $("#otherContainments > div")[0].scrollHeight? $("#otherContainments").addClass("overflowing"): $("#otherContainments").removeClass("overflowing"): 1; 

    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        $("#sidebar #chat").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));
        if ($("#resizeBottom").height() > ($(window).height() - $("#sidebar #search").outerHeight() - 51)){
            $("#resizeBottom").css({
                "height": "50%"
            })
        }

        $("#chats .chats").width($(window).width() - $("#sidebar").outerWidth() -10);
        $("#sidebar #container #resizeTop").height($("#sidebar").height() - $("#sidebar #container #resizeBottom").height() - 36);
	$("#options ul").width($("#content").width() - 243.5); 
 }
/*Bind window resize*/
window.onresize= function(){
    $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));
}