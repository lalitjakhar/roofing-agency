import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/material";

const RoofInspectionSection = () => {
  return (
    <>
      <Box className=" RoofInspectionSection ">
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center", paddingBottom:"200px" }}
        >
          <Box
            className="flex flex-col gap-8  RoofInspectionSection1"
            sx={{
              textAlign: "center",
              bgcolor: "white",
              paddingBottom: "80px",
              Width: "750px",
              paddingInline: "80px",
            }}
          >
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "sans-serif",
                lineHeight: "1.25em",
                color: "#cb4154",
                marginBottom: "40px",
              }}
            >
              Roof Inspection
            </Typography>

            <Typography
              sx={{
                fontSize: "38px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                lineHeight: "2",
                color: "#131d3b",
              }}
            >
              Scheduling An Appointment
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "sans-serif",
                color: "#171717",
                lineHeight: "2",
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus
              leo.
            </Typography>
            <Box className="flex justify-center gap-3 RoofInspectionSection2">
              <Box>
                {" "}
                <input
                  type="text"
                  width={"100%"}
                  style={{
                    height: "47px",
                    border: "1px solid #e9e9e9",
                    borderRadius: "5px",
                    bgcolor: "#fafafa",
                  }}
                />
              </Box>
              <Box>
                {" "}
                <input
                  type="number"
                  width={"100%"}
                  style={{
                    height: "47px",
                    border: "1px solid #e9e9e9",
                    borderRadius: "5px",
                    bgcolor: "#fafafa",
                  }}
                />
              </Box>
              <Box>
                <Button
                  sx={{
                    width: "160px",
                    height: "47px",
                    bgcolor: "#cb4154",
                    color: "#ffffff",
                  }}
                >
                  send
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default RoofInspectionSection;
