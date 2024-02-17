// CustomerServiceImpl.java
package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CreateOrderDTO;
import com.app.dto.GetAllStudentDTO;
import com.app.dto.StudentDTO;
import com.app.entities.ItemDaily;
import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.entities.Student;
import com.app.repository.ItemDailyRepository;
import com.app.repository.ItemMasterRepository;
import com.app.repository.OrderRepository;
import com.app.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	private final StudentRepository studentRepository;
	private final ItemDailyRepository itemDailyRepository;
    private final OrderRepository orderRepository;
   
	
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	
	public StudentServiceImpl(StudentRepository studentRepository,ItemDailyRepository itemDailyRepository, OrderRepository orderRepository) {
        this.studentRepository=studentRepository;
		this.itemDailyRepository = itemDailyRepository;
        this.orderRepository = orderRepository;
    }

	@Override
	public void registerStudent(StudentDTO studentDTO) {
		if (studentExists(studentDTO.getStudentId())) {
			throw new RuntimeException("Student with this ID already exists.");
		}
		Student student = new Student();
		// Map DTO fields to entity
		student.setName(studentDTO.getName());
		student.setEmail(studentDTO.getEmail());
		student.setPassword(studentDTO.getPassword());
		student.setMobileNo(studentDTO.getMobileNo());
		student.setBalance(studentDTO.getBalance());
		student.setDob(studentDTO.getDob());
		student.setCourseName(studentDTO.getCourseName());
		studentRepository.save(student);
	}

	public boolean studentExists(Long studentId) {
		Optional<Student> existingStudent = studentRepository.findById(studentId);
		return existingStudent.isPresent();
	}
	
	@Override
    public List<GetAllStudentDTO> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .map(student -> modelMapper.map(student, GetAllStudentDTO.class))
                .collect(Collectors.toList());
    }
	
	 @Override
	    @Transactional
	    public Order createOrder(Long studentId, CreateOrderDTO orderDTO) {
	        // Retrieve item from ItemDaily
	        ItemDaily itemDaily = itemDailyRepository.findById(orderDTO.getItemId())
	                .orElseThrow(() -> new IllegalArgumentException("Item not found"));
		 	

	        // Retrieve student from Student
	        Student student = studentRepository.findById(studentId)
	                .orElseThrow(() -> new IllegalArgumentException("Student not found"));

	        // Check if quantity is available
	        if (itemDaily.getInitialQty() < orderDTO.getQuantity()) {
	            throw new IllegalArgumentException("Insufficient quantity available for the item");
	        }

	        // Create Order
	        Order order = new Order();
	        order.setStudent(student);
	        order.setTime(LocalDateTime.now());
	        order.setPaymentMethod("Online");
	        order.setAmount(orderDTO.getAmount());
	        order.setTransactionId(generateTransactionId());
	        order.setItemsServed(orderDTO.getQuantity());
	        order.setIsServed(false);
	        order.setDiscountPercentage(0);
	        order.setOrderStatus(OrderStatus.PENDING);

	        // Update ItemDaily sold quantity and save
	        itemDaily.setSoldQty(itemDaily.getSoldQty() + orderDTO.getQuantity());
	        itemDailyRepository.save(itemDaily);

	        // Save Order
	        return orderRepository.save(order);
	    }

	    // Method to generate a unique transaction id
	    private String generateTransactionId() {
	        // Using UUID to generate a random transaction id
	        return "TRANS-" + UUID.randomUUID().toString();
	    }
	
	}

	

