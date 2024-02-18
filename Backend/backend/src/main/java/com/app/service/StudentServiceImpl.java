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
import com.app.dto.ItemMasterDTO;
import com.app.dto.SignInDTO;
import com.app.dto.StudentDTO;
import com.app.dto.UpdatePasswordDTO;
import com.app.entities.ItemMaster;
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
	public String login(SignInDTO dto) {
	    String userName = dto.getUserName();
	    String password = dto.getPassword();

	  
	    Optional<Student> studentOptional = studentRepository.findByEmail(userName);

	    if (studentOptional.isPresent()) {
	        Student student = studentOptional.get();

	   
	        if (password.equals(student.getPassword())) {
	            if (password.equals(student.getDob().toString())) {
	                return "Login successful1";
	            } else {
	                return "Login successful1 successful2";
	            }    
	        } else {
	        
	            return "Invalid password";
	        	}
        }else {
        	return "Invalid username";
        }
	 } 
	
	@Override
	public String changePassword(Long id,UpdatePasswordDTO dto) {
		String oldPassword = dto.getOldPassword();
	    String newPassword = dto.getNewPassword();
		
		 Optional<Student> studentOptional = studentRepository.findById(id);
		 
		 if (studentOptional.isPresent()) {
			 	Student student = studentOptional.get();
			 	if (oldPassword.equals(student.getPassword())) {
		            student.setPassword(newPassword);
		            studentRepository.save(student);
		            return "ok";
			 	}else {
			 		return "Invalid old password";
			 	}
	    } else {
	        return "Invalid student id";
	    }
	}

	@Override
	public StudentDTO getStudentByEmail(String email) {
		Optional<Student> studentOptional = studentRepository.findByEmail(email);

	    if (studentOptional.isPresent()) {
	        Student student = studentOptional.get();
	        StudentDTO studDto = modelMapper.map(student,StudentDTO.class);
	        return studDto;
	    }
	        
	        
		return null;
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

	@Override
	public Long getTotalRegisteredStudents() {
        return studentRepository.count();
    }

	@Override
	public StudentDTO getStudentDetails(Long studentId) {
		
		return modelMapper.map(
				studentRepository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id !!!!")),
				StudentDTO.class);
	}

	@Override
	public ApiResponse deleteStudentDetails(Long studentId) {
		Student student = studentRepository.findById(studentId).orElseThrow(()-> new ResourceNotFoundException("Student not found"));
		studentRepository.delete(student);
		return new ApiResponse("Student Details of student with ID " + student.getStudentId() + " deleted....");
	}

	@Override
	public StudentDTO updateStudent(Long studentId, StudentDTO dto) {
		Student student = studentRepository.findById(studentId).orElseThrow(()-> new ResourceNotFoundException("Student not found"));
		student.setName(dto.getName());
		student.setEmail(dto.getEmail());
		student.setMobileNo(dto.getMobileNo());
		student.setBalance(dto.getBalance());
		student.setDob(dto.getDob());
		student.setCourseName(dto.getCourseName());
		return modelMapper.map(student, StudentDTO.class);
	}
	
	
}

	

