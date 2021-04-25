import React from 'react';
import styled from 'styled-components';

interface BoxProps {
    xCoord: number;
    yCoord: number;
}

const Box = styled.div<BoxProps>`
    position: absolute;
    left: ${props => props.xCoord}px;
    top: ${props => props.yCoord}px;
    width: 100px;
    height: 100px;
    border: 5px dashed black;
`

const TargetingBox: React.FC<BoxProps> = (props) => {

    const { xCoord, yCoord } = props;

    return(
        <Box xCoord={xCoord} yCoord={yCoord} />
    )
}

export default TargetingBox;