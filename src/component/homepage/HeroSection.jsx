import { Box, Typography,Container, Button, TextField } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const Herosection=()=>{
    return(
<> 
<Box className="herosectioncontent w-100 relative" >


    <Container  maxwidth="xl">
        <Box sx={{width:"100%", display:"flex",flexDirection:"column", gap:"30px",paddingBlock:"17Rem"}}>
        <Typography sx={{fontSize:{sm:"36px" ,xs:"36px", md:"56px",lg:"56px"}, color:"#ffffff", fontFamily:"sans-serif", fontWeight:"900", lineHeight:"60px"}}>We are Commercial <br /> Roofing Experts</Typography>
        <Typography sx={{fontSize:"17px", fontFamily:"sans-serif", color:"#ffffff"}}>Roofing Problem? Call 24Hr Emergency Service</Typography>
        <Button startIcon={<LocalPhoneIcon />} sx={{width:"175px", height:"48px", bgcolor:"#cb4154",color:"#ffffff"}}>+12345678</Button>
        </Box>


        <Box className="w-full flex justify-between p-9 rounded-lg MuiBox-root align center" sx={{bgcolor:"#ffffff",}}>
            <Box>
                <Typography sx={{fontsize:"17px" ,color:"#cb4154",fontFamily:"sans-serif", fontWeight:"800"}}>Quick Service Request</Typography>
                <Typography>Send Inspection Request</Typography>
            </Box>
            <Box className="flex gap-3 MuiBox-root">
            <Box sx={{ width:" 200px", maxWidth: '100%' }}>
                <TextField fullWidth placeholder="Enter your full name" id="fullWidth" sx={{"& .MuiOutlinedInput-input":{
                    height:"14px",
                    bgcolor:"#fafafa"
                }}}  />
            </Box>
            <Box sx={{ width: "200px", maxWidth: '100%', }}>
                <TextField fullWidth placeholder="Phone number" id="fullWidth" sx={{"& .MuiOutlinedInput-input":{
                    bgcolor:"#fafafa",
                    height:"14px"
                }}} />
            </Box>
            <Button sx={{width:"160px",height:"47px", bgcolor:"#cb4154", color:"#ffffff"}}>Send</Button>
            </Box>
        </Box>

    </Container>

</Box>
</>

    )
};
export default Herosection