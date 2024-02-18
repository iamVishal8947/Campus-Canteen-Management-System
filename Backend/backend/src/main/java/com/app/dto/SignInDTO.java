package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SignInDTO {
	@NotBlank(message = "UserName can't be blank")
	private String userName;
//	@NotBlank
	@Length(min = 5,max=20,message = "Invalid password length")
	private String password;
}



