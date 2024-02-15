// CustomerServiceImpl.java
package com.app.service;

import com.app.dto.StudentDTO;
import com.app.entities.Student;
import com.app.repository.StudentRepository;
import com.app.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void registerStudent(StudentDTO studentDTO) {
        if (studentExists(studentDTO.getCustomerId())) {
            throw new RuntimeException("Customer with this ID already exists.");
        }
        Student student = new Student();
        // Map DTO fields to entity
        student.setName(studentDTO.getName());
        student.setEmail(studentDTO.getEmail());
        student.setPassword(studentDTO.getPwd());
        student.setMobileNo(studentDTO.getMob());
        student.setBalance(studentDTO.getBalance());
        student.setDob(studentDTO.getDob());
        student.setCourseName(studentDTO.getCourse());
        studentRepository.save(student);
    }

    private boolean studentExists(Long studentId) {
        Optional<Student> existingStudent = studentRepository.findById(studentId);
        return existingStudent.isPresent();
    }
}
