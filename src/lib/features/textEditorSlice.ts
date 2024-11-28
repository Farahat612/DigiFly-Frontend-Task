import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TextEditorState {
  content: string
  fontFamily: string
  isRTL: boolean
}

const initialState: TextEditorState = {
  content: '',
  fontFamily: 'Helvetica',
  isRTL: false,
}

const textEditorSlice = createSlice({
  name: 'textEditor',
  initialState,
  reducers: {
    updateContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload
    },
    toggleDirection: (state) => {
      state.isRTL = !state.isRTL
    },
  },
})

export const { updateContent, setFontFamily, toggleDirection } =
  textEditorSlice.actions
export default textEditorSlice.reducer
