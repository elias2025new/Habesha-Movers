import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string; // Explicitly add to avoid empty interface error
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#121212] px-3 py-2 text-sm text-gray-900 dark:text-[#F2F2F2] ring-offset-white dark:ring-offset-gray-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-[#777] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-[#8B3A2C]/40 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
