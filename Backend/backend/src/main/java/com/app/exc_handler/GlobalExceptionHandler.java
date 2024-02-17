package com.app.exc_handler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.dto.ApiResponse;
import com.app.exceptions.ResourceNotFoundException;

@RestControllerAdvice // =@ControllerAdvice => global exc handler class
//--common interceptor to intercept ALL excs in all contoller + @ResponseBody added impl. 
//on ret types of all req handling methods 
public class GlobalExceptionHandler {
	// method level anno to tell SC , following is an exc handling method : to
	// handle MethodArgumentNotValidException
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		System.out.println("in method arg invalid " + e);
//		System.out.println("global errs "+e.getGlobalErrors());
//		System.out.println("field errs "+e.getFieldErrors());
		List<ObjectError> globalErrors = e.getGlobalErrors();
		Map<String, String> map1 = globalErrors.stream()
				.collect(Collectors.toMap
						(ObjectError::getObjectName, ObjectError::getDefaultMessage));
	
		List<FieldError> fieldErrors = e.getFieldErrors();// list of fiels having validation errs
		
		Map<String, String> map2 = fieldErrors.stream()
				.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
		map1.putAll(map2);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map1);
	}

	// method level anno to tell SC , following is an exc handling method : to
	// handle : ResourceNotFoundException
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ApiResponse handleResourceNotFoundException(
			ResourceNotFoundException e) {
		System.out.println("in res not found " + e);
		return new ApiResponse(e.getMessage());
	}

	// method level anno to tell SC , following is an exc handling method : to
	// handle any other remaining exc => catch all
	@ExceptionHandler(RuntimeException.class)
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	public ApiResponse handleAnyException(RuntimeException e) {
		System.out.println("in catch-all " + e);
		e.printStackTrace();
		return new ApiResponse(e.getMessage());
	}
}
