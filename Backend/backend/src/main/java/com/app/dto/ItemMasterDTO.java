package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.app.entities.ItemCategory;
import com.app.entities.ItemGenre;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemMasterDTO {
	@JsonProperty(access = Access.READ_ONLY) 
	private Long id;
	
	@NotBlank
	private String itemName;
	
	
	private Integer itemPrice;
	
	
	private ItemCategory itemCategory;
	
	private ItemGenre itemGenre;
	
	
	private String itemImgLink;
	
	
	private Integer totalQty;
	
	
	private Integer soldQty;
}
