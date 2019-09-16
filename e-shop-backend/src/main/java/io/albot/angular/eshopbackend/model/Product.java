package io.albot.angular.eshopbackend.model;

public class Product {
    private long id;
    private String name;
    private String description;
    private float price;
    private String image;

    public Product(long id, String name, String description, float price, String image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public float getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
