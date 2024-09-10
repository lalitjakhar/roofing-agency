import { Box, Button, Container, Typography } from "@mui/material";

const QuestionSection=()=>{
    return(
        <>
        
       <Container maxWidth="lg" className="flex questionsectioncontent" sx={{paddingBlock:"50px"}}>

        <Box width={"50%"} className="questionsectionimg">
            <img src="src/assets/questionsection/contact-us-1.jpg" alt="" />
        </Box>

        <Box width={"50%"} sx={{paddingTop:"20px"}}  className="questionsectionimg1">
            <Typography  variant="h6"
          sx={{
            fontSize: "17px",
            fontWeight: "700",
            fontFamily: "sans-serif",
            lineHeight: "1.25em",
            color: "#cb4154",
            marginBottom: "20px",
          }}>Get In Touch</Typography>
            <Typography sx={{
            fontSize: "38px",
            color: "#131d3b",
            fontFamily: "sans-serif",
            fontWeight: "700",
            lineHeight: "1.3em",
            marginBottom: "20px",
          }}>Any Question? <br /> Write Down And Send Us</Typography>
            <Box className="flex flex-col gap-4">
                <input type="text" placeholder="Enter your full name" style={{width:'100%',height:"50px", border:"1px solid #e9e9e9", backgroundColor:"#fafafa", borderRadius:'5px', paddingLeft:"15px"}} />
                <input type="number" placeholder="Phone number" style={{width:'100%',height:"50px" , border:"1px solid #e9e9e9", backgroundColor:"#fafafa", borderRadius:'5px', paddingLeft:"15px"}} />
                <input type="email" placeholder="Your Email" style={{width:'100%',height:"50px", border:"1px solid #e9e9e9", backgroundColor:"#fafafa", borderRadius:'5px', paddingLeft:"15px"}} />
                <input type="text" placeholder="Services Description" style={{width:'100%',height:"50px", border:"1px solid #e9e9e9", backgroundColor:"#fafafa", borderRadius:'5px', paddingLeft:"15px"}} />
                <textarea name="" id="" placeholder="Massage" rows={5} style={{width:"100%", border:"1px solid #e9e9e9", backgroundColor:"#fafafa", borderRadius:'5px', paddingLeft:"15px",paddingTop:"10px"}}></textarea>
                <Button sx={{width:"204px", height:"47px", bgcolor:"#cb4154", color:"#ffffff"}}>get a free quote</Button>
            </Box>
        </Box>
       </Container>
        </>
    )
};
export default QuestionSection;