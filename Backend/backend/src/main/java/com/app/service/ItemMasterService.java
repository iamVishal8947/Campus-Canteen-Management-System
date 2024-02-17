package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ItemMasterDTO;

public interface ItemMasterService {
		List<ItemMasterDTO> getAllMatserItems();


		ApiResponse deleteItemDetails(Long itemId);

		ItemMasterDTO addNewitem(ItemMasterDTO dto);

		ItemMasterDTO updateItem(Long itemId, ItemMasterDTO dto);

		ItemMasterDTO getItemDetails(Long itemId);

}
