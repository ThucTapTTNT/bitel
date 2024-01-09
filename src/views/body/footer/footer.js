import React from 'react';
import './footer.scss';
import logo from '../../../assets/images/header/logo.png';

const Footer = () => {
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-1'>
                    <div className='col-4'>
                        <div className='logo'>
                            <a href='/'>
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div className='footer-1-1'>
                            <a href='/'>Términos y Condiciones</a>
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='footer-1-2'>
                            <span>Síguenos en:</span>
                            <a href='/'>
                                <i className='icon-footer facebook'></i>
                            </a>
                            <a href='/'>
                                <i className='icon-footer insta'></i>
                            </a>
                            <a href='/'>
                                <i className='icon-footer yt'></i>
                            </a>
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='footer-1-3'>
                            <span>Copyright © 2021 Bitel Perú. Todos los derechos reservados.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;