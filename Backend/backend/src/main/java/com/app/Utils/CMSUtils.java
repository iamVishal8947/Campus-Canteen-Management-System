package com.app.Utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class CMSUtils {
	private CMSUtils() {
		
	}
	public static ResponseEntity<String> getResponceEntity(String responceMessage,HttpStatus httpStatus){
		return new ResponseEntity<String>("{\"message\":\""+responceMessage+"\"}",httpStatus);
	}

}
