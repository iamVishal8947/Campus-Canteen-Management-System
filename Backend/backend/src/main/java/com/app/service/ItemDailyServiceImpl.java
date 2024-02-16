package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.ItemDailyDTO;
import com.app.entities.ItemDaily;
import com.app.entities.ItemMaster;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.ItemDailyRepository;
import com.app.repository.ItemMasterRepository;

@Service
@Transactional
public class ItemDailyServiceImpl implements ItemDailyService {

	@Autowired
	private ItemDailyRepository itemRepo;
	@Autowired
	private ItemMasterRepository itemMasRepo;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<ItemDailyDTO> getAllDailyItems() {
		List<ItemDaily> itemList = itemRepo.findAll();
		return itemList.stream().map(item -> mapper.map(item, ItemDailyDTO.class)).collect(Collectors.toList());
	}

	@Override
	public ApiResponse deleteItemDetails(Long itemId) {
		ItemDaily item = itemRepo.findById(itemId).orElseThrow(()-> new ResourceNotFoundException("Item not found"));
		itemRepo.delete(item);
		return new ApiResponse("Item Details of item with ID " + item.getId() + " deleted....");
	}

	@Override
	public ApiResponse addNewitem(Long itemMasId,ItemDailyDTO dto) {
		ItemMaster itemMaster = itemMasRepo.findById(itemMasId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid Item Master ID!!!"));
		ItemDaily itemEntity = mapper.map(dto, ItemDaily.class);
		itemEntity.setItem(itemMaster);
		itemRepo.save(itemEntity);
		return new ApiResponse("Added item master to daily , " + itemMaster.getItemName());
	}

	@Override
	public ItemDailyDTO updateItem(Long itemId, ItemDailyDTO dto) {
		ItemDaily item = itemRepo.findById(itemId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid Item Id !!!!"));	
		item.setInitialQty(dto.getInitialQty());
		item.setSoldQty(dto.getSoldQty());
		return mapper.map(item, ItemDailyDTO.class);
	}

	@Override
	public ItemDailyDTO getItemDetails(Long itemId) {
		return mapper.map(
				itemRepo.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("Invalid Item Id !!!!")),
				ItemDailyDTO.class);
	}
	
	@Override
	public ApiResponse deleteAllDailyItems() {
	        itemRepo.deleteAll();
	        return new ApiResponse("All items are deleted ");
	        
	}

}
