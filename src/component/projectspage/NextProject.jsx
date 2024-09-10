import { Box, Container, Typography } from "@mui/material";

const NextProject = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ paddingBlock: "100px" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "17px",
            fontWeight: "700",
            fontFamily: "sans-serif",
            lineHeight: "1.25em",
            color: "#cb4154",
            marginBottom: "20px",
          }}
        >
          {" "}
          Our Projects
        </Typography>
        <Typography
          sx={{
            fontSize: "38px",
            color: "#131d3b",
            fontFamily: "sans-serif",
            fontWeight: "700",
            lineHeight: "1.3em",
            marginBottom: "50px",
          }}
        >
          Inspiration for Your Next Project
        </Typography>

        <Box className="flex flex-wrap gap-4">
          <Box
            className="flex flex-col gap-5 p-4 nextproject1 "
            sx={{
              border: "1px solid #e9e9e9",
              width: { xl: "32%", md: "32%", sm: "40%", xs: "100%" },
              height: "568px",
              borderRadius: "4px",
            }}
          >
            <Typography>
              <img src="src/assets/nextproject/1.jpg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                color: "#131d3b",
                lineHeight: "2",
              }}
            >
              Low Rise Building
            </Typography>
            <Typography>Commercial</Typography>
          </Box>
          <Box
            className="flex flex-col gap-5 p-4  nextproject1 "
            sx={{
              border: "1px solid #e9e9e9",
              width: { xl: "32%", md: "32%", sm: "40%", xs: "100%" },
              height: "568px",
              marginTop: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography>
              <img src="src/assets/nextproject/2.jpg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                color: "#131d3b",
                lineHeight: "2",
              }}
            >
              Winter Maintenance
            </Typography>
            <Typography>Residential</Typography>
          </Box>
          <Box
            className="flex flex-col gap-5 p-4 nextproject1 "
            sx={{
              border: "1px solid #e9e9e9",
              width: { xl: "32%", md: "32%", sm: "40%", xs: "100%" },
              height: "568px",
              marginTop: "40px",
              borderRadius: "4px",
            }}
          >
            <Typography>
              <img src="src/assets/nextproject/3.jpg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                color: "#131d3b",
                lineHeight: "2",
              }}
            >
              Solar Roof
            </Typography>
            <Typography>Commercial</Typography>
          </Box>

          <Box
            className="flex flex-col gap-5 p-4 nextproject1 "
            sx={{
              border: "1px solid #e9e9e9",
              width: { xl: "32%", md: "32%", sm: "40%", xs: "100%" },
              height: "568px",
              borderRadius: "4px",
            }}
          >
            <Typography>
              <img src="src/assets/nextproject/4.jpg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                color: "#131d3b",
                lineHeight: "2",
              }}
            >
              Solar Roof
            </Typography>
            <Typography>Residential</Typography>
          </Box>

          <Box
            className="flex flex-col gap-5 p-4 nextproject1 "
            sx={{
              border: "1px solid #e9e9e9",
              width: { xl: "32%", md: "32%", sm: "40%", xs: "100%" },
              height: "568px",
              marginTop: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography>
              <img src="src/assets/nextproject/5.jpg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                color: "#131d3b",
                lineHeight: "2",
              }}
            >
              Traditional Style Pattern
            </Typography>
            <Typography>Residential</Typography>
          </Box>

          <Box
            className="flex flex-col gap-5 p-4 nextproject1 "
            sx={{
              border: "1px solid #e9e9e9",
              width: { xl: "32%", md: "32%", sm: "40%", xs: "100%" },
              height: "568px",
              marginTop: "40px",
              borderRadius: "4px",
            }}
          >
            <Typography>
              <img src="src/assets/nextproject/6.jpg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                color: "#131d3b",
                lineHeight: "2",
              }}
            >
              Modern Style Pattern
            </Typography>
            <Typography>Residential</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default NextProject;
