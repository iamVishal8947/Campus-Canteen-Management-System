package com.app.Service;

import java.time.LocalDate;
import java.util.Map;
import java.util.Objects;

import org.apache.logging.log4j.message.ReusableMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.Constants.CMSConstants;
import com.app.Repository.CustomerRepository;
import com.app.Utils.CMSUtils;
import com.app.entities.Course;
import com.app.entities.Customer;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AdminService {
	@Autowired
	CustomerRepository customerRepository;
	
	public ResponseEntity<String> Register(Map<String,String> requestMap){
		log.info("Inside Register",requestMap); //for debug purpose
		// Validate Request Map (Request Map contains all data required for registeration purpose)
		try{String custId=requestMap.get("customerId");
		Customer customer=customerRepository.findByCustomerId(custId);
		if(validateRegisterMap(requestMap)) {
			if(Objects.isNull(customer)) {
				customerRepository.save(getCustomerFromMap(requestMap));
				return CMSUtils.getResponceEntity("Succesfully Registered", HttpStatus.OK);
			}
			else {
				return CMSUtils.getResponceEntity("Customer lready Exist", HttpStatus.BAD_REQUEST);
			}
			
		}
		else {
			return CMSUtils.getResponceEntity(CMSConstants.INVALID_DATA, HttpStatus.BAD_REQUEST);
		}}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return CMSUtils.getResponceEntity(CMSConstants.INVALID_DATA, HttpStatus.INTERNAL_SERVER_ERROR);
		
		
	}
	
	//Method to validate the Request Map
	private boolean validateRegisterMap(Map<String, String> requestMap) {
		if(requestMap.containsKey("customerId") && requestMap.containsKey("name")
				&& requestMap.containsKey("email") && requestMap.containsKey("mobileNo")&&
				requestMap.containsKey("dob")&& requestMap.containsKey("courseName")) {
			return true;
		}
		return false;
		
	}
	
	private Customer getCustomerFromMap(Map<String,String> requestMap) {
		Customer customer=new Customer();
	    customer.setName(requestMap.get("name"));
	    customer.setEmail(requestMap.get("email"));
	    customer.setMobileNo(requestMap.get("mobileNo"));
	    customer.setPassword(requestMap.get("password"));
	    return customer;
	    
	}
	

}
