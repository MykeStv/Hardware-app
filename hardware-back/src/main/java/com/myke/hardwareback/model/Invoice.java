package com.myke.hardwareback.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Document(collection = "invoice")
public class Invoice {

    //ATTRIBUTES
    @Id
    private String id = UUID.randomUUID().toString().substring(0,10);
    private LocalDate date = LocalDate.now();
    //private LocalTime hour;
    private String employee;
    private Client client;
    private List<ProductDTO> products;
    private Double total;

    //CONSTRUCTOR


    /*public Invoice(String employee, Client client, List<ProductDTO> products) {
        this.id = UUID.randomUUID().toString().substring(0,10);
        this.date = LocalDate.now();
        this.employee = employee;
        this.client = client;
        this.products = products;
        //this.total = products.;
    }*/

    //GETTER && SETTER
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getEmployee() {
        return employee;
    }

    public void setEmployee(String employee) {
        this.employee = employee;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public List<ProductDTO> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDTO> products) {
        this.products = products;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
