import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

describe('Navbar view', () => {
  it('renders the component', () => {
    render(<Navbar />)

    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})
