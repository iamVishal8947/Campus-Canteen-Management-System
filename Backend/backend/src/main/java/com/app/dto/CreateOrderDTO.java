package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.app.entities.OrderStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateOrderDTO {
	
//	@JsonProperty(access = Access.READ_ONLY)
	private Long orderId;

	//private LocalDateTime time;
	
	private Integer qty;
	
	private Integer amount;
	
	private Integer itemsServed;
	
    private OrderStatus orderStatus;
	
	//private Integer discountPercentage;
	
	private String studentName;
	
	private List<CartDTO> carts;
}



//[
// {
//   "orderId": 0,
//   "qty": 0,
//   "amount": 0,
//   "itemsServed": 0,
//   "orderStatus": "PENDING",
//   "student": {
//     "name": "string",
//}
//     "carts": [
//     {
//       "cartId": 0,
//       "orderId": 0,
//		  "itemId":0,
//       "qtyOrdered": 0,
//       "netPrice": 0
//     }
//   ]
// }
//]
