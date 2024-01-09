import React from 'react';
import Slider from "react-slick";
import '../body.scss';

const Game3 = () => {
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
                Juegos Gratis   
                <a href='/'>Ver todo</a>
            </h1>
            <div>
                <Slider {...settings}>
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220112/12012022085025351r96cWnnaLMC1mAZI.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>EARTH DEFENDER</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>11 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210716/16072021102631803qOVRgXvoEm4hRX26.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Grand Commander</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>14 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/2705202109043773169XQmZ2i5j38Khqi.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>jago</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>12 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230724/24072023141822996BWzPU6qvBDQmIJuf.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Impossible Flappy</h1>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210528/28052021215408044j9nSSMI4SRzINr7X.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Warriors VS Evil Spirits</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>0 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210528/280520212212397650ofVHyABoFaMJCNj.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Kingdom Defense</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>0 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210530/30052021172150986CoUMx3fSaCXlhu8W.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>VikingEscape</h1>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/1106202322103399784d1dM823Cdvrl8j.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Ball Control In Circle</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>276 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210617/17062021102429503XKhJV9myj0jlUnO6.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Ninja Shooter</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>0 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210615/15062021114019589B7AkARkVrmXKcjgu.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Cave</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>0 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210813/13082021110516075FYO7ukCSvIkNsyTc.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Monster Truck</h1>
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
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210617/17062021103300159871IPY1OvwCQPCpv.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Quick Dice</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>0 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/1305202210143372648BaxUx2529tS5Lv.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>2048</h1>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210617/17062021095051210aS6g9KpcSDTxAcdq.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Crazy Runner</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>7 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210617/17062021104551196vt46EfthdoPfmq1w.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Speed</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>28 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090302304UCvDepV1UbQMgC0i.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Drawing space</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>7 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023221219302B09xfvt6Bi4AiJ4A.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Fast Driver</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>196 Jugadores</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220710319Rlx6I1bmCuJQsUfy.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Up Down Ninja</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>143 Jugadores</span>
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

export default Game3;