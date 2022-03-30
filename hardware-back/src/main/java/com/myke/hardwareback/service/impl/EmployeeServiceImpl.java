package com.myke.hardwareback.service.impl;

import com.myke.hardwareback.model.Employee;
import com.myke.hardwareback.repository.EmployeeRepository;
import com.myke.hardwareback.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Flux<Employee> getEmployees() {
        return this.employeeRepository.findAll();
    }

    @Override
    public Mono<Employee> getEmployee(String id) {
        return this.employeeRepository.findById(id);
    }

    @Override
    public Mono<Employee> saveEmployee(Employee employee) {
        return this.employeeRepository.save(employee);
    }

    @Override
    public Mono<Employee> updateEmployee(String id, Employee employee) {
        return this.employeeRepository.findById(id)
                .flatMap(item -> {
                    employee.setId(id);
                    return saveEmployee(employee);
                })
                .switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<Void> deleteEmployee(String id) {
        return this.employeeRepository.deleteById(id);
    }
}
