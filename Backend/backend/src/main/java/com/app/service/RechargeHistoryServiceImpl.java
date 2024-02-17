package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.ItemMasterDTO;
import com.app.dto.RechargeHistoryDTO;
import com.app.entities.ItemDaily;
import com.app.entities.RechargeHistory;
import com.app.entities.Student;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.RechargeHistoryRepository;
import com.app.repository.StudentRepository;

@Service
@Transactional
public class RechargeHistoryServiceImpl implements RechargeHistoryService {
	
	@Autowired
	private RechargeHistoryRepository rechargeRepo;
	
	@Autowired
	private StudentRepository studRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<RechargeHistoryDTO> getAllRechargeHistoryOfStudent(Long studId) {
	    List<RechargeHistory> rechargeList = rechargeRepo.findByStudentStudentId(studId);

	    return rechargeList.stream().map(recharge -> {
	        RechargeHistoryDTO rechargeDTO = mapper.map(recharge, RechargeHistoryDTO.class);

	        if (recharge.getStudent() != null) {
	            // Set Student information in RechargeHistoryDTO
	            rechargeDTO.setStudentId(recharge.getStudent().getStudentId());
	        }

	        return rechargeDTO;
	    }).collect(Collectors.toList());
	}

	

	@Override
	public RechargeHistoryDTO addRecharge(RechargeHistoryDTO dto) {
		Student stud = studRepo.findById(dto.getStudentId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id!!!"));
		RechargeHistory rechEntity = mapper.map(dto, RechargeHistory.class);
		stud.addRechargeHistory(rechEntity);
		RechargeHistory savedRecharge = rechargeRepo.save(rechEntity);
		System.out.println("recharge entity id " + rechEntity.getTransactionId() + " " + savedRecharge.getTransactionId());
		return mapper.map(savedRecharge, RechargeHistoryDTO.class);	
		
	}
	
	
	@Override
	public RechargeHistoryDTO updateRecharge(Long tranId, RechargeHistoryDTO dto) {
		RechargeHistory recharge = rechargeRepo.findById(tranId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid transaction ID !!"));
		
		Student stud = studRepo.findById(dto.getStudentId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id!!!"));
		mapper.map(dto,recharge);
		stud.addRechargeHistory(recharge);
		dto.setTransactionId(tranId);
		return dto;
	}

	@Override
	public RechargeHistoryDTO getRechargeDetails(Long tranId) {
	    RechargeHistory recharge = rechargeRepo.findById(tranId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Transaction Id !!!!"));

	    RechargeHistoryDTO rechargeDTO = mapper.map(recharge, RechargeHistoryDTO.class);

	    if (recharge.getStudent() != null) {
	        // Set Student information in RechargeHistoryDTO
	        rechargeDTO.setStudentId(recharge.getStudent().getStudentId());
	        
	    }

	    return rechargeDTO;
	}



	@Override
	public ApiResponse deleteRechargeHistory(Long tranId) {
		RechargeHistory recharge = rechargeRepo.findById(tranId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid transaction ID !!"));
		rechargeRepo.delete(recharge);
		return new ApiResponse("Recharge Details of Student with ID " + recharge.getTransactionId() + " deleted....");
	}



	

}
