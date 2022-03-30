package com.myke.hardwareback.repository;

import com.myke.hardwareback.model.Inventory;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface InventoryRepository extends ReactiveMongoRepository<Inventory, String> {

    Flux<Inventory> findBySection(String section);

}
