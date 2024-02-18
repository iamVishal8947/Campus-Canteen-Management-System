// CustomerRepository.java
package com.app.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
	Student findByEmailAndDob(String email, LocalDate dob);
	
	
    String findNameByStudentId(Long studentId);
    //String findNameByStudentId(Long studentId);
    
    String findMobileNoByStudentId(Long studentId);
    
    LocalDate findDobByStudentId(Long studentId);
    
    String findEmailByStudentId(Long studentId);
	
    Optional<Student> findByEmail(String email);
    
    Optional<Student> findByPassword(String password);
	
}
