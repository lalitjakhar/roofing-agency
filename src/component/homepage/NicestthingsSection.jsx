import { Box, Container, Rating, Typography } from "@mui/material";
import styled from "styled-components";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#cb4154',
      
    
    },
    
  });


const NicestthingsSection=()=>{
    return(
        <>
        <Container maxWidth="lg">

            <Box className="text-center" sx={{paddingTop:"80px"}}>
                <Typography sx={{fontSize:"38px", fontWeight:"700", color:"#131d3b", fontFamily:"sans-serif"}}>People Say The Nicest Things</Typography>
                <Typography sx={{fontSize:"17px", fontFamily:"sans-serif", color:"#171717"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
                </Typography>
            </Box>

           <Box className="flex gap-7 " sx={{paddingBlock:"80px"}}>
           <Box className="flex flex-col gap-y-4 p-6 shadow-2xl" width={"33%" }>
                <Typography className="flex justify-center" >
                    <img  src="src/assets/nicestthingsection/testemonial-2-4.png" alt="" width={100} height={100} />
                </Typography>
                <Typography className="flex justify-center">
                <StyledRating
                    name="customized-color"
                    defaultValue={4.5}
                    precision={0.5}
                />
                </Typography>
                <Typography className="text-center" sx={{fontSize:"17px", fontFamily:"sans-serif", color:"#131d3b", fontWeight:"700", lineHeight:"16px"}}>Jeniffer Smith</Typography>
                <Typography className="text-center">CHEF</Typography>
                <Typography className="text-center" sx={{fontSize:'17px', fontFamily:"sans-serif", color:"#171717"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
            </Box>

            <Box className="flex flex-col gap-y-4 p-6 shadow-2xl" width={"33%" }>
                <Typography className="flex justify-center" >
                    <img  src="src/assets/nicestthingsection/testimonial-03-free-img-4.png" alt="" width={100} height={100} />
                </Typography>
                <Typography className="flex justify-center">
                <StyledRating
                    name="customized-color"
                    defaultValue={4}
                    precision={0.5}
                />
                </Typography>
                <Typography className="text-center" sx={{fontSize:"17px", fontFamily:"sans-serif", color:"#131d3b", fontWeight:"700", lineHeight:"16px"}}>Pamela Duncan </Typography>
                <Typography className="text-center">DIRECTOR</Typography>
                <Typography className="text-center" sx={{fontSize:'17px', fontFamily:"sans-serif", color:"#171717"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
            </Box>

            <Box className="flex flex-col gap-y-4 p-6 shadow-2xl" width={"33%" }>
                <Typography className="flex justify-center" >
                    <img  src="src/assets/nicestthingsection/testimonial-13-free-img-4.png" alt="" width={100} height={100} />
                </Typography>
                <Typography className="flex justify-center">
                <StyledRating
                    name="customized-color"
                    defaultValue={4.5}
                    precision={0.5}
                />
                </Typography>
                <Typography className="text-center" sx={{fontSize:"17px", fontFamily:"sans-serif", color:"#131d3b", fontWeight:"700", lineHeight:"16px"}}>Steve Tailor</Typography>
                <Typography className="text-center">CHEF</Typography>
                <Typography className="text-center" sx={{fontSize:'17px', fontFamily:"sans-serif", color:"#171717"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
            </Box>

            </Box>
            
        </Container>
        </>

    )
};
export default NicestthingsSection;
