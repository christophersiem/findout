package de.csiem.findout.service;


import de.csiem.findout.db.QuestionMongoDb;
import de.csiem.findout.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class QuestionService {
    private final QuestionMongoDb questionDb;


    @Autowired
    public QuestionService(QuestionMongoDb questionDb) {
        this.questionDb = questionDb;
    }

    public Question addNewQuestion(String question, List<String> options, List<Integer> points) {
        Question newQuestion = new Question();
        newQuestion.setQuestion(question);
        newQuestion.setOptions(options);
        newQuestion.setPoints(points);

        return questionDb.save(newQuestion);
    }
}
