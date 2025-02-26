import { useEffect } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoCard = styled(Box)({
  padding: "2rem",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #eee",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    background: "#FFD700",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },
  "&:hover::before": {
    transform: "scaleX(1)",
  },
});

const UsefulInformation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 50,
    });
  }, []);

  const infoItems = [
    {
      title: "Заголовок_информации_1",
      content: "Описание_заголовка_1",
    },
    {
      title: "Заголовок_информации_2",
      content: "Описание_заголовка_2",
    },
    {
      title: "Заголовок_информации_3",
      content: "Описание_заголовка_3",
    },
  ];

  return (
    <Box id="info" sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          data-aos="fade-up"
          sx={{ color: "black" }}
        >
          Полезная информация
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {infoItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <InfoCard data-aos="fade-up" data-aos-delay={index * 100}>
                <Typography variant="h5" gutterBottom sx={{ color: "#333" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#666" }}>{item.content}</Typography>
                <Button
                  variant="text"
                  sx={{
                    mt: 2,
                    color: "#FFD700",
                    "&:hover": { backgroundColor: "rgba(255,215,0,0.1)" },
                  }}
                >
                  *Кнопка с ссылкой*
                </Button>
              </InfoCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UsefulInformation;
