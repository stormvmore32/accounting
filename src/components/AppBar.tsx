import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const StyledAppBar = styled(AppBar)({
  background: "#000000",
  color: "#ffffff",
});

const BarApp = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //   const isMobile = useMediaQuery("(max-width:900px)");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Домой", id: "hero" },
    { name: "Услуги", id: "services" },
    { name: "Вопрос/ответ", id: "faq" },
    { name: "Полезная информация", id: "info" },
    { name: "Контакты", id: "footer" },
  ];

  return (
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
  );
};

export default BarApp;
