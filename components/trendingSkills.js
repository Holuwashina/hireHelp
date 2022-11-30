import {
  ImageListItem,
  ImageListItemBar,
  Typography,
  Card,
  ImageList,
  CardActionArea,
  CardContent,
  Divider,
  Avatar,
  Badge,
  CardActions,
  Checkbox,
  IconButton,
  Button,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { styled } from "@mui/material/styles";

import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b900",
    color: "#44b900",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const label = { inputProps: { "aria-label": "Checkbox" } };

const TrendingSkills = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Typography
        variant="h6"
        sx={{ pl: 1, fontWeight: 900, textTransform: "uppercase" }}
      >
        Trending Skills
      </Typography>
      <Stack direction="row" sx={{ overflowY: "scroll", py: 2 }}>
        <Card sx={{ mx: 1, minWidth: 200 }}>
          <CardActionArea>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography>Hire a</Typography>
                  <Typography>Photographer</Typography>
                </Stack>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  &#8358;1,000
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: "0.8rem" }}>
                Ibadan - central
              </Typography>
              <Divider />
              <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="/avatar.jpg" />
                </StyledBadge>
                <Stack>
                  <Typography>Zhine</Typography>
                  <Typography sx={{ fontSize: "0.6rem", fontStyle: "italic" }}>
                    Seen 6mins ago
                  </Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography sx={{ fontSize: "0.8rem" }}>Expert</Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions>
            <Checkbox
              {...label}
              size="small"
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon style={{ color: "#ff6d75" }} />}
            />
            <IconButton aria-label="delete" size="small">
              <ShareIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ mx: 1, minWidth: 200 }}>
          <CardActionArea>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography>Hire a</Typography>
                  <Typography>Photographer</Typography>
                </Stack>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  &#8358;1,000
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: "0.8rem" }}>
                Ibadan - central
              </Typography>
              <Divider />
              <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="/avatar.jpg" />
                </StyledBadge>
                <Stack>
                  <Typography>Zhine</Typography>
                  <Typography sx={{ fontSize: "0.6rem", fontStyle: "italic" }}>
                    Seen 6mins ago
                  </Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography sx={{ fontSize: "0.8rem" }}>Expert</Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions>
            <Checkbox
              {...label}
              size="small"
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon style={{ color: "#ff6d75" }} />}
            />
            <IconButton aria-label="delete" size="small">
              <ShareIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ mx: 1, minWidth: 200 }}>
          <CardActionArea>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography>Hire a</Typography>
                  <Typography>Photographer</Typography>
                </Stack>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  &#8358;1,000
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: "0.8rem" }}>
                Ibadan - central
              </Typography>
              <Divider />
              <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="/avatar.jpg" />
                </StyledBadge>
                <Stack>
                  <Typography>Zhine</Typography>
                  <Typography sx={{ fontSize: "0.6rem", fontStyle: "italic" }}>
                    Seen 6mins ago
                  </Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography sx={{ fontSize: "0.8rem" }}>Expert</Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions>
            <Checkbox
              {...label}
              size="small"
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon style={{ color: "#ff6d75" }} />}
            />
            <IconButton aria-label="delete" size="small">
              <ShareIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          sx={{
            mx: 1,
            minWidth: 200,
            display: "flex",
            justifyContent: "center",
            height: "inherit",
          }}
        >
          <Button fullWidth>See more</Button>
        </Card>
      </Stack>
    </Box>
  );
};

export default TrendingSkills;

{
  /* <Stack
        component="ul"
        direction="row"
        sx={{ pl: 0, py: 2, overflowY: "scroll" }}
      >
        <ImageListItem
          sx={{ mx: 1, minWidth: 180, boxShadow: 5 }}
        >
          <img src="/pic.jpg" srcSet="/pic.jpg" alt="" />
          <ImageListItemBar title="Photography" subtitle="Ibadan - central" />
        </ImageListItem>
        <ImageListItem
          sx={{ mx: 1, minWidth: 180, boxShadow: 5 }}
        >
          <img src="/pic.jpg" srcSet="/pic.jpg" alt="" />

          <ImageListItemBar title="Photography" subtitle="Ibadan - central" />
        </ImageListItem>
        <ImageListItem
          sx={{ mx: 1, minWidth: 180, boxShadow: 5 }}
        >
          <img src="/pic.jpg" srcSet="/pic.jpg" alt="" />

          <ImageListItemBar title="Photography" subtitle="Ibadan - central" />
        </ImageListItem>
      </Stack> */
}
