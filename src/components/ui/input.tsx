import * as React from 'react'

import { cn } from '../../lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-sm border border-paper-line bg-white px-4 py-2 text-sm text-ink transition-colors placeholder:text-ink-muted/70 focus-visible:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/15 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
