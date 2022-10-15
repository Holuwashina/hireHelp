import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Categories = () => {
  return (
    <>
      <Typography variant='h5' sx={{ pl: 1, pt: 3, pb: 1, fontWeight: 700 }}>
        Explore by Categories
      </Typography>
      <Stack direction='row' justifyContent='center' spacing={2}>
        <Box sx={{ maxWidth: 150, p: 1, textAlign: 'center' }}>
          <Image width={40} height={40} src='/video-camera.png' />
          <Typography noWrap component='p' variant='body2' textAlign='center'>
            Video & Photography
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 150, p: 1, textAlign: 'center' }}>
          <Image width={40} height={40} src='/videocam.png' />
          <Typography component='p' variant='body2' textAlign='center'>
            Gadgets Repair
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Categories;
