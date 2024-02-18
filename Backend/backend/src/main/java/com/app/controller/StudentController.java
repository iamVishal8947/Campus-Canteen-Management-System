// StudentController.java
package com.app.controller;

import java.time.LocalDate;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String dob) {
        boolean loginSuccess = studentService.login(email, dob);

        if (loginSuccess) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }
    
    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        // Assuming your StudentService has a logout method
        // This method can perform any necessary operations for logging out
        studentService.logout();
        return ResponseEntity.ok("Logout successful");
    }

    @GetMapping("/{studentId}/name")
    public ResponseEntity<String> getStudentNameById(@PathVariable Long studentId) {
        String studentName = studentService.getNameByStudentID(studentId);

        if (studentName != null) {
            return ResponseEntity.ok(studentName);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }
    
    @GetMapping("/{studentId}/email")
    public ResponseEntity<String> getStudentEmailById(@PathVariable Long studentId) {
        String studentEmail = studentService.getEmailByStudentID(studentId);

        if (studentEmail != null) {
            return ResponseEntity.ok(studentEmail);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }
    
    @GetMapping("/{studentId}/mobile")
    public ResponseEntity<String> getStudentMobileById(@PathVariable Long studentId) {
        String mobileNo = studentService.getMobileNoByStudentID(studentId);

        if (mobileNo != null) {
            return ResponseEntity.ok(mobileNo);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }
    
    @GetMapping("/{studentId}/dob")
    public ResponseEntity<?> getStudentDobById(@PathVariable Long studentId) {
       LocalDate dob = studentService.getDobByStudentID(studentId);

        if (dob != null) {
            return ResponseEntity.ok(dob);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }
    


}
