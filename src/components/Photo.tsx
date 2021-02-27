import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import TargetingBox from './TargetingBox';
import DropdownBox from './DropdownBox';

import image1 from '../images/wheres-waldo-1.jpg'

const PhotoContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
`;

interface PhotoProps {
  dropdownSelect: (character: string, x: number, y: number) => void;
}

const Photo: React.FC<PhotoProps> = (props) => {

  const { dropdownSelect } = props;

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
    </PhotoContainer>
  );
}

export default Photo;
