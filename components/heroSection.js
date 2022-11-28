import { Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import Search from "./searchComponent";

const Hero = () => {
  return (
    <Container
      fixed
      // style={{
      //   backgroundImage: 'url("/bg.jpg")',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <Box sx={{ pt: 12, pb: 5, mx: "auto" }}>
        <Typography
          gutterBottom
          component="h4"
          variant="h4"
          sx={{
            textTransform: "uppercase",
            borderRadius: 2,
            fontWeight: 800,
            py: 3,
          }}
        >
          Find the perfect freelance service near you.
        </Typography>
        <Search />
        <Button fullWidth variant="contained">
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
