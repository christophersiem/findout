package de.csiem.findout.controller;

import de.csiem.findout.model.Question;
import de.csiem.findout.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/choice")
public class QuestionController {

    public final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public Question addNewQuestion(@RequestBody Question question) {

        return questionService.addNewQuestion(question.getQuestion(),question.getOptions(),question.getPoints());

    }


}
