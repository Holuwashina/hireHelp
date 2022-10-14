import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Categories = () => {
  return (
    <>
      <Typography variant='h5' sx={{ pl: 1, pt: 3, pb: 1, fontWeight: 700 }}>
        Explore by Categories
      </Typography>
      <Stack direction='row' justifyContent='center' spacing={2}>
        <Box sx={{ maxWidth: 120, p: 1, textAlign: 'center' }}>
          <Image width={50} height={50} src='/video-camera.gif' />
          <Typography noWrap component='p' variant='body2' textAlign='center'>
            Video & Photography
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 120, p: 1, textAlign: 'center' }}>
          <Image width={50} height={50} src='/video-player.gif' />
          <Typography component='p' variant='body2' textAlign='center'>
            Gadgets Repair
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Categories;
