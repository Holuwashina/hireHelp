import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Search from './searchComponent';

const Hero = () => {
  return (
    <Box sx={{ py: 5, textAlign: '-webkit-center' }}>
      <Typography
        gutterBottom
        textAlign='center'
        component='h4'
        variant='h4'
        sx={{
          maxWidth: 300,
          fontWeight: 800,
          color: 'inherit',
          py:2
        }}
      >
        Find the perfect freelance service near you.
      </Typography>
      <Search />
      <Button fullWidth size='medium' variant='contained'>
        Search
      </Button>
    </Box>
  );
};

export default Hero;
