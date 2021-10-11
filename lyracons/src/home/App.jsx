
import './App.css';
import React, { useState } from 'react';
import $ from 'jquery';



function App() {

    
    $(function () {
        $('#a').hover(function () {
            $('#b').css('background-color', 'yellow');
        }, function () {
            $('#b').css('background-color', '');
        });
    });


    const [show, setShow] = useState(true);
    const [showProd, setShowProd] = useState(true);

    return (
        <div>
            <header className="header">
            <nav className="nav">
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                    <i className="fa fa-bars"></i>
                </label>
                <img src="https://cace.org.ar/uploads/socios/988/80d944a24ad5183e8f143190191f9b16.png" className="logo" />
                <ul className="navmenu menu-visible">
                    <li className="with-submenu">
                        <li className="menuitem"><a href="#">MENU ITEM 1</a></li>
                        <ul className="submenu">
                            <li><a href="#0">Submenu Item 1</a></li>
                            <li><a href="#0">Submenu Item 2</a></li>
                            <li><a href="#0">Submenu Item 3</a></li>
                        </ul>
                    </li>
                    <li className="menuitem"><button className="btnnav" type="button" onClick={() => { setShowProd(!showProd) }}>MENU ITEM 2</button></li>
                    <li className="menuitem"><a id="a" href="#">MENU ITEM 3</a></li>
                    <li className="menuitem"><button className="btnnav" type="button" onClick={() => { setShow(!show) }}>MENU ITEM 4</button></li>
                </ul>
            </nav>
            </header>
            <div id="cont" className="container">
                <div id="b" className="sidebar">
                    {!show ? (
                        <div id="hola">Hola Mundo!</div>
                    ) : (
                        <div></div>
                    )}
                </div>
                {showProd ? (
                    <div id="sub" className="subcontainer">
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div class="crd_dsgn">
                            <div class="crd_img">
                                <img src="https://www.imagejournal.org/wp-content/uploads/2015/03/14605081026_945bd79d28_k-300x200.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="titulo">Titulo de Producto</div>
                                <div className="marca">Marca</div>
                                <div className="precio">$ 12.345,00</div>
                                <div class="crd_hdng">
                                    <button className="btn-c">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    (<div></div>
                    )}
            </div>
        </div>
    );
}

export default App;
