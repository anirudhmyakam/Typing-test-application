package com.data.typing.modules;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Test extends Base{

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"email","password","role","tests","previousState","testsStarted","testsFinished"})
    private User user;

    private Mode mode;
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
