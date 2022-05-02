import './App.css';
import Card from './components/Card';
import styled from 'styled-components';

function App() {
  return (
    <Background>
      <Card />
    </Background>
  );
}

const Background = styled.div`
  background-color: aliceblue;
`;

export default App;
