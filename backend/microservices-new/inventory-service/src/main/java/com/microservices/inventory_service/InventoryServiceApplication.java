package com.microservices.inventory_service;

import com.microservices.inventory_service.model.Inventory;
import com.microservices.inventory_service.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(InventoryRepository inventoryRepository) {
		return args -> {
			Inventory inventory = new Inventory();
			inventory.setSkuCode("milk_shake");
			inventory.setQuantity(5);

			Inventory inventory1 = new Inventory();
			inventory1.setSkuCode("cheese");
			inventory1.setQuantity(0);


			inventoryRepository.save(inventory);
			inventoryRepository.save(inventory1);
		};
	}
}
