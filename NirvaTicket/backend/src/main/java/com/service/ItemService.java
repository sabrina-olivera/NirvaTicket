package com.service;

import com.model.Item;
import com.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item create(Item item) {

        if (itemRepository.existsBySku(item.getSku())) {
            throw new IllegalArgumentException("El SKU ya existe.");
        }

        return itemRepository.save(item);
    }

    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    public Optional<Item> findById(Long id) {
        return itemRepository.findById(id);
    }

    public Item update(Long id, Item item) {

        Item existing = itemRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Producto inexistente."));

        existing.setName(item.getName());
        existing.setSku(item.getSku());
        existing.setStock(item.getStock());
        existing.setPrice(item.getPrice());

        return itemRepository.save(existing);
    }

    public void delete(Long id) {

        if (!itemRepository.existsById(id)) {
            throw new IllegalArgumentException("Producto inexistente.");
        }

        itemRepository.deleteById(id);
    }

}
