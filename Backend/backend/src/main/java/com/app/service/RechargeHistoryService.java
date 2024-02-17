package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ItemMasterDTO;
import com.app.dto.OrderDTO;
import com.app.dto.RechargeHistoryDTO;

public interface RechargeHistoryService {

	List<RechargeHistoryDTO> getAllRechargeHistoryOfStudent(Long studId);

	ApiResponse deleteRechargeHistory(Long tranId);

	RechargeHistoryDTO addRecharge(RechargeHistoryDTO dto);

	RechargeHistoryDTO updateRecharge(Long tranId, RechargeHistoryDTO dto);

	RechargeHistoryDTO getRechargeDetails(Long tranId);

	
}
