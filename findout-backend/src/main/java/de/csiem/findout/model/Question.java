package de.csiem.findout.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Question {
    private String question;
    private List<String> options;
    private List<Integer> points;

}
