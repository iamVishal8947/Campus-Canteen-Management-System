package com.app.controller;

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

import com.app.dto.ItemMasterDTO;
import com.app.service.ItemMasterService;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemMasterController {
	
	@Autowired
	private ItemMasterService itemService;
	
	@GetMapping
	public ResponseEntity<?> getAllItemMasterDetails() {
		System.out.println("in get all item master" );
		return ResponseEntity
				.ok(itemService.getAllMatserItems());
	}
	
	@GetMapping("/{itemId}")
	public ResponseEntity<?> getItemDetails(@PathVariable Long itemId) {
		System.out.println("in get item " + itemId);
		return ResponseEntity
				.ok(itemService.getItemDetails(itemId));

	}
	
	@PostMapping
	public ResponseEntity<?> addNewItem(@RequestBody 
			@Valid ItemMasterDTO item) {
		System.out.println("in add item " + item);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(itemService.addNewitem(item));

	}
	
	@PutMapping("/{itemId}")
	public ResponseEntity<?> updateItem(@PathVariable Long itemId,
			@RequestBody @Valid ItemMasterDTO item) {
		System.out.println("in update item " +itemId+" "+ item);		
		return ResponseEntity.
				ok(itemService.updateItem(itemId, item));
	}
	
	@DeleteMapping("/{itemId}")
	public ResponseEntity<?> deleteItem(@PathVariable Long itemId) {
		System.out.println("in delete item " + itemId);
		return ResponseEntity.ok(itemService.deleteItemDetails(itemId));
	}
	

}
