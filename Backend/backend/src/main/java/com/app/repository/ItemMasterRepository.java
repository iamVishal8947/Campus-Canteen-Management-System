// ItemDailyRepository.java
package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.ItemMaster;

@Repository
public interface ItemMasterRepository extends JpaRepository<ItemMaster, Long> {
    
}
