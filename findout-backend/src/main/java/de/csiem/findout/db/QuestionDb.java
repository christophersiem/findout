package de.csiem.findout.db;

import de.csiem.findout.model.Question;


import java.util.List;


public class QuestionDb {

    private final Question question;
    public List<String> questionList;

    public QuestionDb(Question question) {
        this.question = question;
    }
}
