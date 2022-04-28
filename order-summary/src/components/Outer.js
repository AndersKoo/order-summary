import React from 'react';
import styled from 'styled-components';
function Outer() {
  return <OuterStyle></OuterStyle>;
}

const OuterStyle = styled.div`
  background-color: hsl(225, 100%, 94%);
`;

export default Outer;
