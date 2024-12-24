import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all products initially
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('http://localhost:8090/api/product')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  };

  // Handle search input
  const handleSearch = (value) => {
    setSearchTerm(value); // Update search term in state
    if (value.trim() === '') {
      // If search input is empty, fetch all products
      fetchProducts();
      return;
    }

    setLoading(true);
    axios
      .get(`http://localhost:8090/api/product/search?keyword=${value}`)
      .then((res) => {
        setProducts(res.data); // Set the search results
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error searching products:', err);
        setLoading(false);
      });
  };

  // Function to delete a product
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios
        .delete(`http://localhost:8090/api/product/${id}`)
        .then(() => {
          setProducts(products.filter((product) => product.id !== id));
          alert('Product deleted successfully!');
        })
        .catch((err) => {
          console.error('Error deleting product:', err);
          alert('Failed to delete product.');
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/create" className="btn btn-success">
          Create New Product
        </Link>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)} // Call handleSearch on input change
        />
      </div>
      <h1 className="mb-4">Product List</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price (Rs.)</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.description}</td>
                  <td>
                    <Link to={`/update/${product.id}`} className="btn btn-info btn-sm me-2">
                      Update
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Product;
