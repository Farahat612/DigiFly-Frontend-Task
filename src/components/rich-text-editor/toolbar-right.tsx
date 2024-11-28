'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Languages } from 'lucide-react'

const FONTS = [
  'Helvetica',
  'Arial',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Verdana',
]

interface ToolBarRightProps {
  fontFamily: string
  handleFontChange: (value: string) => void
  handleToggleDirection: () => void
}

export const ToolBarRight = ({
  fontFamily,
  handleFontChange,
  handleToggleDirection,
}: ToolBarRightProps) => {
  return (
    <div
      className='flex items-center gap-1'
      aria-label='Font Selection and Direction Toolbar'
    >
      <Select value={fontFamily} onValueChange={handleFontChange}>
        <SelectTrigger
          className='w-auto sm:w-[140px] bg-white/70'
          aria-label='Font Family Selector'
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {FONTS.map((font) => (
            <SelectItem key={font} value={font} role='option'>
              {font}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant='ghostActive'
        size='icon'
        title='Toggle Text Direction'
        aria-label='Toggle Text Direction'
        onClick={handleToggleDirection}
      >
        <Languages className='h-4 w-4' />
      </Button>
    </div>
  )
}
