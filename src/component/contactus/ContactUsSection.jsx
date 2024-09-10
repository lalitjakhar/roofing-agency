import { Box, Typography } from "@mui/material";

const ContactUsSection=()=>{
    return(
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
            Contact US
          </Typography>
        </Box>
      </Box>
        </>
    )
};
export default ContactUsSection;