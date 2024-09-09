import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const BusinessSection=()=>{
    return(
        <>
        <div>

             <Container className="flex justify-between mt-7 mb-7" maxWidth="lg">
             <Box sx={{width:"39%"}}>
                <Typography sx={{ fontSize:"21px",color:"#cb4154", fontWeight:"800", fontFamily:"sans-serif", lineHeight:"26px"}}>We Are Business Who Cares, And it <br /> Shows</Typography>
                <Typography sx={{fontSize:"17px", color:"#171717",fontFamily:"sans-serif"}}>OVER 540 “5 STARS” REVIEWS AND CLIMBING</Typography>
             </Box>
             <Box className="flex items-center gap-x-4 border-l-2 justify-center" sx={{width:"30%"}}>
                <Box>
                <Typography>
                    <img src="src/assets/businesssection/yelp.png" alt="yelpimage" height={76} width={76} />
                </Typography>
                </Box>
                <Box>
                    <Typography sx={{fontSize:"17px", fontWeight:"700", fontFamily:"sans-serif", color:"#131d3b"}}>Rate Us on Yelp</Typography>
                    <Typography>248 reviews</Typography>
                </Box>
             </Box>
             <Box className="flex items-center gap-x-4  border-l-2 justify-center" sx={{width:"30%"}}>
                <Box>
                <Typography>
                    <img src="src/assets/businesssection/logo-google.png" alt="yelpimage" height={76} width={76} />
                </Typography>
                </Box>
                <Box>
                    <Typography sx={{fontSize:"17px", fontWeight:"700", fontFamily:"sans-serif", color:"#131d3b"}}>Rate Us on Google</Typography>
                    <Typography>1,248 reviews</Typography>
                </Box>
             </Box>
             </Container>

        </div>
        </>
    )
};
export default BusinessSection;