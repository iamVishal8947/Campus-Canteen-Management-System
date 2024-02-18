// StudentService.java
package com.app.service;

import java.util.List;

import com.app.entities.Order;
import com.app.dto.*;
import com.app.entities.Student;

public interface StudentService {
	boolean studentExists(Long studentId);
	
    void registerStudent(StudentDTO studentDTO);
    
    List<GetAllStudentDTO> getAllStudents();
    
  
	int getBalanceById(Long studentId);
	
	ApiResponse setBalanceById(Long studentId, Integer newBalance);
    

}
