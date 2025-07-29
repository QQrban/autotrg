package com.microservices.auth_service.user.service;

import com.microservices.auth_service.user.User;
import com.microservices.auth_service.user.UserRepository;
import com.microservices.auth_service.user.dto.UserResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserResponse getById(Integer id) {
        User user = userRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id " + id + " not found")
        );
    return new UserResponse(user.getId(), user.getName(), user.getAvatar());
    }
}
