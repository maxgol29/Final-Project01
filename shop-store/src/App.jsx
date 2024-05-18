import './index.css'
import  {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';
import {About, Contact, Headphones, HelpCenter, Home, Login, Mobile, Product, ShopAll, Signup, WithoutCatalog} from './pages/pages'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/helpCenter" element={<HelpCenter />} />
            <Route path="/shopAll" element={<ShopAll />} />
            <Route path="/audio" element={<Headphones />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/item/:id" element={<Product />} />
            <Route path="/videoRegret" element={<WithoutCatalog />} />
          </Routes> 
      </Router>
    </>
  )
}

export default App
