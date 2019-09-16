package io.albot.angular.eshopbackend.service;

import io.albot.angular.eshopbackend.model.Product;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    private List<Product> products;

    public ProductService() {
        this.products = new ArrayList<>();
        products.add(new Product(1,"boots", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, pariatur", 15, "http://placehold.it/700x400"));
        products.add(new Product(2,"shirt", "Lquasi reprehenderit totam. Dignissimos modi mollitia sequi suscipi", 10, "http://placehold.it/700x400"));
        products.add(new Product(3,"jeans", "Dignissimos illum ipsa iste libero modi nam, nemo placeat", 11, "http://placehold.it/700x400"));
        products.add(new Product(4,"coat", "Accusamus consectetur cupiditate eos expedita, placeat quidem", 9, "http://placehold.it/700x400"));
    }

    public List<Product> getProducts() {
        return products;
    }

    public Product getProduct(int id) {
        Product toReturn = null;
        for (Product product : products) {
            if (product.getId() == id) {
                toReturn = product;
            }
        }
        return toReturn;
    }

    public void updateImage(long id, String uri) {
        for (Product product : products) {
            if (product.getId() == id) {
                product.setImage(uri);
            }
        }
    }
}
