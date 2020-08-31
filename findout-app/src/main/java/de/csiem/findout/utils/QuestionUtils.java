package de.csiem.findout.utils;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class QuestionUtils {

    public String generateRandomId() {
        return UUID.randomUUID().toString();
    }
}
