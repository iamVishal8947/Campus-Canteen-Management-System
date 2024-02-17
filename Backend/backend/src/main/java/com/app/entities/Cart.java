package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "order" }, callSuper = true)
@Entity
@Table(name="carts")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cart_id",nullable = false,unique=true)
	private Long cartId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="order_id",nullable=false)
	private Order order;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("id")
	@JoinColumn(name="item_id",nullable=false)
	private ItemMaster item;
	
	@Column(name="qty_ordered",nullable=false)
	private Integer qtyOrdered;
	
	@Column(name="net_price",nullable=false)
	private Integer netPrice;
}
