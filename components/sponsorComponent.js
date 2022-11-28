import { Grid, Divider, Container, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";

const responsive = {
  mobile: {
    breakpoint: { max: 363, min: 0 },
    items: 3,
  },
};

const Sponsor = () => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{ color: "gray", fontSize: "0.7rem", my: 2 }}
      >
        Trusted by
      </Divider>
      <Container>
        {/* <Carousel
          responsive={responsive}
          focusOnSelect={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={20000}
          infinite={true}
        >
          <Typography
            component="h6"
            variant="h6"
            align="center"
            sx={{fontFamily:"fantasy",  color: "gray", fontSize:"1rem", fontWeight: 800,  }}
          >
            GOOGLE
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            align="center"
            sx={{fontFamily:"fantasy",  color: "gray", fontSize:"1rem", fontWeight: 800,  }}
          >
            PEPSI
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            align="center"
            sx={{fontFamily:"fantasy",  color: "gray", fontSize:"1rem", fontWeight: 800,  }}
          >
            TECNO
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            align="center"
            sx={{fontFamily:"fantasy",  color: "gray", fontSize:"1rem", fontWeight: 800,  }}
          >
            EMIRATE
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            align="center"
            sx={{fontFamily:"fantasy",  color: "gray", fontSize:"1rem", fontWeight: 800,  }}
          >
            NESTLE
          </Typography>
           <Image width={150} height={60} src='/Oraimo.png' />

          <Image width={150} height={60} src='/Jumia.png' />

          <Image width={150} height={60} src='/Nestle.png' />

          <Image width={150} height={60} src='/Pepsi.png' />

          <Image width={150} height={60} src='/Infinix.png' />
        </Carousel> */}
        <Grid container justifyContent="center">
          <Grid item xs={3}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              sx={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: 800,
              }}
            >
              GOOGLE
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              sx={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: 800,
              }}
            >
              PEPSI
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              sx={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: 800,
              }}
            >
              TECNO
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              sx={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: 800,
              }}
            >
              EMIRATE
            </Typography>
          </Grid>
          {/* <Grid item xs={3}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              sx={{ fontFamily:"fantasy", color: "gray", fontSize: "1rem", fontWeight: 800,  }}
            >
              NESTLE
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              component="h6"
              variant="h6"
              align="center"
              sx={{ fontFamily:"fantasy", color: "gray", fontSize: "1rem", fontWeight: 800,  }}
            >
              NESTLE
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default Sponsor;
