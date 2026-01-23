import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home';
import Header from "./components/layouts/Header.jsx";

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <main className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* অন্যান্য রুট যোগ করুন */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
