import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import Search from './searchComponent';

const Hero = () => {
  return (
    <Container
      fixed
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ py: 5,mx:'auto' }}>
        <Typography
          gutterBottom
          component='h5'
          variant='h5'
          sx={{
            textTransform:'uppercase',
            borderRadius:2,
            fontWeight: 800,
            color: 'common.white',
            py: 3,
          }}
          // style={{
          //   backgroundColor: 'rgba(255,255,255,0.05)',
          //   boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
          // }}
        >
          Find the perfect freelance service near you.
        </Typography>
        <Search />
        <Button fullWidth size='medium' variant='contained'>
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
