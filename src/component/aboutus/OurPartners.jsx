import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const OurPartners=()=>{
    return(
        <>
        <Box sx={{bgcolor:"#cb4154"}}>
            <Container maxWidth="lg" sx={{paddingBlock:"100px"}}>
                <Typography textAlign={"center"} sx={{fontSize:"17px", color:"#ffffff", fontFamily:"sans-serif", fontWeight:"600", marginBottom:"40px" }}> Working With The Best</Typography>
                <Typography textAlign={"center"} sx={{fontSize:"38px", fontFamily:'sans-serif', fontWeight:"900", color:"#ffffff", lineHeight:'1', marginBottom:"40px"}}> Our Partners</Typography>


            <Box className="flex justify-around items-center">
                <Typography >
                    <img src="src/assets/ourpartner/logo-1.png" alt="" width={214} height={47}/>
                </Typography>
                <Typography>
                    <img src="src/assets/ourpartner/logo-2.png" alt=""width={214} height={47} />
                </Typography>
                <Typography>
                    <img src="src/assets/ourpartner/logo-4.png" alt=""width={214} height={47} />
                </Typography>
                <Typography>
                    <img src="src/assets/ourpartner/logo-17.png" alt="" width={214} height={47} />
                </Typography>
            </Box>

            </Container>
        </Box>
        </>
    )
};
export default OurPartners;