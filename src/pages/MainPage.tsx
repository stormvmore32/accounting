import React, { useEffect } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaBars,
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaHandshake,
  FaChevronDown,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const StyledAppBar = styled(AppBar)({
  background: "#000000",
  color: "#ffffff",
});

const HeroSection = styled(Box)({
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

const FaqSection = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "4rem 0",
});

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

const Footer = styled(Box)({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "4rem 0 2rem",
});

const MainPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //   const isMobile = useMediaQuery("(max-width:900px)");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Услуги", id: "services" },
    { name: "Вопрос/ответ", id: "faq" },
    { name: "Полезная информация", id: "info" },
    { name: "Контакты", id: "footer" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Танис
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#ffffff", mx: 1 }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        <HeroSection id="hero">
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Бухгалтерские услуги
            </Typography>
            <Typography variant="h5" gutterBottom>
              Автоматизация бухгалтерии
            </Typography>
          </Container>
        </HeroSection>

        <Container id="services" maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            textAlign="center"
          >
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
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "#333" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#666" }}>
                      {item.content}
                    </Typography>
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

        <Footer id="footer">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Танис
                </Typography>
                <Typography>
                  Профессиональные услуги по ведению и автоматизации
                  бухгалтерии.
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
        </Footer>
      </Box>
    </Box>
  );
};

export default MainPage;
