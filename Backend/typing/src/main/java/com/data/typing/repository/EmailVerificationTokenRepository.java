package com.data.typing.repository;

import com.data.typing.modules.EmailVerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface EmailVerificationTokenRepository extends JpaRepository<EmailVerificationToken, String> {

    void deleteByCreatedAtBefore(Date createdAt);

    Optional<EmailVerificationToken> findByEmail(String email);
}
