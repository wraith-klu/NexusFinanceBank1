package com.nexusbank.service;

import com.nexusbank.entity.User;
import com.nexusbank.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Register a new user
    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered!");
        }
        return userRepository.save(user);
    }

    // Login user
    public User login(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}
