import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Categories = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h6" sx={{ pl: 1, fontWeight: 900, textTransform:'uppercase' }}>
        Explore by Categories
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ py: 3 }}>
        <Box
          sx={{
            maxWidth: 150,
            p: 2,
            textAlign: "center",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h6" variant="h6" textAlign="center">
            Video & Photography
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: 150,
            p: 2,
            textAlign: "center",
            borderRadius: 2,
            boxShadow: 5,
          }}
        >
          <Typography component="h6" variant="h6" textAlign="center">
            Gadgets Repair
          </Typography>
        </Box>
      </Stack>
    </Box>
    // <Box sx={{py:3}}>
    //   <Typography variant='h5' sx={{ pl: 1, fontWeight: 700 }}>
    //     Explore by Categories
    //   </Typography>
    //   <Stack direction='row' justifyContent='center' spacing={2} sx={{py:3}}>
    //     <Box sx={{ maxWidth: 150, p: 1, textAlign: 'center' }}>
    //       <Image width={40} height={40} src='/video-camera.png' />
    //       <Typography noWrap component='p' variant='body2' textAlign='center'>
    //         Video & Photography
    //       </Typography>
    //     </Box>
    //     <Box sx={{ maxWidth: 150, p: 1, textAlign: 'center' }}>
    //       <Image width={40} height={40} src='/videocam.png' />
    //       <Typography component='p' variant='body2' textAlign='center'>
    //         Gadgets Repair
    //       </Typography>
    //     </Box>
    //   </Stack>
    // </Box>
  );
};

export default Categories;
