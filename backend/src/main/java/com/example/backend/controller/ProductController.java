package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //indicates that this class is a REST controller
@CrossOrigin //to give access to react frontend to fetch data to solve cross-origin resource sharing error
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

    //endpoint to get all products
    @GetMapping("/product")
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }

    //endpoint to get a product by id
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id){
        Product product = service.getProductById(id);
        if(product != null)
            return new ResponseEntity<>(service.getProductById(id), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    //endpoint to update an existing student
    @PutMapping("/product")
    public ResponseEntity<Product> updateStudent(@RequestBody Product product) {
        Product updatedProduct = service.updateProduct(product);
        if(product != null)
            return ResponseEntity.ok(updatedProduct); // Returns the updated product
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //endpoint to delete a product by id
    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProductById(@PathVariable int id){
        Product product = service.getProductById(id);
        if(product != null) {
            service.deleteProductById(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
            //return ResponseEntity.accepted().build(); // Returns 202 No Content
            //return ResponseEntity.noContent().build(); // Returns 204 No Content
        }
        else{
            return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
        }
    }

    //endpoint to search product by
    @GetMapping("/product/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword){
        System.out.println("searching with " + keyword);
        List<Product> products = service.searchProducts(keyword);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
