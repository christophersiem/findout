package de.csiem.findout.utils;

import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.UUID;

@Service
public class QuestionUtils {



    public String getRandomCode() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 8) { // length of the random string.
            int index = (int) (rnd.nextFloat() * chars.length());
            salt.append(chars.charAt(index));
        }
        return salt.toString();


    }
}
