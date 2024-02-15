// StudentService.java
package com.app.service;

import java.util.List;

import com.app.dto.StudentDTO;
import com.app.dto.*;
import com.app.entities.Student;

public interface StudentService {
	boolean studentExists(Long studentId);
    void registerStudent(StudentDTO studentDTO);
    List<GetAllStudentDTO> getAllStudents();

}
