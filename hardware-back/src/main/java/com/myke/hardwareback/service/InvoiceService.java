package com.myke.hardwareback.service;

import com.myke.hardwareback.model.Invoice;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface InvoiceService {

    Flux<Invoice> getInvoices();

    Mono<Invoice> getInvoiceById(String id);

    Mono<Invoice> saveInvoice(Invoice invoice);

    Mono<Invoice> updateInvoice(String id, Invoice invoice);

    Mono<Void> deleteInvoice(String id);
}
