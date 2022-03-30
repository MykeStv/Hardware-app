package com.myke.hardwareback.controller;

import com.myke.hardwareback.model.Invoice;
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


    @GetMapping(path = "/invoice")
    private Flux<Invoice> getInvoices() {
        return this.invoiceService.getInvoices();
    }

    @PostMapping(path = "/invoice")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Invoice> saveInvoice(@RequestBody Invoice invoice) {

        /*invoice.getProducts().stream()
                .map(p -> p.setTotalProduct(0.0))
                .findAny();*/

        return this.invoiceService.saveInvoice(invoice);
    }

}
