package de.csiem.findout.service;


import de.csiem.findout.db.QuestionMongoDb;
import de.csiem.findout.model.Question;
import de.csiem.findout.utils.QuestionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuestionService {
    private final QuestionMongoDb questionDb;
    private final QuestionUtils questionUtils;


    @Autowired
    public QuestionService(QuestionMongoDb questionDb, QuestionUtils questionUtils) {
        this.questionDb = questionDb;
        this.questionUtils = questionUtils;
    }

    public Question addNewQuestion(String question, List<Object> optionList) {
        Question newQuestion = new Question();
        newQuestion.setQuestion(question);
        newQuestion.setOptionList(optionList);
        newQuestion.setId(questionUtils.getRandomCode());

        return questionDb.save(newQuestion);
    }
}
