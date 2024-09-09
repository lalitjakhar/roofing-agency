import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const FirstAbout =()=>{
    return(
        <>
        <Box  className="firstaboutcontent" >
          <Box>
              <Typography className="text-center" sx={{paddingBlock:"180px", fontSize:"58px", color:"#fff", bgcolor:"#171717", opacity:"0.5", fontWeight:"800"}}> About Us</Typography>
          </Box>
        </Box>
          <Container maxWidth="lg" sx={{paddingBlock:"60px"}}>
            <img src="src/assets/firstabout/about-us-1.jpg" alt="" width={"100%"} height={"100%"} className="firstaboutimg" />
          </Container>
        </>

    )
}
export default FirstAbout;