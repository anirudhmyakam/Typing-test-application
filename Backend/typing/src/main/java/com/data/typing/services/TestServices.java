package com.data.typing.services;

import com.data.typing.Dtos.LeaderBoardDto;
import com.data.typing.Dtos.TestDto;
import com.data.typing.modules.Mode;
import com.data.typing.modules.Test;
import com.data.typing.modules.User;
import com.data.typing.repository.TestRepository;
import com.data.typing.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TestServices {

    private TestRepository testRepository;
    private UserRepository userRepository;
    public TestServices(TestRepository testRepository, UserRepository userRepository) {
        this.testRepository = testRepository;
        this.userRepository = userRepository;
    }

    public void addTestResults(TestDto test){

        System.out.println(test.getUser()+"   "+test.getAccuracy()+"    "+test.getMode());
        User user = this.userRepository.findByUsername(test.getUser()).get();
        Test testResult = Test.builder()
                .user(user)
                .accuracy(test.getAccuracy())
                .consistency(test.getConsistency())
                .mode(Mode.valueOf(test.getMode()))
                .wpm(test.getWpm())
                .raw(test.getRaw())
                .extraCharacters(test.getExtraCharacters())
                .correctCharacters(test.getCorrectCharacters())
                .missedCharacters(test.getMissedCharacters())
                .totalCharacters(test.getTotalCharacters())
                .incorrectCharacters(test.getIncorrectCharacters())
                .constraints(test.getConstraints())
                .build();
        testRepository.save(testResult);

        System.out.println(testResult.getMode());

        user.getTests().add(testResult);
        userRepository.save(user);
    }

    public List<LeaderBoardDto> returnLeaderBoard(String mode, int constraints){

        List<Object[]> rawResult = this.testRepository.getLeaderBoard(mode, constraints);
        System.out.println(rawResult.size());

        try {
            List<LeaderBoardDto> leaderboard = rawResult.stream()
                    .map(r -> new LeaderBoardDto(
                            (String) r[0],                   // username
                            (Float) r[1],                   // wpm
                            (Float) r[2],                   // accuracy
                            (Float) r[3],                   // raw
                            (Float) r[4],                   // consistency
                            ((Date) r[5]), // created_at
                            (Mode.fromCode(((Number) r[6]).intValue()).name()),                   // mode
                            (Integer) r[7]                   // constraints
                    ))
                    .collect(Collectors.toList());

            return leaderboard;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }

}
