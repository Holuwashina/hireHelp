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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../assets/topSkillsComponent.module.css';
import ShareIcon from '@mui/icons-material/Share';
import MyLocationIcon from '@mui/icons-material/MyLocation';

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

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const TopSkills = () => {
  return (
    <>
      <Typography variant='h5' sx={{ pl: 1, pt: 3, pb: 1, fontWeight: 700 }}>
        Recommended
      </Typography>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        focusOnSelect={true}
        arrows={false}
        transitionDuration={0}
        itemClass={styles.itemClass}
      >
        <Card>
          <CardMedia
            component='img'
            height='140'
            image='/pic.jpg'
            alt='green iguana'
          />
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
                <Avatar alt='Remy Sharp' src='/pic.jpg' />
              </StyledBadge>
              <Stack direction='column'>
                <Typography variant='body2'>Zhine</Typography>
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
                    4.0(1k+)
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
          <CardActions>
            <IconButton aria-label='delete' size='small'>
              <ShareIcon fontSize='inherit' />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant='body1'
              color='text.secondary'
              // sx={{ fontSize: '0.7rem ' }}
            >
              &#8358;1,000
            </Typography>
          </CardActions>
        </Card>
        <Card>
          <CardMedia
            component='img'
            height='140'
            image='/pic.jpg'
            alt='green iguana'
          />
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
                <Avatar alt='Remy Sharp' src='/pic.jpg' />
              </StyledBadge>
              <Stack direction='column'>
                <Typography variant='body2'>Zhine</Typography>
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
                    4.0(1k+)
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
          <CardActions>
            <IconButton aria-label='delete' size='small'>
              <ShareIcon fontSize='inherit' />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant='body1'
              color='text.secondary'
              // sx={{ fontSize: '0.6rem ' }}
            >
              &#8358;1,000
            </Typography>
          </CardActions>
        </Card>
        <Card>
          <CardMedia
            component='img'
            height='140'
            image='/pic.jpg'
            alt='green iguana'
          />
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
                <Avatar alt='Remy Sharp' src='/pic.jpg' />
              </StyledBadge>
              <Stack direction='column'>
                <Typography variant='body2'>Zhine</Typography>
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
                    4.0(1k+)
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
          <CardActions>
            <IconButton aria-label='delete' size='small'>
              <ShareIcon fontSize='inherit' />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant='body1'
              color='text.secondary'
              // sx={{ fontSize: '0.6rem ' }}
            >
              &#8358;1,000
            </Typography>
          </CardActions>
        </Card>
      </Carousel>
    </>
  );
};

export default TopSkills;
