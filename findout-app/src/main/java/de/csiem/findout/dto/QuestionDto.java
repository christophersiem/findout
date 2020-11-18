package de.csiem.findout.dto;

import de.csiem.findout.model.Option;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class QuestionDto {
    private String question;
    private List<Option> optionList;

}
