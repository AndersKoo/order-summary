import React from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import MusicImage from '../images/illustration-hero.svg';
import PaymentPlan from './PaymentPlan';

function Card() {
  return (
    <CardStyle>
      <img className="topimage" src={MusicImage} alt="" />
      <TextContent />
      <PaymentPlan />
    </CardStyle>
  );
}

const CardStyle = styled.div`
  padding: 2em 2em;
  width: 40%;
  border: 2px solid black;

  .topimage {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
  }
`;

export default Card;
