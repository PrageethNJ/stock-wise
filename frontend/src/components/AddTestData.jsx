import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTestData() {
  const navigate = useNavigate();

  const addTestData = () => {
    // Sample test data with 20 products
    const testData = [
      { name: 'Smartphone', brand: 'TechCorp', price: 45000, category: 'Electronics', quantity: 10, description: 'Powerful smartphone with 6GB RAM.' },
      { name: 'Wireless Headphones', brand: 'SoundPro', price: 8000, category: 'Electronics', quantity: 15, description: 'Noise-cancelling headphones.' },
      { name: 'Laptop', brand: 'GigaTech', price: 120000, category: 'Electronics', quantity: 5, description: 'High-performance laptop for professionals.' },
      { name: 'Men\'s T-Shirt', brand: 'FashionBrand', price: 1500, category: 'Clothing', quantity: 25, description: 'Cotton T-shirt in various colors.' },
      { name: 'Women\'s Dress', brand: 'ElegantWear', price: 3500, category: 'Clothing', quantity: 12, description: 'Stylish dress for formal events.' },
      { name: 'Winter Jacket', brand: 'ColdGear', price: 7000, category: 'Clothing', quantity: 8, description: 'Warm jacket for cold seasons.' },
      { name: 'Rice Bag 5kg', brand: 'Fresh Harvest', price: 2500, category: 'Groceries', quantity: 50, description: 'High-quality rice for daily cooking.' },
      { name: 'Organic Vegetables', brand: 'GreenGrocers', price: 1200, category: 'Groceries', quantity: 40, description: 'Fresh organic veggies.' },
      { name: 'Milk 1L', brand: 'DairyBest', price: 300, category: 'Groceries', quantity: 60, description: 'Pure and fresh milk.' },
      { name: 'Office Chair', brand: 'ComfortSit', price: 12000, category: 'Furniture', quantity: 5, description: 'Ergonomic chair with adjustable features.' },
      { name: 'Dining Table', brand: 'HomeFurnish', price: 45000, category: 'Furniture', quantity: 2, description: 'Modern dining table for 6 people.' },
      { name: 'Bookshelf', brand: 'ReadWell', price: 8000, category: 'Furniture', quantity: 7, description: 'Sturdy bookshelf for storage.' },
      { name: 'Thriller Novel', brand: 'BookHub', price: 800, category: 'Books', quantity: 15, description: 'A gripping thriller that keeps you hooked.' },
      { name: 'Cookbook', brand: 'ChefWorld', price: 1200, category: 'Books', quantity: 10, description: 'A book with easy recipes.' },
      { name: 'Fantasy Series', brand: 'BookMania', price: 2000, category: 'Books', quantity: 20, description: 'An epic fantasy adventure.' },
      { name: 'Smartwatch', brand: 'TimeTech', price: 15000, category: 'Electronics', quantity: 8, description: 'Tracks fitness and notifications.' },
      { name: 'Bluetooth Speaker', brand: 'BassBoom', price: 5000, category: 'Electronics', quantity: 30, description: 'Portable speaker with great sound.' },
      { name: 'Yoga Mat', brand: 'FitLife', price: 1200, category: 'Clothing', quantity: 50, description: 'Comfortable mat for workouts.' },
      { name: 'Wall Clock', brand: 'TickTock', price: 1500, category: 'Furniture', quantity: 10, description: 'Stylish clock for your living room.' },
      { name: 'Daily Planner', brand: 'PlanIt', price: 700, category: 'Books', quantity: 25, description: 'A planner to organize your tasks.' },
    ];

    // Add each product to the database
    testData.forEach((product) => {
      axios
        .post('http://localhost:8090/api/product', product)
        .then(() => {
          console.log(`Product "${product.name}" added successfully!`);
        })
        .catch((err) => {
          console.error(`Error adding product "${product.name}":`, err);
        });
    });

    alert('20 test products added successfully!');
    navigate('/'); // Redirect to the product list page
  };

  return (
    <div className="container mt-5">
      <h2>Add Test Data</h2>
      <button className="btn btn-primary" onClick={addTestData}>
        Add Test Data
      </button>
    </div>
  );
}

export default AddTestData;
