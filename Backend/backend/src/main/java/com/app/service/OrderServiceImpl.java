package com.app.service;

import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> getOrdersByStatus(OrderStatus orderStatus) {
        return orderRepository.findByOrderStatus(orderStatus);
    }
}
