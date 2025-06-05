import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonComputer from './components/PokemonComputer';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonComputer />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;