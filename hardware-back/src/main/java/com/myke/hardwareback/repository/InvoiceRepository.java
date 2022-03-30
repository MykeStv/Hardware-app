package com.myke.hardwareback.repository;

import com.myke.hardwareback.model.Invoice;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface InvoiceRepository extends ReactiveMongoRepository<Invoice, String> {
}
