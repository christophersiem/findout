package de.csiem.findout.controller;

import de.csiem.findout.dto.AddPointsDto;
import de.csiem.findout.dto.QuestionDto;
import de.csiem.findout.model.Question;
import de.csiem.findout.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/question")
public class QuestionController {

    public final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public String addNewQuestion(@RequestBody QuestionDto question) {
        return questionService.addNewQuestion(question.getQuestion(),question.getOptionList());
    }

    @GetMapping("{id}")
    public Optional<Question> findQuestionById(@PathVariable String id){
        return questionService.findQuestionById(id);
    }


    @PutMapping("add")
    public void addPoints(@RequestBody AddPointsDto dto) {
         questionService.addPoints(dto.getPoints(), dto.getCode());
    }
}
