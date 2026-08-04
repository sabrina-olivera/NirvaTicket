package com.exception;

public class ItemNotFoundException extends RuntimeException {
    public ItemNotFoundException(Long id) {
        super("No se encontró el item con id: " + id);
    }
}
