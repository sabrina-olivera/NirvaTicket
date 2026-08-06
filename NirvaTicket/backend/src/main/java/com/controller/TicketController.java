package com.controller;

import com.dto.TicketRequestDTO;
import com.model.Ticket;
import com.service.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping
    public Ticket create(@RequestBody TicketRequestDTO dto) {
        return ticketService.create(dto);
    }

    @GetMapping
    public List<Ticket> findAll() {
        return ticketService.findAll();
    }

    @GetMapping("/{id}")
    public Ticket findById(@PathVariable Long id) {
        return ticketService.findById(id);
    }
}
