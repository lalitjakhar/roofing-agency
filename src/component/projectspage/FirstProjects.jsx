import { Box, Typography } from "@mui/material";

const FirstProjects=()=>{
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
            Projects
          </Typography>
        </Box>
      </Box>
        </>
    )
};export default FirstProjects;