import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import Brightness5Icon from '@mui/icons-material/Brightness5';

const SixReasonsSection = () => {
  return (
    <>
      <div>
        <Box className="w-full sixcontentbgimg">
          <Container maxWidth="lg" sx={{paddingBlock:"100px"}}>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#cb4154",
                fontFamily: "sans-serif",
                fontWeight: "500",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                color: "#131d3b",
                fontFamily: "sans-serif",
                fontWeight: "700",
                marginBottom:"30px"
              }}
            >
              Six Reasons For People Choosing Us
            </Typography>
          
         <Box sx={{display:"flex", flexWrap:"wrap", width:"100%", gap:"20px"}}>


         <Box className="sixresoncontent" textAlign={"center"} width={"32%"} sx={{bgcolor:"#ffffff",padding:"30px", display:"flex",flexDirection:"column", gap:"10px"}}>
            <Typography>
              <MilitaryTechIcon sx={{fontSize:"41px"}} />
            </Typography>
            <Typography sx={{color:"#cb4154", fontFamily:"sans-serif", fontWeight:"600"}}>Quality Material</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </Typography>
          </Box>
          <Box className="sixresoncontent" textAlign={"center"} width={"32%"} sx={{bgcolor:"#ffffff",padding:"30px",display:"flex",flexDirection:"column", gap:"10px" }}>
            <Typography>
              <CheckCircleOutlineIcon sx={{fontSize:"41px"}} />
            </Typography>
            <Typography sx={{color:"#cb4154", fontFamily:"sans-serif", fontWeight:"600"}}>Accredited</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </Typography>
          </Box>
          <Box className="sixresoncontent" textAlign={"center"} width={"32%"} sx={{bgcolor:"#ffffff" ,padding:"30px",display:"flex",flexDirection:"column", gap:"10px"}}>
            <Typography>
              <PersonOutlineIcon sx={{fontSize:"51px"}} />
            </Typography>
            <Typography sx={{color:"#cb4154", fontFamily:"sans-serif", fontWeight:"600"}}>Trained Workers</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </Typography>
          </Box>
          <Box className="sixresoncontent" textAlign={"center"} width={"32%"} sx={{bgcolor:"#ffffff" ,padding:"30px",display:"flex",flexDirection:"column", gap:"10px"}}>
            <Typography>
              <AccessTimeIcon sx={{fontSize:"41px"}} />
            </Typography>
            <Typography sx={{color:"#cb4154", fontFamily:"sans-serif", fontWeight:"600"}}>Time Availability</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </Typography>
          </Box>
          <Box className="sixresoncontent" textAlign={"center"} width={"32%"} sx={{bgcolor:"#ffffff", padding:"30px",display:"flex",flexDirection:"column", gap:"10px"}}>
            <Typography>
              <WifiCallingIcon sx={{fontSize:"41px"}} />
            </Typography>
            <Typography sx={{color:"#cb4154", fontFamily:"sans-serif", fontWeight:"600"}}>Quick Response</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </Typography>
          </Box>
          <Box className="sixresoncontent" textAlign={"center"} width={"32%"} sx={{bgcolor:"#ffffff",padding:"30px",display:"flex",flexDirection:"column", gap:"10px"}}>
            <Typography>
              <Brightness5Icon  sx={{fontSize:"41px"}} />
            </Typography>
            <Typography sx={{color:"#cb4154", fontFamily:"sans-serif", fontWeight:"600"}}>1 Year Warranty</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </Typography>
          </Box>

         </Box>
         </Container>
        </Box>
      </div>
    </>
  );
};
export default SixReasonsSection;
