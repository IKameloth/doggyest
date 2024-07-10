import { Grid, IconButton, Card, CardMedia } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ImageViewer = () => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" spacing={10} mb={5} mt={5}>
        <Grid item>
          <IconButton aria-label="previous">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, width: 140 }}
              image="/vite.svg"
              title="picture-dogs"
            />
          </Card>
        </Grid>
        <Grid item>
          <IconButton aria-label="next">
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ height: "120px", width: "120px" }}>
          <IconButton aria-label="previous">
            <FavoriteIcon sx={{ width: "100%", height: "100%", color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

export default ImageViewer
