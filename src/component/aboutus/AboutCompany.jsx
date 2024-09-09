import { Box, Button, Container, Typography } from "@mui/material";

const AboutCompany = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        className="flex gap-6 "
        sx={{ paddingBlock: "80px" }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "sans-serif",
              color: "#cb4154",
              fontWeight: "700",
            }}
          >
            About Company
          </Typography>
          <Typography
            sx={{
              fontSize: "38px",
              fontFamily: "sans-serif",
              fontWeight: "800",
              color: "#131d3b",
            }}
          >
            {" "}
            Professional and Expert Roofing Contractor
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "sans-serif",
              color: "#171717",
              paddingBottom: "30px",
              lineHeight: "2",
            }}
          >
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada..
          </Typography>
          <Button
            sx={{
              width: "152px",
              height: "47px",
              bgcolor: "#cb4154",
              color: "#ffffff",
              fontFamily: "sans-serif",
            }}
          >
            {" "}
            read more
          </Button>
        </Box>
        <Box className="flex flex-col gap-4">
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "sans-serif",
              color: "#171717",
              lineHeight: "2",
            }}
          >
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada..
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "sans-serif",
              color: "#171717",
              lineHeight: "2",
            }}
          >
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada..
          </Typography>
          <Box className="flex items-center gap-5">
            <Box>
              <img
                src="src/assets/aboutcompany/founder.jpg"
                alt=""
                height={98}
                width={98}
                style={{ borderRadius: "50px" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  color: "#131d3b",
                  fontWeight: "800",
                }}
              >
                Max Stewart
              </Typography>
              <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif" }}>
                FOUNDER
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "sans-serif",
                color: "#131d3b",
                fontWeight: "800",
              }}
            >
              Need help? Contact me
            </Typography>
            <Typography>+1 2345 678 or info@example.com</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default AboutCompany;
