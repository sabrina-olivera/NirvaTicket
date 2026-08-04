package com.service;

import com.exception.DuplicateSkuException;
import com.exception.ItemNotFoundException;
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


    //

    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    public Item findById(Long id) {
        return itemRepository.findById(id)
        .orElseThrow(() -> new ItemNotFoundException(id));
    }


    public Item create(Item item) {

        if (itemRepository.existsBySku(item.getSku())) {
            throw new DuplicateSkuException(item.getSku());
        }

        return itemRepository.save(item);
    }



    public Item update(Long id, Item item) {

        Item existing = itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(id));

        if (itemRepository.existsBySkuAndIdNot(item.getSku(), id)) {
            throw new DuplicateSkuException(item.getSku());
        }

        existing.setName(item.getName());
        existing.setSku(item.getSku());
        existing.setStock(item.getStock());
        existing.setPrice(item.getPrice());

        return itemRepository.save(existing);
    }

    public void delete(Long id) {

        if (!itemRepository.existsById(id)) {
            throw new ItemNotFoundException(id);
        }

        itemRepository.deleteById(id);
    }

}
