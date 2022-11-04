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
                          <aside class="searchResults hidden">
                              <div>
                              </div>
                          </aside>
                          <div id="root">
                              <div class="contnr">
                                  <div>
                                      <a href="/${blog.user.username}">${blog.user.users_name}</a>
                                  </div>
                                  <div>
                                      <a href="/${blog.user.username}/blogs">Blog</a>
                                  </div>
                                  <span>
                                      <span>${blog.title}</span>
                                  </span>
                              </div>
                          </div>
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
                          <section id="article">
                              <span class="date"><time datetime="${blog.date.unformatted}">&nbsp${blog.date.formatted}</time></span>
                              <aside id="title">
                                  ${blog.title}
                              </aside>
                              <section class="filler" style="height: 180px"></section>
                              <aside id="text">
                                  ${blog.contents}
                              </aside>
                              <div class="comentarios">
                                  <div class="Comentarios">
                                  </div>
                                  <div class="newComment">
                                      <textarea rows="1"></textarea>
                                  </div>
                              </div>
                          </section>
                          <aside id="blogSidebar">
                              <section class="story project">
                                  <div class="info">
                                      <img src="/resources/images/white.jpg" alt="">
                                      <p class="username"><a href="#">Walter White</a> </p>
                                      <p class="time">Ayer a las 3:30 pm</p>
                                  </div>
                                  <p class="title">Elizabeth Elam</p>
                                  <img class="pic" src="/A.K.A._Dizzy/blog/Dinosaurios/resources/tumblr_oezvmcymMl1siavito1_500.jpg" alt="" class="big">
                                  <div class="options button">
                                      <ul>
                                          <li class="bookmark"></li>
                                          <li class="star"></li>
                                          <a href="">
                                              <li class="read"></li>
                                          </a>
                                      </ul>
                                  </div>
                              </section>
                              <section class="story news">
                                  <div class="info">
                                      <img src="/resources/images/white.jpg" alt="">
                                      <p class="username"><a href="#">Walter White</a></p>
                                      <p class="time">24 de Octubre a las 0:30 am</p>
                                  </div>
                                  <p class="title">Novedades En GitHub</p>
                                  <img class="pic" src="/A.K.A._Dizzy/blog/Dinosaurios/resources/25231.png" alt="" class="big">
                                  <div class="options button">
                                      <ul>
                                          <li class="bookmark"></li>
                                          <li class="star"></li>
                                          <a href="article">
                                              <li class="read"></li>
                                          </a>
                                      </ul>
                                  </div>
                              </section>
                              <section class="story news">
                                  <p class="title">Nuevos conceptos de diseño por <a href="#">Walter White</a></p>
                                  <img class="pic" src="/resources/images/grid/2.jpg" alt="" class="big">
                                  <div class="options button">
                                      <ul>
                                          <li class="bookmark"></li>
                                          <li class="star"></li>
                                          <a href="">
                                              <li class="read"></li>
                                          </a>
                                      </ul>
                                  </div>
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
                        </section>`,
                feed: function (){return `<aside id="feed">
                                              ${one("_story", foReach, index.stories)}
                                          </aside>`}
          }
      };