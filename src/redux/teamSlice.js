import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    team: [],
};


const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        add: (state, action) => {
            state.team = [...state.team, { name: action.payload.name, image: action.payload.image, team: action.payload.team, id: action.payload.id }]
            console.log(state.team);
        },
        remove: (state,action) => {
            console.log(action.payload)
            state.team = state.team.filter((player) => player.id !== action.payload);
            console.log(state.team)
        }
    }
});

export default teamSlice.reducer;
export const { add, remove } = teamSlice.actions;