package com.app.service;

import java.util.List;

import com.app.dto.CreateOrderDTO;
import com.app.dto.OrderDTO;
import com.app.dto.PlaceOrderRequest;
import com.app.entities.Order;
import com.app.entities.OrderStatus;

public interface OrderService {
    List<OrderDTO> getOrdersByStatus(OrderStatus orderStatus);
    
    OrderDTO createOrder(OrderDTO dto);
    
    OrderDTO getOrderById(Long orderId);
    
    List<OrderDTO> getAllOrdersByStudentId(Long StudentId);
    
    Long getCountOfOrdersByStatus(OrderStatus orderStatus);
    
    CreateOrderDTO placeOrder(Long studentId, PlaceOrderRequest request);
    
    
    
}
