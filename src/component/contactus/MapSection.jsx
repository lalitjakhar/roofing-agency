import { Box, Container } from "@mui/material";



const MapSection = () => {

  return (
    <>
       <Container maxWidth="lg" sx={{paddingBlock:"100px"}}>
            <Box className="google-map" sx={{ height: "100%", width: "100%" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2817766863697!2d-122.41941868468119!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5e48e2b1%3A0x1c3e4c81bfa4f87a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1631778978954!5m2!1sen!2sin" // Replace with your Google Maps URL
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >

        </iframe>
      </Box>
    </Container>
    </>
  );
};
export default MapSection;
