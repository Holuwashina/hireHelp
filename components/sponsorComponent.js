import { Stack, Typography } from '@mui/material';

const Sponsor = () => {
  return (
    <Stack direction='row' spacing={2} justifyContent='center'>
      <Typography
        variant='h6'
        component='h6'
        textAlign='center'
        color='text.secondary'
        sx={{
          fontWeight: 800,
          fontSize: '0.9rem',
          letterSpacing: '.2rem',
        }}
      >
        INFINIX
      </Typography>
      <Typography
        variant='h6'
        component='h6'
        textAlign='center'
        sx={{
          color: 'gray',
          fontWeight: 800,
          fontSize: '0.9rem',
          letterSpacing: '.2rem',
        }}
      >
        PEPSI
      </Typography>
      <Typography
        variant='h6'
        component='h6'
        textAlign='center'
        sx={{
          color: 'gray',
          fontWeight: 800,
          fontSize: '0.9rem',
          letterSpacing: '.2rem',
        }}
      >
        AIRTEL
      </Typography>
    </Stack>
  );
};

export default Sponsor;
