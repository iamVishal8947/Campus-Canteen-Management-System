package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<Order> getPendingOrders() {
        return orderService.getOrdersByStatus(OrderStatus.PENDING);
    }

    @GetMapping("/fulfilled")
    public List<Order> getFulfilledOrders() {
        return orderService.getOrdersByStatus(OrderStatus.SERVED);
    }
}
