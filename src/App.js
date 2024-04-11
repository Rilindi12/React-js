// import './App.css';
// import Header from './Header/header.js';
// import CoreConcepts from './CoreConcepts/CoreConcepts.js';
// import FooterData from './Footer/footerData.js';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Layout from "./Layout/Layout.js";
import Home from "./Home/Home.js";
import Products from "./Products/Products.js";
import Contact from './Contact/Contact.js';
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="products" element={<Products/>} />
              <Route path="Contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
