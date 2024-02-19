package com.app.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "carts")
@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id",nullable = false,unique=true)
	private Long orderId;

	private LocalDateTime time;
	
	@Column(name="quantity")
	private int qty;
	
	@Column(name="payment_method",nullable = false)
	private String paymentMethod="defualt_method";
	
	private Integer amount;
	
//	@Column(name="transaction_id",nullable = false,unique = true)
//	private String transactionId;
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "transaction_id",nullable = false,unique = true)
    private String transactionId;
	
	@Column(name="items_served",nullable = false)
	private Integer itemsServed;
	
	@Column(name="is_served",nullable = false)
	private Boolean isServed = false;
	
	@Enumerated(EnumType.STRING)
    @Column(name = "order_status", nullable = false)
    private OrderStatus orderStatus;
	
	@Column(name="discount_percentage",nullable = true)
	private Integer discountPercentage;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "student_id") 
	private Student student;
	
	@OneToMany(mappedBy = "order", 
			cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Cart> cartList = new ArrayList<>();
	
	public void setStudent(Student student) {
		this.student=student;
	}
	
	public void addCart(Cart cart) {
		cartList.add(cart);
		cart.setOrder(this);
	}
	public void removeCart(Cart cart) {
		cartList.remove(cart);
		cart.setOrder(null);
	}
	
}