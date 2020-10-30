package de.csiem.findout.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("question")

public class Question {
    @Id
    private String id;
    private String question;
    private List<Object> optionList;

}
