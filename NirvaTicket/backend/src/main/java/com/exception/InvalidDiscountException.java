package com.exception;

import java.math.BigDecimal;

public class InvalidDiscountException extends RuntimeException {
    public InvalidDiscountException(BigDecimal discount) {
        super("Descuento inválido: " + discount + "%. Debe estar entre 0 y 100.");
    }
}
