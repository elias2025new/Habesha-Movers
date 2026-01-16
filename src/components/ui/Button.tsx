import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm dark:bg-blue-600 dark:hover:bg-blue-500',
            secondary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm dark:bg-orange-600 dark:hover:bg-orange-500',
            outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20',
            ghost: 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
        }

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2',
            lg: 'px-6 py-3 text-lg font-semibold',
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
