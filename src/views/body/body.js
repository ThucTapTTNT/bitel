import React from 'react';
import './body.scss';
import Game_1 from './games/game_1';
import Game_2 from './games/game_2';
import Game_3 from './games/game_3';
import Game_4 from './games/game_4';
import Game_5 from './games/game_5';
import Game_6 from './games/game_6';
import Game_7 from './games/game_7';
import Game_8 from './games/game_8';
import Game_9 from './games/game_9';
import Game_10 from './games/game_10';
import Game_11 from './games/game_11';
import Game_12 from './games/game_12';
// import {Col} from 'react-grid-system';

const Body = () => {
    return(
        <section>
            <Game_1/>
            <Game_2/>
            <Game_3/>
            <Game_4/>
            <Game_5/>
            <Game_6/>
            <Game_7/>
            <Game_8/>
            <Game_9/>
            <Game_10/>
            <Game_11/>
        </section>
    )
}

export default Body;