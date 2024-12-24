import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import NavBar from './components/NavBar';
import AddTestData from './components/AddTestData';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/addtestdata" element={<AddTestData/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
