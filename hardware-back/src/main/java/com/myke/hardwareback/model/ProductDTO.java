package com.myke.hardwareback.model;

public class ProductDTO {

    //ATTRIBUTES
    private String product;
    private Double price;
    private Integer quantity;
    private Double totalProduct;

    //CONSTRUCTOR
    public ProductDTO(String product, Double price, Integer quantity) {
        this.product = product;
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

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public Double getTotalProduct() {
        return totalProduct;
    }

    public void setTotalProduct(Double totalProduct) {
        this.totalProduct = totalProduct;
    }
}
