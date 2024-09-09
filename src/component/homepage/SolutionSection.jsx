import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/material";

const SolutionSection = () => {
  return (
    <>
      <Box className="w-full SolutionSectioncontent">
        <Box sx={{ paddingBlock: "120px" }}>
          <Typography
            className="text-center"
            sx={{
              color: "#cb4154",
              fontSize: "17px",
              fontFamily: "sans-serif",
              fontWeight: "900",
              lineHeight: "20px",
            }}
          >
            Dont Know What To Start With?
          </Typography>
          <Typography
            className="text-center"
            sx={{
              fontSize: "38px",
              color: "#ffffff",
              fontWeight: "800",
              fontFamily: "sans-serif",
            }}
          >
            Get A Solutions For All Roofing Services
          </Typography>
        </Box>

        <Box className="w-full" sx={{ bgcolor: "white" }}>
          <Container
            maxWidth="lg"
            className="flex relative solutioncontent"
            sx={{ paddingTop: "70px" }}
          >
            <Box
              width={"50%"}
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              className="solutioncontent1"
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#cb4154",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                }}
              >
                Offices
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  color: "#131d3b",
                }}
              >
                Head Office
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  color: "#171717",
                  maxWidth: "450px",
                  paddingBottom: "30px",
                }}
              >
                Cras ultricies ligula sed magna dictum porta. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae.
              </Typography>
              <Typography>24th St. Ave. San Francisco, California</Typography>
              <Typography>Phone: +1 2345 678</Typography>
              <Typography>Email: office@example.com</Typography>
            </Box>
            <Box
              width={"50%"}
              className="flex flex-col gap-4 solutioncontent1"
              sx={{
                position: "relative",
                bottom: "160px",
                bgcolor: "white",
                padding: "30px",
              }}
            >
              <Typography
                sx={{
                  color: "#cb4154",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                }}
              >
                Free Consultation
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                  color: "#131d3b",
                  fontWeight: "900",
                }}
              >
                Get A Free Quote
              </Typography>
              <TextField
                type="text"
                fullWidth
                placeholder="Enter your full name"
                id="fullWidth"
              />
              <TextField
                type="number"
                fullWidth
                placeholder="phone number"
                id="fullWidth"
              />
              <TextField
                type="email"
                fullWidth
                placeholder="Your Email"
                id="fullWidth"
              />
              <TextField
                type="text"
                fullWidth
                placeholder="Service Description"
                id="fullWidth"
              />
              <textarea
                style={{
                  width: "100%",
                  border: "1px solid #dedddc",
                  borderRadius: "5px",
                }}
                name=""
                id=""
                rows={5}
                placeholder="message"
              ></textarea>
              <Button
                sx={{
                  width: "204px",
                  height: "47px",
                  bgcolor: "#b43041",
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
              >
                {" "}
                Get A free quote
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default SolutionSection;
