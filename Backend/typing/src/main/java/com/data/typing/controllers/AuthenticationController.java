package com.data.typing.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class AuthenticationController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> getAuthentication() {
        return ResponseEntity.ok(Map.of("message","You are authenticated"));
    }
}
