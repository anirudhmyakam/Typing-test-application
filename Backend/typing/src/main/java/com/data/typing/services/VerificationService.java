package com.data.typing.services;

import com.data.typing.modules.EmailVerificationToken;
import com.data.typing.repository.EmailVerificationTokenRepository;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class VerificationService {

    private EmailService emailservice;
    private EmailVerificationTokenRepository emailverificationtokenrepository;
    public VerificationService(EmailService emailservice, EmailVerificationTokenRepository emailverificationtokenrepository) {
        this.emailservice = emailservice;
        this.emailverificationtokenrepository = emailverificationtokenrepository;
    }

    public String otpGenerator(){
        Random random = new Random();

        String otp="";
        for(int i=0;i<6;i++){
            int digit = random.nextInt(10);
            otp+=String.valueOf(digit);
        }
        return otp;
    }

    public void emailVerification(String useremail, String username){
        String body;
        String subject="Your Verification OTP from Annitype";

        String otp=otpGenerator();
        System.out.println(otp);
        body="Dear "+ username + ",\n" +
                "\n" +
                "Thank you for choosing Annitype.\n" +
                "\n" +
                "To complete your verification process, please use the One-Time Password (OTP) provided below. This OTP is valid for the next 10 minutes and is required to proceed:\n" +
                "\n" +
                "Your OTP: "+ otp +"\n" +
                "\n" +
                "Please do not share this OTP with anyone for security reasons. If you did not request this verification, please contact our support team immediately.\n" +
                "\n" +
                "If you have any questions or need assistance, feel free to reach out to us at support@annitypeservices.com.\n" +
                "\n" +
                "Warm regards,\n" +
                "Team Annitype Services\n" +
                "[www.annitypeservices.com]\n" +
                "Customer Support: [Phone Number]\n" +
                "Email: support@annitypeservices.com";
        EmailVerificationToken otpToken = EmailVerificationToken.builder()
                .email(useremail)
                .otp(otp)
                .username(username)
                .build();
        emailverificationtokenrepository.save(otpToken);
        emailservice.sendGeneratedMail(useremail, subject, body);

    }

    public boolean veirifyOtp(String otp, String useremail){
        EmailVerificationToken otpToken =  emailverificationtokenrepository.findByEmail(useremail).orElse(null);
        if(otpToken==null || !otpToken.getOtp().equals(otp)){
            System.out.println(otpToken.getUsername()+"  "+otpToken.getOtp()+"   "+otpToken.getEmail());
            return false;
        }

        emailverificationtokenrepository.delete(otpToken);
        return true;
    }

}
