package com.myke.hardwareback.controller;

import com.myke.hardwareback.model.Invoice;
import com.myke.hardwareback.service.InventoryService;
import com.myke.hardwareback.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hardware")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;
    @Autowired
    private InventoryService inventoryService;


    @GetMapping(path = "/invoice")
    private Flux<Invoice> getInvoices() {
        return this.invoiceService.getInvoices();
    }

    @GetMapping(path = "/invoice/{id}")
    private Mono<Invoice> getInvoiceById(@PathVariable("id") String id) {
        return this.invoiceService.getInvoiceById(id);
    }

    @PostMapping(path = "/invoice")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Invoice> saveInvoice(@RequestBody Invoice invoice) {

        invoice.getProducts().stream()
                .forEach(p ->  invoice.setTotal(invoice.getTotal() + p.getTotalProduct()));

        return this.invoiceService.saveInvoice(invoice);

    }

    @DeleteMapping(path = "/invoice/{id}/delete")
    private Mono<Void> deleteInvoice(@PathVariable("id") String id) {
        return this.invoiceService.deleteInvoice(id);
    }

}
