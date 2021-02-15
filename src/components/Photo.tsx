import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import TargetingBox from './TargetingBox';

import image1 from '../images/wheres-waldo-1.jpg'

const PhotoContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
`;

const Photo = () => {
  const [targetingBoxCoords, setTargetingBoxCoords] = useState([-1, -1]);

  const handleClick = (e: MouseEvent) => {
    const photo: HTMLElement | null = document.querySelector('.Photo');

    if (photo) {
      const x = e.pageX - photo.offsetLeft;
      const y = e.pageY - photo.offsetTop;
      
      setTargetingBoxCoords([x, y]);
    }
  }

  return (
    <PhotoContainer className="Photo">
        <Image src={image1}
               onClick={handleClick}>
        </Image>
        {(targetingBoxCoords[0] !== -1 && targetingBoxCoords[1] !== -1) ?
              <TargetingBox xCoord={targetingBoxCoords[0]} 
                            yCoord={targetingBoxCoords[1]}>
              </TargetingBox> :
              null
        }  
    </PhotoContainer>
  );
}

export default Photo;
