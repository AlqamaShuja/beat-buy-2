// src/slices/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventsList: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const newEvent = {
        id: Date.now(), // Temporary ID
        ...action.payload,
      };
      state.eventsList.push(newEvent);
    },
    updateEvent: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const existingEvent = state.eventsList.find((event) => event.id === id);
      if (existingEvent) {
        Object.assign(existingEvent, updatedData);
      }
    },
    deleteEvent: (state, action) => {
      state.eventsList = state.eventsList.filter((event) => event.id !== action.payload);
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
export const selectEvents = (state) => state.events.eventsList;
export default eventSlice.reducer;
