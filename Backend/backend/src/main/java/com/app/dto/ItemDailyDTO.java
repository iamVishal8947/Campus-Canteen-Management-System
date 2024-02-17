package com.app.dto;

import javax.persistence.Column;

import com.app.entities.ItemMaster;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemDailyDTO {
	@JsonProperty(access = Access.READ_ONLY) 
	private Long id;
	
	
	private Integer initialQty;
	
	
	private Integer soldQty;
}
