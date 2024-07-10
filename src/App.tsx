import { Container, Divider, Grid, Toolbar, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import ImageViewer from './components/ImageView'


function App() {


  return (
    <>
      <Navbar />
      <Toolbar />
      <Container>
        <Grid container justifyContent="center" mb={2} mt={5}>
          <Typography variant='h4'>
            Example Slice - Redux Thunk
          </Typography>
          <ImageViewer />
        </Grid>
        <Divider />
      </Container>
    </>
  )
}

export default App
