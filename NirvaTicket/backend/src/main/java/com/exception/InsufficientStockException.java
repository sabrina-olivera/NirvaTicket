package com.exception;

public class InsufficientStockException extends RuntimeException {
    public InsufficientStockException(String itemName, Integer availableStock) {
        super("Stock insuficiente para " + itemName + ". Disponible: " + availableStock);
    }
}