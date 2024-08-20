import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EightyPx from "./components/EightyPx"
import Footer from "./components/Footer";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/detail/Detail";
import Confirm from "./pages/confirm/Confirm";
import Success from "./pages/success/Success";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { ShopContextProvider } from "./context/shop-context";
import License from "./pages/license/License";
import Career from './pages/career/Career'
import Support from './pages/support/Support'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <EightyPx />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/career" element={<Career />} />
            <Route path="/license" element={<License />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
