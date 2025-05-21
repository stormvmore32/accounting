import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import abacus from "../assets/abacus_1.svg";
import computer from "../assets/computer.svg";
import report from "../assets/report.svg";
import support from "../assets/support.svg";
import database from "../assets/database.svg";

const ServiceCard = styled(Card)(() => ({
  // height: "25vh",
  height: "100%",
  transition: "transform 0.3s",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "35px",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

const DetailCard = styled(Card)({
  height: "100%",
  transition: "all 0.3s",
  backgroundColor: "#f1ebd5",
  borderRadius: "20px",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
  },
});

const infoDetailCards = [
  {
    icon: <img src={support} width="50px" height="50px" />,
    title: "Полное бухгалтерское сопровождение",
    description:
      "Комплексное бухгалтерское сопровождение, позволяющее вам сосредоточиться на развитии бизнеса, не отвлекаясь на рутинные задачи. Мы берем на себя все аспекты бухгалтерии, включая учет, налоговые расчеты и ведение отчетности, обеспечивая полное соответствие действующему законодательству.",
  },
  {
    icon: <img src={report} width="50px" height="50px" />,
    title: "Подготовка и сдача отчетности",
    description:
      "Подготовка и сдача деклараций 3-НДФЛ для вычетов, других деклараций и отчетов, когда не требуется полное бухгалтерское сопровождение. Мы гарантируем, что документы будут поданы без ошибок, минимизируя риск налоговых штрафов и обеспечивая прозрачность финансовой деятельности.",
  },
  {
    icon: <img src={database} width="50px" height="50px" />,
    title: "Автоматизация бухгалтерского учета",
    description:
      "Наши решения по автоматизации бухгалтерского учета и расчета заработной платы сделают процесс более эффективным и быстрым. Мы обеспечиваем интеграцию с торговыми программами, что позволяет автоматизировать обмен данными и минимизировать время, затрачиваемое на обработку информации.",
  },
];

const ServiceCardComponent = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ServiceCard
            sx={{
              backgroundColor: "#747b8e",
              color: "#FFFFFF",
              backgroundImage: "none",
              pt: "0",
            }}
          >
            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={abacus} width="100px" height="100px" />
              <Typography
                variant="h4"
                component="h2"
                sx={{ mt: 1, color: "#FFFFFF" }}
              >
                Бухгалтерский учет
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#FFFFFF" }}>
                Комплексные бухгалтерские услуги, адаптированные к потребностям
                вашего бизнеса.
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceCard
            sx={{
              backgroundColor: "#e1e8f0",
              backgroundImage: "none",
            }}
          >
            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={computer} width="100px" height="100px" />
              <Typography
                variant="h4"
                component="h2"
                sx={{ mt: 1, color: "#55595c" }}
              >
                Автоматизация учета
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#000000" }}>
                Оптимизируйте свои учетные процессы с помощью наших передовых
                решений по автоматизации. Повысьте эффективность и сократите
                количество ошибок.
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2, mb: 6 }}>
        {infoDetailCards.map((service, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <DetailCard>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ color: "#FFD700" }}>{service.icon}</Box>
                  <Typography variant="h5" component="h3">
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </DetailCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceCardComponent;
