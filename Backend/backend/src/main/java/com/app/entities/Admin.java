package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Admin")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Admin {
	
	@Id
	@Column(name="Admin_username")
	private String username;
	
	@Column(length = 20, name = "Admin_password")
	private String password;

}
