import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const HeroSectionStyled = styled(Box)({
  background:
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
});

const HeroSection = () => {
  return (
    <HeroSectionStyled id="hero">
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Бухгалтерские услуги
        </Typography>
        <Typography variant="h5" gutterBottom>
          Автоматизация бухгалтерии
        </Typography>
      </Container>
    </HeroSectionStyled>
  );
};

export default HeroSection;
