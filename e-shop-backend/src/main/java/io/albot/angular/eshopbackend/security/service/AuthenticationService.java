package io.albot.angular.eshopbackend.security.service;

import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthenticationService {
    public void authenticate(String username, String password) {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

    }
}
