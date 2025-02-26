import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaHandshake,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = styled(Box)({
  padding: "2rem",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 20px #FFD700",
    borderBottom: "1px solid #FFD700",
  },
});

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 50,
    });
  }, []);

  const services = [
    {
      title: "Заголовок_1",
      icon: <FaCalculator />,
      description: "Описание_услуги_1",
    },
    {
      title: "Заголовок_2",
      icon: <FaChartLine />,
      description: "Описание_услуги_2",
    },
    {
      title: "Заголовок_3",
      icon: <FaFileInvoiceDollar />,
      description: "Описание_услуги_3",
    },
    {
      title: "Заголовок_4",
      icon: <FaHandshake />,
      description: "Описание_услуги_4",
    },
  ];

  return (
    <Container id="services" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center">
        Наши услуги
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 4,
          mt: 4,
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} data-aos="fade-up">
            <Box sx={{ fontSize: 40, color: "#FFD700", mb: 2 }}>
              {service.icon}
            </Box>
            <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
              {service.title}
            </Typography>
            <Typography color="text.secondary">
              {service.description}
            </Typography>
          </ServiceCard>
        ))}
      </Box>
    </Container>
  );
};

export default ServiceSection;
