import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = styled(Box)(() => ({
  backgroundColor: "#FFD700",
  color: "#000000",
  padEnd: "48px",
}));

const FooterComponent = () => {
  return (
    <Footer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h4" gutterBottom>
              Контактная информация
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FaPhoneAlt />
              <Typography sx={{ ml: 1 }}>+7 (XXX) XXX-XX-XX</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FaEnvelope />
              <Typography sx={{ ml: 1 }}>info@tanis.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt />
              <Typography sx={{ ml: 1 }}>Брянск, пр-т Московский</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" component="h4" gutterBottom>
              ООО "Танис"
            </Typography>
            <Typography>
              Танис — ваш надежный партнер в сфере бухгалтерских и финансовых
              услуг. Благодаря многолетнему опыту и стремлению к совершенству мы
              помогаем компаниям оптимизировать свои финансовые операции и
              достигать своих целей.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
