// AdminController.java
package com.app.controller;

import com.app.dto.GetAllStudentDTO;
import com.app.dto.StudentDTO;
import com.app.entities.Student;
import com.app.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    private final StudentService studentService;

    @Autowired
    public AdminController(StudentService studentService) {
        this.studentService = studentService;
    }
    @PostMapping("/register/student")
    public ResponseEntity<String> registerStudent(@Valid @RequestBody StudentDTO studentDTO) {
        studentService.registerStudent(studentDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Student registered successfully");
    }
    

    @GetMapping("/students")
    public ResponseEntity<List<GetAllStudentDTO>> getAllStudents() {
        try {
            List<GetAllStudentDTO> students = studentService.getAllStudents();
            return ResponseEntity.ok(students);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    @GetMapping("/totalstudents")
    public ResponseEntity<Long> getTotalRegisteredStudents() {
        Long totalStudents = studentService.getTotalRegisteredStudents();
        return ResponseEntity.ok(totalStudents);
    }
    
    
}
