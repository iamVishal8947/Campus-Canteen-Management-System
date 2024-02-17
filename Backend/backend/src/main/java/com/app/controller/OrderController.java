package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderDTO;
import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.service.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/pending")
    public ResponseEntity<?> getPendingOrders() {
        return ResponseEntity.ok().body(orderService.getOrdersByStatus(OrderStatus.PENDING));
    }

    @GetMapping("/served")
    public ResponseEntity<?> getFulfilledOrders() {
    	return ResponseEntity.ok().body(orderService.getOrdersByStatus(OrderStatus.SERVED));
    }
    
    @PostMapping
	public ResponseEntity<?> createNewOrder(@RequestBody @Valid OrderDTO dto) {
		System.out.println("in create order " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(orderService.createOrder(dto));
	}
}
