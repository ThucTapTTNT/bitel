import React from 'react';
import Slider from "react-slick";
import '../body.scss';

const Game6 = () => {
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
                Deporte  
                <a href='/'>Ver todo</a>
            </h1>
            <div>
                <Slider {...settings}>
                    <div className='game-wrapper'>
                        <a href='/'>
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/13052022101127928B67vAO34p3qjB3bK.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210915/15092021101634984YrMWuJSi03q5G08D.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210915/15092021105314058SgTs42YqEVP6OsnP.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/13052022101217189mznHlmEyGPMML8FS.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/1106202322103399784d1dM823Cdvrl8j.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220145168b9fu8iWUlix4ISRM.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20211013/13102021113630841MWJ8pbqvtUFKEW8h.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210813/1308202111035598411VZEcQYcFnep6Nu.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/20022022171731428gaq6xABYMlBEPk7Y.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220220/200220221116131981g2Pl2kdgR8ZMs7R.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210915/150920211018212303Feg3Nhjr2GVPko0.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023221219302B09xfvt6Bi4AiJ4A.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20220513/13052022103253793CAgmhYj7SLo0cCle.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210813/13082021111504146fTXSmneVJy0JIS5S.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210915/15092021103903341MTAcY2up6omqrHOF.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20230611/11062023220710319Rlx6I1bmCuJQsUfy.png.xhtml)'}}>
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
                            <div className='game-img' style={{background: 'url(http://game.arabicatech.vn/javax.faces.resource/upload/20210915/15092021094712428mLjaKGTH6fhaMfKU.png.xhtml)'}}>
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

export default Game6;