import React from 'react';
import Slider from "react-slick";
import '../body.scss';

const Game_7 = () => {
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
                Juegos de Carreras
                <a href='/'>Ver todo</a>
            </h1>
            <div>
                <Slider {...settings}>
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220112/12012022085025351r96cWnnaLMC1mAZI.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210617/170620211035252507eP8FnyNcj9v8pMB.png.xhtml)'}}>
                            </div>
                            <div className='game-name'>
                                <h1>Test Casino</h1>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210805/05082021101130200Ax1KS70JskdglEND.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/13052022102217831XAIbh121bRaHzJtn.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Hot Shoot</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>16 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210813/13082021110700758b4i9stbwXPTc4RZB.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
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
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20211013/13102021113512473FH164Mi3cbs0rVcf.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220545555QI7P7qpF9JhUIAsF.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230721/21072023165915986Kifdxr5DRyY4DzKE.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220112/120120220844236034zbaLJk69YJGxwuP.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220329/29032022180502049Fsp74aDmFK5gHvNc.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/13052022100935028o5lyEBQYFMCj4z45.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022111137455s7wpnp7OnScr501v.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220459878r3j4wXHvogaqUC27.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210617/17062021102815831edBt9vl7xtvcb5H0.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090621885J3WYCFy4KXmarBTU.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
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
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022112032832mKxrsp8WDgqWUwiO.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022112032832mKxrsp8WDgqWUwiO.png.xhtml)'}}>
                                <span className=''>GRATIS</span>
                            </div>
                            <div className='game-name'>
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
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
                                <h1>Knife-Hit</h1>
                                <div className='game-number'>
                                    <p>
                                        <i className='game-icon'></i>
                                        <span>81 Jugador</span>
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

export default Game_7;