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
          component='h4'
          variant='h4'
          sx={{

            textTransform:'uppercase',
            borderRadius:2,
            fontSize:'2rem',
            fontWeight: 800,
            color: 'common.white',
            py: 3,
          }}
        
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
