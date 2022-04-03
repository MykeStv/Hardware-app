package com.myke.hardwareback.service;

import com.myke.hardwareback.model.Inventory;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface InventoryService {

    Flux<Inventory> getInventory();

    Mono<Inventory> getProduct(String id);

    Flux<Inventory> getProductsBySection(String section);

    Mono<Inventory> saveProduct(Inventory inventory);

    Mono<Inventory> updateProduct(String id, Inventory inventory);

    Mono<Inventory> deleteProduct(String id);

    Mono<Inventory> increaseStock(String id, Integer quantity);

    Mono<Inventory> sellProduct(String id, Integer quantity);


}
