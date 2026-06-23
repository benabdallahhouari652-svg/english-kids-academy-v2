import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md hover:shadow-lg',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-sky-600 hover:to-blue-600',
        cute: 'bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500',
        green: 'bg-gradient-to-r from-emerald-400 to-green-500 text-white hover:from-emerald-500 hover:to-green-600',
        orange: 'bg-gradient-to-r from-orange-400 to-amber-500 text-white hover:from-orange-500 hover:to-amber-600',
        purple: 'bg-gradient-to-r from-purple-400 to-violet-500 text-white hover:from-purple-500 hover:to-violet-600',
        outline: 'border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700',
        ghost: 'bg-white/80 hover:bg-white text-gray-700 shadow-none hover:shadow-md',
      },
      size: {
        default: 'h-12 px-6 py-3 text-base',
        sm: 'h-10 px-4 py-2 text-sm rounded-xl',
        lg: 'h-14 px-8 py-4 text-lg rounded-2xl',
        xl: 'h-16 px-10 py-5 text-xl rounded-3xl',
        icon: 'h-12 w-12 rounded-full',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
