import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Restaurants",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItems: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteItems: (state, action) => {
      // find the index of the item to remove

      let indexToRemove = state.items.findIndex(
        (obj) => obj.data.id === action.payload
      );

      // remove the item using splice()
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
    updateItem: (state, action) => {
      const { id, name } = action.payload;

      let indexToPatch = state.items.findIndex((obj) => obj.data.id === id);

      state.items[indexToPatch] = {
        data: { ...state.items[indexToPatch].data, name: name },
      };
    },
  },
});

export const { setItems, addItems, deleteItems, updateItem } = slice.actions;

export default slice.reducer;
