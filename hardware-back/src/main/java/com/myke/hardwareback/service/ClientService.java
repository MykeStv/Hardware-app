package com.myke.hardwareback.service;

import com.myke.hardwareback.model.Client;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ClientService {

    Flux<Client> getClients();

    Mono<Client> getClient(String id);

    Mono<Client> saveClient(Client client);

    Mono<Client> updateClient(String id, Client client);

    Mono<Void> deleteClient(String id);

}
