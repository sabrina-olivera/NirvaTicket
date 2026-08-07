package com.exception;

public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException(Long id) {
        super("No se encontró el cliente con id: " + id);
    }
}