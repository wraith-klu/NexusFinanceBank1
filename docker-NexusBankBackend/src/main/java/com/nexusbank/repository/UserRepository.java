package com.nexusbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nexusbank.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

    // Login: find by username & password
    User findByUsernameAndPassword(String username, String password);
}
