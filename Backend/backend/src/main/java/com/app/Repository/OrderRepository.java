package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
	

}
