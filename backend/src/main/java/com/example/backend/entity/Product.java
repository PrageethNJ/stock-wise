package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String description;
    private String brand;
    private double price;
    private String category;
    private int quantity;

    /*
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy") //to rearrange date format
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    */

    //getters & setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    /*
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }*/

    /*
    @PrePersist
    private void onCreate(){
        setCreatedAt(new Date());
    }
    */

    //constructor
    public Product(){}

    public Product( int id, String name, String description, String brand, double price, String category, int quantity) {
        setId(id);
        setName(name);
        setDescription(description);
        setBrand(brand);
        setPrice(price);
        setCategory(category);
        setQuantity(quantity);
    }
}
