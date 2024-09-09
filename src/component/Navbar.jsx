import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="absolute"
        right="0"
        left="0"
        sx={{
         
          boxShadow:"none",
          bgcolor:"transparent"
        }}
      >
        <Toolbar sx={{borderBottom: "1px solid black",}}>
          {isSmallScreen && (
            <Box>
              <Typography>
                <img src="src/assets/navbar/navbarlogo.png" alt="Logo" />
              </Typography>
            </Box>
          )}
          <Box sx={{flexGrow: 1, }}>
            <Container maxWidth="xl">
              <Toolbar>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "15px", color: "#fafafa" }}>
                      +(1) 2345 6789
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "15px", color: "#fafafa" }}>
                      11001 14th Street Ave, San Francisco, CA .
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <FacebookIcon
                      sx={{ height: "30px", width: "30px", color: "#fafafa" }}
                    />
                    <TwitterIcon
                      sx={{ height: "30px", width: "30px", color: "#fafafa" }}
                    />
                    <InstagramIcon
                      sx={{ height: "30px", width: "30px", color: "#fafafa" }}
                    />
                    <LinkedInIcon
                      sx={{ height: "30px", width: "30px", color: "#fafafa" }}
                    />
                  </Box>
                </Box>
              </Toolbar>
            </Container>
          </Box>
          {isSmallScreen && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
        {!isSmallScreen && (
          <Toolbar>
            <Container maxWidth="xl">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography>
                    <img src="src/assets/navbar/navbarlogo.png" alt="Logo" />
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <ul
                    style={{
                      display: "flex",
                      gap: "12px",
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "16px",
                      color: "#ffffff",
                    }}
                  >
                    <li>
                      <a href="http://localhost:5175/">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Project</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </Box>
                <Box>
                  <Button
                    sx={{
                      height: "47px",
                      width: "160px",
                      bgcolor: "#cb4154",
                      color: "#ffffff",
                      borderRadius: "7px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    BOOK A CALL
                  </Button>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        )}
      </AppBar>
      {isSmallScreen && (
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <a href="#" style={{ color: "#000" }}>
                      Home
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <a href="#" style={{ color: "#000" }}>
                      About
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <a href="#" style={{ color: "#000" }}>
                      Services
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <a href="#" style={{ color: "#000" }}>
                      Project
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <a href="#" style={{ color: "#000" }}>
                      Contact Us
                    </a>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem>
                <Button
                  sx={{
                    height: "47px",
                    width: "100%",
                    bgcolor: "#cb4154",
                    color: "#ffffff",
                    borderRadius: "7px",
                  }}
                >
                  BOOK A CALL
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
