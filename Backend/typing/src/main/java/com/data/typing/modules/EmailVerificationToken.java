package com.data.typing.modules;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmailVerificationToken extends Base {
    private String email;
    private String otp;
    private String username;
}
