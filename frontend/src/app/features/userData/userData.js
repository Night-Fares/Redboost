import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../../axiosInstance'
export const loadUserData = createAsyncThunk(
  'userData/loadCurrentUser',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        'https://redboost-3kgg.onrender.com/loadCurrentUser',
        {
          email: email,
        },
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)
const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserData.fulfilled, (state, action) => {
        state.userData = action.payload
      })
      .addCase(loadUserData.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(loadUserData.pending, (state) => {
        state.status = 'loading'
      })
  },
})
export const { setUserData } = userDataSlice.actions
export default userDataSlice.reducer
