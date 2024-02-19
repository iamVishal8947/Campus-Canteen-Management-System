package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartDTO;
import com.app.dto.CartItem;
import com.app.dto.CreateOrderDTO;
import com.app.dto.OrderDTO;
import com.app.dto.PlaceOrderRequest;
import com.app.entities.Cart;
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
//	
//	@Override
//	 public CreateOrderDTO placeOrder(Long studentId, PlaceOrderRequest request) {
//	        
//	        Optional<Student> studentOptional = studRepo.findById(studentId);
//	        if (studentOptional.isEmpty()) {
//	            throw new ResourceNotFoundException("Student not found");
//	        }
//
//	        Student student = studentOptional.get();
//
//	       
//	        Order order = new Order();
//	        order.setStudent(student);
//	        order.setQty(request.calculateTotalQty());
//	        order.setAmount(request.calculateTotalAmount());
//	        order.setItemsServed(0);
//	        order.setOrderStatus(OrderStatus.PENDING);
//
//	       
//	        for (CartItem cartItem : request.getItems()) {
//	            CartDTO cart = new CartDTO();
//	            cart.setItemId(cartItem.getItemId());
//	            cart.setQtyOrdered(cartItem.getQtyOrdered());
//	            cart.setNetPrice(cartItem.calculateNetPrice());
//	            order.getCartList().add(mapper.map(cart, Cart.class));
//	        }
//
//	        // Save the order to the repository
//	        orderRepository.save(order);
//	        
//	        CreateOrderDTO orderdto = mapper.map(order, CreateOrderDTO.class); 
//	        // Convert the order entity to DTO and return
//	        return orderdto;
//	    }
	
	@Override
	public CreateOrderDTO placeOrder(Long studentId, PlaceOrderRequest request) {
	    Optional<Student> studentOptional = studRepo.findById(studentId);
	    if (studentOptional.isEmpty()) {
	        throw new ResourceNotFoundException("Student not found");
	    }

	    Student student = studentOptional.get();

	    Order order = new Order();
	    order.setStudent(student);
	    order.setIsServed(false);
	    order.setPaymentMethod("some_value");
	    order.setTransactionId("some_value");
	    order.setQty(request.calculateTotalQty());
	    order.setAmount(request.calculateTotalAmount());
	    order.setItemsServed(0);
	    order.setOrderStatus(OrderStatus.PENDING);

	    
	    order.setDiscountPercentage(0); 

	    for (CartItem cartItem : request.getItems()) {
	        CartDTO cart = new CartDTO();
	        cart.setItemId(cartItem.getItemId());
	        cart.setQtyOrdered(cartItem.getQtyOrdered());
	        cart.setNetPrice(cartItem.calculateNetPrice());
	        Cart cartEntity = mapper.map(cart, Cart.class);
	        cartEntity.setOrder(order);
	        order.getCartList().add(cartEntity);
	        
	    }

	   
	    orderRepository.save(order);

	    CreateOrderDTO orderdto = mapper.map(order, CreateOrderDTO.class);
	    
	    return orderdto;
	}

	
}
