import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const [name, setName] = useState('');
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
      .post('http://localhost:8090/api/product', { name, description })
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
