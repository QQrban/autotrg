package com.microservices.api_gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.FileSystemResource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import java.nio.file.Paths;

@Configuration
public class StaticResourceRouter {

    @Bean
    public RouterFunction<ServerResponse> staticResourceRouter() {
        return RouterFunctions
            .resources
                    (
                "/uploads/",
                        new FileSystemResource(
                                Paths
                                    .get("uploads")
                                    .toAbsolutePath()
                                    .toString()
                        )
                    );
    }
}
