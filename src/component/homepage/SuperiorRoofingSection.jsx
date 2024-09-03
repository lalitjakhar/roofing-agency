import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const SuperiorRoofingSection = () => {
  return (
    <>
      <Box bgcolor={"black"}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: "#cb4154", textAlign: "center", fontSize: "17px" }}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "38px",
              fontFamily: "sans-serif",
              fontWeight: "700",
              color: "#fafafa",
            }}
          >
            We Provide Superior Roofing Services
          </Typography>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <Box>
                <img
                  src="src/assets/SuperiorRoofingSection/services-1.jpg"
                  alt="sevrise1"
                />
              </Box>
              <Box
                sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography sx={{ color: "#fafafa" }}>
                  Roof Installations
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  <a href="#">Read More</a>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <img
                  src="src/assets/SuperiorRoofingSection/services-2.png"
                  alt="sevrise1"
                />
              </Box>
              <Box sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                <Typography sx={{ color: "#fafafa" }}>
                  Roof Installations
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  <a href="#">Read More</a>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <img
                  src="src/assets/SuperiorRoofingSection/service-3-.png"
                  alt="sevrise1"
                />
              </Box>
              <Box sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                <Typography sx={{ color: "#fafafa" }}>
                  Roof Installations
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  <a href="#">Read More</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default SuperiorRoofingSection;
