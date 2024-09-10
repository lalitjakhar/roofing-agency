import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <Box className="w-full" bgcolor={"#131d3b"}>
        <Container
          maxWidth="lg"
          className="flex justify-between Footercontent"
          sx={{ paddingBlock: "50px" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontWeight: "800",
                color: "#cb4154",
                marginBottom: "40px",
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              Cras ultricies ligula sed
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              magna dictum porta.
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              Vestibulum ante primis in
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              faucibus orci luctus et
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              ultrices posuere cubilia
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "20px",
              }}
            >
              Curae;
            </Typography>
            <Box className="flex gap-3">
              <span>
                <FacebookIcon sx={{ fontSize: "30px", color: "#cb4154" }} />
              </span>
              <span>
                <TwitterIcon sx={{ fontSize: "30px", color: "#cb4154" }} />
              </span>
              <span>
                <InstagramIcon sx={{ fontSize: "30px", color: "#cb4154" }} />
              </span>
              <span>
                <LinkedInIcon sx={{ fontSize: "30px", color: "#cb4154" }} />
              </span>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontWeight: "800",
                color: "#cb4154",
                marginBottom: "30px",
              }}
            >
              Quick Links
            </Typography>
            <ul style={{ color: "white", fontFamily: "sans-serif" }}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
              <li>
                <a href="#">Credits</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontWeight: "800",
                color: "#cb4154",
                marginBottom: "30px",
              }}
            >
              Our Service
            </Typography>
            <ul style={{ color: "white", fontFamily: "sans-serif" }}>
              <li>
                <a href="#">Roof Installation</a>
              </li>
              <li>
                <a href="#">Roof Repair</a>
              </li>
              <li>
                <a href="#">Leak Repair </a>
              </li>
              <li>
                <a href="#">Window Changing</a>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontWeight: "800",
                color: "#cb4154",
                marginBottom: "40px",
              }}
            >
              Free Estimate
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "40px",
              }}
            >
              Call Us: +1 2345 6789
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              Cras ultricies ligula sed
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              magna dictum porta.
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              Vestibulum ante ipsum
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "17px",
                fontFamily: "sans-serif",
                paddingBottom: "10px",
              }}
            >
              primis.
            </Typography>
          </Box>
        </Container>
        <hr />
        <Container
          maxWidth="lg"
          className="flex justify-between py-5 Footercontent"
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "sans-serif",
              color: "#ffffff",
            }}
          >
            Copyright © 2024 Roofing Agency
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "sans-serif",
              color: "#ffffff",
            }}
          >
            Powered By Astra Theme.
          </Typography>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
