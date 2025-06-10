import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComputerPage from './components/ComputerPage';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComputerPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;