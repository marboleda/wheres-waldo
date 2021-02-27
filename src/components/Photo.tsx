import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import TargetingBox from './TargetingBox';
import DropdownBox from './DropdownBox';

import image1 from '../images/wheres-waldo-1.jpg'

interface PhotoProps {
  dropdownSelect: (character: string, x: number, y: number) => void;
  charactersFound: boolean[];
}

interface CharacterFoundMarkerProps {
  xCoord: number;
  yCoord: number;
  isCharacterFound: boolean;
}

const PhotoContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
`;

const CharacterFoundMarker = styled.div<CharacterFoundMarkerProps>`
  border-radius: 50%;
  border: 5px dashed black;
  background-color: rgba(0, 255, 0, 0.5);
  position: absolute;
  left: ${props => props.xCoord}px;
  top: ${props => props.yCoord}px;
  width: 100px;
  height: 100px;
  display: ${props => props.isCharacterFound ? 'inline-block' : 'none'};
`



const Photo: React.FC<PhotoProps> = (props) => {

  const { dropdownSelect, charactersFound } = props;

  const [targetingBoxCoords, setTargetingBoxCoords] = useState([-1, -1]);
  const [showBoxes, setShowBoxes] = useState(false);

  const handleClick = (e: MouseEvent) => {
    const photo: HTMLElement | null = document.querySelector('.Photo');

    if (photo && !showBoxes) {
      const x = e.pageX - photo.offsetLeft;
      const y = e.pageY - photo.offsetTop;
      
      console.log(x, y);
      setTargetingBoxCoords([x, y]);
      setShowBoxes(true);
    } else if (photo && showBoxes) {
      setShowBoxes(false);
    }
  }

  const dropdownBox = (showBoxes) ? <DropdownBox xCoord={targetingBoxCoords[0]} yCoord={targetingBoxCoords[1]} handleClick={dropdownSelect}></DropdownBox> : null;
  const targetingBox = (showBoxes) ? <TargetingBox xCoord={targetingBoxCoords[0]} yCoord={targetingBoxCoords[1]}></TargetingBox> : null;

  return (
    <PhotoContainer className="Photo">
      <Image src={image1}
             onClick={handleClick}>
      </Image>
      {dropdownBox}
      {targetingBox}  
      <CharacterFoundMarker xCoord={1275} yCoord={1370} isCharacterFound={charactersFound[0]}></CharacterFoundMarker>
    </PhotoContainer>
  );
}

export default Photo;
