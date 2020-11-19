package de.csiem.findout.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddPointsDto {
    private List<Integer> points;
    private String code;
}
