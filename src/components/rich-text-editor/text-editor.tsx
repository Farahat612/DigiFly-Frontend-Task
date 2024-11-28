/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  setFontFamily,
  toggleDirection,
  updateContent,
} from '@/lib/features/textEditorSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { applyStyle, isStyleActive } from '@/lib/textEditorUtils'
import { useEffect, useRef, useState } from 'react'
import { ToolBarLeft, ToolBarMiddle, ToolBarRight } from './'

export const TextEditor = () => {
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

  return (
    <div className='bg-background rounded-sm shadow-lg overflow-hidden'>
      <div className='flex items-center justify-between gap-2 p-2 bg-editor-toolbar-bg border-b'>
        {/* Left: Paragraph Formatting */}
        <ToolBarLeft activeButtons={activeButtons} />

        {/* Middle: Text Formatting */}
        <ToolBarMiddle
          activeStyles={activeStyles}
          handleStyleClick={handleStyleClick}
        />

        {/* Right: Font Selection and Direction */}
        <ToolBarRight
          fontFamily={fontFamily}
          handleFontChange={handleFontChange}
          handleToggleDirection={handleToggleDirection}
        />
      </div>

      <div
        ref={editorRef}
        className='min-h-[500px] p-4 bg-editor-bg focus:outline-none'
        contentEditable
        suppressContentEditableWarning
        onInput={handleContentChange}
        onKeyUp={updateActiveStyles}
        onMouseUp={updateActiveStyles}
        style={{
          fontFamily,
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left',
        }}
      />
    </div>
  )
}
