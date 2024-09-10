import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SuperiorRoofingSection = () => {
  return (
    <>
      <Box bgcolor={"black"} >
        <Container maxWidth="lg" sx={{paddingTop:"270px"}}>
          <Typography
            sx={{ color: "#cb4154", textAlign: "center", fontSize: "17px" }}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "38px",
              fontFamily: "sans-serif",
              fontWeight: "700",
              color: "#fafafa",
            }}
          >
            We Provide Superior Roofing Services
          </Typography>

          <Box className="Supriorcontent" sx={{ display: "flex", gap: "20px" }}>
            <Box>
              <Box>
                <img
                  src="src/assets/SuperiorRoofingSection/services-1.jpg"
                  alt="sevrise1"
                />
              </Box>
              <Box
                sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography sx={{ color: "#fafafa" }}>
                  Roof Installations
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  <a href="#">Read More</a>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <img
                  src="src/assets/SuperiorRoofingSection/services-2.png"
                  alt="sevrise1"
                />
              </Box>
              <Box sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                <Typography sx={{ color: "#fafafa" }}>
                  Roof Installations
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  <a href="#">Read More</a>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <img
                  src="src/assets/SuperiorRoofingSection/service-3-.png"
                  alt="sevrise1"
                />
              </Box>
              <Box sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                <Typography sx={{ color: "#fafafa" }}>
                  Roof Installations
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Typography sx={{ color: "#fafafa" }}>
                  <a href="#">Read More</a>
                </Typography>
              </Box>
            </Box>
          </Box>



          <Box className="flex gap-7 Aditionalroffing" sx={{paddingBlock:"150px"}}>

          <Box className="flex flex-col gap-8 Aditionalroffing1" sx={{width:"50%", paddingTop:"50px", order:{lg:"1",md:"1",sm:"2",xs:"2"}}}>
            <Typography sx={{color:"#cb4154", fontSize:"17px", fontFamily:"sans-serif", }}>Additional Services</Typography>
            <Typography sx={{color:"white", fontSize:"38px", fontWeight:"800" }}>We Also Offer</Typography>
            <Typography sx={{color:"white", fontSize:"17px", fontFamily:"sans-serif"}}>Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.</Typography>
            <Box sx={{color:"white"}}>
              <Typography sx={{paddingBottom:"10px"}}><ArrowForwardIcon /> <span>Stucco</span></Typography>
              <Typography sx={{paddingBottom:"10px"}}><ArrowForwardIcon /> <span>Window Replacement</span></Typography>
              <Typography sx={{paddingBottom:"10px"}}><ArrowForwardIcon /> <span>Skylights & Sun Tunnels</span></Typography>
              <Typography sx={{paddingBottom:"10px"}}><ArrowForwardIcon /> <span>Chimney Spark Arrestor</span></Typography>
              <Typography sx={{paddingBottom:"10px"}}><ArrowForwardIcon /> <span>Interior Sheetrock Repair</span></Typography>
            </Box>
            <Button sx={{bgcolor:"#cb4154", width:"147px", height:"47px", color:"#fafafa"}}>know more</Button>
           </Box>


           <Box className="flex justify-end Aditionalroffing1" width={"50%"} sx={{order:{lg:"2",md:"2",sm:"1",xs:"1"}}}>
            <Box className="Aditionalroffing1" width={500} height={649}>
            <img src="src/assets/SuperiorRoofingSection/services-4.jpg" alt=""width={"100%"}/>
            </Box>
           </Box>

          </Box>





        </Container>
      </Box>
    </>
  );
};
export default SuperiorRoofingSection;
