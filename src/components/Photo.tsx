import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import image1 from '../images/wheres-waldo-1.jpg'

const Image = styled.img`
`;

const Photo = () => {

  const handleClick = (e: MouseEvent) => {
    const photo: HTMLElement | null = document.querySelector('.Photo');

    if (photo) {
      const x = e.pageX - photo.offsetLeft;
      const y = e.pageY - photo.offsetTop;
      console.log(x, y);
    }
  }

  return (
    <div className="Photo">
        <Image src={image1}
               onClick={handleClick}>  
        </Image>
    </div>
  );
}

export default Photo;
