package com.app.controller;

import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
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
