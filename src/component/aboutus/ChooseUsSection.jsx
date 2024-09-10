import { Box, Button, Container, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ChooseUsSection = () => {
  return (
    <>
      <Box className="chooseussection">
        <Container maxWidth="lg" sx={{ paddingBlock: "120px" }}>
          <Typography
            sx={{
              color: "#cb4154",
              fontSize: "17px",
              fontFamily: "sans-serif",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {" "}
            Why Choose Us
          </Typography>
          <Typography
            sx={{
              fontSize: "38px",
              fontFamily: "sans-serif",
              fontWeight: "800",
              color: "#131d3b",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            {" "}
            Reason For Choosing Us
          </Typography>

          <Box className="flex justify-between gap-7">
            <Box
              className="flex flex-col gap-5"
              sx={{ width: "33%", boxShadow: "3", paddingBlock: "50px" }}
            >
              <Typography textAlign={"center"}>
                {" "}
                <CheckCircleOutlineIcon sx={{ fontSize: "45px" }} />
              </Typography>
              <Typography
                textAlign={"center"}
                sx={{
                  color: "#cb4154",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Accredited Company
              </Typography>
              <Typography textAlign={"center"} sx={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </Typography>
              <Typography textAlign={"center"}>
                {" "}
                <Button sx={{ color: "#cb4154" }}>know more</Button>
              </Typography>
            </Box>
            <Box
              className="flex flex-col gap-5"
              sx={{ width: "33%", boxShadow: "3", paddingBlock: "50px" }}
            >
              <Typography textAlign={"center"}>
                {" "}
                <AdminPanelSettingsIcon sx={{ fontSize: "45px" }} />
              </Typography>
              <Typography
                textAlign={"center"}
                sx={{
                  color: "#cb4154",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                100% Guarantee
              </Typography>
              <Typography textAlign={"center"} sx={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </Typography>
              <Typography textAlign={"center"}>
                {" "}
                <Button sx={{ color: "#cb4154" }}>know more</Button>
              </Typography>
            </Box>
            <Box
              className="flex flex-col gap-5"
              sx={{ width: "33%", boxShadow: "3", paddingBlock: "50px" }}
            >
              <Typography textAlign={"center"}>
                {" "}
                <CheckCircleOutlineIcon sx={{ fontSize: "45px" }} />
              </Typography>
              <Typography
                textAlign={"center"}
                sx={{
                  color: "#cb4154",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Quality Material
              </Typography>
              <Typography textAlign={"center"} sx={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </Typography>
              <Typography textAlign={"center"}>
                {" "}
                <Button sx={{ color: "#cb4154" }}>know more</Button>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default ChooseUsSection;
