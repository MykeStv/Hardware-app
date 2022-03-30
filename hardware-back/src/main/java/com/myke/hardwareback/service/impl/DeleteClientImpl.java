package com.myke.hardwareback.service.impl;

import com.myke.hardwareback.model.Client;
import com.myke.hardwareback.repository.ClientRepository;
import com.myke.hardwareback.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class DeleteClientImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Flux<Client> getClients() {
        return this.clientRepository.findAll();
    }

    @Override
    public Mono<Client> getClient(String id) {
        return this.clientRepository.findById(id);
    }

    @Override
    public Mono<Client> saveClient(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public Mono<Client> updateClient(String id, Client client) {
        return this.clientRepository.findById(id)
                .flatMap(item -> {
                    client.setId(id);
                    return saveClient(client);
                })
                .switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<Void> deleteClient(String id) {
        return this.clientRepository.deleteById(id);
    }
}
