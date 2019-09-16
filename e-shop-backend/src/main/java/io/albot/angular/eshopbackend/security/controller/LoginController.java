package io.albot.angular.eshopbackend.security.controller;

import io.albot.angular.eshopbackend.security.jwt.model.JwtResponse;
import io.albot.angular.eshopbackend.security.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin
@RestController
public class LoginController {
    @Autowired
    private AuthenticationService authenticationService;

    @GetMapping("login")
    public String login1(Principal principal) {
        return principal.getName();
    }

    @PostMapping("login")
    public ResponseEntity<JwtResponse> createToken(Principal principal) {
        return ResponseEntity.ok(new JwtResponse(principal.getName()));
    }

    private void authenticate(String username, String password) {
    }

    @GetMapping("isAuthorized")
    public boolean isAuthorized(Principal principal) {
        return true;
    }

    @GetMapping("")
    public String greeting(Principal principal) {
        return principal != null ? principal.getName() : null;
    }
}
