// StudentService.java
package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.GetAllStudentDTO;
import com.app.dto.StudentDTO;
import com.app.entities.Student;

public interface StudentService {
	boolean studentExists(Long studentId);
	
    void registerStudent(StudentDTO studentDTO);
    
    List<GetAllStudentDTO> getAllStudents();
    
  
	int getBalanceById(Long studentId);
	
	ApiResponse setBalanceById(Long studentId, Integer newBalance);
	
	boolean login(String email, String dob);
	
	ApiResponse logout();
    
	String getEmailByStudentID(Long studId);
	
	String getNameByStudentID(Long studId);
	
	LocalDate getDobByStudentID(Long studId);
	
	String getMobileNoByStudentID(Long studId);

	
	
	
	
	
	

}
