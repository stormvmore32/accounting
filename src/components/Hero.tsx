import { Box, Container, styled, Typography } from "@mui/material";

const Hero = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const HeroComponent = () => {
  return (
    <Hero>
      <Container>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: "#2D3748",
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "5.2rem" },
            fontFamily: "'Pacifico', cursive",
            padding: "11px 30px",
            margin: "15px auto",
            position: "relative",
          }}
        >
          Бухучет и Автоматизация
        </Typography>
      </Container>
    </Hero>
  );
};

export default HeroComponent;
