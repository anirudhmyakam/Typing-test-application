package com.data.typing.repository;

import com.data.typing.modules.Test;
import com.data.typing.modules.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUsername(String username);

    @Query("SELECT t FROM Test t WHERE t.user.username = :username ORDER BY t.createdAt")
    List<Test> returnAllTests(@Param("username") String username);
}
