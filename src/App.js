import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
