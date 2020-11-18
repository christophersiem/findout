package de.csiem.findout.service;


import de.csiem.findout.db.QuestionMongoDb;
import de.csiem.findout.model.Option;
import de.csiem.findout.model.Question;
import de.csiem.findout.utils.QuestionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionMongoDb questionDb;
    private final QuestionUtils questionUtils;


    @Autowired
    public QuestionService(QuestionMongoDb questionDb, QuestionUtils questionUtils) {
        this.questionDb = questionDb;
        this.questionUtils = questionUtils;
    }

    public String addNewQuestion(String question, List<Option> optionList) {
        Question newQuestion = new Question();
        newQuestion.setQuestion(question);
        newQuestion.setOptionList(optionList);
        String randomCode = questionUtils.getRandomCode();
        newQuestion.setId(randomCode);
        questionDb.save(newQuestion);
        return randomCode;


    }

    public Optional<Question> findQuestionById(String id) {
        return questionDb.findById(id);
    }

    public void addPoints(List<Integer> points, String id) {
        Optional<Question> question = questionDb.findById(id);
        if (question.isPresent()) {
            for (int i = 0; i < points.size(); i++) {
                System.out.println(questionDb.findById(id).get().getOptionList().get(i));
        }throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Question does not exist");
        }
    }
}
