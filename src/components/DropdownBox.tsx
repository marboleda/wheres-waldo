import React from 'react';
import styled from 'styled-components';

interface BoxProps {
    xCoord: number;
    yCoord: number;
}

interface DropdownBoxProps extends BoxProps {
    handleClick: (character: string, x: number, y: number) => void;
}

interface OptionProps {
    onClick: (character: string, x: number, y: number) => void;
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

const Option = styled.a<OptionProps>`
    width: 100%;
    box-sizing: border-box;
    height: 33.333%;
    border: 2px solid black;
    &:hover {
        cursor: pointer;
    }
`

const DropdownBox: React.FC<DropdownBoxProps> = (props) => {

    const { xCoord, yCoord, handleClick } = props;

    return(
        <OptionBox xCoord={xCoord} yCoord={yCoord}>
            <Option onClick={() => handleClick('waldo', xCoord, yCoord)}>Waldo</Option>
            <Option onClick={() => handleClick('wenda', xCoord, yCoord)}>Wenda</Option>
            <Option onClick={() => handleClick('wizard', xCoord, yCoord)}>Wizard</Option>
        </OptionBox>
    )
}

export default DropdownBox;