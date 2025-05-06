package com.data.typing.controllers;

import com.data.typing.Dtos.UserDto;
import com.data.typing.modules.Test;
import com.data.typing.services.UserServices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    private UserServices userServices;
    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @PostMapping("/register")
    private ResponseEntity<?> userRegistration(@RequestBody UserDto userDto) {

        System.out.println(userDto.getEmail()+"  "+userDto.getUsername()+"  "+userDto.getPassword());

        try{
            userServices.userRegistration(userDto);
            return ResponseEntity.ok(Map.of("message","User registration successful"));
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/metadata/{username}")
    private ResponseEntity<?> getUserData(@PathVariable("username") String username) {
        try{
            List<Test> user_data = this.userServices.returnData(username);
            return ResponseEntity.ok().body(user_data);
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
}
