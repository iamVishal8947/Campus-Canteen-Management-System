package com.app.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.app.entities.ItemMaster;
import com.app.entities.Order;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class CartDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long cartId;

	private Long orderId;
	
	
	private Long itemId;
	
	private Integer qtyOrdered;
	
	private Integer netPrice;
}
