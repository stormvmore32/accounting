import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import HeroComponent from "../components/Hero";
import ServiceCardComponent from "../components/ServiceCards";
import FooterComponent from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD700",
      light: "#FFE55C",
      dark: "#CCB000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});

const PageWrapper = styled(Box)(() => ({
  background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <HeroComponent />
        <ServiceCardComponent />
        <FooterComponent />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default MainPage;
