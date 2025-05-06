package com.data.typing.repository;

import com.data.typing.Dtos.LeaderBoardDto;
import com.data.typing.modules.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TestRepository extends JpaRepository<Test, UUID> {

    @Query( value = "SELECT u.username, t.wpm, t.accuracy, t.raw, t.consistency, t.created_at, t.mode, t.constraints " +
            "FROM test as t LEFT JOIN user as u ON t.user_id=u.id " +
            "WHERE t.mode = :mode AND t.constraints = :constraints " +
            "ORDER BY t.wpm DESC", nativeQuery = true)
    List<Object[]> getLeaderBoard(@Param("mode") String mode, @Param("constraints") int constraints);

}
