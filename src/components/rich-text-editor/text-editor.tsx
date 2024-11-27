'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ListOrdered,
  List,
  IndentIcon,
  OutdentIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Strikethrough,
  Bold,
  Italic,
  Underline,
  Undo2,
  Redo2,
  Languages,
  MinusSquare,
  Link,
} from 'lucide-react';

const FONTS = [
  'Arial',
  'Times New Roman',
  'Helvetica',
  'Courier New',
  'Georgia',
  'Verdana',
];

const TextEditor = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between gap-4 p-2 bg-white/60 shadow-sm'>
        {/* Left: Paragraph Formatting */}
        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            title='Align Left'
          >
            <AlignLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Align Center'
          >
            <AlignCenter className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Align Right'
          >
            <AlignRight className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='h-6' />

          <Button
            variant='ghost'
            size='icon'
            title='Numbered List'
          >
            <ListOrdered className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Bullet List'
          >
            <List className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Indent'
          >
            <IndentIcon className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Outdent'
          >
            <OutdentIcon className='h-4 w-4' />
          </Button>
        </div>

        {/* Middle: Text Formatting */}
        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            title='Bold'
          >
            <Bold className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Italic'
          >
            <Italic className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Underline'
          >
            <Underline className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Strike Through'
          >
            <Strikethrough className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='h-6' />

          <Button
            variant='ghost'
            size='icon'
            title='Undo'
          >
            <Undo2 className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Redo'
          >
            <Redo2 className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='h-6' />

          <Button
            variant='ghost'
            size='icon'
            title='Insert Link'
          >
            <Link className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Insert Divider'
          >
            <MinusSquare className='h-4 w-4' />
          </Button>
        </div>

        {/* Right: Font Selection and Direction */}
        <div className='flex items-center gap-2'>
          <select
            className='px-2 py-1 rounded border border-gray-300'
            defaultValue="Arial"
          >
            {FONTS.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
          
          <Button
            variant='ghost'
            size='icon'
            title='Toggle RTL/LTR'
          >
            <Languages className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div
        className='min-h-[500px] p-4 bg-white shadow-sm focus:outline-none'
        contentEditable
        suppressContentEditableWarning
      />
    </div>
  );
};

export default TextEditor;
