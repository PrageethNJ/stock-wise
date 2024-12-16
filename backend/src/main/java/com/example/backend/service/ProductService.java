package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service //indicates that this class is a service component in the Spring context
public class ProductService {
    @Autowired //automatically injects the ProductRepository bean
    private ProductRepository repo;

    //saves a new product record to the database
    public Product addProduct(Product product) {
        return repo.save(product);
    }
}
