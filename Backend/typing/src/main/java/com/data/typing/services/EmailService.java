package com.data.typing.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

//    @Autowired
    private JavaMailSender mailSender;

    public EmailService(JavaMailSender javamailsender){
        this.mailSender = javamailsender;
    }

    public void sendGeneratedMail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("annitypeservie@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        try{
            mailSender.send(message);
        }
        catch(Exception e){
            e.printStackTrace();
        }

    }
}
