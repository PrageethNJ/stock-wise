package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //indicates that this class is a REST controller
@RequestMapping("/api") //base URL for all product-related endpoints
public class ProductController {
    @Autowired //automatically injects the ProductService bean
    private ProductService service;

    //api routes
    @RequestMapping("")
    public String greet(){
        return "Hello world";
    }

    //endpoint for add new product
    @PostMapping("/product")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        Product savedProduct = service.addProduct(product);
        return ResponseEntity.ok(savedProduct);
    }
}
