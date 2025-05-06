package com.data.typing.Dtos;

import com.data.typing.modules.Mode;
import com.data.typing.modules.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestDto {
    private String user;

    private String mode;
    private int constraints;
    private float wpm;
    private float accuracy;
    private float consistency;
    private float raw;


    private int totalCharacters;
    private int correctCharacters;
    private int incorrectCharacters;
    private int extraCharacters;
    private int missedCharacters;
}
