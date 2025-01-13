import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AUTHENTICATION_API} from "../../../api/authentication.api.js";

const initialState = {
    authData: {
        first_name: 'Emmanuella',
        last_name: 'Sangmuah',
        email: 'emmanuella.sangmuah@ug.edu.gh',
        phone: '+233270048319',
        name: 'Emmanuella Sangmuah',
        supervisor: {
            first_name: 'Pontifex',
            last_name: 'Maximus',
            email: 'stanley.hayford@ug.edu.gh',
            phone: '+233599464629',
            name: 'Pontifex Maximus',
        }
    },
    role: {name: 'Supervisor', id: 1},
    token: '',
    error: null
}

export const login = createAsyncThunk(
    'authentication/login',
    async ({token, navigate}, thunkAPI) => {
        try {
            const response = await AUTHENTICATION_API.login(token);
            navigate('/');
            return response.data;
        }catch (e) {
            const {message} = e.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
)

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.role = action.payload;
        }).addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});


const reducer = authenticationSlice.reducer;
export const selectAuthentication = state => state.authentication;
export default reducer;