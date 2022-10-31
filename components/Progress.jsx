import * as ProgressPrimitive from '@radix-ui/react-progress';

export default function Progress({ children, ...props }) {
  return (
    <ProgressPrimitive.Root
      {...props}
      className={
        'group relative overflow-hidden bg-black w-1/2 h-2.5'
      }
    >
      {children}
    </ProgressPrimitive.Root>
  )
}