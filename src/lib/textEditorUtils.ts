export const applyStyle = (style: string, value?: string) => {
  if (typeof document !== 'undefined') {
    try {
      document.execCommand(style, false, value)
    } catch (error) {
      console.error(`Error applying style ${style}:`, error)
    }
  }
}

export const toggleList = (
  type: 'insertOrderedList' | 'insertUnorderedList'
) => {
  if (typeof document !== 'undefined') {
    try {
      document.execCommand(type, false)
    } catch (error) {
      console.error(`Error toggling list ${type}:`, error)
    }
  }
}

export const toggleIndent = (increase: boolean) => {
  if (typeof document !== 'undefined') {
    try {
      document.execCommand(increase ? 'indent' : 'outdent', false)
    } catch (error) {
      console.error(`Error toggling indent:`, error)
    }
  }
}

export const insertDivider = () => {
  if (typeof document !== 'undefined') {
    try {
      document.execCommand('insertHorizontalRule', false)
    } catch (error) {
      console.error(`Error inserting divider:`, error)
    }
  }
}

export const isStyleActive = (command: string): boolean => {
  if (typeof document !== 'undefined') {
    try {
      return document.queryCommandState(command)
    } catch (error) {
      console.error(`Error checking style ${command}:`, error)
    }
  }
  return false
}
