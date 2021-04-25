import React from 'react';
import styled from 'styled-components';

import logo from '../images/wheres-waldo-logo.jpg';

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Optima-ExtraBlack';
    font-weight: bold;
    display: inline;
`;

const TitleText = styled.span`
    color: ${props => props.color}
`;

const Logo = styled.img`
    max-height: 80px;
`;



const Header = () => {
    return (
        <Container>
            <Title><TitleText color='#039be5'>WHERE'S</TitleText> <TitleText color='#7d1b1b'>WALDO?</TitleText></Title>
            <Logo src={logo} />
        </Container>
    )
}

export default Header;