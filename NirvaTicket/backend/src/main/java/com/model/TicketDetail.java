package com.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "ticket_details")
//@Data
public class TicketDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ticket_id", nullable = false)
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    private Integer quantity;
    private BigDecimal price; // precio al momento de la venta (no el actual del item)

    public TicketDetail() {
    }


}