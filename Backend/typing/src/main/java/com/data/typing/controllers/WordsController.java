package com.data.typing.controllers;

import com.data.typing.services.Wordsservices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class WordsController {

    private Wordsservices wordsservice;

    WordsController(Wordsservices wordsservice) {
        this.wordsservice = wordsservice;
    }

    @GetMapping("/getwords")
    public ResponseEntity<?> getwords() {
        try{
            return ResponseEntity.ok().body(this.wordsservice.generatewords());
        }
        catch(Exception e){
            return ResponseEntity.notFound().build();
        }
    }
}
