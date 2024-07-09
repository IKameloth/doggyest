import { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { decrementNumber, decrementUserValue, incrementNumber, incrementUserValue } from './redux/slices/exampleSlice'
import { Button, Container, Grid, TextField, Toolbar, Typography } from '@mui/material'
import Navbar from './components/Navbar'

function App() {
  const { currentNumber, } = useAppSelector((state) => state.example)
  const dispatch = useAppDispatch()
  const [userNumber, setUserNumber] = useState<number>(0)

  const handleUserNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(+event.target.value)
  }

  const handleDecrementBtn = () => {
    (!userNumber) ? dispatch(decrementNumber()) : dispatch(decrementUserValue(userNumber))
  }

  const handleIncrementBtn = () => {
    (!userNumber) ? dispatch(incrementNumber()) : dispatch(incrementUserValue(userNumber))
  }

  return (
    <>
      <Navbar />
      <Toolbar />
      <Container>
        <Grid container justifyContent="center" mb={5}>
          <Typography variant='h4'>
            Example Slice - Redux Thunk
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <TextField type='number' label="Add Number" variant="outlined" value={userNumber} onChange={handleUserNumber} />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Button variant='contained' onClick={handleIncrementBtn}>Increment</Button>
          </Grid>
          <Grid item>
            <Typography variant='h1'>
              {currentNumber}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={handleDecrementBtn}>Decrement</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
