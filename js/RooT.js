var RooT= {}

_R= function(q, c, d){
	if(typeof c != undefined)return $(q).not(typeof d != undefined? "": ".e")
	return $(document.querySelectorAll(q)[c]).not(typeof d != undefined? "": ".e")
}
_T= function(q){
	return $(q)
}
var Then
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
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> <br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
					case "containments":
						reTurn+=   `<section class="story containments">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> <br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
					case "embed":
						reTurn+=   `<section class="story embed">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> <br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
					case "multimedia":
						reTurn+=   `<section class="story multimedia">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> <br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> ${c[e].information}<br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <section id="picture">
		                                    <img class="pic" src="/resources/images/${user.username}/${c[e].contents.image}" alt="" class="big">
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
					case "vid":
						reTurn+=   `<section class="story video">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <section class="video">
				                            <div class="Enlarge">
				                            </div>
				                            <div class="Playuse">
				                            </div>
				                            <video id="video_1" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="264" data-setup='{"poster":"/resources/images/${user.username}/${c[e].contents.video}_poster.png"}' data-setup="{}">
				                                <source src="/resources/videos/${user.username}/${c[e].contents.video}.mp4" type='video/mp4' />
				                                <p class="vjs-no-js">
				                                    Para ver este vídeo, por favor activa el Javascript y considera actualizar tu navegador a uno que
				                                    <a href="http://videojs.com/       html5-video-support/" target="_blank">
				                                        soporte vídeo en Html5
				                                    </a>
				                                </p>
				                            </video>
				                        </section
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
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
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
		                                    <img class="repost" src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <div class="repostedFrom"></div>
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${c[e].originalPoster.rol.level}'>
		                                    <img class="repost" src="${c[e].originalPoster.profilePic}" alt="">
		                                    <p class="username repost"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> Reposteó de <a class="target" href="/${c[e].originalPoster.username}" title="${c[e].originalPoster.tool}">${c[e].originalPoster.users_name}</a><br>
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
					case "repostContainments":
						reTurn+=   `<section class="story repost containments">
		                                <div class="info">
		                                    <img class="repost" src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <div class="repostedFrom"></div>
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${c[e].originalPoster.rol.level}'>
		                                    <img class="repost" src="${c[e].originalPoster.profilePic}" alt="">
		                                    <p class="username repost"><a class="target" href="/${user.username}" title= "${user.tool}">${user.users_name}</a> Reposteó de <a class="target" href="/${c[e].originalPoster.username}" title="${c[e].originalPoster.tool}">${c[e].originalPoster.users_name}</a><br>
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
		case "foto":
			var reTurn= ""
			for(var e in c){
				switch(c[e].type){
					case "mult_img":
						reTurn+=   `<section class="foto mult_img">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title="${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                <section class="navigation">
		                                    <div style="display: none; " class="nav_arrow left disabled">
		                                        <div class="arrow"></div>
		                                    </div>
		                                    <div style="display: none; " class="nav_arrow right">
		                                        <div class="arrow"></div>
		                                    </div>
		                                    <section class="carr">
		                                        ${one("tnCarrItem", foReach, c[e].contents.carrContents)}
		                                    </section>
		                                </section>
		                                <div class="Comentarios"></div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <a href="#">
		                                            <li class="read"></li>
		                                        </a>
		                                    </ul>
		                                </div>
		                            </section>`
		                            break
		            case "img":
						reTurn+=   `<section class="foto img">
                                		<img class="pic" src="/resources/images/${user.username}/${c[e].contents.image}" alt="" class="big">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title="${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                <div class="Comentarios"></div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <a href="#">
		                                            <li class="read"></li>
		                                        </a>
		                                    </ul>
		                                </div>
		                            </section>`
		                            break
				}
			}
			return reTurn;
		case "video":
			var reTurn= ""
			for(var e in c){
				reTurn+=   `<img src= "/resources/images/${user.username}/${c[e].contents.video}_poster.png" class="poster">
							<section class="vid">
                                <div class="info">
                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.level}'>
                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                    <p class="username"><a class="target" href="/${user.username}" title="">${user.users_name}</a> <br><span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
                                </div>
                                <p class="title">${c[e].title}</p>
                                <p class="moreI">
                                    ${c[e].description}
                                </p>
                                <section class="video">
                                    <div class="Enlarge">
                                    </div>
                                    <div class="Playuse">
                                    </div>
                                    <video id="example_video_1" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="264" data-setup='{"poster":"/resources/images/${user.username}/${c[e].contents.video}_poster.png"}' data-setup="{}">
                                        <source src="/resources/videos/${user.username}/${c[e].contents.video}.mp4" type='video/mp4' />
                                        <p class="vjs-no-js">
                                            Para ver este vídeo, por favor activa el Javascript y considera actualizar tu navegador a uno que
                                            <a href="http://videojs.com/       html5-video-support/" target="_blank">
                                                soporte vídeo en Html5
                                            </a>
                                        </p>
                                    </video>
                                </section>
                                <div class="Comentarios"></div>
                                <div class="options button">
                                    <ul>
                                        <li class="bookmark"></li>
                                        <li class="star"></li>
                                        <a target="_blank" href="#">
                                            <li class="read"></li>
                                        </a>
                                    </ul>
                                </div>
                            </section>`
			}
			return reTurn
		case "photo":
			var reTurn= ""
			for(var e in c){
				switch(c[e].type){
					case "mult_img":
						reTurn+=   `<section class="photo mult_img">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title="${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                <section class="navigation">
		                                    <div style="display: none; " class="nav_arrow left disabled">
		                                        <div class="arrow"></div>
		                                    </div>
		                                    <div style="display: none; " class="nav_arrow right">
		                                        <div class="arrow"></div>
		                                    </div>
		                                    <section class="carr">
		                                        ${one("tnCarrItem", foReach, c[e].contents.carrContents)}
		                                    </section>
		                                </section>
		                                <div class="Comentarios"></div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <a href="#">
		                                            <li class="read"></li>
		                                        </a>
		                                    </ul>
		                                </div>
		                            </section>`
		                            break
		            case "img":
						reTurn+=   `<section class="photo img">
                                		<img class="pic" src="/resources/images/${user.username}/${c[e].contents.image}" alt="" class="big">
		                                <div class="info">
		                                    <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
		                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
		                                    <p class="username"><a class="target" href="/${user.username}" title="${user.tool}">${user.users_name}</a>${typeof c[e].city !== "undefined"? `; en <a class="target" title="         
																																								               <div class='tool city'>
																																								                   <figure>
																																								                       <img class='thumbnail' src= '${c[e].city.pic}'></img>
																																								                   </figure>
																																								               	   <div class='introduction'>
																																								                       ${c[e].city.description}
																																								                   </div>
																																								               </div>">${c[e].city.name}</a> `: ``}<br>
		                                    <span title="${c[e].date.full}" class="time">${c[e].date.min}</span></p>
		                                	${typeof c[e].Editado !== "undefined"? `<span onmousedown= '${c[e].Editado[0]}' title='${c[e].Editado[1]}' class="Editado">Editado</span>`: ``}
		                                </div>
		                                <p class="title">${c[e].title}</p>
		                                <p class="moreI">${c[e].description}</p>
		                                <div class="Comentarios"></div>
		                                <div class="options button">
		                                    <ul>
		                                        <li class="bookmark"></li>
		                                        <li class="star"></li>
		                                        <a href="#">
		                                            <li class="read"></li>
		                                        </a>
		                                    </ul>
		                                </div>
		                            </section>`
		                            break
				}
			}
			return reTurn;
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
	                                    <video id="x${(function(){vX++; return vX})()}" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="325" data-setup='{"poster":"/resources/images/${user.username}/${c[e][1]}_poster.png"}' data-setup="{}">
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
	                                    <img class="pic" src="/resources/images/${user.username}/${c[e][1]}" alt="" class="big">
	                                </section>
	                                `
	                    break;
	                default:
						reTurn+=   `<section class="picture">
	                                    <img class="pic" src="/resources/images/${user.username}/${c[e]}" alt="" class="big">
	                                </section>
	                                `
	                    break;
				}
			}
			return reTurn
		case "tnCarrItem":
			var reTurn= ""
			for(var e in c){
				switch(c[e][0]){
					case "vi":
						reTurn+=   `<section class="video">
	                                    <div class="Playuse">
	                                    </div>
	                                    <div class="Enlarge">
	                                    </div>
	                                    <video id="x${(function(){vX++; return vX})()}" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="325" data-setup='{"poster":"/resources/images/${user.username}/${c[e][1]}_poster.png"}' data-setup="{}">
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
	                                    <img class="pic" src="/resources/images/${user.username}/${c[e][1]}" alt="" class="big">
	                                </section>

	                                `
	                    break;
	                default:
						reTurn+=   `<section class="picture">
	                                    <img class="pic" src="/resources/images/${user.username}/${c[e]}" alt="" class="big">
	                                </section>

	                                `
	                    break;
				}
			}
			return reTurn
		case "situation":
			var reTurn= ""
			for(var e in c){
				reTurn+= c[e].name[0] === '#'? (function(){return `<p>${e} <a href= "#" title= "No está en liril" style= "cursor: not-allowed; color: #bdbdbd; ">${c[e].name.slice(1, c[e].name.length - 1)}</a></p>
																																																					`})(): (function(){return `<p>Novio de <a title="${c[e].tool}" href="/${c[e].username}">${c[e].name}</a>.</p>`})()
			}
			return reTurn
	}
}

var This
var wiTh
RooT.fill= function(a, b, c, d, e){
	c.html(e)
}
RooT.replace= function(a, b, c, d, e){
	c[0].outerHTML= e
}
RooT.reverse= function(a){
	var reTurn= {}
	for(var e= Object.entries(a).length - 1; e >= 0; e--){
		reTurn[Object.keys(a)[e]]= Object.values(a)[e]
	}
	return reTurn
}
var To
RooT.prepend= function(a, b, c){
	c.prepend(a)
}
RooT.append= function(a, b, c){
	c.append(a)
}
var afTer
var befoRe
RooT.put= function(a, b, c){
	switch(b){
		case afTer:
			c.after(a)
			break
		case befoRe:
			c.before(a)
			break
	}
}
var foRever
RooT.remove= function(a, b){
	b === foRever? a.remove(): undefined
}
/*Initialize some variables*/
var vX= -1
var cC= 1
var ok= true
var waiting= false
var ar= false
var next; 
var Antheater= false
can493ax= "<div class='comentario'>" + "<input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' + "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/L/OGnpwD3jys'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Laura Escobar Bonnett'>Laura Escobar Bonnett</p><p class='rol'>Princesa <b style='color:#fff;'>+100</b></p></div></div>" + '"' + " src='/resources/images/L/OGnpwD3jys'>&nbsp<a target= '_blank'  href='/L' >Laura Escobar Bonnett</a><span class='is'>: </span><span class='Comentario'>¡Yo más, Luis! 💜</span><span class='Respxxder'></span></div>"
asdknki4= "<div class='comentario'>" + "<input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' + "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Luis Eduardo Gallego García'>Luis Eduardo Gallego García</p><p class='rol'>CEO <b style='color:#fff;'>+100</b></p></div><div class='insignia' style='top: 9px;' title='Proyecto completado (aNGEL();)'></div><div class='insignia' style='top: 22px;'title='Proyecto completado (por_siLaBas();)'></div><div class='insignia' style='top: 14px;' title='Proyecto completado (dinosaurios)'></div><div class='insignia' style='top: 39px;' title='EP (Planifique)'> </div> <div class='insignia' style='top: 43px;' title='Proyecto completado (Robot De Dedicatorias)'></div></div>" + '"' + " src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'>&nbsp<a target= '_blank'  href='/A.K.A._Dizzy' >Luis Eduardo Gallego García</a><span class='is'>: </span><span class='Comentario'>Yo más, bebé</span><span class='Respxxder'></span></div>"
H= asdknki4
var token
var hashes= {}
var nonBuilt
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
    $("body").prepend("<badguy></badguy>"); 
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
                        if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
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
                        if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
                }
            }); 

            $(".current .carr").on("scroll", function(){ 
                rf= $(this)
                Math.round($(this)[0].scrollLeft / $(this).width()) == $(this).children().length - 1? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
                $(this)[0].scrollLeft == 0? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
            }) 

            $("badguy").html(e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') - 9, e.target.responseText.slice(e.target.responseText.lastIndexOf('"title"') - 9, e.target.responseText.length).indexOf('"more"') - 9 + e.target.responseText.lastIndexOf('"title"') - 9)); 
            W= e.target.responseText
            $(".current .title").html($("badguy p").html())
            $("badguy").remove()
            break; 
    }
}
getVideos= function($c, $C){videos= 0
for(var r= 0; r < $C; r++){
    videos= $($c.find(".carr").children()[r]).is(".video")? videos + 1: videos; 
}
return videos}
/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
!function(){function o(t,e){return function(){return t.apply(e,arguments)}}var u,c,i,s,n,y,t,l,v,r,a,p,e,h,w,b,f,g,d,m,k,S,q,L,x,P,T,R,j,O,E,M,A,C,N,_,F,U,W,X,D,H,I,z,G,B,J=[].slice,K={}.hasOwnProperty,Q=function(t,e){for(var n in e)K.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},V=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function Y(){}for(g={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,f=window.cancelAnimationFrame||window.mozCancelAnimationFrame,p=function(t,e,n){if("function"==typeof t.addEventListener)return t.addEventListener(e,n,!1);var r;"function"!=typeof t["on"+e]||"object"!=typeof t["on"+e].eventListeners?(r=new s,"function"==typeof t["on"+e]&&r.on(e,t["on"+e]),t["on"+e]=function(t){return r.trigger(e,t)},t["on"+e].eventListeners=r):r=t["on"+e].eventListeners,r.on(e,n)},null==R&&(R=function(t){return setTimeout(t,50)},f=function(t){return clearTimeout(t)}),O=function(e){var n=P(),r=function(){var t=P()-n;return 33<=t?(n=P(),e(t,function(){return R(r)})):setTimeout(r,33-t)};return r()},j=function(){var t=arguments[0],e=arguments[1],n=3<=arguments.length?J.call(arguments,2):[];return"function"==typeof t[e]?t[e].apply(t,n):t[e]},d=function(){for(var t,e,n,r=arguments[0],s=2<=arguments.length?J.call(arguments,1):[],o=0,i=s.length;o<i;o++)if(e=s[o])for(t in e)K.call(e,t)&&(n=e[t],null!=r[t]&&"object"==typeof r[t]&&null!=n&&"object"==typeof n?d(r[t],n):r[t]=n);return r},h=function(t){for(var e,n,r=e=0,s=0,o=t.length;s<o;s++)n=t[s],r+=Math.abs(n),e++;return r/e},k=function(t,e){var n,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",t):void 0}}},Y.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},Y.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},Y.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},Y.prototype.trigger=function(){var t,e,n,r,s,o,i=arguments[0],a=2<=arguments.length?J.call(arguments,1):[];if(null!=(r=this.bindings)&&r[i]){for(n=0,o=[];n<this.bindings[i].length;)e=(s=this.bindings[i][n]).handler,t=s.ctx,s=s.once,e.apply(null!=t?t:this,a),s?o.push(this.bindings[i].splice(n,1)):o.push(n++);return o}},B=Y,y=window.Pace||{},window.Pace=y,d(y,B.prototype),T=y.options=d({},g,window.paceOptions,k()),X=0,H=(z=["ajax","document","eventLag","elements"]).length;X<H;X++)!0===T[C=z[X]]&&(T[C]=g[C]);function Z(){return Z.__super__.constructor.apply(this,arguments)}function $(){this.progress=0}function tt(){this.bindings={}}function et(){var e,o=this;et.__super__.constructor.apply(this,arguments),e=function(r){var s=r.open;return r.open=function(t,e,n){return A(t)&&o.trigger("request",{type:t,url:e,request:r}),s.apply(r,arguments)}},window.XMLHttpRequest=function(t){t=new W(t);return e(t),t};try{m(window.XMLHttpRequest,W)}catch(t){}if(null!=U){window.XDomainRequest=function(){var t=new U;return e(t),t};try{m(window.XDomainRequest,U)}catch(t){}}if(null!=F&&T.ajax.trackWebSockets){window.WebSocket=function(t,e){var n=null!=e?new F(t,e):new F(t);return A("socket")&&o.trigger("request",{type:"socket",url:t,protocols:e,request:n}),n};try{m(window.WebSocket,F)}catch(t){}}}function nt(){this.complete=o(this.complete,this);var t=this;this.elements=[],S().on("request",function(){return t.watch.apply(t,arguments)})}function rt(t){var e,n,r,s;for(null==t&&(t={}),this.complete=o(this.complete,this),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(s=t.selectors).length;n<r;n++)e=s[n],this.elements.push(new i(e,this.complete))}function st(t,e){this.selector=t,this.completeCallback=e,this.progress=0,this.check()}function ot(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}function it(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=T.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}B=Error,Q(Z,B),n=Z,$.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(T.target)))throw new n;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var e=""!==T.className?" "+T.className:"";this.el.innerHTML='<div class="pace-progress'+e+'">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},$.prototype.finish=function(){var t=this.getElement();return t.className=t.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},$.prototype.update=function(t){return this.progress=t,y.trigger("progress",t),this.render()},$.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){n=t}return this.el=void 0},$.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(T.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,o=(i=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),y.trigger("change",this.progress),this.lastRenderedProgress=this.progress},$.prototype.done=function(){return 100<=this.progress},c=$,tt.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},tt.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},s=tt,W=window.XMLHttpRequest,U=window.XDomainRequest,F=window.WebSocket,m=function(t,e){var n,r=[];for(n in e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(t){return function(){return e.prototype[t]}}(n),configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(t){0}return r},L=[],y.ignore=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("ignore"),e=t.apply(null,e),L.shift(),e},y.track=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("track"),e=t.apply(null,e),L.shift(),e},A=function(t){if(null==t&&(t="GET"),"track"===L[0])return"force";if(!L.length&&T.ajax){if("socket"===t&&T.ajax.trackWebSockets)return!0;if(t=t.toUpperCase(),0<=V.call(T.ajax.trackMethods,t))return!0}return!1},Q(et,s),t=et,D=null,M=function(t){for(var e,n=T.ajax.ignoreURLs,r=0,s=n.length;r<s;r++)if("string"==typeof(e=n[r])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(S=function(){return D=null==D?new t:D})().on("request",function(t){var o,i=t.type,a=t.request,e=t.url;if(!M(e))return y.running||!1===T.restartOnRequestAfter&&"force"!==A(i)?void 0:(o=arguments,"boolean"==typeof(e=T.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,n,r,s="socket"===i?a.readyState<1:0<(s=a.readyState)&&s<4;if(s){for(y.restart(),r=[],t=0,e=(n=y.sources).length;t<e;t++){if((C=n[t])instanceof u){C.watch.apply(C,o);break}r.push(void 0)}return r}},e))}),nt.prototype.watch=function(t){var e=t.type,n=t.request,t=t.url;if(!M(t))return n=new("socket"===e?r:a)(n,this.complete),this.elements.push(n)},nt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},u=nt,a=function(e,n){var t,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(p(e,"progress",function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2}),t=0,r=(o=["load","abort","timeout","error"]).length;t<r;t++)p(e,o[t],function(){return n(i),i.progress=100});else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?(n(i),i.progress=100):3===e.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}},r=function(t,e){for(var n,r=this,s=this.progress=0,o=(n=["error","open"]).length;s<o;s++)p(t,n[s],function(){return e(r),r.progress=100})},rt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},k=rt,st.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},T.elements.checkInterval)},st.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},i=st,ot.prototype.states={loading:0,interactive:50,complete:100},B=ot,Q=function(){var e,n,r,s,o,i=this;this.progress=0,o=[],s=0,r=P(),n=setInterval(function(){var t=P()-r-50;return r=P(),o.push(t),o.length>T.eventLag.sampleCount&&o.shift(),e=h(o),++s>=T.eventLag.minSamples&&e<T.eventLag.lagThreshold?(i.progress=100,clearInterval(n)):i.progress=3/(e+3)*100},50)},it.prototype.tick=function(t,e){return 100<=(e=null==e?j(this.source,"progress"):e)&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/T.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),e=1-Math.pow(this.progress/100,T.easeFactor),this.progress+=e*this.rate*t,this.progress=Math.min(this.lastProgress+T.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v=it,b=e=_=w=E=N=null,y.running=!1,q=function(){if(T.restartOnPushState)return y.restart()},null!=window.history.pushState&&(I=window.history.pushState,window.history.pushState=function(){return q(),I.apply(window.history,arguments)}),null!=window.history.replaceState&&(G=window.history.replaceState,window.history.replaceState=function(){return q(),G.apply(window.history,arguments)}),l={ajax:u,elements:k,document:B,eventLag:Q},(x=function(){var t,e,n,r,s,o,i,a;for(y.sources=N=[],e=0,r=(o=["ajax","elements","document","eventLag"]).length;e<r;e++)!1!==T[t=o[e]]&&N.push(new l[t](T[t]));for(n=0,s=(a=null!=(i=T.extraSources)?i:[]).length;n<s;n++)C=a[n],N.push(new C(T));return y.bar=w=new c,E=[],_=new v})(),y.stop=function(){return y.trigger("stop"),y.running=!1,w.destroy(),b=!0,null!=e&&("function"==typeof f&&f(e),e=null),x()},y.restart=function(){return y.trigger("restart"),y.stop(),y.start()},y.go=function(){var m;return y.running=!0,w.render(),m=P(),b=!1,e=O(function(t,e){w.progress;for(var n,r,s,o,i,a,u,c,l,p,h=a=0,f=!0,g=u=0,d=N.length;u<d;g=++u)for(C=N[g],i=null!=E[g]?E[g]:E[g]=[],s=c=0,l=(r=null!=(p=C.elements)?p:[C]).length;c<l;s=++c)o=r[s],f&=(o=null!=i[s]?i[s]:i[s]=new v(o)).done,o.done||(h++,a+=o.tick(t));return n=a/h,w.update(_.tick(t,n)),w.done()||f||b?(w.update(100),y.trigger("done"),setTimeout(function(){return w.finish(),y.running=!1,y.trigger("hide")},Math.max(T.ghostTime,Math.max(T.minTime-(P()-m),0)))):e()})},y.start=function(t){d(T,t),y.running=!0;try{w.render()}catch(t){n=t}return document.querySelector(".pace")?(y.trigger("start"),y.go()):setTimeout(y.start,50)},"function"==typeof define&&define.amd?define(function(){return y}):"object"==typeof exports?module.exports=y:T.startOnPageLoad&&y.start()}.call(this);
/**/
var purger= {}; 
            
purger.index= 16; 
                 
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

var tipo= function( liurl ){ 
    if(liurl.indexOf( "/images/" ) != -1)return "/img/"; 
    if(liurl.indexOf( "/videos/" ) != -1)return "/vid/"; 
    if(liurl.indexOf( "/images/" ) != -1)return "/img/"; 
} 
function newChat(a, b){
        $(".chats").prepend("<div class='chat open "+b.toString()+"'><div class='chatTitle button'><p class='user'>"+ a.find("p").text() +"</p><span class='close'></span></div><div class='chatBox'><div class='messages'></div><div class='newMessage'><textarea rows='1'/><div class='emoticon'></div></div></div>");
        $(".chats .chat:first-child .newMessage textarea").focus();
        $(".chats .chat:first-child .newMessage textarea").on('input', function() { 
            $(this).height(""); 
            !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
        }); 
}
function destroyChat(a){
    var i = a.closest(".chat").hasClass("open") ? a.closest(".chat").attr('class').split(' ')[2] : a.closest(".chat").attr('class').split(' ')[1]
    $("#chat ul li."+i).removeClass(i)
    a.closest(".chat").remove();
    $(".chats .chat:first-child .newMessage textarea").focus();

}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function prependClass(sel, strClass) {
    var $el = jQuery(sel);

    /* prepend class */
    var classes = $el.attr('class');
    classes = strClass +' ' +classes;
    $el.attr('class', classes);
}
function getCaret(el) {
  if (el.selectionStart) {
     return el.selectionStart;
  } else if (document.selection) {
     el.focus();

   var r = document.selection.createRange();
   if (r == null) {
    return 0;
   }

    var re = el.createTextRange(),
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }  
  return 0;
}
function sizeMessages(a){
    CBH= a.closest(".chat").find(".chatBox").height()
    NMH = a.closest(".chat").find(".chatBox .newMessage" ).outerHeight()
    a.closest(".chat").find(".chatBox .messages").height(CBH - NMH - 8);
    a.closest(".chat").find(".chatBox .messages").css({bottom: NMH})
}
function scrollBottom(d){
    d.scrollTop(d.prop("scrollHeight"));
}
var un_tn= function(u, no){ 
    return (typeof no !== "undefined" && no? u: u.slice(0, u.indexOf("_tn")) + u.slice(u.indexOf("_tn") + 3)); 
}
var storyFromLink= function(w){
    return $('.options a[href= "'+ w +'"]').closest(".story")
}
var getVideos= function($c, $C){videos= 0
for(var r= 0; r < $C; r++){
    videos= $($c.find(".carr").children()[r]).is(".video")? videos + 1: videos; 
}
return videos}
var openModal= function(a){
    Antheater= a.closest(".story"); 

    th= $(a.closest('.story')); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 

    $("#theater").addClass("animated fadeIn "); 
    $("#theater #theater_video").removeClass("visible"); 

    $("#theater .Playuse").removeClass("visible"); 

    $("#theater #otherContainments").removeClass("visible"); 

    $("#theater #bigPic").removeClass("invisible"); 

    $("#theater #otherContainments > div").html(""); 

    $(".theater").css({
        "display": "block"
    })
    $this= a.closest('.story')
    var source= a.attr('src');
    $('.theater #bigPic').attr('src', source);

    source= un_tn(source); 
                           
    history.pushState({page: 1}, "", "/" + (a.closest('.story').is(".repost")? $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length)) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

    var info= a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title= a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments= a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    $("#theater .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#theater .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#theater .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $("#theater .RespueNtas").click(function(i){ 
        if($(i.target).is(".RespueNtas")){ 
            for(j= 0; j <= 2; j++){ 
                $(this).before(H); 

                $(this).prev().on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 
                                   
                $(".knob").not(".foto .knob").knob(); 
                                   
                tooltipComentarios(); 
                    
                H != can493ax? H= can493ax: H= asdknki4; 
            }

            $(this).html('<span class="Responder"></span>Más respuestas (∞)'); 

            for(let collapse of document.querySelectorAll("#theater .RespueNtas .Responder")){ 
                collapse.addEventListener("contextmenu", function(e){ 
                    e.preventDefault(); 

                    $(this.parentElement.parentElement).find(".comentario").remove(); 
                                
                    H= asdknki4; 

                    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 
                }) 
            }; 
        }
    }); 

    tooltip(); 

    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").not(".foto .knob").knob(); 

    tooltipComentarios(); 

    if (a.closest('.story').find(".options .bookmark").hasClass("true")){
        $('.theater .comments .options .bookmark').addClass("true");
    }else{
        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")){
        $('.theater .comments .options .star').addClass("true");
    }else{
        $('.theater .comments .options .star').removeClass("true");
    }

    var pic= a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref= a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 
     
    responsive()
    if(a.closest('.story').is(".mult_img") || a.closest('.story').is(".mult_carr")){ 
        if(($(a).parent().index() * $(a.closest(".story")).width()) < a.closest(".carr")[0].scrollLeft){ 
            $(".current .carr").stop(true, false); 
            $(".current .carr").animate({scrollLeft: ($(a).parent().index() * $(a.closest(".story")).width())}, (400 - (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))); 
            /*$(".current .nav_arrow.left .arrow").click(); */ 
        }else{ 
            $(".current .carr").stop(true, false); 
            /*console.log((400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))*/ //No me restrinjan la chimbada, no...
            $(".current .carr").animate({scrollLeft: ($(a).parent().index() * $(a.closest(".story")).width())}, (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)))); 
            /*$(".current .nav_arrow.right .arrow").click(); */ 
        } 
        ar= a.closest('.story'); 

        $("#theater").append('<div class="nav_arrow left' + (a.closest('.story').find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (a.closest('.story').find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            th= $("#theater").css("display") == "none"? $(".current"): th; 
            if($("#theater .nav_arrow.left").is(".disabled"))
                {return}; 
            if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
            }else if(!!th.find(".carr").length){ 
                /*console.log( lk )*/ 
                th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
                lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                lk= un_tn( lk ); 
                $("#theater video")[0].src= ""; 
                th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                source= un_tn($("#theater").find("#bigPic")[0].src)
                history.pushState({page: 1}, "", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
            }
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            th= $("#theater").css("display") == "none"? $(".current"): th; 
            if($("#theater .nav_arrow.right").is(".disabled"))
                {return}; 
            if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
            }else if(!!th.find(".carr").length){ 
                /*console.log( lk )*/ 
                th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
                lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                lk= un_tn( lk ); 
                $("#theater video")[0].src= ""; 
                th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                source= un_tn($("#theater").find("#bigPic")[0].src)
                history.pushState({page: 1}, "", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
            }
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
    }else if(a.closest('.story').is(".repost")){ 
        source= un_tn($("#theater").find("#bigPic")[0].src); 
        history.pushState({page: 1}, "", "/" + $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 
        //lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf(".")));  
    }

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
}
var openVideoModal= function(a){ 
    Antheater= a.closest(".story"); 

    th= a.closest(".story"); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this= a.closest('.story')
    var source= a.closest('.video').find("video").attr('src');
    $('.theater video').attr('src', source);

    $('.theater video').attr('autoplay', "true");

    source= un_tn(source); 
                           
    if(!a.closest('.story').is(".repost")){ 
        history.pushState({page: 1}, "", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + "/vid/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    }else{
        history.pushState({page: 1}, "", a.closest('.story').find(".options li.read").parent().attr("href")); 
    }

    var info= a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title= a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments= a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

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

    $(".knob").not(".foto .knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    $("#theater .Comentario audio").each(function(){audiojs.create($(this)[0])}); 

    if (a.closest('.story').find(".options .bookmark").hasClass("true")){
        $('.theater .comments .options .bookmark').addClass("true");
    }else{
        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 
$('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")){
        $('.theater .comments .options .star').addClass("true");
    }else{
        $('.theater .comments .options .star').removeClass("true");
    }

    $("#theater #theater_video").addClass("visible")

    $("#theater .Playuse").addClass("visible")

    $("#theater #bigPic").addClass("invisible")

    th.find("video")[0].pause(); 

    var pic= a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref= a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 

    responsive()

if(a.closest('.story').is(".mult_img") || a.closest('.story').is(".mult_carr")){ 
        if(($(a).parent().index() * $(a.closest(".story")).width()) < a.closest(".carr")[0].scrollLeft){ 
            $(".current .carr").stop(true, false); 
            $(".current .carr").animate({scrollLeft: ($(a).parent().index() * $(a.closest(".story")).width())}, (400 - (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))); 
            /*$(".current .nav_arrow.left .arrow").click(); */ 
        }else{ 
            $(".current .carr").stop(true, false); 
            /*console.log((400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))*/ //No me restrinjan la chimbada, no...
            $(".current .carr").animate({scrollLeft: ($(a).parent().index() * $(a.closest(".story")).width())}, (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)))); 
            /*$(".current .nav_arrow.right .arrow").click(); */ 
        } 
        ar= a.closest('.story'); 

        $("#theater").append('<div class="nav_arrow left' + (a.closest('.story').find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (a.closest('.story').find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            th= $("#theater").css("display") == "none"? $(".current"): th; 
            if($("#theater .nav_arrow.left").is(".disabled"))
                {return}; 
            if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
            }else if(!!th.find(".carr").length){ 
                /*console.log( lk )*/ 
                th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
                lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                lk= un_tn( lk ); 
                $("#theater video")[0].src= ""; 
                th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                source= un_tn($("#theater").find("#bigPic")[0].src)
            }
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            th= $("#theater").css("display") == "none"? $(".current"): th; 
            if($("#theater .nav_arrow.right").is(".disabled"))
                {return}; 
            if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
            }else if(!!th.find(".carr").length){ 
                /*console.log( lk )*/ 
                th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
                lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                lk= un_tn( lk ); 
                $("#theater video")[0].src= ""; 
                th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                source= un_tn($("#theater").find("#bigPic")[0].src)
            }
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
    }else if(a.closest('.story').is(".repost")){ 
        source= un_tn($("#theater").find("#bigPic")[0].src); 
        //lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + a.closest(".story").find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf(".")));  
    }

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
}
var openOtherModal= function(a){ 
    Antheater= a.closest(".story"); 

    th= a.closest(".story"); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this= a.closest('.story')
    var source= a.closest('.story').find("video").attr('src');

    history.pushState({page: 1}, "", "/" + (a.closest('.story').is(".repost")? $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): a.closest('.story').find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length)) + "/pos" + a.parent().find("a.read").attr("href").slice(a.parent().find("a.read").attr("href").lastIndexOf("/"))); 

    var info= a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title= a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments= a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    th.find(".revelar.activado").click(); 
    
    var containment= a.closest('.story').find(".title").next().prop("outerHTML");
    $('.theater #otherContainments > div').html(containment);

    $("#theater .media > div").each(function(){$(this)[0].outerHTML= $(this).find("audio")[0].outerHTML}); 

    $("#theater #picContainer audio").each(function(){audiojs.create($(this)[0])}); 

    $("#otherContainments").is(".visible")? $("#otherContainments > div").height() < $("#otherContainments > div")[0].scrollHeight? $("#otherContainments").addClass("overflowing"): $("#otherContainments").removeClass("overflowing"): 1; 

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

    $(".knob").not(".foto .knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    $("#theater .Comentarios audio").each(function(){audiojs.create($(this)[0])}); 

    if (a.closest('.story').find(".options .bookmark").hasClass("true")){
        $('.theater .comments .options .bookmark').addClass("true");
    }else{
        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 
$('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")){
        $('.theater .comments .options .star').addClass("true");
    }else{
        $('.theater .comments .options .star').removeClass("true");
    }

    $("#theater #bigPic").addClass("invisible")

    $("#theater #otherContainments").addClass("visible")

    var pic= a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref= a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 

    responsive()

    $("#theater .revelar").on("click", function(){ 
        if($(this).text()[0] != "O"){ 
            $(this).parent().css({"height": "auto"}); 
            $(this)[0].tx= $(this).text(); 
            $(this).text("Ocultar de nuevo."); 
            $(this).addClass("activado"); 
        }else{ 
            $(this).parent().css({"height": "0"}); 
            $(this).text($(this)[0].tx); 
            $(this).removeClass("activado"); 
        }
    })
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
}
var openProfilePicModal= function(a){
    Antheater= a; 

    th= $(a.closest('#profilePic')); 

    $("body")[0].style.overflow= "hidden"; 

    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this= a.parent(); 
    var source= un_tn($(a.closest("#profilePic").children()[0]).attr('src'));
    $('.theater #bigPic').attr('src', source);

    history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

    var info= a.closest('#profilePic').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title= a.find(".hidden").find(".title").html();
    $('.theater .comments .title').html(title);
    if (a.find(".hidden").find(".options .bookmark").hasClass("true")){
        $('.theater .comments .options .bookmark').addClass("true");
    }else{
        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 
$('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.find(".hidden").find(".options .star").hasClass("true")){
        $('.theater .comments .options .star').addClass("true");
    }else{
        $('.theater .comments .options .star').removeClass("true");
    }

    var more= !!a.find(".moreI").html()? a.find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var pic= a.find(".hidden").find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref= a.find(".hidden").find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    var comments= a.find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments); 

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

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

    $(".knob").not(".foto .knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 


    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
    responsive(); 
}
var openFotosModal= function(a){
    Antheater= a.closest(".foto"); 

    th= a.closest('.foto'); 

    /*console.log( th.closest(".foto") ); */ 

    /*console.log( th ); */ 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this= a

    var info= a.closest('.foto').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title= a.closest(".foto").find(".title").html();
    $('.theater .comments .title').html(title);

    th= $( th.context ).closest( ".foto" ); 

    console.log( "OpenFotosModal" )
    if ($( th.context ).closest( ".foto" ).find(".options .bookmark").hasClass("true")){
        console.log( th, $('.theater .comments .options .bookmark') ); 
        $('.theater .comments .options .bookmark').addClass("true");
        console.log( $('.theater .comments .options .bookmark').hasClass( "true" ) ); 
    }else{
        console.log( th, $('.theater .comments .options .bookmark') ); 
        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 

        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 
$('.theater .comments .options .bookmark').removeClass("true");
    }
    if ($( th.context ).closest( ".foto" ).find(".options .star").hasClass("true")){
        $('.theater .comments .options .star').addClass("true");
    }else{
        $('.theater .comments .options .star').removeClass("true");
    }
    var pic= a.closest(".foto").find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref= a.closest(".foto").find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    var more= !!a.closest('.foto').find(".moreI").html()? a.closest('.foto').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments= a.closest('.foto').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

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

    $(".knob").not(".foto .knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 

    if(a.closest('.foto').is(".mult_img")){ 
        ar= $(a.closest('.foto')); 
        source= un_tn( ar.find(".carr > section")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].getElementsByTagName( "img" )[0].src ); 
        $("#theater").find("#bigPic")[0].src= un_tn( ar.find(".carr > section")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].getElementsByTagName( "img" )[0].src ); 
        $("#theater").append('<div class="nav_arrow left' + (ar.find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (ar.find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            th= $( th.context ).closest( ".foto" ); 

            if($("#theater .nav_arrow.left").is(".disabled"))
                    {return}; 
                if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
                }else if(!!th.find(".carr").length){ 
                    /*console.log( lk )*/ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                    lk= un_tn( lk ); 
                    $("#theater video")[0].src= ""; 
                    th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                    source= un_tn($("#theater").find("#bigPic")[0].src)
                    history.pushState({page: 1}, "", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                }
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            th= $( th.context ).closest( ".foto" ); 

                if($("#theater .nav_arrow.right").is(".disabled"))
                    {return}; 
                if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
                }else if(!!th.find(".carr").length){ 
                    /*console.log( lk )*/ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                    lk= un_tn( lk ); 
                    $("#theater video")[0].src= ""; 
                    th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                    source= un_tn($("#theater").find("#bigPic")[0].src)
                    history.pushState({page: 1}, "", "/" + user.username + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
                }
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
        history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    }else{ 
        var source= un_tn($(a.closest(".foto").children()[0]).attr('src')); 
        $('.theater #bigPic').attr('src', source); 
        history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    }
    //console.log( th );  

    responsive(); 
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
}
var openVidModal;
var openPhotoModal= function(a) {
    th= a.closest(".photo"); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = th; 

    var info = a.closest('.photo').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest(".photo").find(".title").html();
    $('.theater .comments .title').html(title);
    if (a.closest(".photo").find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest(".photo").find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }
    var pic = a.closest(".photo").find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest(".photo").find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    var more= !!a.closest('.photo').find(".moreI").html()? a.closest('.photo').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.photo').find(".Comentarios").html();
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

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 

    if(a.closest('.photo').is(".mult_img")){ 
        ar= $(a.closest('.photo')); 
        source= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
        $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
        $("#theater").append('<div class="nav_arrow left' + (ar.find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (ar.find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            !ar.find(".carr").is(":animated")? ar.find(".carr")[0].scrollLeft= ar.find(".carr")[0].scrollLeft - ar.find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
            source= un_tn($("#theater").find("#bigPic")[0].src); 
            history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            !ar.find(".carr").is(":animated")? ar.find(".carr")[0].scrollLeft= ar.find(".carr")[0].scrollLeft + ar.find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
            source= un_tn($("#theater").find("#bigPic")[0].src); 
            history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
        history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    }else{ 
        var source = un_tn($(a.closest(".photo").children()[0]).attr('src')); 
        $('.theater #bigPic').attr('src', source); 
        history.pushState({page: 1}, "", "/" + user.username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    } 
    responsive(); 
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
}
var closeModal;
var getNewComments= function(m, h){ 
    var arr= []; 
                 
    for(f= (m.children().filter(".comentario").length - (m.children().filter(".comentario").length - h.children().filter(".comentario").length)); f <= (m.children().filter(".comentario").length - 1); f++){ 
        arr[arr.length]= ["C", $(m.children().filter(".comentario")[f])[0].outerHTML]; 
        $(m.children().filter(".comentario")[f]).next().is(".respuestas")? arr[arr.length]= ["R", $(m.children().filter(".comentario")[f]).next()[0].outerHTML]: 1; 
    } 
      
    arr= !h.is(".Comentarios")? [arr, pathfinder(h)]: [arr]; 
                
    return arr; 
} 
var pathfinder= function(w){ 
    tt= w; 
    c= []; 
    
    while(!tt.is(".Comentarios")){ 
        c[c.length]= tt.parent().children().filter(".comentario").index(tt.prev()); 
        tt= tt.parent();    
    }
    return c; 
}
var finder= function(i, n){ 
    y= n.find(".Comentarios"); 
    
    typeof i.is == "undefined"? (function(){c= []; for(ie in i){c[c.length]= i[ie]}})(): pathfinder(i); 

    while(c.length > 1){ 
        y= $(y.children().filter(".comentario")[c[c.length - 1]]).next(); 
        c= c.splice(0, c.length - 1); 
    } 
    
    return $(y.children().filter(".comentario")[c[c.length - 1]]).next(); 
}
var getCommentsAndAnswers= function(u, l){ 
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
var wD= function(thi, b){ 
    if(typeof b == "undefined"){ 
        if(!thi.parent().next(".newComment").find("textarea").length){ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
                                                                         
            thi.parent().after('<div class="newComment"><textarea rows="1"></textarea></div>'); 
                                                                                                           
            $(thi.parent().next(".newComment").find("textarea")).on('input', function(){ 
                $(this).height(""); 
                                    
                !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
                            
                C= $(this); 
                            
                $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){!abc.parent().next().is(".respuestas")? (function(){ll= $($("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='respuestas'><div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div><span class='Respuestas'><span class='Responder'></span></span></div>"; ll.next().find(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); ll.next().find(".comentario").on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); $(ll.next().find(".Respuestas .Responder")).on("click", function(){wD($(this), 1)}); $(ll.next().find(".comentario .Responder")).on("click", function(){wD($(this))}); badGuy(); })(): (function(){abc.parent().next().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().next().append('<span class="Respuestas"><span class="Responder"></span></span>'); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder"))[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); $(abc.parent().next().children()[abc.parent().next().children().length - 1]).before("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $($(abc.parent().next().children()[abc.parent().next().children().length - 2]).find(".Responder")).on("click", function(){wD($(this))}); $($(abc.parent().next().children()[abc.parent().next().children().length - 2])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); abc.parent().remove(); badGuy(); })()})(): 1; 

                $(".knob").not(".foto .knob").knob(); 

                tooltipComentarios(); 
            }); 

            aa= thi; 
                         
            $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
                                                                                          
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
                            
                $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.parent().parent().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().parent().append('<span class="Respuestas"><span class="Responder"></span></span>'); $(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).children().filter(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); ll= $($("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"; ll.next().on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); $(ll.next().find(".Responder")).on("click", function(){wD($(this))}); badGuy(); })(): 1; 

                $(".knob").not(".foto .knob").knob(); 

                tooltipComentarios(); 
            }); 

            aa= thi; 
                         
            $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
                                                                                          
            $($(aa).parent().next(".newComment").find("textarea")).focus(); 
        }else{ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
        }
    }
}
var wd= function(Tt, l){ 
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
var wwd= function(t, tr){ 
    $(".respuestas .newComment").remove(); 

    $(t.parentElement.parentElement).children().each(function(){ 
        $(this).index() != $(this).parent().children().length - 1? $(this).addClass("hidden"): 1; 
    }); 
        
    typeof tr === "undefined"? $(t).closest(".respuestas").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}): 1; 
                                                                
    U= $(t).parent().parent().children().filter(".Respuestas"); 
                                                                
    (U.length == 2)? (function(){$(U[1]).html("<span class='Responder'></span>Respuestas (" + $(U[1]).parent().children().filter(".comentario").length + ")"); $(U[1]).click(function(l){wd($(this), l)}); $($(U[1]).find(".Responder")).on("click", function(){wD($(this), 1)}); U[0].remove()})(): (function(){U.html("<span class='Responder'></span>Respuestas (" + U.parent().children().filter(".comentario").length + ")"); U.click(function(l){wd($(this), l)}); $(U.find(".Responder")).on("click", function(){wD($(this), 1)}); })(); 
}
var bGComments= function(arg){ 
    ($("#theater").css("display") == "block" && (typeof arg == "undefined"))? (function(){ 
        $("body").prepend("<badguy></badguy>"); 
        $("badguy").html($("#theater .Comentarios").html()); 
        $("badguy .Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
        $("badguy").find(".Respuestas .Responder").each(function(){wwd($(this)[0], 1)}); 
        bG= $("badguy")[0].innerHTML; 
        $("badguy").remove(); 
    })(): (function(){bG= (typeof arg == "undefined")? $(".current .Comentarios")[0].innerHTML: $(arg).find(".Comentarios")[0].innerHTML; })(); 
    return bG; 
}
var badGuy= function(){ 
    Antheater= typeof th != "undefined" && !th.is(".story")? th: $(".current")
    console.log(Antheater)
    iTS= $(Antheater).is(".mult_carr")? $(Antheater.find(".carr section")[0]).is(".picture")? `${$(Antheater).find(".options a").attr("href").slice(0, $(Antheater).find(".options a").attr("href").lastIndexOf("/") - 4)}/img/${$($(Antheater).find(".carr section")[0]).find("img").attr("src").slice(-14, -4)}`: `${$(Antheater).find(".options a").attr("href").slice(0, $(Antheater).find(".options a").attr("href").lastIndexOf("/") - 4)}/vid/${$($(Antheater).find(".carr section")[0]).find("video").attr("src").slice(-14, -4)}`: (!Antheater.is(".current")? !!Antheater.find(".carr").length? window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + $(Antheater).find(".carr").find("img")[0].src.slice($(Antheater).find(".carr").find("img")[0].src.lastIndexOf("/"), $(Antheater).find(".carr").find("img")[0].src.lastIndexOf(".")): window.location.pathname: $(".current").is(".mult_img")? $(".current").find(".options a").attr("href").slice(0, $(".current").find(".options a").attr("href").lastIndexOf("/")) + $(".current").find(".carr").find("img")[0].src.slice($(".current").find(".carr").find("img")[0].src.lastIndexOf("/"), $(".current").find(".carr").find("img")[0].src.lastIndexOf(".")): $(".current").find(".options a").attr("href")); 
    localStorage.setItem(iTS, JSON.stringify({B: ($("#theater").css("display") == "block"? $("#theater .options .bookmark").hasClass("true"): $(".current").find(".options .bookmark").hasClass("true"))? true: false, S: ($("#theater").css("display") == "block"? $("#theater .options .star").hasClass("true"): $(".current").find(".options .star").hasClass("true"))? true: false, C: bGComments(), hash: ((localStorage.getItem(iTS) != null && (typeof JSON.parse(localStorage.getItem(iTS)).hash != "undefined"))? JSON.parse(localStorage.getItem(iTS)).hash: hashes[iTS])})); 
    $(".story").each(function(){ 
        cold= JSON.parse(localStorage.getItem($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href"))); 
                            
        var t= $(this)[0]; 
                            
        !!cold? (function(){ 
            cold.B? $(t).find(".options .bookmark").addClass("true"): $(t).find(".options .bookmark").removeClass("true"); 
            cold.S? $(t).find(".options .star").addClass("true"): $(t).find(".options .star").removeClass("true"); 
            $(t).find(".Comentarios")[0].innerHTML= cold.C; 
        })(): 1; 
    }); 
}
var tooltip= function(){ 
    $('.title').tooltip({
        items: 'a.target',
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").not(".foto .knob").knob();

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
    $(".line").tooltip({
            track: true,
            position: {
                my: "center bottom-6",
                at: "center top"
            }
        });
    $('.username').tooltip({
        items: 'a.target',
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").not(".foto .knob").knob();

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
function tooltipComentarios(){ 
    $('.comentario').tooltip({ 
        items: 'img', 
        open: function(event, ui) 
        { 
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").not(".foto .knob").knob();

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
var k200= function(f, ww1, a, u, ty){ 
    console.log("Entered!")
switch(ty){
	case "foto": 
        $(".foto").each(function(){ 
            if(("/" + user.username + "/img" + ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).slice(($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("/"), ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("."))) == f.target.responseURL.slice(98, -5)){
                a= $(this); 
                (function(){ 
                    a.find("img").on("click", function(){openFotosModal($(this));}); 
                })(); 
            }
        })
    break; 
    case "video": 
        $(".vid").each(function(){ 
            if($(this).find(".options a").attr("href") == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){ 
                a= $(this); 
                (function(){ 
                    a.prev().on("click", function(){openVidModal($(this).next().find(".Enlarge"))}); 
                })(); 
            } 
        }) 
    break; 
    case "story": 
        $(".story").each(function(){ 
            if(($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href")) == f.target.responseURL.slice(98, -5)){
                a= $(this); 
                (function(){ 
                    a.on( "click", function(r){ 
                        $( r.target ).is( ".pic" )? openModal( $( r.target ) ): 1; 
                        $( r.target ).is( ".video .Enlarge" )? openVideoModal( $( r.target ) ): 1; 
                        $( r.target ).is( ".options .Enlarge" )? openOtherModal( $( r.target ) ): 1; 
                    } ); 
                })(); 
            }
        }); 
    break; 
    case "photo": 
        $(".photo").each(function(){ 
            if(("/" + user.username + "/img" + ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).slice(($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("/"), ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("."))) == f.target.responseURL.slice(98, -5)){
                a= $(this); 
                (function(){ 
                    a.find("img").on("click", function(){openPhotoModal($(this))}); 
                })(); 
            }
        })
    break; 
    case "profilePic": 
        $("#profilePic").each(function(){ 
            if(("/" + user.username + "/img" + ($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)).slice(($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)).lastIndexOf("/"), ($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)).lastIndexOf(".")))
 == f.target.responseURL.slice(98, -5)){
                a= $(this);
                (function(){ 
                    $("#profilePic").on("click", function(){openProfilePicModal($(this));}); 
                })(); 
            }
        }); 
    break; 
}; 

	console.log((f.target.responseURL.slice(98, -5)))
    aS= a; 
    if(JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).hash != hashes[f.target.responseURL.slice(98, -5)]){
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
        
        JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).B? aS.find(".options .bookmark").addClass("true"): aS.find(".options .bookmark").removeClass("true");
        JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).S? aS.find(".options .star").addClass("true"): aS.find(".options .star").removeClass("true");
        !!JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).C? (function(){aS.find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).C})(): 1;
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
        console.log(f.target.responseURL.slice(98, -5))
        localStorage.setItem(f.target.responseURL.slice(98, -5), JSON.stringify({B: JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).B, S: JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).S, C: bGComments(aS), hash: u[0].sha})); 
    }else{
        JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).B? aS.find(".options .bookmark").addClass("true"): aS.find(".options .bookmark").removeClass("true");
        JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).S? aS.find(".options .star").addClass("true"): aS.find(".options .star").removeClass("true");
        !!JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).C? (function(){aS.find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(f.target.responseURL.slice(98, -5))).C})(): 1;
    }
}
var k300= function(C, p, y, ty){ 
    typeof JSON.parse(C.target.response)[0] == "undefined"? console.log(C): 1; 


    hashes[C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))]= (function(){built= true; for(eForensics in JSON.parse(C.target.response)){ 
            if(nonBuilt.indexOf(JSON.parse(C.target.response)[eForensics].sha) != -1){ 
                built= parseInt(eForensics) + 1; 
            } 
        }; return built !== true? JSON.parse(C.target.response)[built].sha: JSON.parse(C.target.response)[0].sha; })(); 
    if(!!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))) && JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash != JSON.parse(C.target.response)[0].sha){
        var oReq= new XMLHttpRequest(); 
        oReq.addEventListener("load", function(e){k200(e, p, y, JSON.parse(C.target.response), ty)}); 
        oReq.open("GET", "https://raw.githubusercontent.com/LirilC/Lirilc.github.io/" + JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash + C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")) + ".html"); 
        oReq.send(); 
    }else if(!!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))))){
        switch(ty){
        	case "foto": 
                $(".foto").each(function(){ 
                    if(("/" + user.username+ "/img" + ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).slice(($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("/"), ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("."))) == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){
                        a= $(this); 
                        (function(){ 
                            a.find("img").on("click", function(){openFotosModal($(this));}); 
                        })(); 
                    }
                })
            break; 
            case "video": 
                $(".vid").each(function(){ 
                    if($(this).find(".options a").attr("href") == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){
                        a= $(this); 
                        (function(){ 
                            a.prev().on("click", function(){openVidModal($(this).next().find(".Enlarge"))}); 
                        })(); 
                    }
                })
            break; 
            case "story": 
                $(".story").each(function(){ 
                    if(($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href")) == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){
                        a= $(this); 
                        (function(){ 
                            a.on( "click", function(r){ 
                                $( r.target ).is( ".pic" )? openModal( $( r.target ) ): 1; 
                                $( r.target ).is( ".video .Enlarge" )? openVideoModal( $( r.target ) ): 1; 
                                $( r.target ).is( ".options .Enlarge" )? openOtherModal( $( r.target ) ): 1; 
                            } ); 
                        })(); 
                    }
                }); 
            break; 
            case "photo": 
                $(".photo").each(function(){ 
                    if(("/" + user.username + "/img" + ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).slice(($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("/"), ($(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src)).lastIndexOf("."))) == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){ 
                        a= $(this); 
                        (function(){ 
                            a.find("img").on("click", function(){openPhotoModal($(this))}); 
                        })(); 
                    } 
                }) 
            break; 
			case "profilePic": 
                $("#profilePic").each(function(){ 
                    if(("/" + user.username+ "/img" + ($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)).slice(($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)).lastIndexOf("/"), ($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)).lastIndexOf(".")))
 == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){
                        a= $(this);
                        (function(){ 
                            $("#profilePic").on("click", function(){openProfilePicModal($(this));}); 
                        })(); 
                    }
                }); 
            break; 
        }; 
        JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).B? storyFromLink(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))).find(".options .bookmark").addClass("true"): storyFromLink(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))).find(".options .bookmark").removeClass("true"); 
        JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).S? storyFromLink(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))).find(".options .star").addClass("true"): storyFromLink(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))).find(".options .star").removeClass("true"); 
        !!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).C? (function(){storyFromLink(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))).find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).C})(): 1; 

    }
} 
var K100= function(builds){ 
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
    $(".foto").each(function(){ 
        src= $(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src); 
        w1=  "/" + user.username + "/img" + src.slice(src.lastIndexOf("/"), src.lastIndexOf(".")); 
        console.log(w1) 
        cold= JSON.parse(localStorage.getItem(w1)); 
        t= $(this); 
        (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
            var oReq= new XMLHttpRequest(); 
            oReq.addEventListener("load", function(e){k300(e, w1, t, "foto")}); 
            oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/commits?path=" +  w1 + ".html"); 
            oReq.setRequestHeader('Authorization', "token " + token); 
            oReq.send(); 
            !(!!cold && (cold.hash))? t.find("img").on("click", function(){openFotosModal($(this));}): 1; 
        })(): (function(){
        })(); 
    }); 
    $(".vid").each(function(){ 
        w1= $(this).find(".options a").attr("href"); 
        console.log(w1) 
        cold= JSON.parse(localStorage.getItem(w1)); 
        t= $(this); 
        (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
            var oReq= new XMLHttpRequest(); 
            oReq.addEventListener("load", function(e){k300(e, w1, t, "video")}); 
            oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/commits?path=" +  w1 + ".html"); 
            oReq.setRequestHeader('Authorization', "token " + token); 
            oReq.send(); 
            !(!!cold && (cold.hash))? t.prev().on("click", function(){openVidModal($(this).next().find(".Enlarge"))}): 1; 
        })(): (function(){
        })(); 
    }); 
    $(".photo").each(function(){ 
        src= $(this).is(".mult_img")? un_tn($(this).find(".carr img")[0].src): un_tn($(this).find(".pic")[0].src); 
        w1=  "/" + user.username + "/img" + src.slice(src.lastIndexOf("/"), src.lastIndexOf(".")); 
        console.log(w1) 
        cold= JSON.parse(localStorage.getItem(w1)); 
        t= $(this); 
        (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
            var oReq= new XMLHttpRequest(); 
            oReq.addEventListener("load", function(e){k300(e, w1, t, "photo")}); 
            oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/commits?path=" +  w1 + ".html"); 
            oReq.setRequestHeader('Authorization', "token " + token); 
            oReq.send(); 
            !(!!cold && (cold.hash))? t.find("img").on("click", function(){openPhotoModal($(this))}): 1; 
        })(): (function(){ 
        })(); 
    }); 
if(RooT.maTch.user.exec(window.location.pathname) !== null){
    src= ($("#profilePic").is(".mult_img")? un_tn($("#profilePic").find(".carr img")[0].src): un_tn($("#profilePic > img")[0].src)); 
    w1= "/" + user.username + "/img" + src.slice(src.lastIndexOf("/"), src.lastIndexOf(".")); 
    cold= JSON.parse(localStorage.getItem(w1)); 
    t= $(this); 
    (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
        var oReq= new XMLHttpRequest(); 
        oReq.addEventListener("load", function(e){k300(e, w1, t, "profilePic")}); 
        oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/commits?path=" +  w1 + ".html"); 
        oReq.setRequestHeader('Authorization', "token " + token); 
        oReq.send(); 
        !(!!cold && (cold.hash))? $("#profilePic").on("click", function(){openProfilePicModal($(this));}): 1; 
    })(): (function(){
    })(); 
}
    $(".story").each(function(){ 
        w1=  $(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href");                                                   
        cold= JSON.parse(localStorage.getItem(w1)); 
        t= $(this); 
        (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
            var oReq= new XMLHttpRequest(); 
            oReq.addEventListener("load", function(e){k300(e, w1, t, "story")}); 
            console.log(w1)
            oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/commits?path=" +  w1 + ".html"); 
            oReq.setRequestHeader('Authorization', "token " + token); 
            oReq.send(); 
            a= t; 
            !(!!cold && (cold.hash))? (function(){
                a.on( "click", function(r){ 
                    $( r.target ).is( ".pic" )? openModal( $( r.target ) ): 1; 
                    $( r.target ).is( ".video .Enlarge" )? openVideoModal( $( r.target ) ): 1; 
                    $( r.target ).is( ".options .Enlarge" )? openOtherModal( $( r.target ) ): 1; 
                } ); 
            })(): 1; 
        })(): (function(){
        })(); 
    }); 
} 
var K0= function(){
    token= this.responseText; 

    var oReq= new XMLHttpRequest(); 
    oReq.addEventListener("load", function(e){K100(e)}); 
    oReq.open("GET", "https://api.github.com/repos/LirilC/lirilc.github.io/pages/builds"); 
    oReq.setRequestHeader('Authorization', "token " + token); 
    oReq.send();
}
/*Bind first pageDOMContentLoaded*/
RooT.ready= function(e){
	/*Send first request, for the Github token*/
	var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", K0);
    oReq.open("get", "https://cdn.filestackcontent.com/T1JT7NWRhigB2KGvZN7g");
    oReq.send();
	/*knob knobs and tooltip tooltips*/
	_R(".knob").not(".knob").knob();
	_R(function($) {
	    $.widget("ui.tooltip", $.ui.tooltip, {
	        options: {
	            content: function() {
	                return $(this).prop('title');
	            }
	        }
	    });

	    tooltip(); 

	    _R(".knob").not(".foto .knob").knob();

	    _R(".Enlargetic").on("contextmenu", function(j){j.preventDefault(); ab= $(this).children().filter(".active"); $(this).children().not(".active").addClass("active"); ab.removeClass("active"); }); 
	});
	/*Size, populate, and event sidebar*/
	_R("#resizeTop", 0).css({"height": "calc(50% - 7px)"})
	_R("#resizeBottom", 0).resizable({ handles: "n", maxHeight: (_T(window).height() - _R("#sidebar #search").outerHeight() - 51), minHeight: 50, stop: function(event, ui)
    		{        
        		_R("#resizeTop").css({"height": "calc(" + (100 - (($(ui.element).height()) / ($("#sidebar #container").height()) * 100 )) + "% - 7px)"})
    			$(ui.element).height((($(ui.element).height()) / ($("#sidebar #container").height()) * 100 )+ "%")
		} }).bind("resize", function(e, ui) {
        _R("#resizeTop").css({"height": ($(window).height() - 83 - $(this).height())})
    });
    Used= []; 
    Urls= ["Abigail O'Neill.jpg", "Alana Campos.png", "Alexandra Tyler.jpeg", "Ali Chanel.jpg", "Ali Michael.jpg", "Alicia Loraina Olivas.jpg", "Allie Leggett.jpg", "Allie Silva.jpg", "Alyssa Arcè.jpg", "Amanda Booth.jpg", "Amanda Cerny.webp", "Amanda Streich.jpg", "Amberleigh West.jpg", "Amelia Talon.jpg", "Amy Leigh Andrews.jpg", "Ana Cheri.webp", "Anita Pathammavong.jpg", "Anna Sophia Berglund.jpg", "Ashley Doris.jpg", "Ashley Hobbs.jpg", "Ashley Smith.webp", "Audrey Aleen Allen.jpg", "Beth Williams.jpg", "Bridget Malcolm.jpg", "Britany Nola.jpg", "Britt Linn.jpeg", "Brittany Brousseau.jpg", "Brittny Ward.jpg", "Brook Power.jpg", "Bryiana Noelle.jpg", "Camille Rowe.jpg", "Carly Lauren.jpg", "Carolina Ballesteros.jpg", "Cassandra Dawn.webp", "Chasity Samone.jpg", "Chelsie Aryn.jpg", "Ciara Price.jpg", "Claire Sinclair.jpg", "Dana Taylor.jpg", "Dani Mathers.jpg", "Danielle Alcaraz.jpg", "Dominique Jane.jpg", "Dree Hemingway.jpg", "Elizabeth Elam.webp", "Elizabeth Ostrander.webp", "Elsie Hewitt.jpg", "Emily Agnes.jpg", "Enikő Mihalik.jpg", "Eugena Washington.jpg", "Fo Porter.jpg", "Francesca Frigo.jpg", "Geena Rocero.jpg", "Gemma Lee Farrell.jpg", "Gia Marie.jpg", "Gillian Chan.jpg", "Heather Knox.jpg", "Heather Rae Young.webp", "Hilda Dias Pimentel.jpg", "Ines Rau.jpg", "Iryna Ivanova.jpg", "Jaclyn Swedberg.jpg", "Jaime Faith Edmonson.jpg", "Jaslyn Ome.jpg", "Jenny Watwood.jpg", "Jessa Lynn Hinton.jpg", "Jessica Ashley.jpg", "Jessica Wall.jpg", "Jordan Emanuel.webp", "Jordy Murray.jpg", "Josie Canseco.jpg", "Joy Corrigan.jpg", "Karina Marie.jpg", "Kassie Lyn Logsdon.jpg", "Katie Vernola.jpg", "Kayla Garvin.jpg", "Kayla Rae Reid.webp", "Kaylia Cassandra.webp", "Kayslee Collins.webp", "Kelly Gale.png", "Kennedy Summers.jpg", "Khrystyana.jpg", "Kirby Griffin.jpg", "Kristen Nicole.jpeg", "Kristy Garett.jpg", "Kylie Johnson.jpg", "Kyra Milan.jpg", "Lada Kravchenko.jpg", "Leola Bell.jpg", "Lisa Seiffert.jpg", "Liza Kei.png", "Lorena Medina.jpg", "Maggie May.jpg", "Marsha Elle.jpg", "Megan Moore.jpg", "Megan Samperi.jpg", "Mei-Ling Lam.jpg", "Miki Hamano.jpg", "Milan Dixon.jpg", "Monica Sims.jpg", "Nereyda Bird.jpg", "Nikki Leigh.jpg", "Nina Daniele.jpg", "Olga de Mar.jpg", "Olivia Paige.jpg", "Pamela Horton.jpg", "Priscilla Huggins.jpg", "Rachel Harris.jpg", "Rainy Day Jordan.jpg", "Raquel Pomplun.jpg", "Riley Ticotin.jpg", "Roos van Montfort.jpg", "Roxanna June.jpg", "Sasha Bonilova.jpg", "Savannah Smith.jpeg", "Shanice Jordyn.jpg", "Shanna McLaughlin.jpg", "Shauna Sexton.jpg", "Shawn Dillon.jpeg", "Shelby Chesnes.jpg", "Shelby Rose.jpg", "Shelby Rose.webp", "Shera Bechard.jpg", "Sophie O’Neil.jpg", "Stephanie Branton.jpg", "Tanerélle.jpg", "Teela LaRoux.jpg", "Tiffany Toth.jpg", "Val Keil.jpeg", "Valeria Lakhina.jpg", "Vendela Lindblom.jpg", "Yoli Lara.jpg", "Megan Denise Fox.jpg", "Laura Escobar Bonnett.jpg", "Luis Eduardo Gallego García.gif", "Dios Jesucristo.jpg", "Aura María Cardona Demasiado.jpg", "Juan José Martínez Vidal.jpg", "Walter White.jpg", "La Perrita Del Poste.jpg", "ElDelprincipio.jpg"]; 

    while(Used.length != Urls.length){ 
        randmIntgr= parseInt(Math.random() * Urls.length );

        while(Used.indexOf(randmIntgr) != -1){ 
            randmIntgr= parseInt(Math.random() * Urls.length ); 
        }

        _R("#resizeBottom ul")[0].innerHTML= _R("#resizeBottom ul")[0].innerHTML + '<li class="button offline"><img src="/resources/images/chat/' + Urls[randmIntgr] + '" alt=""><p>' + Urls[randmIntgr].slice(0, Urls[randmIntgr].indexOf(".")) + '</p><span ></span></li>'
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
    /*Chat functionalities*/
    $("#chat ul li").on("click",function(){
        if($(this).attr('class').split(' ')[2] == null){
            $(this).addClass( cC.toString() );
            newChat($(this), cC);
            cC++
        }else{
            $dat =$(".chats .chat."+$(this).attr('class').split(' ')[2])
            if(! $dat.hasClass("open")){
                prependClass($dat,"open");  
            }
            $(".chats .chat."+$(this).attr('class').split(' ')[2]+" .newMessage textarea").focus();
        }
    })
    $("#chats .chats").on("mouseover mouseout", ".chatTitle", function() {
        $(this).find(".close").toggleClass("visible");
    });
    $(".chatTitle .close").on("click",
		function(){
			destroyChat($(this));
		}
    );
    $("#chats .chats").on("click", ".chatTitle", function() {
        $(this).closest(".chat").toggleClass("open");
       	$(this).parent().find($(".newMessage textarea")).focus()
	});
    $("#chats .chats").on("click", ".chatTitle .close", function() {
	 	destroyChat($(this))
	});
	$("#chats .chats").on("input", ".chat .chatBox .newMessage textarea", function (ev) {
	    sizeMessages($(this));
	})

	$("#chats .chats").on("keyup", ".chat .chatBox .newMessage textarea", function (ev) {
	    sizeMessages($(this));
	 
	 })
	$("#chats .chats").on("keypress", ".chat .chatBox .newMessage textarea", function (ev){
	    sizeMessages($(this));
	    if(ev.keyCode == 13 && $(this).val().length !== 0  && !ev.shiftKey){
	      ev.preventDefault();
	      var content= this.value;                
	       $(this).closest(".chat").find(".messages").append("<pre class='sent'>" + content + "</pre>")
	       $(this).val("")
	       scrollBottom($(this).closest(".chat").find(".chatBox .messages"))
	       $(this).trigger("input")
	  }
	})
	$("#chats .chats").on("keyup", ".chat .chatBox .newMessage textarea", function (ev){
	    sizeMessages($(this));
	})
	$("#chats .chats").on("keydown", ".chat .chatBox .newMessage textarea", function (ev){
	    sizeMessages($(this));
	})
    $("#chat ul li").prop("title", function () {
        return $(this).find("p").text();
    });
RooT.maTch= {}
RooT.maTch.user= new RegExp('^\/[^\/]+$')
RooT.maTch.photos= new RegExp('^(\/.*?\/)photos$');
RooT.maTch.videos= new RegExp('^(\/.*?\/)videos$');

if(RooT.maTch.user.exec(window.location.pathname) !== null){
	/*Redefine badGuy*/
	badGuy= function(){ 
	    Antheater= typeof th != "undefined" && !th.is(".story")? th: $(".current")
	    console.log(Antheater)
	    iTS= $(Antheater).is(".mult_carr")? $(Antheater.find(".carr section")[0]).is(".picture")? `${$(Antheater).find(".options a").attr("href").slice(0, $(Antheater).find(".options a").attr("href").lastIndexOf("/") - 4)}/img/${$($(Antheater).find(".carr section")[0]).find("img").attr("src").slice(-14, -4)}`: `${$(Antheater).find(".options a").attr("href").slice(0, $(Antheater).find(".options a").attr("href").lastIndexOf("/") - 4)}/vid/${$($(Antheater).find(".carr section")[0]).find("video").attr("src").slice(-14, -4)}`: (!Antheater.is(".current")? !!Antheater.find(".carr").length? window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + $(Antheater).find(".carr").find("img")[0].src.slice($(Antheater).find(".carr").find("img")[0].src.lastIndexOf("/"), $(Antheater).find(".carr").find("img")[0].src.lastIndexOf(".")): window.location.pathname: $(".current").is(".mult_img")? $(".current").find(".options a").attr("href").slice(0, $(".current").find(".options a").attr("href").lastIndexOf("/")) + $(".current").find(".carr").find("img")[0].src.slice($(".current").find(".carr").find("img")[0].src.lastIndexOf("/"), $(".current").find(".carr").find("img")[0].src.lastIndexOf(".")): $(".current").find(".options a").attr("href")); 
	    localStorage.setItem(iTS, JSON.stringify({B: ($("#theater").css("display") == "block"? $("#theater .options .bookmark").hasClass("true"): $(".current").find(".options .bookmark").hasClass("true"))? true: false, S: ($("#theater").css("display") == "block"? $("#theater .options .star").hasClass("true"): $(".current").find(".options .star").hasClass("true"))? true: false, C: bGComments(), hash: ((localStorage.getItem(iTS) != null && (typeof JSON.parse(localStorage.getItem(iTS)).hash != "undefined"))? JSON.parse(localStorage.getItem(iTS)).hash: hashes[iTS])})); 
	    $(".story").each(function(){ 
	        cold= JSON.parse(localStorage.getItem($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href"))); 
	                            
	        var t= $(this)[0]; 
	                            
	        !!cold? (function(){ 
	            cold.B? $(t).find(".options .bookmark").addClass("true"): $(t).find(".options .bookmark").removeClass("true"); 
	            cold.S? $(t).find(".options .star").addClass("true"): $(t).find(".options .star").removeClass("true"); 
	            $(t).find(".Comentarios")[0].innerHTML= cold.C; 
	        })(): 1; 
	    }); 
	}
	/*Redefine openVid*/
	openVid= function(a){ 
	    Antheater= a.closest(".vid"); 

	    th= a.closest(".vid"); 

	    $("body")[0].style.overflow= "hidden"; 
	    responsive(); 
	    $("#theater").addClass("animated fadeIn ")
	    $(".theater").css({
	        "display": "block"
	    })
	    $this= a.closest('.vid')
	    var source= a.closest('.vid').find("video").attr('src');
	    $('.theater video').attr('src', source);

	    $('.theater video').attr('autoplay', "true");

	    source= un_tn(source); 
	                           
	    history.pushState({page: 1}, "", "/" + a.closest('.vid').find(".username a").attr("href").slice(1, $(".current").find(".username a").attr("href").length) + "/vid/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

	    var info= a.closest('.vid').find(".info").html(); 
	    $('.theater .comments .info').html(info); 

	    var title= a.closest('.vid').find(".title").html();
	    $('.theater .comments .title').html(title);

	    var more= !!a.closest('.vid').find(".moreI").html()? a.closest('.vid').find(".moreI").html(): "";
	    $('.theater .comments .more').html(more);

	    var comments= a.closest('.vid').find(".Comentarios").html();
	    $('.theater .comments .comentarios .Comentarios').html(comments);

	    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

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

	    $(".knob").not(".foto .knob").knob(); 

	    tooltipComentarios(); 

	    tooltip(); 

	    $("#theater .Comentario audio").each(function(){audiojs.create($(this)[0])}); 

	    if (a.closest('.vid').find(".options .bookmark").hasClass("true")){
	        $('.theater .comments .options .bookmark').addClass("true");
	    }else{
	        console.log( "And we forgot what it was to love, and loved that of forgetting." ); 
	$('.theater .comments .options .bookmark').removeClass("true");
	    }
	    if (a.closest('.vid').find(".options .star").hasClass("true")){
	        $('.theater .comments .options .star').addClass("true");
	    }else{
	        $('.theater .comments .options .star').removeClass("true");
	    }

	    $("#theater #theater_video").addClass("visible")

	    $("#theater .Playuse").addClass("visible")

	    $("#theater #bigPic").addClass("invisible")

	    th.find("video")[0].pause(); 

	    var pic= a.closest('.vid').find(".info img").attr('src');
	    $('.theater .comments .info #pic').attr('src', pic);

	    var ref= a.closest('.vid').find(".options ul a").attr('href');
	    $('.theater .comments .options ul a').attr('href', ref);

	    if($("#bigPic").width()<=$("#bigPic").height()){
	        $("#bigPic").css({ "width":"100%"})
	    }else{

	    }

	    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

	    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 

	    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
	    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
	    responsive()
	}
	/*Redefine closeModal*/
	closeModal= function(){ 
	    if( typeof th == "undefined" ){ th= $( th.context ).closest(".story").length? $( th.context ).closest(".story"): $( th.context ).closest(".foto").length? $( th.context ).closest(".foto"): $( th.context ).closest('#profilePic').length? $( th.context ).closest('#profilePic'): th.context }else{ th= Antheater }; 
	    $(".Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
	    $("#theater .Comentarios").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}); 
	    $("#theater .RespueNtas").parent().find(".comentario").remove(); 
	    H= asdknki4; 
	    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 
	    _R(th).find(".Comentarios").html($("#theater .Comentarios").html()); 
	    $("#theater #bigPic")[0].src= ""; 
	    $("#theater video")[0].src= ""; 
	    $("#theater #theater_video").removeClass("visible")
	    $("#theater .Playuse").removeClass("visible")
	    $("#theater #otherContainments").removeClass("visible")
	    $("#theater #bigPic").removeClass("invisible")
	    $("#theater #otherContainments > div").html("")
	    ar= null; 
	    a= null; 
	    $("#theater").find(".more")[0].outerHTML= "<p class= 'more'></p>"; 
	    $("#theater .nav_arrow").remove(); 
	    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 1 !important; }; "; 
	    $("body")[0].style.overflow= ""; 
	    responsive(); 
	    if ($('.theater .comments .options .bookmark').hasClass("true")){
	        _R(th).find('.options .bookmark').addClass("true");
	    }else{
	        _R(th).find('.options .bookmark').removeClass("true");
	    }
	    if ($('.theater .comments .options .star').hasClass("true")){
	        _R(th).find('.options .star').addClass("true");
	    }else{
	        _R(th).find('.options .star').removeClass("true");
	    }
	    $(".theater").css({
	        "display": "none"
	    })
	    Antheater= false; 
	    console.log( th ); 
		history.pushState({page: 1}, "", `/${user.username}`); 
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
    /*Set first post as .current and subsequently the one clicked*/
    $($("#feed .story")[0]).addClass("current")
	current= $(".story.current");
	$(".story").on("click", function (){
        $(".current").removeClass("current");
        $(this).addClass("current"); 
        $($(".current")[0]).attr("tabindex", 0); 
        $(".current")[0].focus(); 
    })
    /*And scroll event on the document for .current to update on scroll*/
    $(document).scroll(function(iy){ 
		(ok)?(function(){ 
		for(i= 0; i <= $(".story").length - 1; i++){ 
			($(window).height() / 2 > $(".story")[i].getBoundingClientRect().y && $(window).height() / 2 < $(".story")[i].getBoundingClientRect().y + parseInt($($(".story")[i]).css("height").slice(0, -2)))? (function(){ 
			    current= $(".story.current"); 
			    current.removeClass("current"); 
			    $($(".story")[i]).addClass("current");
			    current= $($(".story")[i]); 
			    $($(".story")[i]).attr("tabindex", 0); 
			    $(".story")[i].focus(); 
			    })(): 132315
			}
		})(): 13124; 
	})
	/*JKing for navigating stories*/
	$(document).keypress(function (e){
        if(!$("textarea").is(":focus") && !$("input").is(":focus") && !waiting){ 
            switch(e.keyCode){ 
                case 108: case 76: 
                    $(".current").find('.options .star').toggleClass("true"); 
                    $("#theater").find('.options .star').toggleClass("true"); 
                    badGuy(); 
                break; 
                case 98: case 66: 
                    $(".current").find('.options .bookmark').toggleClass("true"); 
                    $("#theater").find('.options .bookmark').toggleClass("true"); 
                    badGuy(); 
                break; 
                case 102: case 70: 
                    if(($(".current").is(".mult_img") || $(".current").is(".mult_carr")) && $("#theater").css("display") != "block"){ 
                        $($(".current").find(".carr > section")[Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)]).is( ".video" )? $($(".current").find(".carr > section")[Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)]).find(".Enlarge").trigger( "click" ): openModal($($(".current").find(".pic")[Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - getVideos($(".current"), Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))])); 
                        if(Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) == Math.floor($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)){
                            $(".current .carr").stop(true, false); 
                            $(".current .carr").animate({scrollLeft: (Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) * $(".current").find(".carr > section").width())}, (400 - (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))); 
                            /*$(".current .nav_arrow.left .arrow").click(); */ 
                        }else{
                            $(".current .carr").stop(true, false); 
                            $(".current .carr").animate({scrollLeft: (Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) * $(".current").find(".carr > section").width())}, (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)))); 
                            /*$(".current .nav_arrow.right .arrow").click(); */ 
                        }
                    }else if($(".current").is(".img") && $("#theater").css("display") != "block"){ 
                        openModal($(".current .pic")); 
                    }else if($(".current").is(".video")){ 
                        openVideoModal($(".current").find(".Enlarge")); 
                    }; 
                break; 
            }
        }
    if(!$("textarea").is(":focus") && !$("input").is(":focus") && !waiting && $("#theater").css("display") != "block"){
        //console.log(e.keyCide) 
        var forward;
                     
        (e.keyCode == 74 || e.keyCode == 106 || e.keyCode == 75 || e.keyCode == 107)? waiting= true: 143; 
                                                   
        if (e.keyCode == 74 || e.keyCode == 106){
            forward= true;
        }else if (e.keyCode == 75 || e.keyCode == 107){
            forward= false;
        }else{
            return true;
        }
    
    
        if (!$(".story.current").length){
            $(".story:first").addClass("current"); 
        }
    
        if ($(".story.current").length){
            next= ""; 
            if (forward){
                !!current.next(".story").length? next= current.next(".story"): 1415; 
            }else{
                !!current.prev(".story").length? next= current.prev(".story"): 27721; 
            }
            if (!!next.length){
                $(".current").removeClass("current");
                next.addClass("current"); 
            }
        }
    
        (!!next.length)? (function(){
                            ok= false; 
                            $("html").animate({ 
                            scrollTop: $(".current").offset().top - 56
                        }, 400, function(){  
                            waiting= false; 
                            current= $(".story.current"); 
                            $(".current").attr("tabindex", 0); 
                            $(".current")[0].focus();
                            setTimeout(function(){ok= true;}, 100) 
                        })})(): waiting= false; 
        }
    });
	/*Close modal on dark wrapper in the background of the theater's click*/
	$("#wrapper").on("click", function (){
        closeModal()
    });
	/*Close modal on theater close button's click*/
    $("#close").on("click", function (){
        closeModal()
    });
    /*Add click event listeners to .stars and .bookmarks __rev*/
    $(".star").on("click", function (){ 
        $(this).toggleClass("true"); 

        if(!$(this).closest("#theater").length){ 
            $(".current").removeClass("current"); 
            $(this).closest(".story").addClass("current"); 
            $($(".current")[0]).attr("tabindex", 0); 
            $(".current")[0].focus(); 
            th= $(".current"); 
        }; 
        badGuy(); 
    }); 
    $(".bookmark").on("click", function (){ 
        $(this).toggleClass("true"); 
        if(!$(this).closest("#theater").length){ 
            $(".current").removeClass("current"); 
            $(this).closest(".story").addClass("current"); 
            $($(".current")[0]).attr("tabindex", 0); 
            $(".current")[0].focus(); 
            th= $(".current"); 
        }; 
        badGuy(); 
    }); 
	/*Arrow keys for browsing the carrousels*/
	document.onkeydown= function (evt){
	    //console.log(evt.keyCode); 

	    if( evt.keyCode == 32 ){
	        console.log( JSON.stringify( localStorage.getItem( "safety_purge" ) ) ); 
	        if($("#theater").css("display") != "none"){ 
	            videojs($(".theater video")[0]).paused()? videojs($(".theater video")[0]).play(): videojs($(".theater video")[0]).pause(); 
	        } 
	    } 

	    ((!!ar || ($("#theater").css("display") == "none" && ($(".current").is(".mult_img") || $(".current").is(".mult_carr")))))? (function(){ 
	        //th= $( th.context ).closest(".story").length? $( th.context ).closest(".story"): $( th.context ).closest(".foto").length? $( th.context ).closest(".foto"): $( th.context ).closest('#profilePic').length? $( th.context ).closest('#profilePic'): th.context;  
	        switch(evt.keyCode){
	            case 37: 
	                th= $("#theater").css("display") == "none"? $(".current"): th; 
	                if($("#theater .nav_arrow.left").is(".disabled"))
	                    {return}; 
	                if(th.find(".nav_arrow.left").is(".disabled") && $("#theater").css("display") == "none")
	                    {return}
	                if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
	                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
	                    if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].pause();
	                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
	                        if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
	                }else if(!!th.find(".carr").length){ 
	                    /*console.log( lk )*/ 
	                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
	                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
	                    lk= un_tn( lk ); 
	                    $("#theater video")[0].src= ""; 
	                    th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
	                    source= un_tn($("#theater").find("#bigPic")[0].src)
	                    history.pushState({page: 1}, "", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
	                }
	                break; 
	            case 39: 
	                th= $("#theater").css("display") == "none"? $(".current"): th; 
	                if($("#theater .nav_arrow.right").is(".disabled"))
	                    {return}; 
	                if(th.find(".nav_arrow.right").is(".disabled") && $("#theater").css("display") == "none")
	                    {return}
	                if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
	                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
	                    if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].pause();
	                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
	                        if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
	                }else if(!!th.find(".carr").length){ 
	                    /*console.log( lk )*/ 
	                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
	                    lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
	                    lk= un_tn( lk ); 
	                    $("#theater video")[0].src= ""; 
	                    th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
	                    source= un_tn($("#theater").find("#bigPic")[0].src)
	                    history.pushState({page: 1}, "", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4)  + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
	                }
	                break; 
		    }
		})(): 672; 
	    
	    evt= evt || window.event;
	    if (evt.keyCode == 27){
	        if($("#theater").css("display") == "none"){
	            destroyChat($(document.activeElement))
	        }else{
	            closeModal();
	        }
	    }
	};
    /*Activate the arrows on the stories*/
    $(".carr").on("scroll", function(){ 
	    rf= $(this)
	    Math.round($(this)[0].scrollLeft / $(this).width()) == $(this).children().length - 1? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
	    $(this)[0].scrollLeft == 0? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
	}) 

    $(".nav_arrow.left .arrow").not("#picContainer .arrow").on("click", function(){
        th= $("#theater").css("display") == "none"? $(".current"): th; 
        if($("#theater .nav_arrow.left").is(".disabled"))
            {return}; 
        if(th.find(".nav_arrow.left").is(".disabled") && $("#theater").css("display") == "none")
            {return}
        if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
            lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
            if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].pause();
            !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
                if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
        }else if(!!th.find(".carr").length){ 
            /*console.log( lk )*/ 
            th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
            lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
            lk= un_tn( lk ); 
            $("#theater video")[0].src= ""; 
            th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
            source= un_tn($("#theater").find("#bigPic")[0].src)
            history.pushState({page: 1}, "", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
        }
    }); 

    $(".nav_arrow.right .arrow").not("#picContainer .arrow").on("click", function(){
        th= $("#theater").css("display") == "none"? $(".current"): th; 
        if($("#theater .nav_arrow.right").is(".disabled"))
            {return}; 
        if(th.find(".nav_arrow.right").is(".disabled") && $("#theater").css("display") == "none")
            {return}
        if($("#theater").css("display") == "none" && !!th.find(".carr").length){ 
            lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
            if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].pause();
            !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); 
                if(tipo( lk ) == "/vid/")$(th.find(".carr").children()[(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())]).find("video")[0].play(); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); }): 672; 
        }else if(!!th.find(".carr").length){ 
            /*console.log( lk )*/ 
            th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
            lk= $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ).src: $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find( "source" ).attr( "src" ); th.find(".options a").attr("href", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
            lk= un_tn( lk ); 
            $("#theater video")[0].src= ""; 
            th.is(".mult_carr")? $( (function(){return $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).is(".picture")? th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].querySelector( ".pic" ): $( th.find(".carr > section")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())] ).find(".Enlarge")})() ).trigger( "click" ): $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
            source= un_tn($("#theater").find("#bigPic")[0].src)
            history.pushState({page: 1}, "", $(th).find(".options a").attr("href").slice(0, $(th).find(".options a").attr("href").lastIndexOf("/") - 4) + tipo( lk ) + lk.slice(lk.lastIndexOf("/") + 1, lk.lastIndexOf("."))); 
        }
    }); 
    /**/
    $(".revelar").on("click", function(){ 
        if($(this).text()[0] != "O"){ 
            $(this).parent().css({"height": "auto"}); 
            $(this)[0].tx= $(this).text(); 
            $(this).text("Ocultar de nuevo."); 
            $(this).addClass("activado"); 
        }else{ 
            $(this).parent().css({"height": "0"}); 
            $(this).text($(this)[0].tx); 
            $(this).removeClass("activado"); 
        } 
    })
    /*Use videojs for the videos*/
    VIds= []; 
    for(e= 0; e < $("video").length; e++){
        VIds[VIds.length]= videojs($("video")[e].id); 

        videojs($("video")[e].id).on("pause", function(i){ 
            a= i
            let vId= VIds.length - 1
            $(videojs(i.target.parentElement.id).L.parentElement).siblings().filter(".Playuse").removeClass("playing"); 
        });
        
        videojs($("video")[e].id).on("play", function(i){ 
            //console.log(i)
            let vId= VIds.length - 1
            $(videojs(i.target.parentElement.id).L.parentElement).siblings().filter(".Playuse").addClass("playing"); 
        });}
    $(".Playuse").click(function(i){ 
        $(i.target).parent().find("video")[0].play(); 
        $(i.target).addClass("playing"); 
    }); 
/*Leela is liril's vAssistant, she searches even on the subtitles of the videos*/
possibleResults=[[["Megan Denise Fox", "MeganFox"], {users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Laura Escobar Bonnett", "L"], {users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], type: "Usuario"}], [["Luis Eduardo Gallego García", "A.K.A._Dizzy"], {users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], type: "Usuario"}], [["Dios Jesucristo", "G-Suschrist"], {users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["Aura María Cardona Demasiado", "AuraCardonaC"], {users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], type: "Usuario"}], [["Juan José Martínez Vidal", "LamaMadora"], {users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], type: "Usuario"}], , [["Walter White", "user"], {users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], type: "Usuario"}], [["A0"], {name: "A0", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/A0", type: "Blog"}], [["Algo Más Sobre Mí"], {name: "Algo Más Sobre Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algo Más Sobre Mí", type: "Blog"}], [["Algunas Propiedades De Mis Escritos"], {name: "Algunas Propiedades De Mis Escritos", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunas Propiedades De Mis Escritos", type: "Blog"}], [["Algunos Poemas Que He Escrito"], {name: "Algunos Poemas Que He Escrito", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunos Poemas Que He Escrito", type: "Blog"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/aNGEL();", type: "Blog"}], [["Constructor And Business Partners (Dedicatorias)"], {name: "Constructor And Business Partners (Dedicatorias)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners (Dedicatorias)", type: "Blog"}], [["Constructor And Business Partners"], {name: "Constructor And Business Partners", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners", type: "Blog"}], [["Dinosaurios"], {name: "Dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Dinosaurios", type: "Blog"}], [["El Pueblo Blanco"], {name: "El Pueblo Blanco", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Pueblo Blanco", type: "Blog"}], [["El Salomé Castrillón"], {name: "El Salomé Castrillón", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/El Salomé Castrillón", type: "Blog"}], [["Equilibrio"], {name: "Equilibrio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Equilibrio", type: "Blog"}], [["FRANCIA Y ElDelprincipio"], {name: "FRANCIA Y ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/FRANCIA Y ElDelprincipio", type: "Blog"}], [["La Larga Historia"], {name: "La Larga Historia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Larga Historia", type: "Blog"}], [["La Perrita Del Poste"], {name: "La Perrita Del Poste", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Perrita Del Poste", type: "Blog"}], [["La Sagrada Biblia"], {name: "La Sagrada Biblia", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/La Sagrada Biblia", type: "Blog"}], [["Las Flores Malditas (Introducción)"], {name: "Las Flores Malditas (Introducción)", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Las Flores Malditas (Introducción)", type: "Blog"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/por_siLaBas();", type: "Blog"}], [["Regalos Para Mí"], {name: "Regalos Para Mí", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Regalos Para Mí", type: "Blog"}], [["Sus Rizos Color Caramelo"], {name: "Sus Rizos Color Caramelo", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Sus Rizos Color Caramelo", type: "Blog"}], [["Una Breve Historia De La Creación"], {name: "Una Breve Historia De La Creación", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Una Breve Historia De La Creación", type: "Blog"}], [["xWo3"], {name: "xWo3", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/xWo3", type: "Blog"}], [["dinosaurios"], {name: "dinosaurios", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/82DcC9s2sS0cZ", type: "Proyecto"}], [["por_siLaBas();"], {name: "por_siLaBas();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/f9d2cCa2Cxc31", type: "Proyecto"}], [["Christmas Gifts From The Gallego Escobar Family"], {name: "Christmas Gifts From The Gallego Escobar Family", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/h3dd2cDcsW2R3", type: "Proyecto"}], [["aNGEL();"], {name: "aNGEL();", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k92dJd29D920d", type: "Proyecto"}], [["Robot De Dedicatorias"], {name: "Robot De Dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/k9u8hH78jJi27", type: "Proyecto"}], [["Robot de dedicatorias"], {name: "Robot de dedicatorias", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/s98f39c0d9090", type: "Proyecto"}], [["Widgets"], {name: "Widgets", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/i9d2g2cftdCds", type: "Proyecto"}], [["ElDelprincipio"], {name: "ElDelprincipio", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/tY829dD0290df", type: "Proyecto"}], [["myProjext1"], {name: "myProjext1", users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/Ad4Jy7k20F_tn.jpg", rol: ["G", "+100"], href: "/MeganFox/p/iD8299D88d3D2", type: "Proyecto"}], [["minesweeper"], {name: "minesweeper", users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Princesa", "+100"], href: "/L/p/2kNoind8JsjD9", type: "Proyecto"}], [["lX"], {name: "lX", users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/44Cpl8Gig5_tn.jpg", rol: ["Profe de fitness", "+94"], href: "/AuraCardonaC/p/di29D8jj8dj2d", type: "Proyecto"}], [["snka"], {name: "snka", users_name: "Dios Jesucristo", username: "G-Suschrist", profilePic: "/resources/images/G-Suschrist/Rvu7YjVcXr_tn.jpg", rol: ["G", "+100"], href: "/G-Suschrist/p/Jkik39djfX8iX", type: "Proyecto"}], [["Vv11"], {name: "Vv11", users_name: "Juan José Martínez Vidal", username: "LamaMadora", profilePic: "/resources/images/LamaMadora/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], href: "/LamaMadora/p/u889Dj8Q22dSC", type: "Proyecto"}], [["_dvlpmt"], {name: "_dvlpmt", users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], href: "/user/p/8d299s2gvkL9", type: "Proyecto"}], [["La Perrita Del Poste", "PpP"], {users_name: "La Perrita Del Poste", username: "PpP", profilePic: "/resources/images/PpP/bZj2vYrklo_tn.jpg", rol: ["G", "+100"], type: "Usuario"}], [["ElDelprincipio", "Eld"], {users_name: "ElDelprincipio", username: "Eld", profilePic: "/resources/images/Eld/oow4doJxKO_tn.jpg", rol: ["G", "+100"], type: "Usuario"}]]

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
        if(!$(".result#resaltado").length){
            $($(".result")[0]).attr("id", "resaltado")
            $($(".result")[0]).children()[0].focus()
            setTimeout(function(){$(".searchResults > div").scrollTop(0)}, 20)
            $(".searchResults > div").scrollTop(0)
        }else if($(".result#resaltado").index() != $(".result").length - 1){
            $(".result#resaltado").next().children()[0].focus()
            $(".result#resaltado").next().attr("id", "resaltado")
            $($(".result#resaltado")[0]).attr("id", "")
        }
    break;
  case 38:
        if($(".result#resaltado").length && $(".result#resaltado").index() != 0){
            $(".result#resaltado").prev().children()[0].focus()
            $(".result#resaltado").prev().attr("id", "resaltado")
            $($(".result#resaltado")[1]).attr("id", "")
        }
    break;
}
})
document.addEventListener("keydown", function(e){if(e.shiftKey && e.ctrlKey && e.altKey){e.preventDefault();$("#theater").css("display") == "block"?closeModal():1;$("#buscar input").val("");$("#buscar input").trigger("input");$("#buscar input").focus()}})
/*Tooltip logged users in Situación Sentimental*/
$("#situation a").not("#situation a[href= '#']").tooltip({open: function(){$(".knob").knob()}})
/*Some events like the pointer-events adder and remover for the profilePic for it to be circular*/
var distance; 
el= $($("#profilePic > img")[0]); 
                    
    
$(".comentario").on("mousemove", function(event){ 
    elx= $($(this).children()[0])
    circleWidth= elx.outerWidth( true ),
    circleHeight = elx.outerHeight( true ),
    circleLeft   = elx.offset().left,
    circleTop    = elx.offset().top,
    circlePos    ={
        x    : circleLeft + circleWidth / 2,
        y    : circleTop + circleHeight / 2,
        radius: circleWidth / 2
    }; 

    distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) ); 

    if(distance <= circlePos.radius){ 
        $($(this).children()[0]).css({"pointer-events": "all"}); 
        $($(this).children()[0]).css({"pointer-events": "all"}); 
    }else{ 
        $($(this).children()[0]).css({"pointer-events": "none"}); 
        $($(this).children()[0]).css({"pointer-events": "none"}); 
    }  
}); 
$("#theater textarea").on('input', function(){ 
    $(this).height(""); 
    !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
}); 
$(".comentarios > .newComment").on('keydown', function(i){ 
    abc= $("#theater .Comentarios"); 

    (!i.shiftKey && i.keyCode == 13)? (function(){abc.append("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + $(".comentarios > .newComment textarea").val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $(".comentarios > .newComment textarea").val(""); $($($("#theater .Comentarios").children()[$("#theater .Comentarios").children().length - 1]).find(".Responder")).on("click", function(){wD($(this))}); $("#theater .Comentarios").scrollTop($("#theater .Comentarios")[0].scrollHeight); $($($("#theater .Comentarios").children()[$("#theater .Comentarios").children().length - 1])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); document.activeElement.blur(); $(".comentarios > .newComment textarea").css({"height": ""}); badGuy(); })(): 1; 

    $(".knob").knob(); 

    tooltipComentarios(); 
}); 
$("#theater .read").on("click", function(){ 
    !$("#theater .description").hasClass("closed")? $("#theater .description").addClass("closed"): $("#theater .description").removeClass("closed"); 
    !$("#theater .comentarios").hasClass("open")? $("#theater .comentarios").addClass("open"): $("#theater .comentarios").removeClass("open"); 
})
/*RooT photos' link*/
_R("#photos", 0).on("click", function(ev){
	history.pushState({page: 1}, "", `/${user.username}/photos`); 
	ev.preventDefault()
	RooT.imporT("/js/A.K.A._Dizzy/photos/DB.js", Then, function(d){
		window.user= d._user()
		RooT.imporT("/js/templates/photos.js", Then, function(d){
			_T(document).scrollTop(0)
			_R("title").text(`Fotos | ${user.users_name} | liril`)
			RooT.replace(This, undefined, _R("#biography", 0), wiTh, d.app().container())
			RooT.put(d.app().root(), afTer, _R("header", 0))

			RooT.ready()
		})
	})
})
/*RooT videos' link*/
_R("#videos", 0).on("click", function(ev){
	history.pushState({page: 1}, "", `/${user.username}/videos`); 
	ev.preventDefault()
	RooT.imporT("/js/A.K.A._Dizzy/videos/DB.js", Then, function(d){
		window.user= d._user()
		RooT.imporT("/js/templates/videos.js", Then, function(d){
			_T(document).scrollTop(0)
			_R("title").text(`Vídeos | ${user.users_name} | liril`)
			RooT.replace(This, undefined, _R("#biography", 0), wiTh, d.app().container())
			RooT.put(d.app().root(), afTer, _R("header", 0))

			RooT.ready()
		})
	})
})
/*Story edition management*/
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
/*Create all audiojs instances*/
audiojs.events.ready(function(){
   var as= audiojs.createAll()
})
}else if(RooT.maTch.photos.exec(window.location.pathname) !== null){
	badGuy= function(){ 
	    iTS= ($this.is(".mult_img")? un_tn(window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + $(ar).find(".carr").find("img")[0].src.slice($(ar).find(".carr").find("img")[0].src.lastIndexOf("/"), $(ar).find(".carr").find("img")[0].src.lastIndexOf("."))): window.location.pathname); 
	    localStorage.setItem(iTS, JSON.stringify({B: ($("#theater .options .bookmark").hasClass("true")? true: false), S: ($("#theater .options .star").hasClass("true")? true: false), C: bGComments(), hash: ((localStorage.getItem(iTS) != null && (typeof JSON.parse(localStorage.getItem(iTS)).hash != "undefined"))? JSON.parse(localStorage.getItem(iTS)).hash: hashes[iTS])})); 
	}

	/*Request Github token from safe page*/
	var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", K0);
    oReq.open("get", "https://cdn.filestackcontent.com/T1JT7NWRhigB2KGvZN7g");
    oReq.send(); 
    /*Redefine closeModal*/
    closeModal= function(){ 
	    if( typeof th == "undefined" ){ th= $( th.context ).closest(".story").length? $( th.context ).closest(".story"): $( th.context ).closest(".foto").length? $( th.context ).closest(".foto"): $( th.context ).closest('#profilePic').length? $( th.context ).closest('#profilePic'): th.context }else{ th= Antheater }; 
	    $(".Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
	    $("#theater .Comentarios").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}); 
	    $("#theater .RespueNtas").parent().find(".comentario").remove(); 
	    H= asdknki4; 
	    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 
	    _R(th).find(".Comentarios").html($("#theater .Comentarios").html()); 
	    $("#theater #bigPic")[0].src= ""; 
	    $("#theater video")[0].src= ""; 
	    $("#theater #theater_video").removeClass("visible")
	    $("#theater .Playuse").removeClass("visible")
	    $("#theater #otherContainments").removeClass("visible")
	    $("#theater #bigPic").removeClass("invisible")
	    $("#theater #otherContainments > div").html("")
	    ar= null; 
	    a= null; 
	    $("#theater").find(".more")[0].outerHTML= "<p class= 'more'></p>"; 
	    $("#theater .nav_arrow").remove(); 
	    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 1 !important; }; "; 
	    $("body")[0].style.overflow= ""; 
	    responsive(); 
	    if ($('.theater .comments .options .bookmark').hasClass("true")){
	        _R(th).find('.options .bookmark').addClass("true");
	    }else{
	        _R(th).find('.options .bookmark').removeClass("true");
	    }
	    if ($('.theater .comments .options .star').hasClass("true")){
	        _R(th).find('.options .star').addClass("true");
	    }else{
	        _R(th).find('.options .star').removeClass("true");
	    }
	    $(".theater").css({
	        "display": "none"
	    })
	    Antheater= false; 
	    console.log( th ); 
		history.pushState({page: 1}, "", `/${user.username}/videos`); 
	}
    /*Close modal on dark wrapper in the background of the theater's click*/
	$("#wrapper").on("click", function (){
        closeModal()
    });
	/*Close modal on theater close button's click*/
    $("#close").on("click", function (){
        closeModal()
    });
    /*Add event listeners for staring and bookmarking*/
    $(".star").on("click", function () {
        $(this).toggleClass("true"); 
        badGuy(); 
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true"); 
        badGuy(); 
    });
    /*RooT link for the user in the #root*/
    _R("#root .contnr div a", 0, 'e').on("click", function(e){
		e.preventDefault()
		history.pushState({page: 1}, "", `/${user.username}`); 
		RooT.imporT("/js/A.K.A._Dizzy/DB.js", Then, function(d){
			window.user= d._user()
			RooT.imporT("/js/templates/user.js", Then, function(d){
				_T(document).scrollTop(0)
				_R("title").text(`${user.users_name} | liril`)
				RooT.remove(_R("#root"), foRever)
				RooT.replace(This, undefined, _R(".container", 0), wiTh, d.app().biography())

				RooT.ready()
			})
		})
	})
}else if(RooT.maTch.videos.exec(window.location.pathname) !== null){
	/*Redefine openVid*/
	openVidModal= function(a){ 
	    Antheater= a.closest(".vid"); 

	    th= a.closest(".vid"); 

	    $("body")[0].style.overflow= "hidden"; 
	    responsive(); 
	    $("#theater").addClass("animated fadeIn ")
	    $(".theater").css({
	        "display": "block"
	    })
	    $this= a.closest('.vid')
	    var source= a.closest('.vid').find("video").attr('src');
	    $('.theater video').attr('src', source);

	    $('.theater video').attr('autoplay', "true");

	    source= un_tn(source); 
	                           
	    history.pushState({page: 1}, "", "/" + user.username + "/vid/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

	    var info= a.closest('.vid').find(".info").html(); 
	    $('.theater .comments .info').html(info); 

	    var title= a.closest('.vid').find(".title").html();
	    $('.theater .comments .title').html(title);

	    var more= !!a.closest('.vid').find(".moreI").html()? a.closest('.vid').find(".moreI").html(): "";
	    $('.theater .comments .more').html(more);

	    var comments= a.closest('.vid').find(".Comentarios").html();
	    $('.theater .comments .comentarios .Comentarios').html(comments);

	    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

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

	    $("#theater .Comentario audio").each(function(){audiojs.create($(this)[0])}); 

	    if (a.closest('.vid').find(".options .bookmark").hasClass("true")){
	        $('.theater .comments .options .bookmark').addClass("true");
	    }else{
	        $('.theater .comments .options .bookmark').removeClass("true");
	    }
	    if (a.closest('.vid').find(".options .star").hasClass("true")){
	        $('.theater .comments .options .star').addClass("true");
	    }else{
	        $('.theater .comments .options .star').removeClass("true");
	    }

	    $("#theater #theater_video").addClass("visible")

	    $("#theater .Playuse").addClass("visible")

	    $("#theater #bigPic").addClass("invisible")

	    th.find("video")[0].pause(); 

	    var pic= a.closest('.vid').find(".info img").attr('src');
	    $('.theater .comments .info #pic').attr('src', pic);

	    var ref= a.closest('.vid').find(".options ul a").attr('href');
	    $('.theater .comments .options ul a').attr('href', ref);

	    if($("#bigPic").width()<=$("#bigPic").height()){
	        $("#bigPic").css({ "width":"100%"})
	    }else{

	    }

	    $("#theater").find(".description").css({"padding-top": ($("#theater").find(".info").height() + 19) + "px"}); 

	    $("#theater").find(".comentarios").css({"padding-top": ($("#theater").find(".info").height() + 35) + "px"}); 

	      $(".more").mCustomScrollbar({theme: 
	        "minimal-dark", 
	        autoExpandScrollbar: true,
	        scrollInertia: 100});
	      

	    responsive()
	    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 310 !important; }; "; 
	    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
	}
	console.log("Entered!")
	/*Request Github token from safe page*/
	var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", K0);
    oReq.open("get", "https://cdn.filestackcontent.com/T1JT7NWRhigB2KGvZN7g");
    oReq.send(); 
    /*Redefine closeModal*/
    closeModal= function(){ 
	    if( typeof th == "undefined" ){ th= $( th.context ).closest(".story").length? $( th.context ).closest(".story"): $( th.context ).closest(".foto").length? $( th.context ).closest(".foto"): $( th.context ).closest('#profilePic').length? $( th.context ).closest('#profilePic'): th.context }else{ th= Antheater }; 
	    $(".Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
	    $("#theater .Comentarios").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}); 
	    $("#theater .RespueNtas").parent().find(".comentario").remove(); 
	    H= asdknki4; 
	    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 
	    _R(th).find(".Comentarios").html($("#theater .Comentarios").html()); 
	    $("#theater #bigPic")[0].src= ""; 
	    $("#theater video")[0].src= ""; 
	    $("#theater #theater_video").removeClass("visible")
	    $("#theater .Playuse").removeClass("visible")
	    $("#theater #otherContainments").removeClass("visible")
	    $("#theater #bigPic").removeClass("invisible")
	    $("#theater #otherContainments > div").html("")
	    ar= null; 
	    a= null; 
	    $("#theater").find(".more")[0].outerHTML= "<p class= 'more'></p>"; 
	    $("#theater .nav_arrow").remove(); 
	    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 1 !important; }; "; 
	    $("body")[0].style.overflow= ""; 
	    responsive(); 
	    if ($('.theater .comments .options .bookmark').hasClass("true")){
	        _R(th).find('.options .bookmark').addClass("true");
	    }else{
	        _R(th).find('.options .bookmark').removeClass("true");
	    }
	    if ($('.theater .comments .options .star').hasClass("true")){
	        _R(th).find('.options .star').addClass("true");
	    }else{
	        _R(th).find('.options .star').removeClass("true");
	    }
	    $(".theater").css({
	        "display": "none"
	    })
	    Antheater= false; 
	    console.log( th ); 
		history.pushState({page: 1}, "", `/${user.username}/photos`); 
	}
    /*Close modal on dark wrapper in the background of the theater's click*/
	$("#wrapper").on("click", function (){
        closeModal()
    });
	/*Close modal on theater close button's click*/
    $("#close").on("click", function (){
        closeModal()
    });
    /*Add event listeners for staring and bookmarking*/
    $(".star").on("click", function () {
        $(this).toggleClass("true"); 
        badGuy(); 
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true"); 
        badGuy(); 
    });
    /*RooT link for the user in the #root*/
    _R("#root .contnr div a", 0, 'e').on("click", function(e){
		e.preventDefault()
		history.pushState({page: 1}, "", `/${user.username}`); 
		RooT.imporT("/js/A.K.A._Dizzy/DB.js", Then, function(d){
			window.user= d._user()
			RooT.imporT("/js/templates/user.js", Then, function(d){
				_T(document).scrollTop(0)
				_R("title").text(`${user.users_name} | liril`)
				RooT.remove(_R("#root"), foRever)
				RooT.replace(This, undefined, _R(".container", 0), wiTh, d.app().biography())

				RooT.ready()
			})
		})
	})	
}
}
var responsive= function(){
    $("#otherContainments").is(".visible")? $("#otherContainments > div").height() < $("#otherContainments > div")[0].scrollHeight? $("#otherContainments").addClass("overflowing"): $("#otherContainments").removeClass("overflowing"): 1; 

    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        $("#sidebar #chat").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));

        $("#chats .chats").width($(window).width() - $("#sidebar").outerWidth() -10);
	$("#options ul").width($("#content").width() - 243.5); 
 }
/*Bind window resize*/
window.onresize= function(){
    $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));
}