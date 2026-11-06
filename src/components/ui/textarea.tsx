import * as React from 'react'

import { cn } from '../../lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[132px] w-full resize-y rounded-sm border border-paper-line bg-white px-4 py-3 text-sm leading-relaxed text-ink transition-colors placeholder:text-ink-muted/70 focus-visible:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/15 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
