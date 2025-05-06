package com.data.typing.HelperFunctions;

import com.data.typing.repository.EmailVerificationTokenRepository;
import jakarta.transaction.Transactional;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

@Component
public class OtpCleanupComponent {

    private EmailVerificationTokenRepository emailVerificationTokenRepository;

    public OtpCleanupComponent(EmailVerificationTokenRepository tokenRepository) {
        this.emailVerificationTokenRepository = tokenRepository;
    }

    @Transactional
    @Scheduled(fixedRate = 60_000) // runs every 60 seconds
    public void removeExpiredOtps() {
        Date now = new Date();

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(now);
        calendar.add(Calendar.MINUTE, -10); // Subtract 10 minutes

        Date tenMinutesAgo = calendar.getTime();

        emailVerificationTokenRepository.deleteByCreatedAtBefore(tenMinutesAgo);
    }
}
