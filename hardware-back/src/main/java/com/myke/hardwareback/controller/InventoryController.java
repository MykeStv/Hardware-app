package com.myke.hardwareback.controller;

import com.myke.hardwareback.model.Inventory;
import com.myke.hardwareback.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hardware")
public class InventoryController {
    @Autowired
    private InventoryService inventoryService;

    @GetMapping(path = "/inventory")
    private Flux<Inventory> getInventory() {
        return this.inventoryService.getInventory();
    }

    @GetMapping(path = "/inventory/{id}")
    private Mono<Inventory> getProductById(@PathVariable("id") String id) {
        return this.inventoryService.getProduct(id);
    }

    @PostMapping(path = "/inventory")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Inventory> saveProduct(@RequestBody Inventory product) {
        return this.inventoryService.saveProduct(product);
    }

    @PutMapping(path = "/inventory/{id}")
    private Mono<Inventory> updateProduct(@PathVariable("id") String id, @RequestBody Inventory product) {
        return this.inventoryService.updateProduct(id, product);
    }

    @PutMapping(path = "/inventory/{id}/inc/{quantity}")
    private Mono<Inventory> increaseStock(@PathVariable("id") String id, @PathVariable("quantity") Integer quantity){
        return this.inventoryService.increaseStock(id, quantity);
    }

    @PutMapping(path = "/inventory/{id}/sell/{quantity}")
    private Mono<Inventory> sellProduct(@PathVariable("id") String id, @PathVariable("quantity") Integer quantity){
        return this.inventoryService.sellProduct(id, quantity);
    }

    @DeleteMapping(path = "/inventory/{id}/delete")
    private Mono<Void> deleteProduct(@PathVariable("id") String id) {
        return this.inventoryService.deleteProduct(id);
    }
}
