// StudentController.java
package com.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    
    @GetMapping("/{studentId}/balance")
    public ResponseEntity<Integer> getBalanceById(@PathVariable Long studentId) {
        int balance = studentService.getBalanceById(studentId);
        return ResponseEntity.ok().body(balance);
    }
    
    @PutMapping("/{studentId}/balance")
    public ResponseEntity<?> setBalanceById(@PathVariable Long studentId, @RequestBody Map<String, Integer> requestBody) {
        Integer newBalance = requestBody.get("value");
        System.out.println("in set balance " + newBalance);
        return ResponseEntity.ok().body(studentService.setBalanceById(studentId, newBalance));
    }

}
