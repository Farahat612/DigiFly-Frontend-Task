import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from './features/api/apiSlice'
import textEditorReducer from './features/textEditorSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    textEditor: textEditorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch