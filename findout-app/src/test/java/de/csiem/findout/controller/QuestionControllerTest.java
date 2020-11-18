package de.csiem.findout.controller;

import de.csiem.findout.dto.QuestionDto;
import de.csiem.findout.model.Option;
import de.csiem.findout.utils.QuestionUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.hamcrest.Matchers.is;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)


class QuestionControllerTest {

    @LocalServerPort
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;
    @MockBean
    private QuestionUtils questionUtils;

    @Test
    public void testAddQuestion(){
        //GIVEN
        Option firstOption = new Option("chill",List.of(60));
        Option secondOption = new Option("drink",List.of(40));
        QuestionDto questionToAdd = new QuestionDto("What to do today?", List.of(firstOption,secondOption));
        when(questionUtils.getRandomCode()).thenReturn("random");

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:" + port + "/api/question", questionToAdd, String.class);

        //THEN
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertEquals(response.getBody(),"random");

    }

}
