import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import Outer from './components/Outer';

function App() {
  return (
    <Outer>
      <Container>
        <Card />
      </Container>
    </Outer>
  );
}

export default App;
