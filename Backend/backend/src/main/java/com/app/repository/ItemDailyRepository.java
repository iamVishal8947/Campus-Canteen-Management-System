// ItemDailyRepository.java
package com.app.repository;

import com.app.entities.ItemDaily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemDailyRepository extends JpaRepository<ItemDaily, Long> {
    
}
