'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { applyStyle, toggleIndent, toggleList } from '@/lib/textEditorUtils'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  IndentIcon,
  List,
  ListOrdered,
  OutdentIcon,
} from 'lucide-react'

interface ToolBarLeftProps {
  activeButtons: {
    justifyLeft: boolean
    justifyCenter: boolean
    justifyRight: boolean
    insertOrderedList: boolean
    insertUnorderedList: boolean
  }
}

export const ToolBarLeft = ({ activeButtons }: ToolBarLeftProps) => {
  return (
    <div
      className='flex items-center gap-1'
      aria-label='Paragraph Formatting Toolbar'
    >
      <Button
        variant={activeButtons.justifyLeft ? 'active' : 'ghostActive'}
        size='icon'
        title='Align Left'
        aria-pressed={activeButtons.justifyLeft}
        aria-label='Align Left'
        onClick={() => applyStyle('justifyLeft')}
      >
        <AlignLeft className='h-4 w-4' />
      </Button>
      <Button
        variant={activeButtons.justifyCenter ? 'active' : 'ghostActive'}
        size='icon'
        title='Align Center'
        aria-pressed={activeButtons.justifyCenter}
        aria-label='Align Center'
        onClick={() => applyStyle('justifyCenter')}
      >
        <AlignCenter className='h-4 w-4' />
      </Button>
      <Button
        variant={activeButtons.justifyRight ? 'active' : 'ghostActive'}
        size='icon'
        title='Align Right'
        aria-pressed={activeButtons.justifyRight}
        aria-label='Align Right'
        onClick={() => applyStyle('justifyRight')}
      >
        <AlignRight className='h-4 w-4' />
      </Button>

      <Separator orientation='vertical' className='h-6 mx-1' />

      <Button
        variant={activeButtons.insertOrderedList ? 'active' : 'ghostActive'}
        size='icon'
        title='Numbered List'
        aria-pressed={activeButtons.insertOrderedList}
        aria-label='Numbered List'
        onClick={() => toggleList('insertOrderedList')}
      >
        <ListOrdered className='h-4 w-4' />
      </Button>
      <Button
        variant={activeButtons.insertUnorderedList ? 'active' : 'ghostActive'}
        size='icon'
        title='Bullet List'
        aria-pressed={activeButtons.insertUnorderedList}
        aria-label='Bullet List'
        onClick={() => toggleList('insertUnorderedList')}
      >
        <List className='h-4 w-4' />
      </Button>
      <Button
        variant='ghostActive'
        size='icon'
        title='Indent'
        aria-label='Indent'
        onClick={() => toggleIndent(true)}
      >
        <IndentIcon className='h-4 w-4' />
      </Button>
      <Button
        variant='ghostActive'
        size='icon'
        title='Outdent'
        aria-label='Outdent'
        onClick={() => toggleIndent(false)}
      >
        <OutdentIcon className='h-4 w-4' />
      </Button>
    </div>
  )
}
