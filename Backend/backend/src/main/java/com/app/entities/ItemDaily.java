package com.app.entities;

import java.util.List;

import javax.persistence.*;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item_master")
public class ItemDaily {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "item_id")
	private Long itemId;
	
	@OneToOne
	@JoinColumn(name = "fk_item_id")
	private ItemMaster itemDetails;
	
	@Column(name = "init_qty", nullable = false)
	private int initialQty;
	
	@Column(name = "sold_qty", nullable = false)
	private int soldQty;
}
