import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Search from './searchComponent';

const Hero = () => {
  return (
    <Box sx={{ py: 5, textAlign: '-webkit-center' }}>
      <Typography
        gutterBottom
        textAlign='center'
        component='h5'
        variant='h5'
        sx={{
          maxWidth: 300,
          fontWeight: 800,
          color: 'inherit',
        }}
      >
        Find the perfect freelance service near you.
      </Typography>
      <Search />
      <Button fullWidth size='small' variant='outlined'>
        Search
      </Button>
    </Box>
  );
};

export default Hero;
