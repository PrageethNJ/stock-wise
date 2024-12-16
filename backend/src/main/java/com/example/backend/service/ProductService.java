package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service //indicates that this class is a service component in the Spring context
public class ProductService {
    @Autowired //automatically injects the ProductRepository bean
    private ProductRepository repo;

    //saves a new product record to the database
    public Product addProduct(Product product) {
        return repo.save(product);
    }

    //fetches all products from the database
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    //fetch a product by their id; returns null if not found
    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }

    //updates an existing record
    public Product updateProduct(Product product) {
        return repo.save(product);
    }

    //deletes a product record by id
    public void deleteProductById(int id) {
        repo.deleteById(id);
    }

}
