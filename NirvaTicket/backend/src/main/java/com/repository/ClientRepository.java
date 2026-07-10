package com.repository;

import com.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepository
        extends JpaRepository<Client, Long> {

    Optional<Client> findByDni(String dni);
    boolean existsByDni(String dni);
}
