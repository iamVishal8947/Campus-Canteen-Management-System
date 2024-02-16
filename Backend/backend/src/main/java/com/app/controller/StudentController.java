// StudentController.java
package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CreateOrderDTO;
import com.app.dto.StudentDTO;
import com.app.entities.Order;
import com.app.service.StudentService;

@RequestMapping(path="/student")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerStudent(@Valid @RequestBody StudentDTO studentDTO) {
        studentService.registerStudent(studentDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Student registered successfully");
    }
    
    @PostMapping("/{studentId}/orders")
    public ResponseEntity<Order> createOrder(@PathVariable Long studentId, @Valid @RequestBody CreateOrderDTO orderDTO) {
        try {
            Order order = studentService.createOrder(studentId, orderDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(order);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
