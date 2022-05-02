import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return (
    <ContainerStyle>
      <h3>Order Summary</h3>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      {children}
    </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  padding: 2px 16px;
  text-align: center;
  font-family: 'Epilogue', sans-serif;
  h3 {
    color: hsl(223, 47%, 23%);
  }
  p {
    padding: 0 2em;
    letter-spacing: 2px;
  }
`;

export default Container;
