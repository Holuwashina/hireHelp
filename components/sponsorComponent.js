import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Sponsor = () => {
  return (
      <Carousel
        autoPlaySpeed={10000}
        responsive={responsive}
        centerMode={true}
        focusOnSelect={true}
        autoPlay={true}
        arrows={false}
        infinite={true}
      >
        <Typography
          variant='h5'
          textAlign='center'
          // noWrap
          sx={{
            color: 'gray',
            fontWeight: 500,
            letterSpacing: '.2rem',
            fontFamily: 'BankGothic Md BT',
          }}
        >
          INFINIX
        </Typography>
        <Typography
          variant='h5'
          textAlign='center'
          noWrap
          sx={{
            color: 'gray',
            fontWeight: 500,
            letterSpacing: '.2rem',
            fontFamily: 'BankGothic Md BT',
          }}
        >
          PEPSI
        </Typography>
        <Typography
          variant='h5'
          textAlign='center'
          noWrap
          sx={{
            color: 'gray',
            fontWeight: 500,
            letterSpacing: '.2rem',
            fontFamily: 'BankGothic Md BT',
          }}
        >
          AIRTEL
        </Typography>
        <Typography
          variant='h5'
          textAlign='center'
          noWrap
          sx={{
            color: 'gray',
            fontWeight: 500,
            letterSpacing: '.2rem',
            fontFamily: 'BankGothic Md BT',
          }}
        >
          TECNO
        </Typography>
      </Carousel>
  );
};

export default Sponsor;
