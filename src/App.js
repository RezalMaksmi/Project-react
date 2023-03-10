
import Navigation from './components/Navigation';

import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Maincontent'
import Buy from './Pages/Buyproduct'
import Notfound from './Pages/Notfound'
import TambahProduct from './Pages/TambahProduct';



function App() {
  return (
    <div>
      <Router>
      <Navigation />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/tambah" element={<TambahProduct />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
      
      <Footer />
      </Router>
    </div>
    
  );
}

export default App;



