import './App.css';
import Index from './pages/Index';
import { BrowserRouter as router, Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Iphone from './pages/Iphone';
import Macbook from './pages/Macbook';
import Watch from './pages/Watch';
import Airpods from './pages/Airpods';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/iphone' element={<Iphone />} />
          <Route path='/macbook' element={<Macbook />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/airpods' element={<Airpods />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
