package com.app.repository;

import com.app.entities.Order;
import com.app.entities.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByOrderStatus(OrderStatus orderStatus);
   
    List<Order> findByStudentStudentId(Long studentId);
    
    Long countByOrderStatus(OrderStatus orderStatus);
}
