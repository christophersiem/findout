package de.csiem.findout.db;

import de.csiem.findout.model.Question;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionMongoDb extends PagingAndSortingRepository<Question, String> {
}
