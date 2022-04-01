package com.myke.hardwareback.model;

public class ProductDTO {

    //ATTRIBUTES
    private String productName;
    private Double price;
    private Integer quantity;
    private Double totalProduct;

    //CONSTRUCTOR
    public ProductDTO(String productName, Double price, Integer quantity) {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.totalProduct = price * quantity;
    }

    //GETTER && SETTER
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Double getTotalProduct() {
        return totalProduct;
    }

    public void setTotalProduct(Double totalProduct) {
        this.totalProduct = totalProduct;
    }
}
