package com.app.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

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

import com.app.dto.ItemDailyDTO;
import com.app.service.ItemDailyService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/dailyitems")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemDailyController {
	@Autowired
	private ItemDailyService itemService;
	
	@GetMapping
	public ResponseEntity<?> getAllItemDetails() {
		System.out.println("in get all item daily" );
		return ResponseEntity
				.ok(itemService.getAllDailyItems());
	}
	
	@GetMapping("/{itemId}")
	public ResponseEntity<?> getItemDetails(@PathVariable Long itemId) {
		System.out.println("in get item " + itemId);
		return ResponseEntity
				.ok(itemService.getItemDetails(itemId));

	}
	
	@PostMapping("/{itemMasId}")
	@Operation(summary = "Add itemMaster into itemDaily")
	public ResponseEntity<?> addNewItem(@PathVariable @NotNull Long itemMasId, @RequestBody 
			@Valid ItemDailyDTO item) {
		System.out.println("in add  daily item " + item);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(itemService.addNewitem(itemMasId,item));

	}
	
	
	@PutMapping("/{itemId}")
	public ResponseEntity<?> updateItem(@PathVariable Long itemId,
			@RequestBody @Valid ItemDailyDTO item) {
		System.out.println("in update daily item  " +itemId+" "+ item);		
		return ResponseEntity.
				ok(itemService.updateItem(itemId, item));
	}
	
	@DeleteMapping("/{itemId}")
	public ResponseEntity<?> deleteItem(@PathVariable Long itemId) {
		System.out.println("in delete daily item " + itemId);
		return ResponseEntity.ok(itemService.deleteItemDetails(itemId));
	}
	
	@DeleteMapping("/daily")
    public ResponseEntity<String> deleteAllItems() {
		itemService.deleteAllDailyItems();
        return new ResponseEntity<>("All daily items deleted successfully", HttpStatus.OK);
    }
}
