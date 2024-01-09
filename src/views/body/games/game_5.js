import React from 'react';
import Slider from "react-slick";
import '../body.scss';

const Game5 = () => {
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
                Juegos Populares  
                <a href='/'>Ver todo</a>
            </h1>
            <div>
                <Slider {...settings}>
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090408895XliTBI0ARQdzbIAB.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/2705202109043773169XQmZ2i5j38Khqi.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/2705202109110450581zZ5QavPCedNCKu.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090302304UCvDepV1UbQMgC0i.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210528/28052021085728599XE74R21OfTQvdJSM.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/270520210903194831cZw90RMbiyXdcqD.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090601694lRtESsuMYIYdkoxP.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210530/30052021163337745bh5KOdKg3y11yKgS.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210527/27052021090450640Ike5un9ZbiZNKsxZ.png.xhtml)'}}>
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

export default Game5;