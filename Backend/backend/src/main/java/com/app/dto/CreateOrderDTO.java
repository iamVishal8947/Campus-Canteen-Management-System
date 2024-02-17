package com.app.dto;

import com.app.entities.OrderStatus;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

@Getter
@Setter
public class CreateOrderDTO {
    @NotNull
    private Long studentId;
    
    @NotNull
    private Long itemId;
    
    @NotNull
    private LocalDateTime time;
    
    @NotBlank
    private String paymentMethod;
    
    @NotNull
    @Positive
    private Integer amount;
    
    @NotBlank
    private String transactionId;
    
    @NotNull
    @Positive
    private Integer itemsServed;
    
    @NotNull
    private Boolean isServed;
    
    @NotNull
    private OrderStatus orderStatus;
    
    @NotNull
    @Positive
    private Integer discountPercentage;
      
    @NotNull
    @Positive
	private Integer quantity;
}
