package com.myke.hardwareback.service.impl;

import com.myke.hardwareback.model.Inventory;
import com.myke.hardwareback.repository.InventoryRepository;
import com.myke.hardwareback.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Override
    public Flux<Inventory> getInventory() {
        return this.inventoryRepository.findAll();
    }

    @Override
    public Mono<Inventory> getProduct(String id) {
        return this.inventoryRepository.findById(id);
    }

    @Override
    public Flux<Inventory> getProductsBySection(String section) {
        return this.inventoryRepository.findBySection(section);
    }

    @Override
    public Mono<Inventory> saveProduct(Inventory inventory) {
        return this.inventoryRepository.save(inventory);
    }

    @Override
    public Mono<Inventory> updateProduct(String id, Inventory inventory) {
        return this.inventoryRepository.findById(id)
                .flatMap(product -> {
                    inventory.setId(id);
                    return saveProduct(inventory);
                })
                .switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<Void> deleteProduct(String id) {
        return this.inventoryRepository.deleteById(id);
    }
}
