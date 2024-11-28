/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  setFontFamily,
  toggleDirection,
  updateContent,
} from '@/lib/features/textEditorSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import {
  applyStyle,
  insertDivider,
  isStyleActive,
  toggleIndent,
  toggleList,
} from '@/lib/textEditorUtils'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  IndentIcon,
  Italic,
  Languages,
  List,
  ListOrdered,
  MinusSquare,
  OutdentIcon,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const FONTS = [
  'Helvetica',
  'Arial',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Verdana',
]

const TextEditor = () => {
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
    <div className='bg-background rounded-lg shadow-lg overflow-hidden'>
      <div className='flex items-center justify-between gap-2 p-2 bg-muted/40 border-b'>
        {/* Left: Paragraph Formatting */}
        <div className='flex items-center gap-1'>
          <Button
            variant={activeButtons.justifyLeft ? 'secondary' : 'ghost'}
            size='icon'
            title='Align Left'
            onClick={() => applyStyle('justifyLeft')}
          >
            <AlignLeft className='h-4 w-4' />
          </Button>
          <Button
            variant={activeButtons.justifyCenter ? 'secondary' : 'ghost'}
            size='icon'
            title='Align Center'
            onClick={() => applyStyle('justifyCenter')}
          >
            <AlignCenter className='h-4 w-4' />
          </Button>
          <Button
            variant={activeButtons.justifyRight ? 'secondary' : 'ghost'}
            size='icon'
            title='Align Right'
            onClick={() => applyStyle('justifyRight')}
          >
            <AlignRight className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='h-6 mx-1' />

          <Button
            variant={activeButtons.insertOrderedList ? 'secondary' : 'ghost'}
            size='icon'
            title='Numbered List'
            onClick={() => toggleList('insertOrderedList')}
          >
            <ListOrdered className='h-4 w-4' />
          </Button>
          <Button
            variant={activeButtons.insertUnorderedList ? 'secondary' : 'ghost'}
            size='icon'
            title='Bullet List'
            onClick={() => toggleList('insertUnorderedList')}
          >
            <List className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Indent'
            onClick={() => toggleIndent(true)}
          >
            <IndentIcon className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Outdent'
            onClick={() => toggleIndent(false)}
          >
            <OutdentIcon className='h-4 w-4' />
          </Button>
        </div>

        {/* Middle: Text Formatting */}
        <div className='flex items-center gap-1'>
          <Button
            variant={activeStyles.bold ? 'secondary' : 'ghost'}
            size='icon'
            title='Bold'
            onClick={() => handleStyleClick('bold')}
          >
            <Bold className='h-4 w-4' />
          </Button>
          <Button
            variant={activeStyles.italic ? 'secondary' : 'ghost'}
            size='icon'
            title='Italic'
            onClick={() => handleStyleClick('italic')}
          >
            <Italic className='h-4 w-4' />
          </Button>
          <Button
            variant={activeStyles.underline ? 'secondary' : 'ghost'}
            size='icon'
            title='Underline'
            onClick={() => handleStyleClick('underline')}
          >
            <Underline className='h-4 w-4' />
          </Button>
          <Button
            variant={activeStyles.strikethrough ? 'secondary' : 'ghost'}
            size='icon'
            title='Strike Through'
            onClick={() => handleStyleClick('strikeThrough')}
          >
            <Strikethrough className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='h-6 mx-1' />

          <Button
            variant='ghost'
            size='icon'
            title='Undo'
            onClick={() => document.execCommand('undo', false)}
          >
            <Undo2 className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Redo'
            onClick={() => document.execCommand('redo', false)}
          >
            <Redo2 className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='h-6 mx-1' />

          <Button
            variant='ghost'
            size='icon'
            title='Insert Divider'
            onClick={insertDivider}
          >
            <MinusSquare className='h-4 w-4' />
          </Button>
        </div>

        {/* Right: Font Selection and Direction */}
        <div className='flex items-center gap-2'>
          <Select onValueChange={handleFontChange} value={fontFamily}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a font' />
            </SelectTrigger>
            <SelectContent>
              {FONTS.map((font) => (
                <SelectItem key={font} value={font}>
                  <span style={{ fontFamily: font }}>{font}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant='ghost'
            size='icon'
            title='Toggle RTL/LTR'
            onClick={handleToggleDirection}
          >
            <Languages className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div
        ref={editorRef}
        className='min-h-[500px] p-4 bg-background focus:outline-none'
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

export default TextEditor
