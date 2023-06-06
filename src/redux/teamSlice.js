import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    team: [],
};

const teamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        add: (state, action) => {
            state.team = state.team.push(action.payload)
        },
        remove: (state,action) => {
            state.team = state.team.filter((player) => player.id !== action.payload.id)
        }
    }
});

export default teamSlice.reducer;
export const { add, remove } = teamSlice.actions;