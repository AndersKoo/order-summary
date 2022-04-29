import React from 'react';
import styled from 'styled-components';
import TopImage from './TopImage';

function Card() {
  return (
    <CardStyle>
      <TopImage />
    </CardStyle>
  );
}

const CardStyle = styled.div``;

export default Card;
