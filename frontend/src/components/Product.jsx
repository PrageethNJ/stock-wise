import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get('http://localhost:8090/api/product')
      .then((res) => setProducts(res.data)) // Set the response data to the state
      .catch((err) => console.error('Error fetching products:', err)); // Log errors if any
  }, []);

  // Function to delete a product
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/product/${id}`) // Send DELETE request with product ID
      .then(() => {
        // Remove the deleted product from the state
        setProducts(products.filter((product) => product.id !== id));
        alert('Product deleted successfully!');
      })
      .catch((err) => {
        console.error('Error deleting product:', err);
        alert('Failed to delete product.');
      });
  };

  return (
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success mb-3">
        Create New Product
      </Link>
      <h1 className="mb-4">Product List</h1>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
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
                <td>{product.description}</td>
                <td>
                  <Link to={`/update/${product.id}`} className="btn btn-info btn-sm me-2">
                    Update
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)} // Call handleDelete with the product ID
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
