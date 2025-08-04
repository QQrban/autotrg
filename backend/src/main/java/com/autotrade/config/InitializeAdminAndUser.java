package com.autotrade.config;


import com.autotrade.user.Role;
import com.autotrade.user.User;
import com.autotrade.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class InitializeAdminAndUser {
    @Bean
    public CommandLineRunner createUserAndAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return _ -> {
            User admin = User.builder()
                    .name("admin")
                    .email("admin@example.com")
                    .password(passwordEncoder.encode("admin123"))
                    .role(Role.ADMIN)
                    .build();
            userRepository.save(admin);

            User user = User.builder()
                    .name("user")
                    .email("user@example.com")
                    .password(passwordEncoder.encode("user123"))
                    .role(Role.USER)
                    .build();
            userRepository.save(user);
        };
    }
}
