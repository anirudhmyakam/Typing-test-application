package com.data.typing.controllers;

import com.data.typing.Dtos.EmailVerificationDto;
import com.data.typing.services.VerificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200")
public class VerificationController {

    private final VerificationService verificationService;
    public VerificationController(VerificationService verificationService) {
        this.verificationService = verificationService;
    }

    @PostMapping("/email-verification")
    public ResponseEntity<?> emailVerification(@RequestBody EmailVerificationDto emailVerificationDto) {

        try{
            verificationService.emailVerification(emailVerificationDto.getEmail(),emailVerificationDto.getUsername());
            return ResponseEntity.ok().body(Map.of("message","Email verification completed"));
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(Map.of("message","Email verification failed" + e.getMessage()));
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<Boolean> verifyOtp(@RequestBody EmailVerificationDto emailVerificationDto) {

        try{
            return ResponseEntity.ok().body(verificationService.veirifyOtp(emailVerificationDto.getOtp(), emailVerificationDto.getEmail()));
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(false);
        }

    }
}
