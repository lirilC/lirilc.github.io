export function app () {
        return {__app:    `<header>
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
                          <div class="accessibiliTyDialog hot_keys chocolate full_Text"><aside class="hotKeys chocolate visible">
                            <h3>Lista de atajos del teclado para el feed</h3>
                            <table>
                              <thead>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>
                                    Siguiente publicación
                                  </th>
                                  <th>
                                    j
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Publicación anterior
                                  </th>
                                  <th>
                                    k
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Estelar publicación
                                  </th>
                                  <th>
                                    l
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Guardar publicación en tus marcadores
                                  </th>
                                  <th>
                                    b
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Abrir publicación en el <i>Theater</i>
                                  </th>
                                  <th>
                                    f
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Cerrar el <i>Theater</i>
                                  </th>
                                  <th>
                                    Esc
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Cerrar este diálogo
                                  </th>
                                  <th>
                                    Esc
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Empezar una búsqueda en liril
                                  </th>
                                  <th>
                                    Control + Shift + Alt
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Resultado de búsqueda siguiente (de una búsqueda de liril)
                                  </th> 
                                  <th>
                                    ↑
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Resultado de búsqueda anterior (de una búsqueda de liril)
                                  </th> 
                                  <th>
                                    ↓
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Siguiente elemento (de un carrusel)
                                  </th>
                                  <th>
                                    →
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Elemento anterior (de un carrusel)
                                  </th>
                                  <th>
                                    ←
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Subir el volumen (de un vídeo)
                                  </th> 
                                  <th>
                                    ↑
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Bajar el volumen (de un vídeo)
                                  </th> 
                                  <th>
                                    ↓
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Si quieres adelantar o atrasar un vídeo en un carrusel
                                  </th> 
                                  <th>
                                    Control + Shift
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Para dejar de hacer lo anterior
                                  </th> 
                                  <th>
                                    Control + Shift
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Adelantar (un vídeo)
                                  </th> 
                                  <th>
                                    →
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Atrasar (un vídeo)
                                  </th> 
                                  <th>
                                    ←
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Adelantar más (un vídeo)
                                  </th> 
                                  <th>
                                    Control + →
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Atrasar más (un vídeo)
                                  </th> 
                                  <th>
                                    Control + ←
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Adelantar menos (un vídeo)
                                  </th> 
                                  <th>
                                    Shift + →
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Atrasar menos (un vídeo)
                                  </th> 
                                  <th>
                                    Shift + ←
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Explorar (un vídeo)
                                  </th> 
                                  <th>
                                    0 - 9
                                  </th>
                                </tr>
                                <tr>
                                  <th>
                                    Silenciar (un vídeo)
                                  </th> 
                                  <th>
                                    m
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </aside></div>
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
                        <aside id="feed">
                            ${one("_story", foReach, _firsT(5, _of, index.stories))}
                        </aside>
                        <div id="loadingMorePosts">Cargando más publicaciones...</div>`,
                feed: function (){return `<aside id="feed">
                                              ${one("_story", foReach, _firsT(5, _of, index.stories))}
                                          </aside>`}
          }
      };