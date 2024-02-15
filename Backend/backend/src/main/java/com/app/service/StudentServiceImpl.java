// CustomerServiceImpl.java
package com.app.service;

import com.app.dto.StudentDTO;
import com.app.dto.GetAllStudentDTO;
import com.app.entities.Student;
import com.app.repository.StudentRepository;
import com.app.service.StudentService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

	private final StudentRepository studentRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	public StudentServiceImpl(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
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

	
}
