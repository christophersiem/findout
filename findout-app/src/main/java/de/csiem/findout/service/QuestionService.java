package de.csiem.findout.service;


import de.csiem.findout.db.QuestionMongoDb;
import de.csiem.findout.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.lang.reflect.Array;

import java.time.LocalDate;
import java.util.List;

@Service
public class QuestionService {
    private final QuestionMongoDb questionDb;


    @Autowired
    public QuestionService(QuestionMongoDb questionDb) {
        this.questionDb = questionDb;
    }

    public Question addNewQuestion(String question, List<Object> optionList) {
        Question newQuestion = new Question();
        newQuestion.setQuestion(question);
        newQuestion.setOptionList(optionList);

        return questionDb.save(newQuestion);
    }
}
