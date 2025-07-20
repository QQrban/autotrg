package com.microservices.product_service;

import com.microservices.product_service.model.Product;
import com.microservices.product_service.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProductServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(ProductRepository repository) {
		return args -> {
			Object[][] data = {
					{"Blue Robot", 2.50, "A small blue cartoon robot toy.", "/uploads/featured/hot-1.jpg", 1},
					{"Finn Figure", 2.70, "A cheerful Finn figurine from Cartoon Network.", "/uploads/featured/hot-2.jpg", 1},
					{"Volcano Poster", 2.99, "A bright retro-style volcano poster.", "/uploads/featured/hot-3.jpg", 1},
					{"Cyberpunk Girl", 2.85, "Futuristic cyberpunk girl collectible.", "/uploads/featured/hot-4.jpg", 1},
					{"Mythic Dragon", 2.95, "Green mythic dragon figure.", "/uploads/featured/hot-5.jpg", 1},
					{"Retro Superman", 2.80, "Classic retro Superman toy.", "/uploads/featured/hot-6.jpg", 1},
					{"Night Sky Art", 1.99, "Minimalist night sky wall art.", "/uploads/featured/hot-7.jpg", 1},
					{"Fallout Boy", 2.60, "Iconic Fallout series boy mascot.", "/uploads/featured/hot-8.jpg", 1},
					{"Soldier Ice Cream", 2.30, "Funny soldier ice cream toy.", "/uploads/featured/hot-9.jpg", 1},
					{"Night Lake", 2.75, "Art of a starry night lake landscape.", "/uploads/featured/hot-10.jpg", 1},
					{"Steel Knight", 2.99, "Armored steel knight with sword and shield.", "/uploads/featured/hot-11.jpg", 1},
					{"Cartoon Mafia Boss", 2.80, "Classic cartoon mafia boss in a suit and hat.", "/uploads/featured/hot-12.jpg", 1},
					{"Shaolin Monk", 2.50, "Shaolin monk sitting in meditation.", "/uploads/featured/hot-13.jpg", 1},
					{"Neon Street", 2.90, "Bright neon-lit cyberpunk city street.", "/uploads/featured/hot-14.jpg", 1},
					{"Watermelon King", 1.99, "Man with a crown made of watermelon slices.", "/uploads/featured/hot-15.jpg", 1},
			};

			for (Object[] prod : data) {
				Product p = new Product();
				p.setName((String)prod[0]);
				p.setPrice((Double)prod[1]);
				p.setDescription((String)prod[2]);
				p.setImageUrl((String)prod[3]);
				p.setCategoryId((Integer) prod[4]);
				repository.save(p);
			}
		};
	}



}
