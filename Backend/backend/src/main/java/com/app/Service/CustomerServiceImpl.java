// CustomerServiceImpl.java
package com.app.service;

import com.app.dto.CustomerDTO;
import com.app.entities.Customer;
import com.app.repository.CustomerRepository;
import com.app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public void registerCustomer(CustomerDTO customerDTO) {
        if (customerExists(customerDTO.getCustomerId())) {
            throw new RuntimeException("Customer with this ID already exists.");
        }
        Customer customer = new Customer();
        // Map DTO fields to entity
        customer.setName(customerDTO.getName());
        customer.setEmail(customerDTO.getEmail());
        customer.setPassword(customerDTO.getPassword());
        customer.setMobileNo(customerDTO.getMobileNo());
        customer.setBalance(customerDTO.getBalance());
        customer.setDob(customerDTO.getDob());
        customer.setCourseName(customerDTO.getCourseName());
        customerRepository.save(customer);
    }

    private boolean customerExists(Long customerId) {
        Optional<Customer> existingCustomer = customerRepository.findById(customerId);
        return existingCustomer.isPresent();
    }
}
