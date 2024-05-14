import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../axiosInstance'
export const loadTask = createAsyncThunk('task/loadTask', async (taskId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(
      `https://redboost-7d8t.onrender.com/loadTask/${taskId}`,
    )
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const createTask = createAsyncThunk(
  'task/createTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `https://redboost-7d8t.onrender.com/createTask`,
        taskData,
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `https://redboost-7d8t.onrender.com/deleteTask/${taskId}`,
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const loadTasks = createAsyncThunk('task/loadTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`https://redboost-7d8t.onrender.com/loadTasks`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const loadTasksByActivityId = createAsyncThunk(
  'task/loadTasksByActivityId',
  async (activityId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `https://redboost-7d8t.onrender.com/loadTasksByActivityId/${activityId}`,
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

const taskSLice = createSlice({
  name: 'task',
  initialState: {
    allTasks: [], //when loading all the tasks
    status: 'idle',
    error: null,
    tasksByActivityId: [],
    task: {}, //when loading a single task
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.allTasks = action.payload
      })
      .addCase(loadTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(loadTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allTasks.push(action.payload)
      })
      .addCase(createTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.allTasks = state.allTasks.filter((task) => task._id !== action.payload._id)
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadTask.fulfilled, (state, action) => {
        state.task = action.payload
      })
      .addCase(loadTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(loadTask.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadTasksByActivityId.fulfilled, (state, action) => {
        state.tasksByActivityId = action.payload
      })
      .addCase(loadTasksByActivityId.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(loadTasksByActivityId.pending, (state) => {
        state.status = 'loading'
      })
  },
})

export default taskSLice.reducer
