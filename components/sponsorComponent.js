import { Box, Divider, Container } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Sponsor = () => {
  return (
    <>
      <Divider color='text.secondary' textAlign='left' sx={{ my: 2 }}>
        Trusted by
      </Divider>
      <Container>
        <Carousel
          responsive={responsive}
          focusOnSelect={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={10000}
          infinite={true}
        >
          <Image width={150} height={60} src='/Oraimo.png' />

          <Image width={150} height={60} src='/Jumia.png' />

          <Image width={150} height={60} src='/Nestle.png' />

          <Image width={150} height={60} src='/Pepsi.png' />

          <Image width={150} height={60} src='/Infinix.png' />
        </Carousel>
      </Container>
    </>
  );
};

export default Sponsor;
