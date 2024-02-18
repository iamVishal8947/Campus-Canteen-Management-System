package com.app.entities;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;




@Entity
@Table(name = "students")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Student {
	
	@Id
	@Column( name = "student_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long studentId;
	
	@Column(length = 20, name = "name")
	private String name;
	
	@Column(length = 40, name = "email")
	private String email;
	
	@Column(length = 20, name = "password")
	private String password;
	
	@Column(length = 10, name = "mobile_no")
	private String mobileNo;
	
	@Column(length = 20, name = "balance")
	private int balance;
	
	@Column(length = 20, name = "dob")
	private LocalDate dob;
	
	@Column(length = 20, name = "course_name")
	private Course courseName;
	
	@OneToMany(mappedBy = "student",fetch = FetchType.EAGER,cascade = CascadeType.ALL, orphanRemoval = true)
	private List<RechargeHistory> rechargeHistoryList ;
	
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Order> orderList;
	
	
	
	public void setDob(LocalDate dob) {
		this.dob=dob;
	}
	
	public void addOrder(Order ord) {
		orderList.add(ord);
		ord.setStudent(this);
	}
	public void removeOrder(Order ord) {
		orderList.remove(ord);
		ord.setStudent(null);
	}
	
	public void addRechargeHistory(RechargeHistory recharge) {
		rechargeHistoryList.add(recharge);
		recharge.setStudent(this);
	}
	public void removeRechargeHistory(RechargeHistory recharge) {
		rechargeHistoryList.remove(recharge);
		recharge.setStudent(null);
	}
	
}