package com.app.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.app.entities.Cart;
import com.app.entities.ItemCategory;
import com.app.entities.ItemGenre;
import com.app.entities.OrderStatus;
import com.app.entities.Student;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class OrderDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long orderId;

	private LocalDateTime time;
	
	private Integer qty;
	
	@NotBlank
	private String paymentMethod;
	
	private Integer amount;
	
	@NotBlank
	private String transactionId;
	
	private Integer itemsServed;
	
	private Boolean isServed;
	
    private OrderStatus orderStatus;
	
	private Integer discountPercentage;
	
	//@JsonProperty(access = Access.WRITE_ONLY) 
	private Long studentId;
	
	private String studentName;
	//private List<CartDTO> carts;
}
