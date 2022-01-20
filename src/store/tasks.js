import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'tasks',
  initialState: {
    loading: false,
    tasks: [
      {
        id: 1,
        title: 'Teste teste',
        isComplete: false
      }
    ],
    error: null
  },
  reducers: {
    addTaskStarted(state) {
      state.loading = true
    },
    addTaskSuccess(state, action) {
      state.loading = false
      state.tasks.push(action.payload)
      state.error = null
    },
    addTaskError(state, action) {
      state.loading = false
      state.error = action.payload
    },
    completeTask(state, action) {
      const target = state.tasks.find((task) => task.id === action.payload)
      target.isComplete = !target.isComplete
      state.error = null
    },
    removeTask(state, action) {
      const newArray = state.tasks.filter((task) => task.id !== action.payload)
      state.tasks = newArray
      state.error = null
    }
  }
})

export const {
  addTaskStarted,
  addTaskSuccess,
  addTaskError,
  completeTask,
  removeTask
} = slice.actions

export const addNewTask = (payload) => (dispatch, getState) => {
  const { tasks } = getState()

  if (!payload.match(/^$/)) {
    dispatch(addTaskStarted())

    const newTask = {
      id: tasks.tasks[tasks.tasks.length - 1].id + 1,
      title: payload,
      isComplete: false
    }

    dispatch(addTaskSuccess(newTask))
  } else {
    dispatch(addTaskError('Sua tarefa não pode estar vazia'))
  }
}

export default slice.reducer
