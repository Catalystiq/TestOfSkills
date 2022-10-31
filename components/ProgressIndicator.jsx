import * as ProgressPrimitive from '@radix-ui/react-progress';

export default function ProgressIndicator({ children, ...props }) {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      className="group bg-white w-full h-full ease-in-out duration-500"
    >
      {children}
    </ProgressPrimitive.Indicator>
  )
}