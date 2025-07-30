package com.microservices.auth_service;

import com.microservices.auth_service.user.Role;
import com.microservices.auth_service.user.User;
import com.microservices.auth_service.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class AuthServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRepository repository, PasswordEncoder passwordEncoder) {
		return args -> {
			User user = new User();
			user.setName("MikeMist");
			user.setEmail("user@gmail.com");
			user.setPassword(passwordEncoder.encode("user"));
			user.setRole(Role.USER);
			repository.save(user);

			User user2 = new User();
			user2.setName("Riccco");
			user2.setEmail("user2@gmail.com");
			user2.setPassword(passwordEncoder.encode("user2"));
			user2.setRole(Role.USER);
			repository.save(user2);
		};
	}

}
