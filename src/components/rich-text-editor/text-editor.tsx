'use client'

import { useTextEditor } from '@/hooks'
import { ToolBarLeft, ToolBarMiddle, ToolBarRight } from './'

export const TextEditor = () => {
  const {
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
  } = useTextEditor()

  return (
    <div
      className='bg-background rounded-sm shadow-lg overflow-hidden'
      aria-label='Rich Text Editor'
    >
      <div
        className='flex items-center justify-between gap-2 p-2 bg-editor-toolbar-bg border-b flex-wrap'
        aria-label='Text Editor Toolbar'
      >
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
        aria-label='Editable Text Area'
        aria-labelledby='text-editor-label'
        style={{
          fontFamily,
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left',
        }}
      />
    </div>
  )
}
