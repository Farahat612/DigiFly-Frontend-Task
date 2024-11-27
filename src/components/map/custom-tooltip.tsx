import { TooltipMessage } from './'

export function CustomTooltip() {
  return (
    <div className='bg-digifly-purple w-full h-full flex justify-center items-center'>
      <TooltipMessage />
      {/* <div
        className='absolute -bottom-2 left-1/2 -translate-x-1/2 
        border-8 border-transparent border-t-[#6B4EFF]'
      >
        Hi
      </div> */}
    </div>
  )
}
