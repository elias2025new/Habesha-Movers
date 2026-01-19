"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-md border border-gray-200" />
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md border border-gray-200 dark:border-white/5 hover:bg-gray-100 dark:bg-[rgba(28,28,28,0.7)] dark:backdrop-blur-[10px] transition-colors text-gray-600 dark:text-[#F5A623]"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5" />
            ) : (
                <Moon className="h-4 w-4 md:h-5 md:w-5" />
            )}
        </button>
    );
}
