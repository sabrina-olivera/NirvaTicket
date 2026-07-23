package com.controller;

import com.model.Item;
import com.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping
    public Item create(@RequestBody Item item) {
        return itemService.create(item);
    }

    @GetMapping
    public List<Item> getAll() {
        return itemService.findAll();
    }

    @GetMapping("/{id}")
    public Item getById(@PathVariable Long id) {

        return itemService.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Producto inexistente."));
    }

    @PutMapping("/{id}")
    public Item update(@PathVariable Long id,
                       @RequestBody Item item) {

        return itemService.update(id, item);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {

        itemService.delete(id);

    }

}
