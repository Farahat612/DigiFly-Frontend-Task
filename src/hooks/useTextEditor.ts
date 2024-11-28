/* eslint-disable react-hooks/exhaustive-deps */

import {
  setFontFamily,
  toggleDirection,
  updateContent,
} from '@/store/features/textEditorSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { applyStyle, isStyleActive } from '@/lib/textEditorUtils'
import { useEffect, useRef, useState } from 'react'
const useTextEditor = () => {
  const dispatch = useAppDispatch()
  const { content, fontFamily, isRTL } = useAppSelector(
    (state) => state.textEditor
  )
  const editorRef = useRef<HTMLDivElement>(null)
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  })
  const [activeButtons, setActiveButtons] = useState({
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
    insertOrderedList: false,
    insertUnorderedList: false,
  })

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content
      editorRef.current.style.fontFamily = fontFamily
      editorRef.current.style.direction = isRTL ? 'rtl' : 'ltr'
      editorRef.current.style.textAlign = isRTL ? 'right' : 'left'

      updateActiveStyles()
      updateActiveButtons()
    }
  }, [])

  const handleContentChange = () => {
    if (editorRef.current) {
      dispatch(updateContent(editorRef.current.innerHTML))
      updateActiveButtons()
    }
  }

  const handleFontChange = (value: string) => {
    dispatch(setFontFamily(value))
    applyStyle('fontName', value)
  }

  const handleToggleDirection = () => {
    dispatch(toggleDirection())
    if (editorRef.current) {
      const newDirection = isRTL ? 'ltr' : 'rtl'
      editorRef.current.style.direction = newDirection
      editorRef.current.style.textAlign =
        newDirection === 'rtl' ? 'right' : 'left'
    }
  }

  const updateActiveStyles = () => {
    setActiveStyles({
      bold: isStyleActive('bold'),
      italic: isStyleActive('italic'),
      underline: isStyleActive('underline'),
      strikethrough: isStyleActive('strikeThrough'),
    })
  }

  const handleStyleClick = (style: string) => {
    applyStyle(style)
    updateActiveStyles()
  }

  const updateActiveButtons = () => {
    if (typeof document !== 'undefined') {
      setActiveButtons({
        justifyLeft: isStyleActive('justifyLeft'),
        justifyCenter: isStyleActive('justifyCenter'),
        justifyRight: isStyleActive('justifyRight'),
        insertOrderedList: isStyleActive('insertOrderedList'),
        insertUnorderedList: isStyleActive('insertUnorderedList'),
      })
    }
  }
  return {
    fontFamily,
    isRTL,
    editorRef,
    activeStyles,
    activeButtons,
    handleContentChange,
    handleFontChange,
    handleToggleDirection,
    handleStyleClick,
    updateActiveStyles,
  }
}

export default useTextEditor
