import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchGetRandomPet } from '../redux/slices/petsSlice';
import { Grid, IconButton, Card, CardMedia, Skeleton, Button, styled, ButtonProps } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { purple } from '@mui/material/colors'
import confetti from 'canvas-confetti'

const ImageViewer = () => {
  const dispatch = useAppDispatch()
  const { randomPet, isLoading } = useAppSelector((state) => state.pets)

  const HandleFetchRandomPet = useCallback(() => {
    if (randomPet.status.length > 0) {
      dispatch(fetchGetRandomPet())
    }
  }, [randomPet])

  useEffect(() => {
    if (!randomPet.status.length) {
      dispatch(fetchGetRandomPet())
    }
  }, [])

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" spacing={10} mb={5} mt={5}>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={140} height={140} />
            ) : (
              <CardMedia
                sx={{ height: 140, width: 140 }}
                image={!!randomPet.message.length ? randomPet.message : "/vite.svg"}
                title="picture-dogs"
              />
            )}
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <ColoredButton variant='contained' size='large' endIcon={<ShuffleIcon />} onClick={HandleFetchRandomPet}>
          Random
        </ColoredButton>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ height: "120px", width: "120px" }}>
          <IconButton aria-label="previous" onClick={() => confetti()}>
            <FavoriteIcon sx={{ width: "100%", height: "100%", color: "inherit" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

const ColoredButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default ImageViewer
