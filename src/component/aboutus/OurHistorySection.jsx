import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/material";

const OurHistorySection=()=>{
    return(
        <>
            <Box  className="w-full ourhistorycontent" sx={{position:"relative"}}>
               <Box sx={{position:"absolute", top:"80px", zIndex:"0"}}>
               <img src="src/assets/ourhistorysection/sketch-1.png" alt="" width={700} height={500} />
               </Box>
              <Container maxWidth="lg" sx={{paddingBlock:"80px"}}>
                <Typography className="text-center" sx={{color:"#cb4154", fontSize:"17px", fontFamily:"sans-serif", fontWeight:"700"}}>Our History</Typography>
                <Typography className="text-center" sx={{fontSize:"38px", fontFamily:'sans-serif', color:"#ffffff", fontWeight:"800", marginBottom:"60px"}}>Superior Roofing Services</Typography>
               <Box className="flex " sx={{gap:"80px"}}>
               <Box className="flex gap-4" width={"50%"} sx={{zIndex:"1"}}>
                    <Box >
                        <img src="src/assets/ourhistorysection/about-us-11.jpg" alt="" width={280} height={280} className="firstaboutimg" />
                    </Box>
                    <Box>
                        <img src="src/assets/ourhistorysection/about-us-12.jpg" alt="" width={280} height={280} className="firstaboutimg"  />
                    </Box>
                </Box>
                <Box width={"50%"}>
                    <Typography sx={{color:"#cb4154", fontSize:"17px", fontFamily:"sans-serif", fontWeight:"700"}}>1993 - 2017</Typography>
                    <Typography sx={{fontSize:"24px", fontWeight:'700', fontFamily:'sans-serif', color:"#ffffff"}}>Our Most Efficient Year </Typography>
                    <Typography sx={{fontSize:"17px", fontFamily:"sans-serif", lineHeight:"2", color:"#ffffff"}}>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.
                    </Typography>
                    <Button sx={{width:"152px", height:"47px", bgcolor:"#cb4154", color:"#ffffff"}}>read more</Button>
                </Box>
               </Box>
              </Container>
            </Box>
        </>
    )
};
export default OurHistorySection;