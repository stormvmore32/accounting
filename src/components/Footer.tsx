import {
  Box,
  Container,
  Grid,
  IconButton,
  Modal,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

const Footer = styled(Box)(() => ({
  backgroundColor: "#FFD700",
  color: "#000000",
  marginTop: "auto",
  width: "100%",
  paddingBlock: "10px",
}));

const FooterComponent = () => {
  const [showMap, setShowMap] = useState(false);

  const handleOpenMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);

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
              <Typography sx={{ ml: 1, fontWeight: 750 }}>
                +7 (4832) 300-285, +7 930 820-02-85
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FaEnvelope />
              <Typography sx={{ ml: 1 }}>tanis32@mail.ru</Typography>
            </Box>
            <Tooltip title="Кликните, чтобы открыть карту" arrow>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "&:hover": {
                    textDecoration: "underline",
                    color: "gray",
                  },
                }}
                onClick={handleOpenMap}
              >
                <FaMapMarkerAlt />
                <Typography sx={{ ml: 1 }}>
                  г. Брянск, пр-т Московский, д. 85А (3-й этаж)
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" component="h4" gutterBottom>
              ООО "ТАНИС"
            </Typography>
            <Typography>
              Ваш надежный партнер в сфере бухгалтерских услуг и автоматизации.
              Благодаря многолетнему опыту и стремлению к совершенству мы
              помогаем компаниям оптимизировать свои расходы на ведение
              бухгалтерского учета и сопровождение программ, достигая своих
              целей с наименьшими затратами времени и средств.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={showMap}
        onClose={handleCloseMap}
        aria-labelledby="map-modal-title"
        aria-describedby="map-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 800,
            height: 500,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 24,
            p: 2,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseMap}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              zIndex: 1,
            }}
          >
            <FaTimes />
          </IconButton>

          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A084e85d38a40a8f7562bc0b20c0e4cdd0e89a62049b91d53575a10014e6107c6&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "none", borderRadius: 4 }}
            title="Yandex Map"
          ></iframe>
        </Box>
      </Modal>
    </Footer>
  );
};

export default FooterComponent;
