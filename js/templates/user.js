export function app (){
        return {__app:`<header>
                          <nav>
                              <ul>
                                  <li id="index">
                                      <a href="/">
                                          <section id="index-trigger">
                                              <span class="back-arrow button">
                                              </span>
                                              <span id="index-text" class="text button">
                                                  Inicio
                                              </span>
                                          </section>
                                      </a>
                                  </li>
                                  <li id="buscar">
                                      <input class="buscar" type="text" placeholder="Busca aquí cursos, personas o cualquier cosa"></input>
                                  </li>
                                  <li id="right-menu" class="button">
                                      <section onClick={alert("cli")} id="dots" class="button">
                                          <span id="store" class="button">
                                          </span>
                                          <span id="dots-icon" class="button">
                                          </span>
                                          <span id="dots-text" class="button">
                                              6'000.600
                                          </span>
                                      </section>
                                      <section id="profileTrigger">
                                      </section>
                                      <div id="profile" class="button">
                                          <img id="profile-pic" src= ${loggedUser.profilePic} alt="Walter White"></img>
                                          <input class="knob button" data-width="35" data-height="35" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput="false" data-thickness=".15" readonly value=${loggedUser.level}></input>
                                      </div>
                                      <span class="index-arrow button">
                                      </span>
                                      <section id="profileSettings">
                                      </section>
                                  </li>
                                  <li>
                                  </li>
                              </ul>
                          </nav>
                      </header>
                       <aside class="searchResults hidden">
                          <div>
                          </div>
                      </aside>
                      <section id="wrapper" class="theater"></section>
                      <style class="zer">
                      </style>
                      <section id="theater" class="theater">
                          <section>
                              <section id="picContainer">
                                  <img id="bigPic" alt="">
                                  <div class="Playuse">
                                  </div>
                                  <video id="theater_video" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="264" data-setup='{}' data-setup="{}">
                                      <source src="" type='video/mp4' />
                                      <p class="vjs-no-js">
                                          Para ver este vídeo, por favor activa el Javascript y considera actualizar tu navegador a uno que
                                          <a href="http://videojs.com/html5-video-support/" target="_blank">
                                              soporte vídeo en Html5
                                          </a>
                                      </p>
                                  </video>
                                  <div id="otherContainments">
                                      <div></div>
                                  </div>
                              </section>
                              <aside class="comments">
                                  <div class="info">
                                      <img id="pic" alt="">
                                      <p class="username"><a href="#"></a></p>
                                  </div>
                                  <div class="description">
                                      <p class="title"></p>
                                      <p class="more">
                                      </p>
                                  </div>
                                  <div class="comentarios">
                                      <div class="Comentarios">
                                      </div>
                                      <div class="newComment">
                                          <textarea rows="1"></textarea>
                                      </div>
                                  </div>
                                  <div class="options button">
                                      <ul>
                                          <li class="bookmark"></li>
                                          <li class="star"></li>
                                          <li class="read"></li>
                                      </ul>
                                  </div>
                                  <p id="close"></p>
                              </aside>
                          </section>
                      </section>
                      <aside id="sidebar">
                        <div id="container">
                            <div id="resizeTop">
                                <div id="notifications">
                                    <ul>
                                        <div class="info button">
                                            <img src="/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif" alt="">
                                            <p class="username"><b href="#">A.K.A._Dizzy:</b> <br> 😉 Revisen Mi Perfil: <a target="_blank" href="/A.K.A._Dizzy">A.K.A._Dizzy</a></p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div id="resizeBottom">
                                <div id="chat">
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section id="search">
                            <i id="searchIcon"></i>
                            <input type="text" placeholder="Buscar">
                        </section>
                    </aside>
                    <section id="Store" class="button">
                        <aside id="actualStore" class="button">
                            <aside id="storeList" class="button">
                                <ul>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                    <a>
                                        <li class="button">Sección</li>
                                    </a>
                                </ul>
                            </aside>
                            <aside id="storeSection">
                            </aside>
                        </aside>
                    </section>
                    <section id="chats">
                        <div class="chats">
                        </div>
                    </section>
                    <aside id="biography">
                        <section id="content">
                            <section id="cover">
                                ${user.cover.insignias}
                                <figure ondragstart= "return false" id="profilePic">
                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                    <input class="knob button" data-width="195" data-height="195" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="${user.rol.level}">
                                    <section class="hidden">
                                        <div class="info">
                                            <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
                                            <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                            <p class="username"><a href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof user.profilePic[Object.keys(user.profilePic)[0]].city !== "undefined"? `; en <a class="target" title="         
                                                                                                                                                                                                                                 <div class='tool city'>
                                                                                                                                                                                                                                     <figure>
                                                                                                                                                                                                                                         <img class='thumbnail' src= '${user.profilePic[Object.keys(user.profilePic)[0]].city.pic}'></img>
                                                                                                                                                                                                                                     </figure>
                                                                                                                                                                                                                                     <div class='introduction'>
                                                                                                                                                                                                                                         ${user.profilePic[Object.keys(user.profilePic)[0]].city.description}
                                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                                 </div>">${user.profilePic[Object.keys(user.profilePic)[0]].city.name}</a> `: ``}<br>
                                                <span title="${user.profilePic[Object.keys(user.profilePic)[0]].date.full}" class="time">${user.profilePic[Object.keys(user.profilePic)[0]].date.min}</span>
                                            </p>
                                        </div>
                                        <p class="title">${user.profilePic[Object.keys(user.profilePic)[0]].title}</p>
                                        <section id="picture">
                                            <img class="pic" src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="" class="big">
                                        </section>
                                        <div class="Comentarios"></div>
                                        <div class="options button">
                                            <ul>
                                                <li class="bookmark"></li>
                                                <li class="star"></li>
                                                <a href="" target= "_blank">
                                                    <li class="read"></li>
                                                </a>
                                            </ul>
                                        </div>
                                    </section>
                                </figure>
                                <p id="rol">${user.rol.rol} <b>+${user.rol.level}</b></p>
                            </section>
                            <section id="options">
                                <ul>
                                    <li>Resumen</li>
                                    <li><a href="courses">Cursos (Alumno)</a></li>
                                    <li>Cursos (Tutor)</li>
                                    <li>Información</li>
                                </ul>
                            </section>
                            <section id="main">
                                <section id="summary">
                                    <aside id="sections">
                              ${(function (){if(Object.entries(user.situation).length){
                              return   `<section id="situation">
                                            <h2 class="title">Situación Sentimental</h2>
                                            ${one("situation", foReach, user.situation)}
                                        </section>`
                              }else{return ``}})()}
                              ${(function (){if(user.fotos.quantity){
                              return   `<section id="pics">
                                            <h2 class="title"><a id= "photos" href="/${user.username}/photos">Fotos</a> (${user.fotos.quantity})</h2>
                                            ${one("foto", foReach, user.fotos.fotos)}
                                        </section>`
                              }else{return ``}})()}
                              ${(function (){if(user.videos.quantity){
                              return   `<section id="vids">
                                            <h2 class="title"><a id= "videos" href="/${user.username}/videos">Vídeos</a> (${user.videos.quantity})</h2>
                                            ${one("video", foReach, user.videos.videos)}
                                        </section>`
                              }else{return ``}})()}
                              ${(function (){if(Object.entries(user.ties).length){
                              return   `<section id="ties">
                                            <h2 class="title">Lazos Familiares</h2>
                                            ${one("tie", foReach, user.ties)}
                                        </section>`
                              }else{return ``}})()}                                        
                                    </aside>
                                    <aside id="updates">
                                        <aside id="feed">
                                            ${one("story", foReach, user.stories)}
                                        </aside>
                                    </aside>
                                </section>
                            </section>
                        </section>
                    </aside>`,
                sections: {
                  situation: function (){return  `<section id="situation">
                                                      <h2 class="title">Situación Sentimental</h2>
                                                      ${one("situation", foReach, user.situation)}
                                                  </section>`},
                  fotos: function (){return      `<section id="pics">
                                                      <h2 class="title"><a id= "photos" href="/${user.username}/photos">Fotos</a> (${user.fotos.quantity})</h2>
                                                      ${one("foto", foReach, user.fotos.fotos)}
                                                  </section>`},
                  videos: function (){return     `<section id="vids">
                                                      <h2 class="title"><a id= "videos" href="/${user.username}/videos">Vídeos</a> (${user.videos.quantity})</h2>
                                                      ${one("video", foReach, user.videos.videos)}
                                                  </section>`},
                  ties: function (){return       `<section id="ties">
                                                      <h2 class="title">Lazos Familiares</h2>
                                                      ${one("tie", foReach, user.ties)}
                                                  </section>`
                  }
                },
                updates: function (){return  `<aside id="updates">
                                                  <aside id="feed">
                                                      ${one("story", foReach, user.stories)}
                                                  </aside>
                                              </aside>`
                },
                cover: function (){return  `<section id="cover">
                                                ${user.cover.insignias}
                                                <figure ondragstart= "return false" id="profilePic">
                                                    <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                                    <input class="knob button" data-width="195" data-height="195" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="${user.rol.level}">
                                                    <section class="hidden">
                                                        <div class="info">
                                                            <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
                                                            <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                                            <p class="username"><a href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof user.profilePic[Object.keys(user.profilePic)[0]].city !== "undefined"? `; en <a class="target" title="         
                                                                                                                                                                                                                                                 <div class='tool city'>
                                                                                                                                                                                                                                                     <figure>
                                                                                                                                                                                                                                                         <img class='thumbnail' src= '${user.profilePic[Object.keys(user.profilePic)[0]].city.pic}'></img>
                                                                                                                                                                                                                                                     </figure>
                                                                                                                                                                                                                                                     <div class='introduction'>
                                                                                                                                                                                                                                                         ${user.profilePic[Object.keys(user.profilePic)[0]].city.description}
                                                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                                                 </div>">${user.profilePic[Object.keys(user.profilePic)[0]].city.name}</a> `: ``}<br>
                                                                <span title="${user.profilePic[Object.keys(user.profilePic)[0]].date.full}" class="time">${user.profilePic[Object.keys(user.profilePic)[0]].date.min}</span>
                                                            </p>
                                                        </div>
                                                        <p class="title">${user.profilePic[Object.keys(user.profilePic)[0]].title}</p>
                                                        <section id="picture">
                                                            <img class="pic" src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="" class="big">
                                                        </section>
                                                        <div class="Comentarios"></div>
                                                        <div class="options button">
                                                            <ul>
                                                                <li class="bookmark"></li>
                                                                <li class="star"></li>
                                                                <a href="" target= "_blank">
                                                                    <li class="read"></li>
                                                                </a>
                                                            </ul>
                                                        </div>
                                                    </section>
                                                </figure>
                                                <p id="rol">${user.rol.rol} <b>+${user.rol.level}</b></p>
                                            </section>`
                },
                biography: function (){return`<aside id="biography">
                                                  <section id="content">
                                                      <section id="cover">
                                                          ${user.cover.insignias}
                                                          <figure ondragstart= "return false" id="profilePic">
                                                              <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                                              <input class="knob button" data-width="195" data-height="195" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="${user.rol.level}">
                                                              <section class="hidden">
                                                                  <div class="info">
                                                                      <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
                                                                      <img src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="">
                                                                      <p class="username"><a href="/${user.username}" title= "${user.tool}">${user.users_name}</a>${typeof user.profilePic[Object.keys(user.profilePic)[0]].city !== "undefined"? `; en <a class="target" title="         
                                                                                                                                                                                                                                                           <div class='tool city'>
                                                                                                                                                                                                                                                               <figure>
                                                                                                                                                                                                                                                                   <img class='thumbnail' src= '${user.profilePic[Object.keys(user.profilePic)[0]].city.pic}'></img>
                                                                                                                                                                                                                                                               </figure>
                                                                                                                                                                                                                                                               <div class='introduction'>
                                                                                                                                                                                                                                                                   ${user.profilePic[Object.keys(user.profilePic)[0]].city.description}
                                                                                                                                                                                                                                                               </div>
                                                                                                                                                                                                                                                           </div>">${user.profilePic[Object.keys(user.profilePic)[0]].city.name}</a> `: ``}<br>
                                                                          <span title="${user.profilePic[Object.keys(user.profilePic)[0]].date.full}" class="time">${user.profilePic[Object.keys(user.profilePic)[0]].date.min}</span>
                                                                      </p>
                                                                  </div>
                                                                  <p class="title">${user.profilePic[Object.keys(user.profilePic)[0]].title}</p>
                                                                  <section id="picture">
                                                                      <img class="pic" src="/resources/images/${user.username}/${user.profilePic[Object.keys(user.profilePic)[0]].contents.image}" alt="" class="big">
                                                                  </section>
                                                                  <div class="Comentarios"></div>
                                                                  <div class="options button">
                                                                      <ul>
                                                                          <li class="bookmark"></li>
                                                                          <li class="star"></li>
                                                                          <a href="" target= "_blank">
                                                                              <li class="read"></li>
                                                                          </a>
                                                                      </ul>
                                                                  </div>
                                                              </section>
                                                          </figure>
                                                          <p id="rol">${user.rol.rol} <b>+${user.rol.level}</b></p>
                                                      </section>
                                                      <section id="options">
                                                          <ul>
                                                              <li>Resumen</li>
                                                              <li><a href="courses">Cursos (Alumno)</a></li>
                                                              <li>Cursos (Tutor)</li>
                                                              <li>Información</li>
                                                          </ul>
                                                      </section>
                                                      <section id="main">
                                                          <section id="summary">
                                                              <aside id="sections">
                                                        ${(function (){if(Object.entries(user.situation).length){
                                                        return   `<section id="situation">
                                                                      <h2 class="title">Situación Sentimental</h2>
                                                                      ${one("situation", foReach, user.situation)}
                                                                  </section>`
                                                        }else{return ``}})()}
                                                        ${(function (){if(user.fotos.quantity){
                                                        return   `<section id="pics">
                                                                      <h2 class="title"><a id= "photos" href="/${user.username}/photos">Fotos</a> (${user.fotos.quantity})</h2>
                                                                      ${one("foto", foReach, user.fotos.fotos)}
                                                                  </section>`
                                                        }else{return ``}})()}
                                                        ${(function (){if(user.videos.quantity){
                                                        return   `<section id="vids">
                                                                      <h2 class="title"><a id= "videos" href="/${user.username}/videos">Vídeos</a> (${user.videos.quantity})</h2>
                                                                      ${one("video", foReach, user.videos.videos)}
                                                                  </section>`
                                                        }else{return ``}})()}
                                                        ${(function (){if(Object.entries(user.ties).length){
                                                        return   `<section id="ties">
                                                                      <h2 class="title">Lazos Familiares</h2>
                                                                      ${one("tie", foReach, user.ties)}
                                                                  </section>`
                                                        }else{return ``}})()}                                        
                                                              </aside>
                                                              <aside id="updates">
                                                                  <aside id="feed">
                                                                      ${one("story", foReach, user.stories)}
                                                                  </aside>
                                                              </aside>
                                                          </section>
                                                      </section>
                                                  </section>
                                              </aside>`},
              sidebar: function (){return `<aside id="sidebar">
                        <div id="container">
                            <div id="resizeTop">
                                <div id="notifications">
                                    <ul>
                                        <div class="info button">
                                            <img src="/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif" alt="">
                                            <p class="username"><b href="#">A.K.A._Dizzy:</b> <br> 😉 Revisen Mi Perfil: <a target="_blank" href="/A.K.A._Dizzy">A.K.A._Dizzy</a></p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora Moderador.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> Es ahora amigo de Walter White.</p>
                                        </div>
                                        <div class="info button">
                                            <img src="/resources/images/white.jpg" alt="">
                                            <p class="username"><b href="#">Walter White</b> hizo un commit a eBay.</p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div id="resizeBottom">
                                <div id="chat">
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section id="search">
                            <i id="searchIcon"></i>
                            <input type="text" placeholder="Buscar">
                        </section>
                    </aside>`}
          }
      };