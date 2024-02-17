package com.app.entities;

import javax.persistence.*;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item_daily")
public class ItemDaily {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sr_no")
	private Long id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "item_id")
	@MapsId
	private ItemMaster item;
	
	@Column(name = "init_qty", nullable = false)
	private int initialQty;
	
	@Column(name = "sold_qty", nullable = false)
	private int soldQty;
}
