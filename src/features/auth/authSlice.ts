import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, token: true },
	reducers: {
		setCredentials: (
			state: any,
			action: PayloadAction<{ user: string; accessToken: string }>
		) => {
			const { user, accessToken } = action.payload;
			state.user = user;
			state.token = accessToken;
		},
		logOut: (state: any) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
