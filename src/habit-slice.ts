import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    id:string,
    name:string,
    frequency:"daily"|"weekly",
    completedDates:string[],
    createdAt:string
}

interface HabitState{
    habits:Habit[]
}

const initialState:HabitState={
    habits:[]
}

const habitSlice = createSlice({
    name:"Habits",
    initialState,
    reducers:{
        toggleHabit: (
            state,
            action: PayloadAction<{ id: string; date: string }>
          ) => {
            console.log(action);
      
            const habit = state.habits.find((h) => h.id === action.payload.id);
            if (habit) {
              const index = habit.completedDates.indexOf(action.payload.date);
              if (index > -1) {
                habit.completedDates.splice(index, 1);
              } else {
                habit.completedDates.push(action.payload.date);
              }
            }
          },

        addHabit:(state, action:PayloadAction<{name:string; frequency:"daily"|"weekly"}>)=>{
            const newHabit:Habit = {
                id:Date.now().toString(),
                name:action.payload.name,
                frequency:action.payload.frequency,
                completedDates:[],
                createdAt:new Date().toISOString()
            }
            state.habits.push(newHabit)
         },
         removeHabit: (state, action: PayloadAction<string>) => {
            state.habits = state.habits.filter(
              (habit) => habit.id !== action.payload
            );
          },
         
         }
         
    }
)

export const {addHabit, toggleHabit, removeHabit} = habitSlice.actions;
export default habitSlice.reducer