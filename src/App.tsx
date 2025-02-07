import './App.css'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './components/AddHabitForm'
import Habitlist from './components/Habit-list'

function App() {

  return (
    <>
      <Container maxWidth='md'>
        <Typography component={'h1'} align='center'>
          Habit Tracker
        </Typography>
      </Container>
      <AddHabitForm/>
      <Habitlist/>
    </>
  )
}

export default App
