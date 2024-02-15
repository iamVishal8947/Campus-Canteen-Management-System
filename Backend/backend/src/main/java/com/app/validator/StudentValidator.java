// CustomerValidator.java
package com.app.validator;

import com.app.dto.StudentDTO;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component
public class StudentValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return StudentDTO.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        StudentDTO studentDTO = (StudentDTO) target;
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "NotEmpty");
        // Add more validation rules as needed
    }
}
