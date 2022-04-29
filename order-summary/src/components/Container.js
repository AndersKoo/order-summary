import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return <ContainerStyle>Container{children}</ContainerStyle>;
}

const ContainerStyle = styled.div``;

export default Container;
