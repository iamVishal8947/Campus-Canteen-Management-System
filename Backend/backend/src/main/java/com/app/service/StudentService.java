// StudentService.java
package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.GetAllStudentDTO;
import com.app.dto.ItemMasterDTO;
import com.app.dto.SignInDTO;
import com.app.dto.StudentDTO;
import com.app.dto.UpdatePasswordDTO;
import com.app.entities.Student;

public interface StudentService {
	boolean studentExists(Long studentId);
	
    void registerStudent(StudentDTO studentDTO);
    
    List<GetAllStudentDTO> getAllStudents();
    
  
	int getBalanceById(Long studentId);
	
	ApiResponse setBalanceById(Long studentId, Integer newBalance);
	
	String login(SignInDTO dto);
	
	ApiResponse logout();
    
	String getEmailByStudentID(Long studId);
	
	String getNameByStudentID(Long studId);
	
	LocalDate getDobByStudentID(Long studId);
	
	String getMobileNoByStudentID(Long studId);
	
	StudentDTO getStudentByEmail(String email);
	
	String changePassword(Long id,UpdatePasswordDTO dto);
	
	 Long getTotalRegisteredStudents() ;
	 
	 StudentDTO getStudentDetails(Long studentId);
	 
	 ApiResponse deleteStudentDetails(Long studentId);

	 StudentDTO updateStudent(Long studentId, StudentDTO dto);

	
	
	
	
	
	

}
