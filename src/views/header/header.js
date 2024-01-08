import './header.scss';
import logo from '../../assets/images/header/logo.png';
import icon_1 from '../../assets/images/header/icon_1.png';
import icon_2 from '../../assets/images/header/icon_2.png';
import icon_3 from '../../assets/images/header/icon_3.png';
import icon_4 from '../../assets/images/header/icon_4.png';
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Col } from 'react-grid-system';

const Header = () => {
    // const userAuth = [
    //     {
    //         phone: 12123212,
    //         passWord: "123456"
    //     },
    //     {
    //         phone: 12123212,
    //         passWord: "123456"
    //     },
    //     {
    //         phone: 12123212,
    //         passWord: "123456"
    //     },
    //     {
    //         phone: 12123212,
    //         passWord: "123456"
    //     },
    // ]
    // localStorage.setItem("userAuth",JSON.stringify(userAuth))
    // console.log(localStorage.getItem("userAuth"));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);
  
    const handleLogin = () => {
        const user = users.find((user) => user.username === username && user.password === password);
    
        if (user) {
            localStorage.setItem("loggedIn", "true");
            setLoggedIn(true);
            setShowModal(false);
        }

        // // temp
        // localStorage.removeItem("loggedIn");
        // setLoggedIn(false);
    };
  
    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        setLoggedIn(false);
    };
  
    const loginForm = (
        <div className='loginform'>
            <h1>Inicia sesión con tu cuenta</h1>
            <input
                type="text"
                placeholder="Número Bitel"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <a href='/'>¿Olvidaste tu contraseña?</a>
            <button onClick={handleLogin}>Iniciar sesión</button>
            <p>¿No tienes una cuenta?</p>
            <a href='/'>Registrarte con Bitel ID</a>
        </div>
    );
    
    const loggedInMessage = (
        <div>
            <h1>Chào mừng {username}!</h1>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    return(
        <header>
            <div className='head-container'>
                <Col className='header-1'>
                    <div className='logo'>
                        <a href='/'>
                            <img alt='' src={logo}/>
                        </a>
                    </div>
                </Col>
                <Col className='header-2'>
                    <ul className='header-ul'>
                        <li>
                            <a href='/'>
                                <img alt='' src={icon_1}/>
                                <span>INICIO</span>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <img alt='' src={icon_2}/>
                                <span>JUEGOS</span>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <img alt='' src={icon_3}/>
                                <span>TABLA DE GANADORES</span>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <img alt='' src={icon_4}/>
                                <span>CONOCE MÁS</span>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <span className='li-1'>HAZTE PREMIUM</span>
                            </a>
                        </li>
                    </ul>
                </Col>
                <a className='tk-a' href='/'>
                    <i className='tk'/>
                </a>
                <a className='iniciar' href='#' onClick={() => setShowModal(true)}>Iniciar sesión</a>
                <Modal
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                    contentLabel="Đăng nhập"
                    style={{
                        overlay: {zIndex: 9999},
                    }}
                >
                    {isLoggedIn ? loggedInMessage : loginForm}
                </Modal>
                <a className='regis' href='/'>Registrate</a>
            </div>
        </header>
    )
}

export default Header;