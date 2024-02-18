// CustomerDTO.java
package com.app.dto;

import com.app.entities.Course;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class StudentDTO {
  
   
    private Long studentId;
    
	@NotBlank
    private String name;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String mobileNo;

    @NotNull
    private int balance;

    @NotNull
    private LocalDate dob;

    @NotNull
    private Course courseName;
}