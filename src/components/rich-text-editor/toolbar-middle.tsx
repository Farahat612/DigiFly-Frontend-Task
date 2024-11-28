'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { insertDivider } from '@/lib/textEditorUtils'
import {
  Bold,
  Italic,
  MinusSquare,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from 'lucide-react'

interface ToolBarMiddleProps {
  activeStyles: {
    bold: boolean
    italic: boolean
    underline: boolean
    strikethrough: boolean
  }
  handleStyleClick: (style: string) => void
}

export const ToolBarMiddle = ({
  activeStyles,
  handleStyleClick,
}: ToolBarMiddleProps) => {
  return (
    <div
      className='flex items-center gap-1'
      aria-label='Text Formatting Toolbar'
    >
      <Button
        variant={activeStyles.bold ? 'active' : 'ghostActive'}
        size='icon'
        title='Bold'
        aria-pressed={activeStyles.bold}
        aria-label='Bold'
        onClick={() => handleStyleClick('bold')}
      >
        <Bold className='h-4 w-4' />
      </Button>
      <Button
        variant={activeStyles.italic ? 'active' : 'ghostActive'}
        size='icon'
        title='Italic'
        aria-pressed={activeStyles.italic}
        aria-label='Italic'
        onClick={() => handleStyleClick('italic')}
      >
        <Italic className='h-4 w-4' />
      </Button>
      <Button
        variant={activeStyles.underline ? 'active' : 'ghostActive'}
        size='icon'
        title='Underline'
        aria-pressed={activeStyles.underline}
        aria-label='Underline'
        onClick={() => handleStyleClick('underline')}
      >
        <Underline className='h-4 w-4' />
      </Button>
      <Button
        variant={activeStyles.strikethrough ? 'active' : 'ghostActive'}
        size='icon'
        title='Strikethrough'
        aria-pressed={activeStyles.strikethrough}
        aria-label='Strikethrough'
        onClick={() => handleStyleClick('strikethrough')}
      >
        <Strikethrough className='h-4 w-4' />
      </Button>

      <Separator orientation='vertical' className='h-6 mx-1' />

      <Button
        variant='ghostActive'
        size='icon'
        title='Undo'
        aria-label='Undo'
        onClick={() => handleStyleClick('undo')}
      >
        <Undo2 className='h-4 w-4' />
      </Button>
      <Button
        variant='ghostActive'
        size='icon'
        title='Redo'
        aria-label='Redo'
        onClick={() => handleStyleClick('redo')}
      >
        <Redo2 className='h-4 w-4' />
      </Button>

      <Separator orientation='vertical' className='h-6 mx-1' />

      <Button
        variant='ghostActive'
        size='icon'
        title='Insert Divider'
        aria-label='Insert Divider'
        onClick={() => insertDivider()}
      >
        <MinusSquare className='h-4 w-4' />
      </Button>
    </div>
  )
}
