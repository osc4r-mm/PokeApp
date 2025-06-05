import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonComputer from './components/PokemonComputer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonComputer />} />
      </Routes>
    </Router>
  );
}

export default App;