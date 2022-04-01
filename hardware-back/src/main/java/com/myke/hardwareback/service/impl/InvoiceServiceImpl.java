package com.myke.hardwareback.service.impl;

import com.myke.hardwareback.model.Invoice;
import com.myke.hardwareback.repository.InventoryRepository;
import com.myke.hardwareback.repository.InvoiceRepository;
import com.myke.hardwareback.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;


    @Override
    public Flux<Invoice> getInvoices() {
        return this.invoiceRepository.findAll();
    }

    @Override
    public Mono<Invoice> getInvoiceById(String id) {
        return this.invoiceRepository.findById(id);
    }

    @Override
    public Mono<Invoice> saveInvoice(Invoice invoice) {
        return this.invoiceRepository.save(invoice);
    }

    @Override
    public Mono<Invoice> updateInvoice(String id, Invoice invoice) {
        return this.invoiceRepository.findById(id)
                .flatMap(item -> {
                    invoice.setId(id);
                    return saveInvoice(invoice);
                })
                .switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<Void> deleteInvoice(String id) {
        return this.invoiceRepository.deleteById(id);
    }
}
