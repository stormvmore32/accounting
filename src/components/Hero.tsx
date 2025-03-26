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
            color: "#747b8e",
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            borderBottom: "4px solid #FFD700",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          Бухгалтерские услуги
        </Typography>
      </Container>
    </Hero>
  );
};

export default HeroComponent;
