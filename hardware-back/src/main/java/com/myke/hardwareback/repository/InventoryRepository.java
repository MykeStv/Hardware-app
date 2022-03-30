package com.myke.hardwareback.repository;

import com.myke.hardwareback.model.Inventory;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface InventoryRepository extends ReactiveMongoRepository<Inventory, String> {
}
