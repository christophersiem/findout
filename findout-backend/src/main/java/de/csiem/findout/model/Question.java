package de.csiem.findout.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Question {
    private List<String>options;
    private List<Integer>points;
    private Date deadline;

}
