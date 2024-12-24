import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form inputs
    if (!name || !description) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new product via API
    axios
      .post('http://localhost:8090/api/product', { name, brand, price, category, description })
      .then(() => {
        alert('Product created successfully!');
        navigate('/'); // Redirect to the product list page
      })
      .catch((err) => {
        console.error('Error creating product:', err);
        alert('An error occurred while creating the product.');
      });
  };

  return (
    <div className="container mt-5">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Product Brand
          </label>
          <input
            type="text"
            id="brand"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter brand name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Product Category
          </label>
          <input
            type="text"
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter product category"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
