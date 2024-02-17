package com.app.entities;

import javax.persistence.*;


import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item_master")
public class ItemMaster {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "item_id")
	private Long id;
	
	@Column(name = "item_name", nullable = false, unique = true, length = 40)
	private String itemName;
	
	@Column(name = "item_price", nullable = false)
	private Integer itemPrice;
	
	@Enumerated(value = EnumType.STRING)
	@Column(name = "item_category", nullable = false)
	private ItemCategory itemCategory;
	
	@Enumerated(value = EnumType.STRING)
	@Column(name = "item_genre", nullable = false)
	private ItemGenre itemGenre;
	
	@Column(name = "item_img_link", nullable = false, unique = true, length = 50)
	private String itemImgLink;
	
	@Column(name = "total_qty", nullable = false,columnDefinition ="INT DEFAULT 0")
	private Integer totalQty;
	
	@Column(name = "sold_qty", nullable = false,columnDefinition ="INT DEFAULT 0")
	private Integer soldQty;
}
