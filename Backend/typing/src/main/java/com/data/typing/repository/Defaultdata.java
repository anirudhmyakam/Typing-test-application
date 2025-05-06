package com.data.typing.repository;

import com.data.typing.modules.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class Defaultdata implements CommandLineRunner {
    UserRepository userRepository;
    PasswordEncoder passwordEncoder;
    public Defaultdata(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
//        User user = User.builder()
//                .username("anni")
//                .password(passwordEncoder.encode("anni"))
//                        .build();
//        userRepository.save(user);
    }
}
