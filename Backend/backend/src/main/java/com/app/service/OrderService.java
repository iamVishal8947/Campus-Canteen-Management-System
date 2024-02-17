package com.app.service;

import java.util.List;

import com.app.dto.OrderDTO;
import com.app.entities.Order;
import com.app.entities.OrderStatus;

public interface OrderService {
    List<OrderDTO> getOrdersByStatus(OrderStatus orderStatus);
    
    OrderDTO createOrder(OrderDTO dto);
}
