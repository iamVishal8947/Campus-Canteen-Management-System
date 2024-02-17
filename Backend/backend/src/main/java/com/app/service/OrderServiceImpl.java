package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.OrderDTO;
import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.entities.Student;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.OrderRepository;
import com.app.repository.StudentRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
	private StudentRepository studRepo;
    
    @Autowired
	private ModelMapper mapper;

    @Override
    public List<Order> getOrdersByStatus(OrderStatus orderStatus) {
        return orderRepository.findByOrderStatus(orderStatus);
    }

	@Override
	public OrderDTO createOrder(OrderDTO dto) {
		Student stud = studRepo.findById(dto.getStudentId()).
				orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id!!!"));
		Order order = mapper.map(dto, Order.class);
		stud.addOrder(order);
		Order savedOrder = orderRepository.save(order);
		System.out.println("order id " + order.getOrderId() + " " + savedOrder.getOrderId());
		return mapper.map(savedOrder, OrderDTO.class);
		
	}
}
