import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({ id: '', name: '', brand: '', price: '', category: '', quantity: '', description: '' }); // State to hold product data
  const navigate = useNavigate();

  // Fetch product details to populate the form
  useEffect(() => {
    axios
      .get(`http://localhost:8090/api/product/${id}`) // Adjust this if the backend endpoint differs
      .then((res) => setProduct(res.data)) // Populate state with the fetched product
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8090/api/product', product) // Send the full product object
      .then(() => {
        alert('Product updated successfully!');
        navigate('/'); // Redirect to product list
      })
      .catch((err) => {
        console.error('Error updating product:', err);
        alert('Failed to update the product.');
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Product Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="form-control"
            value={product.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price</label>
          <input
            type="text"
            id="price"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="categoory" className="form-label">Product Category</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Product Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-control"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
