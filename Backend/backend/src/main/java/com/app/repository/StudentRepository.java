// CustomerRepository.java
package com.app.repository;

import com.app.entities.Student;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
	Student findByEmailAndDob(String email, LocalDate dob);
	
	
    String findNameByStudentId(Long studentId);
    //String findNameByStudentId(Long studentId);
    
    String findMobileNoByStudentId(Long studentId);
    
    LocalDate findDobByStudentId(Long studentId);
    
    String findEmailByStudentId(Long studentId);
	
	
}
