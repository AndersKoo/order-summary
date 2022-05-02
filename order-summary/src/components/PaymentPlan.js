import React from 'react';
import styled from 'styled-components';
import MusicIcon from '../images/icon-music.svg';

function PaymentPlan() {
  return (
    <PaymentPlanStyle>
      <img className="musicicon" src={MusicIcon} alt="" />
      <div className="annual">
        Annual Plan
        <div className="pricepryear">$59.99/year</div>
      </div>
      <button className="changebutton">Change</button>
    </PaymentPlanStyle>
  );
}

const PaymentPlanStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default PaymentPlan;
