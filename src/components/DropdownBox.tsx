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
`

const DropdownBox: React.FC<BoxProps> = (props) => {

    const { xCoord, yCoord } = props;

    return(
        <OptionBox xCoord={xCoord} yCoord={yCoord}>
            <Option>Option1</Option>
            <Option>Option2</Option>
            <Option>Option3</Option>
        </OptionBox>
    )
}

export default DropdownBox;