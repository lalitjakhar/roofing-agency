import { Box, Container, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const ContactSection = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        className="flex justify-between gap-5 contactsection"
        sx={{ paddingBlock: "80px" }}
      >
        <Box
          className="p-6 contactsection1"
          sx={{
            borderRadius: "5px",
            boxShadow: "3",
            bgcolor: "#ffffff",
            width: "33%",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              marginBottom: "30px",
              fontSize: "23px",
              fontWeight: "700",
              fontFamily: "sans-serif",
              color: "#131d3b",
            }}
            className="RedStartLineOnPara"
          >
            <span style={{marginLeft:"80px"}}>Main Office</span>
          </Typography>
          <Box className="flex gap-3">
            <SendIcon sx={{ color: "#cb4154", rotate: "-35deg" }} />
            <Box>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                  color: "#131d3b",
                }}
              >
                San Francisco, CA
              </Typography>
              <Typography
                sx={{
                  color: "#171717",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  lineHeight: "2",
                }}
              >
                20 Reynolds Neck Str-50121
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          className="p-6 contactsection1"
          sx={{
            borderRadius: "5px",
            boxShadow: "3",
            bgcolor: "#ffffff",
            width: "33%",
            position: "relative",
          }}
        >
         <Typography
            sx={{
              marginBottom: "30px",
              fontSize: "23px",
              fontWeight: "700",
              fontFamily: "sans-serif",
              color: "#131d3b",
            }}
            className="RedStartLineOnPara"
          >
            <span style={{marginLeft:"80px"}}>Make a Call</span>
          </Typography>
          <Box className="flex gap-3">
            <PhoneIcon sx={{ color: "#cb4154" }} />
            <Box>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                  color: "#131d3b",
                }}
              >
                +1 2345 678
              </Typography>
              <Typography
                sx={{
                  color: "#171717",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  lineHeight: "2",
                }}
              >
                Mon - Sat: 09am - 08pm
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          className="p-6 contactsection1"
          sx={{
            borderRadius: "5px",
            boxShadow: "3",
            bgcolor: "#ffffff",
            width: "33%",
            position: "relative",
          }}
        >
            <Typography
            sx={{
              marginBottom: "30px",
              fontSize: "23px",
              fontWeight: "700",
              fontFamily: "sans-serif",
              color: "#131d3b",
            }}
            className="RedStartLineOnPara"
          >
            <span style={{marginLeft:"80px"}}>Send a mail</span>
          </Typography>
          <Box className="flex gap-3">
            <MailOutlineIcon sx={{ color: "#cb4154" }} />
            <Box>
              <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif" }}>
                info@example.com
              </Typography>
              <Typography
                sx={{
                  color: "#171717",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  lineHeight: "2",
                }}
              >
                info@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default ContactSection;
