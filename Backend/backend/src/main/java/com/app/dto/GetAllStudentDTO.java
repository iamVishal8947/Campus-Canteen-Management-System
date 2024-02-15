package com.app.dto;

import com.app.entities.Course;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetAllStudentDTO {
    private Long studentId;
    private String name;
    private String email;
    private String mobileNo;
    private int balance;
    private LocalDate dob;
    private Course courseName;
}
