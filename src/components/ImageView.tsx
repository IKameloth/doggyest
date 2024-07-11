import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchGetPets } from '../redux/slices/petsSlice';
import { Grid, IconButton, Card, CardMedia, Skeleton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ImageViewer = () => {
  const dispatch = useAppDispatch()
  const { pets, isLoading } = useAppSelector((state) => state.pets)

  useEffect(() => {
    if (!pets.status.length) {
      dispatch(fetchGetPets())
    }
  }, [])

  console.log({ pets })

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
            {isLoading ? (
              <Skeleton variant="rectangular" width={140} height={140} />
            ) : (
              <CardMedia
                sx={{ height: 140, width: 140 }}
                image={pets.message!}
                title="picture-dogs"
              />
            )}
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
