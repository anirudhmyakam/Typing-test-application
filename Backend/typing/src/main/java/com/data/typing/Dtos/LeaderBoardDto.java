package com.data.typing.Dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class LeaderBoardDto {

//    public LeaderBoardDto(UUID id, String username, double wpm, double accuracy, double raw, double consistency, Date createdAt, String mode, int constraints) {
//        this.username = username;
//        this.wpm = wpm;
//        this.accuracy = accuracy;
//        this.raw = raw;
//        this.consistency = consistency;
//        this.date = createdAt;
//        this.mode = mode;
//        this.constraints = constraints;
//    }
//    private UUID id;
    private String username;
    private double wpm;
    private double accuracy;
    private double raw;
    private double consistency;
    private Date date;
    private String mode;
    private int constraints;
}
