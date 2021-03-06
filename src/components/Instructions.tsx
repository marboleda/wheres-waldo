import React from 'react';
import styled from 'styled-components';

import waldo from '../images/waldo.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard.png';

interface InstructionsProps {
    startGame: () => void;
}

const InstructionsScreen = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
    min-height: calc(100vh - 150px);
`;

const Characters = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 475px) {
        flex-direction: column;
    }
`;

const StartButton = styled.button`
    width: 20vw;
    background-color: aliceblue;
    color: #7d1b1b;
    border: 3px solid #039be5;
    font-weight: bold;
    font-size: 1rem;
    @media (max-width: 390px) {
        font-size: 0.75rem;
    }
    margin-top: 20px;
    font-family: 'Optima-ExtraBlack';
`;

const Instructions: React.FC<InstructionsProps> = (props) => {

    const { startGame } = props;

    return(
        <InstructionsScreen>
            <p>Find these characters!</p>
            <Characters>
                <img src={waldo} alt='Waldo'/>
                <img src={wenda} alt='Wenda'/>
                <img src={wizard} alt='Wizard'/>
            </Characters>
            <StartButton type='button' onClick={startGame}>START GAME</StartButton>
        </InstructionsScreen>
    )
}

export default Instructions;