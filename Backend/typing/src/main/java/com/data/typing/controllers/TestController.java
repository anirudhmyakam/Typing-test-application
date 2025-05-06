package com.data.typing.controllers;

import com.data.typing.Dtos.TestDto;
import com.data.typing.modules.Test;
import com.data.typing.services.TestServices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
//@RequestMapping("/test")
public class TestController {

    private TestServices testServices;
    public TestController(TestServices testServices) {
        this.testServices = testServices;
    }

    @PostMapping("/results")
    private ResponseEntity<?> addTestResults(@RequestBody TestDto testResults) {
        try{
            testServices.addTestResults(testResults);
            return ResponseEntity.ok().body("Test Results saved successfully");
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body("Cannot save Test Results");
        }
    }

    @GetMapping("/leaderboard/{category}")
    private ResponseEntity<?> getLeaderboard(@PathVariable String category) {
        try{
            String mode="";
            int constraints=0;
            String[] parts=category.split("-");
            mode=parts[0];
            try{
            constraints=Integer.parseInt(parts[1]);

            }
            catch (Exception e){
                return ResponseEntity.badRequest().body("Not a good integer");
            }

            return ResponseEntity.ok().body(testServices.returnLeaderBoard(mode,constraints));
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body("Cannot get leaderboard");
        }
    }
}
