// StudentController.java
package com.app.controller;

import java.time.LocalDate;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ItemMasterDTO;
import com.app.dto.SignInDTO;
import com.app.dto.StudentDTO;
import com.app.dto.UpdatePasswordDTO;
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
    public ResponseEntity<String> login(@RequestBody SignInDTO dto) {
        String mesg = studentService.login(dto);
            return ResponseEntity.ok().body(mesg);
     }
    
    @PutMapping("/changepassword/{studId}")
    public ResponseEntity<String> changePassword(@PathVariable Long studId,@RequestBody UpdatePasswordDTO dto) {
        String result = studentService.changePassword(studId,dto);
        return ResponseEntity.ok().body(result);
    }
    
    
    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
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
    
    @GetMapping("/email/{email}")
    public ResponseEntity<?> getStudentByEmail(@PathVariable String email) {
        StudentDTO studentDTO = studentService.getStudentByEmail(email);

        if (studentDTO != null) {
            return ResponseEntity.ok(studentDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found for email: " + email);
        }
    }
    
    @GetMapping("/{studentId}")
	public ResponseEntity<?> getStudentDetails(@PathVariable Long studentId) {
		System.out.println("in get student " + studentId);
		return ResponseEntity
				.ok(studentService.getStudentDetails(studentId));

	}
    

	@PutMapping("/{studentId}")
	public ResponseEntity<?> updateStudent(@PathVariable Long studentId,
			@RequestBody @Valid StudentDTO dto) {
		System.out.println("in update student " +studentId+" "+ dto);		
		return ResponseEntity.
				ok(studentService.updateStudent(studentId, dto));
	}
	
	@DeleteMapping("/{studentId}")
	public ResponseEntity<?> deleteStudent(@PathVariable Long studentId) {
		System.out.println("in delete student " + studentId);
		return ResponseEntity.ok(studentService.deleteStudentDetails(studentId));
	}

}
