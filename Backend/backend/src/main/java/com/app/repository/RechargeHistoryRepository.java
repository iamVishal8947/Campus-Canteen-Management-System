package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Order;
import com.app.entities.RechargeHistory;


public interface RechargeHistoryRepository extends JpaRepository<RechargeHistory, Long>{
    List<RechargeHistory> findByStudentStudentId(Long studentId);

}
