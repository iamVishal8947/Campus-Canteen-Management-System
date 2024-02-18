// CustomerServiceImpl.java
package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.GetAllStudentDTO;
import com.app.dto.StudentDTO;
import com.app.entities.Student;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.ItemDailyRepository;
import com.app.repository.OrderRepository;
import com.app.repository.StudentRepository;

@Service
@Transactional
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
	public int getBalanceById(Long studentId) {
        Optional<Student> studentOptional = studentRepository.findById(studentId);

        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            return student.getBalance();
        } else {
            // Handle not found scenario, throw exception or return default value
            throw new ResourceNotFoundException("Student not found with ID: " + studentId);
        }
    }
	
	@Override
	public ApiResponse setBalanceById(Long studentId, Integer newBalance) {
        Optional<Student> studentOptional = studentRepository.findById(studentId);

        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            student.setBalance(newBalance);
            studentRepository.save(student);
            return new ApiResponse("Balance is updated for id " + student.getStudentId());
        } else {
            // Handle not found scenario, throw exception or return default value
            throw new ResourceNotFoundException("Student not found with ID: " + studentId);
        }
    }
	
	@Override
	public boolean login(String email, String dob) {
        Student student = studentRepository.findByEmailAndDob(email, LocalDate.parse(dob));

        if (student != null) {
            return true;
        } else {
            return false;
        }
    }
	
	
	@Override
	public ApiResponse logout() {
		
		return new ApiResponse("Student logged out successfully");
        
    }

	@Override
	public String getEmailByStudentID(Long studId) {
		Student student = studentRepository.findById(studId)
	            .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + studId));

	    return student.getEmail();
	}

	@Override
	public String getNameByStudentID(Long studId) {
		Student student = studentRepository.findById(studId)
	            .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + studId));

	    return student.getName();
	}

	@Override
	public LocalDate getDobByStudentID(Long studId) {
		Student student = studentRepository.findById(studId)
	            .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + studId));

	    return student.getDob();
	}
		

	@Override
	public String getMobileNoByStudentID(Long studId) {
		Student student = studentRepository.findById(studId)
	            .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + studId));

	    return student.getMobileNo();
	}

}

	

