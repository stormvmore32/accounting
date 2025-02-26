import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const FooterStyled = styled(Box)({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "4rem 0 2rem",
});

const Footer = () => {
  return (
    <FooterStyled id="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Танис
            </Typography>
            <Typography>
              Профессиональные услуги по ведению и автоматизации бухгалтерии.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Наши контакты
            </Typography>
            <Typography>Почта: example@.com</Typography>
            <Typography>Телефон: (555) 555-5555</Typography>
            <Typography>Адрес: Брянск</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              График работы
            </Typography>
            <Typography>ПН-ПТ: 10:00 - 18:00 </Typography>
            <Typography>СБ-ВС: Выходной </Typography>
          </Grid>
        </Grid>
        <Typography
          textAlign="center"
          sx={{
            mt: 4,
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          © 2025 ООО "Танис"
        </Typography>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
