 package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ItemDailyDTO;

public interface ItemDailyService {

	List<ItemDailyDTO> getAllDailyItems();


	ApiResponse deleteItemDetails(Long itemId);

	ApiResponse addNewitem(Long itemId,ItemDailyDTO dto);

	ItemDailyDTO updateItem(Long itemId, ItemDailyDTO dto);

	ItemDailyDTO getItemDetails(Long itemId);
	
	ApiResponse deleteAllDailyItems() ;
}
