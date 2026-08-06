package com.exception;

public class TicketNotFoundException extends RuntimeException {

    public TicketNotFoundException(Long id) {
        super("No se encontró el ticket con id: " + id);
    }


}
