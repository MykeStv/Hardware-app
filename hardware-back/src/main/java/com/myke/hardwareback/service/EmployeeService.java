package com.myke.hardwareback.service;

import com.myke.hardwareback.model.Employee;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface EmployeeService {

    Flux<Employee> getEmployees();

    Mono<Employee> getEmployee(String id);

    Mono<Employee> saveEmployee(Employee employee);

    Mono<Employee> updateEmployee(String id, Employee employee);

    Mono<Void> deleteEmployee(String id);

}
