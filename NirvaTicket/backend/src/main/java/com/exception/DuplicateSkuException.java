package com.exception;

public class DuplicateSkuException extends RuntimeException {
    public DuplicateSkuException(String sku) {
        super("Ya existe un item con el SKU: " + sku);
    }
}
