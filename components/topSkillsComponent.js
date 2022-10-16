import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
  Badge,
  Rating,
  IconButton,
  Divider,
  Checkbox,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ShareIcon from '@mui/icons-material/Share';
import MyLocationIcon from '@mui/icons-material/MyLocation';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox' } };

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const TopSkills = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant='h6' sx={{ pl: 1, pb: 1, fontWeight: 700 }}>
        Recommended
      </Typography>
      <Carousel
      transitionDuration={1}
      minimumTouchDrag={1}
        responsive={responsive}
        partialVisible={true}
        focusOnSelect={true}
        arrows={false}
      >
        <Card sx={{ mx: 1, minWidth: 280 }}>
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant='body2'
              color='blue'
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                px: 1,
                color: 'common.white',
              }}
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
                backdropFilter: 'blur(1px)',
              }}
            >
              Starting from
              <span style={{ marginLeft: '5px', fontSize: '1rem' }}>
                &#8358;1,000
              </span>
            </Typography>
            <CardMedia
              component='img'
              height='150'
              image='/pic.jpg'
              alt='green iguana'
            />
          </Box>
          <CardContent>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              sx={{ mb: 2 }}
            >
              <StyledBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar alt='Remy Sharp' src='/avatar.jpg' />
              </StyledBadge>
              <Stack direction='column'>
                <Typography variant='body2'>
                  Zhine{' '}
                  <img
                    sx={{ width: 10, height: 10 }}
                    alt='Badge'
                    src='/check1.png'
                  />
                </Typography>

                <Typography variant='body2' sx={{ color: 'green' }}>
                  Professional
                </Typography>
                <Stack direction='row'>
                  <Rating readOnly size='small' value={4} />
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ ml: 1 }}
                  >
                    4.0(41.5k)
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography gutterBottom variant='body2'>
              VIDEO & ANIMATION
            </Typography>
            <Typography gutterBottom variant='body2' color='text.secondary'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              enim.
            </Typography>
            <Stack
              direction='row'
              spacing={1}
              alignItems='center'
              sx={{ mt: 2 }}
            >
              <MyLocationIcon fontSize='inherit' />
              <Typography variant='body2' color='text.secondary'>
                Ibadan - Ibadan North
              </Typography>
            </Stack>
          </CardContent>
          <Divider />
          <CardActions>
            <Checkbox
              {...label}
              size='small'
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon style={{ color: '#ff6d75' }} />}
            />
            <IconButton aria-label='delete' size='small'>
              <ShareIcon fontSize='inherit' />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ mx: 1, minWidth: 280 }}>
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant='body2'
              color='blue'
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                px: 1,
                color: 'common.white',
              }}
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
                backdropFilter: 'blur(1px)',
              }}
            >
              Starting from
              <span style={{ marginLeft: '5px', fontSize: '1rem' }}>
                &#8358;1,000
              </span>
            </Typography>
            <CardMedia
              component='img'
              height='150'
              image='/pic.jpg'
              alt='green iguana'
            />
          </Box>
          <CardContent>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              sx={{ mb: 2 }}
            >
              <StyledBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar alt='Remy Sharp' src='/avatar.jpg' />
              </StyledBadge>
              <Stack direction='column'>
                <Typography variant='body2'>
                  Zhine{' '}
                  <img
                    sx={{ width: 10, height: 10 }}
                    alt='Badge'
                    src='/check1.png'
                  />
                </Typography>

                <Typography variant='body2' sx={{ color: 'green' }}>
                  Professional
                </Typography>
                <Stack direction='row'>
                  <Rating readOnly size='small' value={4} />
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ ml: 1 }}
                  >
                    4.0(41.5k)
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography gutterBottom variant='body2'>
              VIDEO & ANIMATION
            </Typography>
            <Typography gutterBottom variant='body2' color='text.secondary'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              enim.
            </Typography>
            <Stack
              direction='row'
              spacing={1}
              alignItems='center'
              sx={{ mt: 2 }}
            >
              <MyLocationIcon fontSize='inherit' />
              <Typography variant='body2' color='text.secondary'>
                Ibadan - Ibadan North
              </Typography>
            </Stack>
          </CardContent>
          <Divider />
          <CardActions>
            <Checkbox
              {...label}
              size='small'
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon style={{ color: '#ff6d75' }} />}
            />
            <IconButton aria-label='delete' size='small'>
              <ShareIcon fontSize='inherit' />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{display:'flex',justifyContent:'center',height:'100%'}}>
          <Button>See all</Button>
        </Card>
      </Carousel>
    </Box>
  );
};

export default TopSkills;