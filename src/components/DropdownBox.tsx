import React from 'react';
import styled from 'styled-components';

interface BoxProps {
    xCoord: number;
    yCoord: number;
}

const OptionBox = styled.div<BoxProps>`
    position: absolute;
    left: ${props => props.xCoord - 100}px;
    top: ${props => props.yCoord}px;
    width: 100px;
    border: 3px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

const Option = styled.a`
    width: 100%;
    box-sizing: border-box;
    height: 33.333%;
    border: 2px solid black;
`

const DropdownBox: React.FC<BoxProps> = (props) => {

    const { xCoord, yCoord } = props;

    return(
        <OptionBox xCoord={xCoord} yCoord={yCoord}>
            <Option>Waldo</Option>
            <Option>Wenda</Option>
            <Option>Wizard</Option>
        </OptionBox>
    )
}

export default DropdownBox;