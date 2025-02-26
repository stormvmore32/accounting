import { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqSection = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "4rem 0",
});

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 50,
    });
  }, []);

  const faqs = [
    {
      question: "Вопрос_1",
      answer: "Ответ_1",
    },
    {
      question: "Вопрос_2",
      answer: "Ответ_2",
    },
    {
      question: "Вопрос_3",
      answer: "Ответ_3",
    },
  ];

  return (
    <FaqSection id="faq">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          data-aos="fade-up"
          sx={{ color: "black" }}
        >
          Вопросы и ответы
        </Typography>
        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              //   data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <AccordionSummary expandIcon={<FaChevronDown />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </FaqSection>
  );
};

export default FAQ;
