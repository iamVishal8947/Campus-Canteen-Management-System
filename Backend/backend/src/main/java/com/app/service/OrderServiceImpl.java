package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

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
    public List<OrderDTO> getOrdersByStatus(OrderStatus orderStatus) {
        return orderRepository.findByOrderStatus(orderStatus)
                .stream()
                .map(order -> {
                    OrderDTO orderDTO = mapper.map(order, OrderDTO.class);
                    if (order.getStudent() != null) {
                        // Set Student information in OrderDTO
                        orderDTO.setStudentId(order.getStudent().getStudentId());
                        orderDTO.setStudentName(order.getStudent().getName());
              
                    }
                    return orderDTO;
                })
                .collect(Collectors.toList());
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

	@Override
	public OrderDTO getOrderById(Long orderId) {
	    Order order = orderRepository.findById(orderId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Order Id !!!!"));

	    OrderDTO orderDTO = mapper.map(order, OrderDTO.class);

	    if (order.getStudent() != null) {
	        // Set Student information in OrderDTO
	        orderDTO.setStudentId(order.getStudent().getStudentId());
	        orderDTO.setStudentName(order.getStudent().getName());
	        // Add other student information as needed
	    }

	    return orderDTO;
	}


	@Override
	public List<OrderDTO> getAllOrdersByStudentId(Long studentId) {
	    List<Order> orderList = orderRepository.findByStudentStudentId(studentId);
	    return orderList.stream().map(order -> {
	        OrderDTO orderDTO = mapper.map(order, OrderDTO.class);

	        if (order.getStudent() != null) {
	            // Set Student information in OrderDTO
	            orderDTO.setStudentId(order.getStudent().getStudentId());
	            orderDTO.setStudentName(order.getStudent().getName());
	            // Add other student information as needed
	        }

	        return orderDTO;
	    }).collect(Collectors.toList());
	}

	@Override
	public Long getCountOfOrdersByStatus(OrderStatus orderStatus) {
        return orderRepository.countByOrderStatus(orderStatus);
    }
	
	
}
