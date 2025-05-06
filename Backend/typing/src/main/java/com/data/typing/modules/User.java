package com.data.typing.modules;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User extends Base{

    private String username;

    @JsonIgnore
    private String email;

    @JsonIgnore
    private String password;

    @Builder.Default
    private String role="User";

    @OneToMany(mappedBy="user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    @JsonIgnoreProperties("user")
    private List<Test> tests;

    @Builder.Default
    private String previousState="30-10";

    @Builder.Default
    private int testsStarted=0;
    @Builder.Default
    private int testsFinished=0;

}
