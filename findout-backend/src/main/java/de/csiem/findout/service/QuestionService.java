package de.csiem.findout.service;

import de.csiem.findout.db.QuestionDb;
import de.csiem.findout.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    @Autowired
    public QuestionService(QuestionDb questionDb) {
    }

    public Question addNewQuestion(Question question) {
return question;
    }
}
