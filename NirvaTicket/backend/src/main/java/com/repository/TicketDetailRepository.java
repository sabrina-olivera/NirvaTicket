package com.repository;

import com.model.Item;
import com.model.TicketDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketDetailRepository
        extends JpaRepository<TicketDetail, Long> {

}
