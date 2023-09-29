export function app () {
        return {__app:     `<header>
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
                            <div id="root">
                                <div class="contnr">
                                    <div>
                                        <a href="/${user.username}">${user.users_name}</a>
                                    </div>
                                    <span>
                                        <span>Fotos</span>
                                    </span>
                                </div>
                            </div>
                            <section id="wrapper" class="theater">
                         
                            </section>
                            <div class="wrapper">
                            </div>
                            <style class="zer">
                                
                            </style>
                            <section id="theater" class="theater">
                                <section>
                                    <section id="picContainer">
                                        <img id="bigPic" alt="">
                                        <div class="Playuse">
                                        </div>
                                        <video id="theater_video" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="264" data-setup='{}'  data-setup="{}">
                                           <source src="" type='video/mp4'/>
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
                                    </ul></div>
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
                                                  <img src="/resources/images/A.K.A._Dizzy/4uHf7tgk8C_tn.jpg" alt="">
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
                          <aside id="book">
                              <section id="content">
                                  <section id="theater" class="theater animated fadeIn" style="display: block;">
                              <section>
                              <section id="picContainer">
                                  <img id="bigPic" class= "invisible" alt="" src="">
                                  <div class="Playuse">
                                  </div>
                                  <video id="theater_video" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="264" data-setup='{}'  data-setup="{}">
                                      <source src="" type='video/mp4'/>
                                      <p class="vjs-no-js">
                                          Para ver este vídeo, por favor activa el Javascript y considera actualizar tu navegador a uno que
                                          <a href="http://videojs.com/html5-video-support/" target="_blank">
                                          soporte vídeo en Html5
                                          </a>
                                      </p>
                                  </video>
                                  <div id="otherContainments" class= "visible">
                                      <div>
                                          ${user.stories[window.location.pathname].contents}
                                      </div>
                                  </div>
                              </section>
                              <aside class="comments">
                                  <div class="info">
                                      <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
                                      <img id="pic" alt="" src="/resources/images/${user.username}/${Object.values(user.profilePic)[0].contents.image}">
                                      <p class="username"><a class= "target" href= "/${user.username}" title= "${user.tool}">${user.users_name}</a> <br><span title= "24 de Diciembre de 2021 a las 0:00 am" class="time">Diciembre de 2021</span></p>
                                                                    ${typeof user.stories[window.location.pathname].Editado !== "undefined"? `<span onmousedown= '${user.stories[window.location.pathname].Editado[0]}' title='${user.stories[window.location.pathname].Editado[1]}' class="Editado">Editado</span>`: ``}
                                  </div>
                                  <div class="description" style="padding-top: 76px;">
                                      <p class="title">${user.stories[window.location.pathname].title}</p>
                                      <section class="more"></section>
                                  </div>
                                  <div class="Comentarios">${user.stories[window.location.pathname].Comentarios}</div>
                                  <div class="newComment">
                                      <textarea rows="1"></textarea>
                                  </div>
                                  <div class="options button">
                                      <ul>
                                          <li class="bookmark" title=""></li>
                                          <li class="star" title=""></li>
                                          <a><li class="read" title=""></li></a>
                                      </ul>
                                  </div>
                              </aside>
                          </aside>`, 
                book: function (){return   `<aside id="book">
                                                <section id="content">
                                                    <section id="theater" class="theater animated fadeIn" style="display: block;">
                                                <section>
                                                <section id="picContainer">
                                                    <img id="bigPic" class= "invisible" alt="" src="">
                                                    <div class="Playuse">
                                                    </div>
                                                    <video id="theater_video" controls class="video-js d88fer vjs-default-skin" preload="none" width="100%" height="264" data-setup='{}'  data-setup="{}">
                                                        <source src="" type='video/mp4'/>
                                                        <p class="vjs-no-js">
                                                            Para ver este vídeo, por favor activa el Javascript y considera actualizar tu navegador a uno que
                                                            <a href="http://videojs.com/html5-video-support/" target="_blank">
                                                            soporte vídeo en Html5
                                                            </a>
                                                        </p>
                                                    </video>
                                                    <div id="otherContainments" class= "visible">
                                                        <div>
                                                            ${user.stories[window.location.pathname].contents}
                                                        </div>
                                                    </div>
                                                </section>
                                                <aside class="comments">
                                                    <div class="info">
                                                        <input class='knob button' data-width='47' data-height='47' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.12' readonly value='${user.rol.level}'>
                                                        <img id="pic" alt="" src="/resources/images/${user.username}/${Object.values(user.profilePic)[0].contents.image}">
                                                        <p class="username"><a class= "target" href= "/${user.username}" title= "${user.tool}">${user.users_name}</a> <br><span title= "24 de Diciembre de 2021 a las 0:00 am" class="time">Diciembre de 2021</span></p>
                                                                                      ${typeof user.stories[window.location.pathname].Editado !== "undefined"? `<span onmousedown= '${user.stories[window.location.pathname].Editado[0]}' title='${user.stories[window.location.pathname].Editado[1]}' class="Editado">Editado</span>`: ``}
                                                    </div>
                                                    <div class="description" style="padding-top: 76px;">
                                                        <p class="title">${user.stories[window.location.pathname].title}</p>
                                                        <section class="more"></section>
                                                    </div>
                                                    <div class="Comentarios">${user.stories[window.location.pathname].Comentarios}</div>
                                                    <div class="newComment">
                                                        <textarea rows="1"></textarea>
                                                    </div>
                                                    <div class="options button">
                                                        <ul>
                                                            <li class="bookmark" title=""></li>
                                                            <li class="star" title=""></li>
                                                            <a><li class="read" title=""></li></a>
                                                        </ul>
                                                    </div>
                                                </aside>
                                            </aside>`}
          }
      };
