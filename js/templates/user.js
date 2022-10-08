function app () {
        return `<div>
                    <div class="wrapper">
                    </div>
                    <header>
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
                                        <img id="profile-pic" src=${loggedUser.profilePic} alt="Walter White"></img>
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
                </div>`
      };

export default app;
