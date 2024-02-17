package com.app.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RechargeHistoryDTO;
import com.app.service.RechargeHistoryService;

@RestController
@RequestMapping("/recharge")
@CrossOrigin(origins = "http://localhost:3000")
public class RechargeHistoryController {
	@Autowired
	private RechargeHistoryService rechService;
	
	@GetMapping(value = "/students/{studentId}")
	public ResponseEntity<?> getRechargeDetailsByStudent(@PathVariable Long studentId)  throws IOException  {
		System.out.println("get recharge by student " + studentId);
		return ResponseEntity.ok(rechService.getAllRechargeHistoryOfStudent(studentId));
	}
	
	@GetMapping("/{tranId}")
	public ResponseEntity<?> getRechargeDetails(@PathVariable Long tranId) {
		System.out.println("in get recharge " + tranId);
		return ResponseEntity
				.ok(rechService.getRechargeDetails(tranId));

	}
	@PostMapping
	public ResponseEntity<?> addNewRecharge(@RequestBody @Valid RechargeHistoryDTO dto) {
		System.out.println("in add new recharge " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(rechService.addRecharge(dto));
	}
    
	
	@PutMapping("/{tranId}")
	public ResponseEntity<?> updateRecharge(@PathVariable Long tranId, @RequestBody @Valid RechargeHistoryDTO dto) {
		System.out.println("in update recharge " + tranId + " " + dto);
		return ResponseEntity.ok(rechService.updateRecharge(tranId, dto));
	}


	@DeleteMapping("/{tranId}")
	public ResponseEntity<?> deleteRecharge(@PathVariable Long tranId) {
		System.out.println("in delete recharge " + tranId);
		return ResponseEntity.ok(rechService.deleteRechargeHistory(tranId));
	}
    

}
