package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "recharge_history")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class RechargeHistory {

	@Column(name="transaction_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long transactionId;
	
	@Column(name="timestamp")
	private LocalDateTime timeStamp;
	
//	@Column(length = 20,name="customer_id")
//	private int customerId;
	
	@Column(name="amount_added")
	private int amountAdded;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer cust;
}
