import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AddDispatch} from '../store'
import { addHabit } from '../habit-slice'

const AddHabitForm : React.FC = () => {
    const [name,setName] = useState<string>("")

    const [frequency,setFrequency] = useState<"daily"|"weekly">('daily')

  const handleSubmit =(e: React.FormEvent)=>{
    e.preventDefault()
    if(name.trim()){
      dispatch(addHabit({
        name, frequency,
      }))
      setName("")
    }
  }
  const dispatch = useDispatch<AddDispatch>( )

  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{display:"flex", flexDirection:"column" ,gap:3}}>
            <TextField 
            label='Habit From'
            placeholder='Enter a Habit'
                value={name}  
                onChange={(e)=>{setName(e.target.value)}
                } fullWidth
            />
                  <FormControl fullWidth>
                    <InputLabel >Frequency</InputLabel>
                    <Select value={frequency} onChange={e => setFrequency(e.target.value as "daily"| "weekly")}>
                      <MenuItem value={"daily"}>Daily</MenuItem>
                      <MenuItem value={"weekly"}>Weekly</MenuItem>
                    </Select>
                  </FormControl>
                  <Button type='submit' variant='contained' color='primary'>Add Habit</Button>
        </Box>
    </form>
  )
}

export default AddHabitForm