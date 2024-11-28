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
    <div className='flex items-center gap-1'>
      <Button
        variant={activeStyles.bold ? 'active' : 'ghostActive'}
        size='icon'
        title='Bold'
        onClick={() => handleStyleClick('bold')}
      >
        <Bold className='h-4 w-4' />
      </Button>
      <Button
        variant={activeStyles.italic ? 'active' : 'ghostActive'}
        size='icon'
        title='Italic'
        onClick={() => handleStyleClick('italic')}
      >
        <Italic className='h-4 w-4' />
      </Button>
      <Button
        variant={activeStyles.underline ? 'active' : 'ghostActive'}
        size='icon'
        title='Underline'
        onClick={() => handleStyleClick('underline')}
      >
        <Underline className='h-4 w-4' />
      </Button>
      <Button
        variant={activeStyles.strikethrough ? 'active' : 'ghostActive'}
        size='icon'
        title='Strike Through'
        onClick={() => handleStyleClick('strikeThrough')}
      >
        <Strikethrough className='h-4 w-4' />
      </Button>

      <Separator orientation='vertical' className='h-6 mx-1' />

      <Button
        variant='ghostActive'
        size='icon'
        title='Undo'
        onClick={() => document.execCommand('undo', false)}
      >
        <Undo2 className='h-4 w-4' />
      </Button>
      <Button
        variant='ghostActive'
        size='icon'
        title='Redo'
        onClick={() => document.execCommand('redo', false)}
      >
        <Redo2 className='h-4 w-4' />
      </Button>

      <Separator orientation='vertical' className='h-6 mx-1' />

      <Button
        variant='ghostActive'
        size='icon'
        title='Insert Divider'
        onClick={insertDivider}
      >
        <MinusSquare className='h-4 w-4' />
      </Button>
    </div>
  )
}
