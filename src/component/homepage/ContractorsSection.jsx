import { Box, Button, Container, Typography } from "@mui/material";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const ContractorsSection = () => {
  return (
    <>
   
        
      <Container className="contractionsection" maxWidth="lg" sx={{ marginTop: "130px", position:"relative"  }}>
        <Box className="flex justify-between gap-9 contractionsection" sx={{paddingBottom:'180px'}} >
          <Box className="Contruction" sx={{position:"relative", width:"50%"}}>
            <Box className="Contruction1" sx={{width:"450px", height:"450px"}} >
              <img
                src="src/assets/ContractorSection/conSection1.jpg"
                alt="conctrionsection1"
                width={"100%"}
               
              />
            </Box>
            <Box className="Contruction1" sx={{position:"absolute",top:"280px", left:"250px" ,width:"250px", height:"250px"}}>
              <img
                src="src/assets/ContractorSection/ConSection2.jpeg"
                alt="constrionsection2"
                width={"100%"}
              />
            </Box>
            <Box className="Contruction1" sx={{position:"absolute",top:"280px", left:"250px" ,width:"250px", height:"250px"}}>
              <img
                src="src/assets/ContractorSection/ConSection2.jpeg"
                alt="constrionsection2"
                width={"100%"}
              />
            </Box>
          </Box>
          <Box sx={{  Width: "50%" ,display:"flex", flexDirection:"column",gap:"30px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#cb4154",
                fontWeight: "600",
                fontFamily: "sans-serif",
              }}
            >
              About Company
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                fontFamily: "sans-serif",
                color: "#131D3b",
                fontWeight: "600",
              }}
            >
              {" "}
              Professional Roofing Contractors
            </Typography>
            <Typography sx={{maxWidth:"530px", fontSize:"17px" ,color:"#171717",fontFamily:"sans-serif"}}>
              Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
              Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </Typography>
            <Typography sx={{maxWidth:"530px", fontSize:"17px" ,color:"#171717",fontFamily:"sans-serif"}}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Vivamus suscipit tortor eget felis
              porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae.
            </Typography>
            <Box>
                <MilitaryTechIcon />
                <span>Certified Company</span>
            </Box>
           <Button sx={{width:"152px", height:"47px", bgcolor:"#cb4154", color:"#fafafa"}}> Read more</Button>

          </Box>
        </Box>
        <Box className="contractorbox" sx={{width:"100%" ,display:"flex", justifyContent:"between", borderRadius:"30px", position:"relative", top:'80px' }}>
            <Box className="contractorbox1" sx={{bgcolor:"#cb4154", width:"25%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",height:"170px"}}>
                <Typography sx={{fontSize:"30px", fontFamily:'sans-serif', fontWeight:"900", color:"#fafafa"}}>15k</Typography>
                <Typography sx={{fontSize:"17px", fontFamily:"sans-serif" ,color:"#fafafa"}}>Years in Business </Typography>
            </Box>
            <Box className="contractorbox1" sx={{bgcolor:"#fafafa", width:"25%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",height:"170px"}}>
                <Typography sx={{fontSize:"30px", fontFamily:'sans-serif', fontWeight:"900", color:"#131d3b"}}>1.5k</Typography>
                <Typography sx={{fontSize:"17px", fontFamily:"sans-serif" ,color:"#171717"}}>Happy Clients</Typography>
            </Box>
            <Box className="contractorbox1" sx={{bgcolor:"#131d3b", width:"25%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height:"170px"}}>
                <Typography sx={{fontSize:"30px", fontFamily:'sans-serif', fontWeight:"900", color:"#fafafa"}}>2.5k</Typography>
                <Typography sx={{fontSize:"17px", fontFamily:"sans-serif" ,color:"#fafafa"}}>Project Completed </Typography>
            </Box>
            <Box className="contractorbox1" sx={{bgcolor:"#b43041", width:"25%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",height:"170px"}}>
                <Typography sx={{fontSize:"30px", fontFamily:'sans-serif', fontWeight:"900", color:"#fafafa"}}>150+</Typography>
                <Typography x={{fontSize:"17px", fontFamily:"sans-serif" ,color:"#fafafa"}}>Trained Staff</Typography>
            </Box>

        </Box>
      </Container>
   
    </>
  );
};
export default ContractorsSection;
