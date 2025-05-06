package com.data.typing.Dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailVerificationDto {
    private String email;
    private String username;
    private String otp;
}
