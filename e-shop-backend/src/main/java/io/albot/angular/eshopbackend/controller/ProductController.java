package io.albot.angular.eshopbackend.controller;

import io.albot.angular.eshopbackend.image.FileResponse;
import io.albot.angular.eshopbackend.image.StorageService;
import io.albot.angular.eshopbackend.model.Product;
import io.albot.angular.eshopbackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;

@RestController
@CrossOrigin
public class ProductController {
    private ProductService productService;
    private StorageService storageService;

    @Autowired
    public ProductController(ProductService productService, StorageService storageService) {
        this.productService = productService;
        this.storageService = storageService;
    }

    @GetMapping("product/all")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("product/{id}")
    public Product getProduct(@PathVariable int id) {
        return productService.getProduct(id);
    }

    @PostMapping("product/image")
    public FileResponse saveImage(@RequestParam("file") MultipartFile file, @RequestParam long id) {
        String name = storageService.store(file);

        String uri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/product/download/")
                .path(name)
                .toUriString();

        productService.updateImage(id, uri);

        return new FileResponse(name, uri, file.getContentType(), file.getSize());
    }

    @GetMapping("product/download/{fileName}")
    public Resource getImage(@PathVariable String fileName) {
        try {
            return storageService.loadAsResource(fileName);
        } catch (FileNotFoundException e) {
            System.out.println("no file");
        }
        return null;
    }
}
