
import './App.scss';
import Home from './pages/home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/song" element={<Home type="song" />} />
    <Route path="/album" element={<Home type="album" />} />
    <Route path="*" element={<Home />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
