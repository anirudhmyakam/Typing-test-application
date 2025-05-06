package com.data.typing.services;

import com.data.typing.Dtos.TestDto;
import com.data.typing.Dtos.UserDto;
import com.data.typing.modules.Test;
import com.data.typing.modules.User;
import com.data.typing.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServices {

    UserRepository userRepository;
    PasswordEncoder passwordEncoder;
    private UserServices(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void userRegistration(UserDto newUser) {
        User user = User.builder()
                .username(newUser.getUsername())
                .password(passwordEncoder.encode(newUser.getPassword()))
                .email(newUser.getEmail())
                .build();
        userRepository.save(user);
    }

    public List<Test> returnData(String  username){

//        Object querry_data = this.userRepository.returnAllTests(username);
//        Test userdata = Test.builder()
//                .wpm(querry_data[1])
//                .build();

        return this.userRepository.returnAllTests(username);
    }
}
