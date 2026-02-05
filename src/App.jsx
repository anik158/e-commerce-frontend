import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home';
import Header from "./components/layouts/Header.jsx";
import Product from "./components/products/Product.jsx";

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <main className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/:productId" element={<Product/>} />
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App