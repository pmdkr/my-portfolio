import { createSlice } from "@reduxjs/toolkit";

const initialState = "dark"; // Default theme

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => (state === "light" ? "dark" : "light"),
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
