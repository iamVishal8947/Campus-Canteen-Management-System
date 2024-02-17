package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;


import com.app.dto.ApiResponse;
import com.app.dto.ItemMasterDTO;
import com.app.entities.ItemMaster;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.ItemMasterRepository;

@Service
@Transactional
public class ItemMasterServiceImpl implements ItemMasterService{
	
	@Autowired
	private ItemMasterRepository itemRepo;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<ItemMasterDTO> getAllMatserItems() {
		List<ItemMaster> itemList = itemRepo.findAll();
		return itemList.stream().map(item -> mapper.map(item, ItemMasterDTO.class)).collect(Collectors.toList());
	}

	@Override
	public ApiResponse deleteItemDetails(Long itemId) {
		ItemMaster item = itemRepo.findById(itemId).orElseThrow(()-> new ResourceNotFoundException("Item not found"));
		itemRepo.delete(item);
		return new ApiResponse("Item Details of item with ID " + item.getId() + " deleted....");

		
	}

	@Override
	public ItemMasterDTO addNewitem(ItemMasterDTO dto) {
		ItemMaster itemEntity = mapper.map(dto, ItemMaster.class);
		ItemMaster persistentItem = itemRepo.save(itemEntity);
		return mapper.map(persistentItem, ItemMasterDTO.class);
	}

	@Override
	public ItemMasterDTO updateItem(Long itemId, ItemMasterDTO dto) {
		ItemMaster item = itemRepo.findById(itemId).
		orElseThrow(() -> new ResourceNotFoundException("Invalid Item Id !!!!"));
		item.setItemName(dto.getItemName());
		item.setItemPrice(dto.getItemPrice());
		item.setItemCategory(dto.getItemCategory());
		item.setItemGenre(dto.getItemGenre());
		item.setItemImgLink(dto.getItemImgLink());
		item.setSoldQty(dto.getSoldQty());
		item.setTotalQty(dto.getTotalQty());
		return mapper.map(item, ItemMasterDTO.class);
	}

	@Override
	public ItemMasterDTO getItemDetails(Long itemId) {
		
		return mapper.map(
				itemRepo.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("Invalid Item Id !!!!")),
				ItemMasterDTO.class);
	}
	

}