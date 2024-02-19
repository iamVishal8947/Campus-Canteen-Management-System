package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItem {
	 private Long itemId;
	    private int qtyOrdered;
	    private int itemPrice;  

	   

	    public int calculateNetPrice() {
	        int itemPrice = getItemPrice();
	        return qtyOrdered * itemPrice;
	    }

	    // Implement this method based on how you store the item price in your class
	    public int getItemPrice() {
	        return this.itemPrice;
	    }
}
