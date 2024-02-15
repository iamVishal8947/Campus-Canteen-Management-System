package com.app.service;

import com.app.entities.Order;
import com.app.entities.OrderStatus;

import java.util.List;

public interface OrderService {
    List<Order> getOrdersByStatus(OrderStatus orderStatus);
}
