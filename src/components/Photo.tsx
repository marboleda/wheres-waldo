import React from 'react';
import styled from 'styled-components';

import image1 from '../images/wheres-waldo-1.jpg'

const Image = styled.img`
`;

const Photo = () => {
  return (
    <div className="Photo">
        <Image src={image1}></Image>
    </div>
  );
}

export default Photo;
