// CustomerDTO.java
package com.app.dto;

import com.app.entities.Course;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class CustomerDTO {
    @NotBlank
    private String name;

    private Long customerId;

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
