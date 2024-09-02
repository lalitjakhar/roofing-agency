import { Box, Button, Container, Typography } from "@mui/material";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const ContractorsSection = () => {
  return (
    <>
    <Box width={"100%"} height={"100%"}>
        
      <Container className="contractionsection" maxWidth="lg" sx={{ marginTop: "130px",  }}>
        <Box className="flex justify-between gap-9 contractionsection" >
          <Box className="contructionimag" sx={{position:"relative", width:"50%"}}>
            <Box className="contructionimag2" sx={{width:"450px", height:"450px"}} >
              <img
                src="src/assets/ContractorSection/conSection1.jpg"
                alt="conctrionsection1"
                width={"100%"}
               
              />
            </Box>
            <Box className="contructionimag2" sx={{position:"absolute",top:"280px", left:"250px" ,width:"250px", height:"250px"}}>
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
      </Container>
    </Box>
    </>
  );
};
export default ContractorsSection;
