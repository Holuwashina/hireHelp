import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Search from './searchComponent';

const Hero = () => {
  return (
    <Box sx={{ pt: 6, pb: 5, textAlign: '-webkit-center' }}>
      <Typography
        textAlign='center'
        component='h6'
        variant='h6'
        sx={{
          maxWidth: 300,
          textTransform: 'uppercase',
          fontWeight: 800,
          color: 'inherit',
        }}
      >
        Find the perfect freelance service near you.
      </Typography>
      <Search />
      <Button size='small' variant='outlined'>
        Search
      </Button>
    </Box>
  );
};

export default Hero;
