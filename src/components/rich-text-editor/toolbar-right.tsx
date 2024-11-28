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
        variant='ghostActive'
        size='icon'
        title='Toggle RTL/LTR'
        onClick={handleToggleDirection}
      >
        <Languages className='h-4 w-4' />
      </Button>
    </div>
  )
}
