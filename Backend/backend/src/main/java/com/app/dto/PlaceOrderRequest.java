package com.app.dto;

import java.util.List;

public class PlaceOrderRequest {
    private List<CartItem> items;

    // Implement getters and setters
    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }

    public int calculateTotalQty() {
        // Implement logic to calculate total quantity
        return items.stream().mapToInt(CartItem::getQtyOrdered).sum();
    }

    public int calculateTotalAmount() {
        // Implement logic to calculate total amount
        return items.stream().mapToInt(CartItem::calculateNetPrice).sum();
    }
}
