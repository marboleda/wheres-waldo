import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const Title = styled.h1`
`;

const Header = () => {
    return (
        <Container>
            <Title>Where's Waldo</Title>
        </Container>
    )
}

export default Header;