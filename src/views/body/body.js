import React from 'react';
import './body.scss';
import Game1 from './games/game_1';
import Game2 from './games/game_2';
import Game3 from './games/game_3';
import Game4 from './games/game_4';
import Game5 from './games/game_5';
import Game6 from './games/game_6';
import Game7 from './games/game_7';
import Game8 from './games/game_8';
import Game9 from './games/game_9';
import Game10 from './games/game_10';
import Game11 from './games/game_11';
// import {Col} from 'react-grid-system';

const Body = () => {
    return(
        <section>
            <Game1/>
            <Game2/>
            <Game3/>
            <Game4/>
            <Game5/>
            <Game6/>
            <Game7/>
            <Game8/>
            <Game9/>
            <Game10/>
            <Game11/>
        </section>
    )
}

export default Body;