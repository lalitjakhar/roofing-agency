import { Box, Typography } from "@mui/material";

const ServicesSection = () => {
  return (
    <>
      <Box className="servicescontent">
        <Box>
          <Typography
            className="text-center"
            sx={{
              paddingBlock: "180px",
              fontSize: "58px",
              color: "white",
              bgcolor: "#171717",
              opacity: "0.6",
              fontWeight: "800",
            }}
          >
            {" "}
            Services
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ServicesSection;
