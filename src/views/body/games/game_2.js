import React from 'react';
import Slider from "react-slick";
import '../body.scss';

const Game2 = () => {
    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    return(
        <div>
            <h1 className='game-title'>
                Juegos de Arcade
                <a href='/'>Ver todo</a>
            </h1>
            <div>
                <Slider {...settings}>
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210716/16072021094406632owkQbus8lHpRAFN3.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Dungeon Dodge</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>20 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210927/27092021133658629G04khj2qFCJ5r0R4.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Avoid Cars</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>41 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230721/21072023165543733HNErdRFW0aB2kqQ8.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>T-Rex Jump</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>25 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210603/030620211652053154hf9fPgSRRvHpdpH.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>BrickOut</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>1 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090450640Ike5un9ZbiZNKsxZ.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>mad Fish</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>3 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090408895XliTBI0ARQdzbIAB.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Frenetic Space</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>8 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220345285SBb0IAYOoutW2iRi.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>MR. LONG LEG</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>49 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210915/15092021105314058SgTs42YqEVP6OsnP.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Flappy Ball</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>147 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210528/28052021215408044j9nSSMI4SRzINr7X.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Ranger vs Zombies</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>20 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/13052022101127928B67vAO34p3qjB3bK.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Stick Swing</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>26 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022112032832mKxrsp8WDgqWUwiO.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Fire Dots</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>392 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022111137455s7wpnp7OnScr501v.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Bridges</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>1 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220829563kFUdZf32mtBMIOP0.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Fast Ball Puzzle</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>104 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220545555QI7P7qpF9JhUIAsF.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Five</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>17 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20211115/151120211423357027jDEspPgySRmCtsv.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Mortar Watermelon</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>141 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230626/26062023110830119LgwgbE1Vvg95POjA.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Climbing Up</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>66 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20211115/15112021142032348AG4Xn85M1sBkZqxG.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Tripolygon</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>19 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022171731428gaq6xABYMlBEPk7Y.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Join Numbers</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>4 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220829563kFUdZf32mtBMIOP0.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>2PAC</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>40 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023221551427a6uHFzsS5RiXgWOz.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Angry Aliens</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>45 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Game2;