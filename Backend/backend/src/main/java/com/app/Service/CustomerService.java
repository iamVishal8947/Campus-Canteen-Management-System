package com.app.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repository.OrderRepository;
import com.app.entities.Order;

@Service
public class CustomerService {
	@Autowired
	private OrderRepository orderRepo;
	
	public Order placeOrder(Order order) {
		return orderRepo.save(order);
	}

}
